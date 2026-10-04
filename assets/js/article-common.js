(() => {
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));

  const ARTICLE_SITE_FOOTER_LINKS = Object.freeze([
    {label:"Homepage", href:"/"},
    {label:"Všechny články", href:"/blog/"},
    {label:"O mně", href:"/?detail=o-mne"}
  ]);

  function renderEndFooter(host, options={}) {
    if (!host) return;
    const author = options.author || "Lukáš Bou Hlaváček";
    host.innerHTML = `
      <footer class="blog-article-footer">
        <div class="blog-end-divider" aria-hidden="true"></div>
        <p class="blog-end-author">Článek napsal ${esc(author)}<br><span class="blog-view-count" data-article-view-count hidden></span></p>
        <div class="blog-reactions" data-article-reactions hidden aria-label="Hodnocení článku">
          <button class="blog-reaction-btn" type="button" data-article-reaction="like" aria-label="To se mi líbí" aria-pressed="false">
            <svg class="blog-reaction-icon" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M12.5 27H7.8a2 2 0 0 1-2-2V14.8a2 2 0 0 1 2-2h4.7v14.2Z"/>
              <path d="M12.5 14.3 17 6.2c.7-1.3 2.5-1.5 3.5-.4.6.7.8 1.6.5 2.5l-1.3 4.5h5.2c1.5 0 2.6 1.4 2.2 2.8l-2.5 9.1a3 3 0 0 1-2.9 2.2h-9.2"/>
            </svg>
            <span data-reaction-count="like">0</span>
          </button>
          <button class="blog-reaction-btn" type="button" data-article-reaction="dislike" aria-label="To se mi nelíbí" aria-pressed="false">
            <svg class="blog-reaction-icon blog-reaction-icon--down" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M12.5 5H7.8a2 2 0 0 0-2 2v10.2a2 2 0 0 0 2 2h4.7V5Z"/>
              <path d="m12.5 17.7 4.5 8.1c.7 1.3 2.5 1.5 3.5.4.6-.7.8-1.6.5-2.5l-1.3-4.5h5.2c1.5 0 2.6-1.4 2.2-2.8l-2.5-9.1A3 3 0 0 0 21.7 5h-9.2"/>
            </svg>
            <span data-reaction-count="dislike">0</span>
          </button>
        </div>
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