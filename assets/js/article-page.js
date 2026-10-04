document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".article-page-card");
  const toggle = document.querySelector(".blog-theme-toggle");
  const slug = document.body.dataset.articleSlug;
  const article = document.querySelector(".blog-detail");
  window.DEVBYBOU_ARTICLE_UI?.renderEndFooter(document.querySelector("[data-article-end-footer]"));
  const counter = document.querySelector("[data-article-view-count]");
  const key = "devbybouBlogTheme";

  // Standalone article footer. Edit links here once; every article uses the same footer.
  const ARTICLE_FOOTER_LINKS = [
    {label:"Domů", href:"/"},
    {label:"Všechny články", href:"/?detail=blog"},
    {label:"O mně", href:"/?detail=o-mne"},
    {label:"Ceník", href:"/?detail=cenik"}
  ];

  const footerHost = document.getElementById("articleSiteFooter");
  if (footerHost) {
    footerHost.className = "fixed-footer-shell";
    footerHost.innerHTML = `
      <img class="footer-divider" src="../../assets/images/embedded-06.png" alt="" aria-hidden="true">
      <footer class="footer">
        <nav class="footer-links" aria-label="Odkazy v patičce článku">
          ${ARTICLE_FOOTER_LINKS.map((link,index) => `${index ? '<span class="sep" aria-hidden="true">|</span>' : ''}<a href="${link.href}">${link.label}</a>`).join("")}
        </nav>
        <span>© 2004–<span data-current-year></span> <strong>DEV<span class="by">BY</span>BOU</strong></span>
      </footer>`;
  }

  const applyTheme = theme => {
    const light = theme === "light";
    card?.classList.toggle("blog-reader-light", light);
    card?.classList.toggle("blog-reader-dark", !light);
    toggle?.classList.toggle("is-light", light);
    toggle?.setAttribute("aria-pressed", String(light));
    toggle?.setAttribute("aria-label", light ? "Přepnout článek do tmavého režimu" : "Přepnout článek do světlého režimu");
  };

  let theme = "dark";
  try { theme = localStorage.getItem(key) === "light" ? "light" : "dark"; } catch (_) {}
  applyTheme(theme);

  toggle?.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    try { localStorage.setItem(key, theme); } catch (_) {}
    applyTheme(theme);
  });

  document.querySelector("[data-blog-all]")?.addEventListener("click", () => {
    location.href = "/?detail=blog";
  });

  document.querySelector("[data-article-share]")?.addEventListener("click", async event => {
    const data = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || "",
      url: location.href
    };
    if (navigator.share) {
      try { await navigator.share(data); return; }
      catch (error) { if (error?.name === "AbortError") return; }
    }
    try {
      await navigator.clipboard.writeText(location.href);
      const button = event.currentTarget;
      const original = button.textContent;
      button.textContent = "Odkaz zkopírován";
      setTimeout(() => button.textContent = original, 1600);
    } catch (_) {
      window.prompt("Zkopírujte odkaz na článek:", location.href);
    }
  });

  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());
  window.DEVBYBOU_ARTICLE_VIEWS?.mount({slug, articleElement:article, counterElement:counter});
});
