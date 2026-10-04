document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".article-page-card");
  const toggle = document.querySelector(".blog-theme-toggle");
  const slug = document.body.dataset.articleSlug;
  const article = document.querySelector(".blog-detail");
  window.DEVBYBOU_ARTICLE_UI?.renderEndFooter(document.querySelector("[data-article-end-footer]"));
  const counter = document.querySelector("[data-article-view-count]");
  const key = "devbybouBlogTheme";

  // Promo banner lives only in otherwise-empty space above the fixed footer.
  const endFooterHost = document.querySelector("[data-article-end-footer]");
  let fillBanner = null;
  if (endFooterHost) {
    fillBanner = document.createElement("a");
    fillBanner.className = "blog-fill-banner article-fill-banner";
    fillBanner.href = "https://hradec.info/bou";
    fillBanner.target = "_blank";
    fillBanner.rel = "noopener noreferrer";
    fillBanner.setAttribute("aria-label", "Najdete mě na hradec.info/bou");
    fillBanner.innerHTML = '<img src="/assets/images/hradec-bou-banner.png" alt="Najdete mě na hradec.info/bou">';
    endFooterHost.insertAdjacentElement("afterend", fillBanner);
  }

  const fitFillBanner = () => {
    if (!fillBanner) return;
    const footer = document.getElementById("articleSiteFooter");
    fillBanner.hidden = false;
    fillBanner.style.height = "0px";

    requestAnimationFrame(() => {
      const footerTop = footer?.getBoundingClientRect().top ?? window.innerHeight;
      const bannerTop = fillBanner.getBoundingClientRect().top;
      const available = Math.floor(footerTop - bannerTop - 10);

      if (available < 100) {
        fillBanner.hidden = true;
        fillBanner.style.height = "0px";
        return;
      }

      fillBanner.style.height = `${Math.min(available, 430)}px`;
    });
  };

  // Shared standalone footer: the same footer is also used on /blog/.
  window.DEVBYBOU_ARTICLE_UI?.renderSiteFooter(document.getElementById("articleSiteFooter"));
  requestAnimationFrame(fitFillBanner);
  window.addEventListener("resize", fitFillBanner, {passive:true});
  window.addEventListener("orientationchange", fitFillBanner, {passive:true});

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
    location.href = "/blog/";
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
  window.DEVBYBOU_ARTICLE_REACTIONS?.mount({slug, rootElement:card || document});
});
