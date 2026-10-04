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
})();
