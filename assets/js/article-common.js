(() => {
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));

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
          <button class="blog-end-action" type="button" data-blog-share>Sdílet článek</button>
        </div>
      </footer>`;
  }

  window.DEVBYBOU_ARTICLE_UI = Object.freeze({ renderEndFooter });
})();
