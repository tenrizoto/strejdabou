(() => {
  const apiUrl = () => window.DEVBYBOU_CONFIG?.articleViewApi || "";
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const formatCount = value => `Přečteno ${Number(value || 0).toLocaleString("cs-CZ")}×`;
  let activeCleanup = null;

  async function request(slug, method="GET") {
    const api = apiUrl();
    if (!api || !slug) return null;
    const url = method === "GET" ? `${api}?slug=${encodeURIComponent(slug)}` : api;
    const options = method === "GET" ? {cache:"no-store"} : {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({slug}),
      cache:"no-store"
    };
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`View counter HTTP ${response.status}`);
    return response.json();
  }

  function dispose(){
    if (activeCleanup) activeCleanup();
    activeCleanup = null;
  }

  function mount({slug, articleElement, counterElement}) {
    dispose();

    if (!slug || !articleElement || !counterElement || !apiUrl()) {
      if (counterElement) counterElement.hidden = true;
      return;
    }

    let disposed = false;
    let timeReady = false;
    let progressReady = false;
    let sent = false;
    let timer = 0;
    const storageKey = `devbybou:article-view:${slug}:${todayKey()}`;
    const scrollRoot = articleElement.closest(".info-sheet-card");
    const scrollTarget = scrollRoot || window;

    const show = count => {
      if (disposed || !Number.isFinite(Number(count))) return;
      counterElement.textContent = formatCount(count);
      counterElement.hidden = false;
    };

    request(slug).then(data => show(data?.views)).catch(() => { if (!disposed) counterElement.hidden = true; });

    let alreadyCounted = false;
    try { alreadyCounted = localStorage.getItem(storageKey) === "1"; } catch (_) {}

    const getProgress = () => {
      const rect = articleElement.getBoundingClientRect();
      if (scrollRoot) {
        const rootRect = scrollRoot.getBoundingClientRect();
        return Math.max(0, Math.min(1, (rootRect.bottom - rect.top) / Math.max(1, rect.height)));
      }
      return Math.max(0, Math.min(1, (window.innerHeight - rect.top) / Math.max(1, rect.height)));
    };

    const cleanup = () => {
      if (disposed) return;
      disposed = true;
      window.clearTimeout(timer);
      scrollTarget.removeEventListener("scroll", onScroll);
    };
    activeCleanup = cleanup;

    if (alreadyCounted) return;

    const maybeSend = async () => {
      if (disposed || sent || !timeReady || !progressReady) return;
      sent = true;
      try {
        const data = await request(slug, "POST");
        show(data?.views);
        try { localStorage.setItem(storageKey, "1"); } catch (_) {}
      } catch (_) {
        sent = false;
      }
    };

    const onScroll = () => {
      if (getProgress() >= .25) progressReady = true;
      maybeSend();
    };

    scrollTarget.addEventListener("scroll", onScroll, {passive:true});
    onScroll();
    timer = window.setTimeout(() => { timeReady = true; maybeSend(); }, 20000);
  }

  window.DEVBYBOU_ARTICLE_VIEWS = {mount, dispose};

  // Article reactions use the same server directory as the view counter.
  const reactionApiUrl = () => {
    const explicit = window.DEVBYBOU_CONFIG?.articleReactionApi;
    if (explicit) return explicit;
    const viewApi = apiUrl();
    return viewApi ? viewApi.replace(/article-view\.php(?:\?.*)?$/, "article-reaction.php") : "";
  };

  let reactionCleanup = null;

  async function reactionRequest(slug, reaction=null) {
    const api = reactionApiUrl();
    if (!api || !slug) return null;

    if (!reaction) {
      const response = await fetch(`${api}?slug=${encodeURIComponent(slug)}`, {cache:"no-store"});
      if (!response.ok) throw new Error(`Reaction counter HTTP ${response.status}`);
      return response.json();
    }

    const response = await fetch(api, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({slug, reaction}),
      cache:"no-store"
    });
    if (!response.ok) throw new Error(`Reaction counter HTTP ${response.status}`);
    return response.json();
  }

  function disposeReactions() {
    if (reactionCleanup) reactionCleanup();
    reactionCleanup = null;
  }

  function mountReactions({slug, rootElement}) {
    disposeReactions();

    const root = rootElement || document;
    const host = root.querySelector?.("[data-article-reactions]");
    const api = reactionApiUrl();
    if (!slug || !host || !api) {
      if (host) host.hidden = true;
      return;
    }

    const likeButton = host.querySelector('[data-article-reaction="like"]');
    const dislikeButton = host.querySelector('[data-article-reaction="dislike"]');
    const likeCount = host.querySelector('[data-reaction-count="like"]');
    const dislikeCount = host.querySelector('[data-reaction-count="dislike"]');

    if (!likeButton || !dislikeButton || !likeCount || !dislikeCount) {
      host.hidden = true;
      return;
    }

    let disposed = false;
    let busy = false;

    const paint = data => {
      if (disposed || !data?.ok) return;
      likeCount.textContent = Number(data.likes || 0).toLocaleString("cs-CZ");
      dislikeCount.textContent = Number(data.dislikes || 0).toLocaleString("cs-CZ");

      const mine = data.userReaction || "";
      likeButton.classList.toggle("is-active", mine === "like");
      dislikeButton.classList.toggle("is-active", mine === "dislike");
      likeButton.setAttribute("aria-pressed", String(mine === "like"));
      dislikeButton.setAttribute("aria-pressed", String(mine === "dislike"));
      host.hidden = false;
    };

    const vote = async reaction => {
      if (busy || disposed) return;
      busy = true;
      host.classList.add("is-busy");
      likeButton.disabled = true;
      dislikeButton.disabled = true;
      try {
        paint(await reactionRequest(slug, reaction));
      } catch (_) {
        // Keep the last visible state if the backend is temporarily unavailable.
      } finally {
        busy = false;
        if (!disposed) {
          host.classList.remove("is-busy");
          likeButton.disabled = false;
          dislikeButton.disabled = false;
        }
      }
    };

    const onLike = () => vote("like");
    const onDislike = () => vote("dislike");

    likeButton.addEventListener("click", onLike);
    dislikeButton.addEventListener("click", onDislike);

    reactionCleanup = () => {
      disposed = true;
      likeButton.removeEventListener("click", onLike);
      dislikeButton.removeEventListener("click", onDislike);
    };

    reactionRequest(slug).then(paint).catch(() => {
      if (!disposed) host.hidden = true;
    });
  }

  window.DEVBYBOU_ARTICLE_REACTIONS = {
    mount: mountReactions,
    dispose: disposeReactions
  };
})();
