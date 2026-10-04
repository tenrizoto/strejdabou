(() => {
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));

  const ARTICLE_SITE_FOOTER_LINKS = Object.freeze([
    {label:"Domů", href:"/"},
    {label:"Všechny články", href:"/blog/"},
    {label:"O mně", href:"/?detail=o-mne"},
    {label:"Ceník", href:"/?detail=cenik"}
  ]);

  function renderEndFooter(host, options={}) {
    if (!host) return;
    const author = options.author || "Lukáš Bou Hlaváček";
    host.innerHTML = `
      <footer class="blog-article-footer">
        <div class="blog-end-divider" aria-hidden="true"></div>
        <p class="blog-end-author">Článek napsal ${esc(author)}<br><span class="blog-view-count" data-article-view-count hidden></span></p>
        <div class="blog-end-actions">
          <button class="blog-end-action" type="button" data-blog-all>Všechny články</button>
          <span class="blog-end-separator" aria-hidden="true">|</span>
          <button class="blog-end-action" type="button" data-blog-share data-article-share>Sdílet článek</button>
        </div>
      </footer>`;
  }

  function renderSiteFooter(host) {
    if (!host) return;
    host.className = "fixed-footer-shell";
    host.innerHTML = `
      <img class="footer-divider" src="/assets/images/embedded-06.png" alt="" aria-hidden="true">
      <footer class="footer">
        <nav class="footer-links" aria-label="Odkazy v patičce blogu">
          ${ARTICLE_SITE_FOOTER_LINKS.map((link,index) =>
            `${index ? '<span class="sep" aria-hidden="true">|</span>' : ''}<a href="${link.href}">${esc(link.label)}</a>`
          ).join("")}
        </nav>
        <span>© 2004–<span data-current-year></span> <strong>DEV<span class="by">BY</span>BOU</strong></span>
      </footer>`;
    host.querySelectorAll("[data-current-year]").forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  window.DEVBYBOU_ARTICLE_UI = Object.freeze({
    renderEndFooter,
    renderSiteFooter,
    siteFooterLinks: ARTICLE_SITE_FOOTER_LINKS
  });
})();