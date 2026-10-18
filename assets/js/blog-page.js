(() => {
  const MANIFEST_URL = "/assets/data/articles.json";
  let articles = [];
  let listObserver = null;

  const parseDate = value => {
    const m = String(value || "").match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/);
    return m ? new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1])).getTime() : 0;
  };

  const readingMinutes = article => Math.max(1, Number(article?.readingMinutes) || 1);
  const readingLabel = article => article?.readingTime || `${readingMinutes(article)} min čtení`;

  const CATEGORY_ALIASES = new Map([
    ["Web a technologie", "Web, AI a technologie"],
    ["AI a technologie", "Web, AI a technologie"],
    ["Česká politika", "Politika a společnost"],
    ["Vanlife & cestování", "Města, doprava a cestování"]
  ]);

  const normalizeCategory = value => {
    const category = String(value || "").trim() || "Bez štítku";
    return CATEGORY_ALIASES.get(category) || category;
  };

  async function fetchArticle(entry) {
    const slug = String(entry?.slug || "").trim();
    if (!slug) throw new Error("Článek bez slugu");

    const response = await fetch(`/clanek/${encodeURIComponent(slug)}/index.html`, {cache:"no-cache"});
    if (!response.ok) throw new Error(`${slug}: HTTP ${response.status}`);

    const source = await response.text();
    const doc = new DOMParser().parseFromString(source, "text/html");

    const title = doc.querySelector(".blog-detail-title")?.textContent?.trim() || "";
    const category = normalizeCategory(doc.querySelector(".blog-detail-category")?.textContent);
    const date = doc.querySelector(".blog-detail-meta")?.textContent?.trim() || "";
    // Čas čtení počítáme vždy z reálného obsahu článku, ne z hodnoty ve
    // .blog-reading-time. Ta může být ve zdrojovém HTML prázdná (dopočítává ji
    // article-page.js až v prohlížeči) nebo může obsahovat starý fallback 1 min.
    //
    // Vezmeme celý .blog-detail, odstraníme hlavičku/metadatový blok a footer.
    // Tím funguje výpočet i u starších článků, které nemají wrapper .blog-article.
    const articleRoot = doc.querySelector(".blog-detail");
    let bodyText = "";
    if (articleRoot) {
      const clone = articleRoot.cloneNode(true);
      clone.querySelector(".blog-detail-head")?.remove();
      clone.querySelector("[data-article-end-footer]")?.remove();
      clone.querySelectorAll("script, style, noscript").forEach(node => node.remove());
      bodyText = clone.textContent?.replace(/\s+/g, " ").trim() || "";
    }

    const readingSource = [title, bodyText || excerpt]
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    const wordCount = readingSource
      ? readingSource.split(/\s+/).filter(Boolean).length
      : 0;

    const resolvedReadingMinutes = Math.max(1, Math.ceil(wordCount / 200));
    const readingTime = `${resolvedReadingMinutes} min čtení`;

    if (!title) throw new Error(`${slug}: chybí titulek`);

    return {
      slug,
      pinned:Boolean(entry?.pinned),
      title,
      category,
      date,
      excerpt,
      readingTime,
      readingMinutes:resolvedReadingMinutes
    };
  }

  async function loadArticles() {
    const manifestResponse = await fetch(MANIFEST_URL, {cache:"no-cache"});
    if (!manifestResponse.ok) throw new Error(`Manifest HTTP ${manifestResponse.status}`);
    const manifest = await manifestResponse.json();

    const loaded = await Promise.allSettled(manifest.map(fetchArticle));
    articles = loaded
      .filter(item => item.status === "fulfilled")
      .map(item => item.value);

    if (!articles.length) throw new Error("Nepodařilo se načíst žádný článek");
    return articles;
  }

  const sorted = () => articles
    .map((article, originalIndex) => ({article, originalIndex}))
    .sort((a,b) => {
      const pinned = Number(Boolean(b.article.pinned)) - Number(Boolean(a.article.pinned));
      return pinned || (parseDate(b.article.date) - parseDate(a.article.date));
    });

  const articleWord = count => count === 1 ? "článek" : (count >= 2 && count <= 4 ? "články" : "článků");
  const tagWord = count => count === 1 ? "štítek" : (count >= 2 && count <= 4 ? "štítky" : "štítků");

  function renderCard(article) {
    return `
      <article class="blog-card${article.pinned ? " is-pinned" : ""}" data-blog-slug="${article.slug}" tabindex="0" role="link" aria-label="${article.title}">
        ${article.pinned ? `
          <span class="blog-pin" aria-label="Připnutý článek" title="Připnutý článek">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 5 3 3v2h-4v6l-1 2-1-2v-6H7v-2l3-3-1-5Z"/></svg>
          </span>` : ""}
        <span class="blog-card-topline">
          <button class="blog-category" type="button" data-blog-category="${article.category}" aria-label="Zobrazit články v kategorii ${article.category}">${article.category}</button>
          <span class="blog-meta-stack">
            <span class="blog-card-date">${article.date}</span>
            <span class="blog-reading-time">${readingLabel(article)}</span>
          </span>
        </span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <span class="blog-card-more">Číst článek →</span>
      </article>`;
  }

  function updateFilterUrl(category) {
    const url = new URL(location.href);
    if (category) url.searchParams.set("stitek", category);
    else url.searchParams.delete("stitek");
    history.replaceState({}, "", `${url.pathname}${url.search}`);
  }

  function renderList(category=null, updateUrl=true) {
    const view = document.getElementById("blogView");
    if (!view) return;
    if (listObserver) {
      listObserver.disconnect();
      listObserver = null;
    }

    category = category ? normalizeCategory(category) : null;
    if (updateUrl) updateFilterUrl(category);

    const filtered = sorted().filter(({article}) => !category || article.category === category);
    const totalMinutes = filtered.reduce((sum, {article}) => sum + readingMinutes(article), 0);
    const allMinutes = articles.reduce((sum, article) => sum + readingMinutes(article), 0);

    const categoryCounts = new Map();
    articles.forEach(article => {
      categoryCounts.set(article.category, (categoryCounts.get(article.category) || 0) + 1);
    });
    const categories = [...categoryCounts.keys()].sort((a,b) => a.localeCompare(b, "cs"));
    const tags = categories.length;

    const tagPanel = `
      <div class="blog-tag-panel" id="blogTagPanel" hidden>
        <button type="button" class="blog-tag-chip${category ? "" : " is-active"}" data-blog-tag="">Všechny <span>${articles.length}</span></button>
        ${categories.map(name => `
          <button type="button" class="blog-tag-chip${category === name ? " is-active" : ""}" data-blog-tag="${name}">${name} <span>${categoryCounts.get(name)}</span></button>
        `).join("")}
      </div>`;

    const batchSize = 5;
    let visible = Math.min(batchSize, filtered.length);

    view.innerHTML = `
      ${category ? `
        <div class="blog-filter-title">
          <span>${category}</span>
          <button type="button" class="blog-filter-clear" data-blog-filter-back aria-label="Zrušit filtr ${category}" title="Zrušit filtr">×</button>
          <span class="blog-filter-stats">${filtered.length} ${articleWord(filtered.length)} · ${totalMinutes} min čtení</span>
        </div>
      ` : `
        <div class="blog-filter-title blog-filter-title--all">
          <span class="blog-filter-stats">
            ${articles.length} ${articleWord(articles.length)} ·
            <button type="button" class="blog-tags-toggle" data-blog-tags-toggle aria-expanded="false" aria-controls="blogTagPanel">${tags} ${tagWord(tags)} <span class="blog-tags-arrow" aria-hidden="true">▼</span></button>
            · ${allMinutes} min čtení
          </span>
          <a class="blog-rss-link" href="/rss.xml" type="application/rss+xml" aria-label="RSS kanál DEVBYBOU Blog" title="RSS">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="8" cy="24" r="2.8"></circle>
            <path d="M6 14a12 12 0 0 1 12 12"></path>
            <path d="M6 6a20 20 0 0 1 20 20"></path>
          </svg>
          <span>RSS</span>
        </a>
        </div>
        ${tagPanel}
      `}
      <div class="blog-list" id="blogList"></div>
      <div class="blog-list-sentinel" id="blogListSentinel" aria-hidden="true"></div>
      <div class="blog-list-end" id="blogListEnd" hidden>NIC VÍC TU NENÍ</div>`;

    const list = view.querySelector("#blogList");
    const sentinel = view.querySelector("#blogListSentinel");
    const end = view.querySelector("#blogListEnd");

    view.querySelector("[data-blog-filter-back]")?.addEventListener("click", () => renderList());

    const tagToggle = view.querySelector("[data-blog-tags-toggle]");
    const panel = view.querySelector("#blogTagPanel");
    tagToggle?.addEventListener("click", () => {
      const open = panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden", !open);
      tagToggle.setAttribute("aria-expanded", String(open));
    });

    panel?.querySelectorAll("[data-blog-tag]").forEach(button => {
      button.addEventListener("click", () => {
        const tag = button.dataset.blogTag || null;
        renderList(tag);
        window.scrollTo({top:0, behavior:"smooth"});
      });
    });

    const bind = () => {
      list.querySelectorAll("[data-blog-slug]:not([data-bound])").forEach(card => {
        card.dataset.bound = "1";
        const open = () => location.href = `/clanek/${card.dataset.blogSlug}/`;
        card.addEventListener("click", event => {
          if (event.target.closest("[data-blog-category]")) return;
          open();
        });
        card.addEventListener("keydown", event => {
          if (event.target.closest("[data-blog-category]")) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            open();
          }
        });
        card.querySelector("[data-blog-category]")?.addEventListener("click", event => {
          event.stopPropagation();
          renderList(event.currentTarget.dataset.blogCategory);
          window.scrollTo({top:0, behavior:"smooth"});
        });
      });
    };

    const paint = () => {
      list.innerHTML = filtered.slice(0, visible).map(({article}) => renderCard(article)).join("");
      bind();
      const finished = visible >= filtered.length;
      sentinel.hidden = finished;
      end.hidden = !finished;
    };

    paint();

    if (visible < filtered.length) {
      listObserver = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        visible = Math.min(visible + batchSize, filtered.length);
        paint();
        if (visible >= filtered.length && listObserver) {
          listObserver.disconnect();
          listObserver = null;
        }
      }, {root:null, rootMargin:"0px 0px 260px 0px", threshold:0.01});
      listObserver.observe(sentinel);
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    window.DEVBYBOU_ARTICLE_UI?.renderSiteFooter(document.getElementById("articleSiteFooter"));

    const view = document.getElementById("blogView");
    if (view) view.innerHTML = `<div class="blog-list-end">NAČÍTÁM ČLÁNKY…</div>`;

    try {
      await loadArticles();
      const category = new URL(location.href).searchParams.get("stitek");
      renderList(category, false);
    } catch (error) {
      console.error(error);
      if (view) view.innerHTML = `<div class="blog-list-end">ČLÁNKY SE NEPODAŘILO NAČÍST</div>`;
    }
  });
})();