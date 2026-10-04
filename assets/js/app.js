const infoSheet = document.getElementById("infoSheet");
const infoSheetContent = document.getElementById("infoSheetContent");
const INFO_OVERLAYS = {
  benefitResponsive: `
    <div class="benefit-overlay">
      <h2>Plně responzivní zobrazení</h2>
      <h3>Co znamená plná responzivita?</h3>
      <p>Většina vašich zákazníků brouzdá po webu z mobilu. Vaše stránky automaticky a bezchybně přizpůsobím pro chytré telefony, tablety i velké počítače, aby se na ně všude pohodlně koukalo a skvěle se ovládaly.</p>
      <div class="responsive-demo" aria-label="Znázornění responzivního webu na mobilu, tabletu a notebooku">
        <div class="device device-phone"><span class="device-screen"><i></i><i></i><i></i></span></div>
        <div class="device device-tablet"><span class="device-screen"><i></i><i></i><i></i></span></div>
        <div class="device device-laptop"><span class="device-screen"><i></i><i></i><i></i></span><span class="laptop-base"></span></div>
      </div>
    </div>
  `,
  benefitSpeed: `
    <div class="benefit-overlay">
      <h2>Rychlé a stabilní načítání</h2>
      <h3>Proč je rychlost webu klíčová?</h3>
      <p>Nikdo nemá čas čekat, než se stránka načte. Optimalizuji kód i obrázky tak, aby se web otevřel okamžitě. Zákazníci neutečou ke konkurenci a Google si vás za rychlost zamiluje.</p>
    </div>
  `,
  benefitSecurity: `
    <div class="benefit-overlay">
      <h2>Zabezpečení v ceně</h2>
      <h3>Co je součástí zabezpečení?</h3>
      <p>Žádné skryté poplatky za ochranu. Postarám se o to, aby měl váš web aktivní SSL certifikát (zámeček v prohlížeči) od prověřeného hostingu, bezpečné šifrování dat a správné nastavení pro klidný spánek vás i vašich zákazníků.</p>
    </div>
  `,
  benefitAI: `
    <div class="benefit-overlay">
      <h2>Optimalizováno pro AI vyhledávání</h2>
      <h3>Jak funguje AI optimalizace?</h3>
      <p>Vaši zákazníci dnes hledají služby nejen klasicky přes Google a Seznam, ale čím dál častěji i přes ChatGPT, Bing Copilot nebo Gemini. Váš web postavím na pevných základech poctivého SEO pro klasické vyhledávače a navíc ho optimalizuju tak, aby ho snadno našly i umělé inteligence a jeho obsah uměly správně pochopit, zařadit a doporučit ve svých odpovědích.</p>
    </div>
  `,
  bitcoin: `
    <div class="benefit-overlay">
      <h2>Přijímám bitcoin</h2>
      <h3>Platba v korunách i satoshi</h3>
      <p>Pokud je vám bitcoin blízký, můžeme celou zakázku řešit jednoduše a přímo v BTC — ať už jde o jednorázovou realizaci webu, nebo dlouhodobější spolupráci v rámci péče o web. Uložte své sats do poctivého kódu a zaplaťte přímo, bez bankovní okliky. Postavíme váš <em>byznys</em> na nejtvrdších penězích světa!</p>
      <img class="bitcoin-overlay-divider" src="assets/images/embedded-06.png" alt="" aria-hidden="true">
      <div class="bitcoin-overlay-paybox">
        <img class="bitcoin-overlay-qr" src="assets/images/embedded-08.png" alt="Lightning QR kód pro adresu rzt@coinos.io">
        <div class="bitcoin-overlay-address-row">
          <div class="bitcoin-overlay-address">rzt@coinos.io</div>
          <button class="bitcoin-overlay-copy" type="button" data-copy-text="rzt@coinos.io" aria-label="Kopírovat adresu rzt@coinos.io" title="Kopírovat adresu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H10V7h9v14z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  cookies: `
    <h2>Nastavení cookies</h2>
    <p>Tady si můžeš nastavit, jaké typy cookies může web používat. Nezbytné cookies zůstávají vždy aktivní, protože bez nich některé základní funkce webu nemusí fungovat.</p>
    <div class="cookie-row">
      <div><strong>Nezbytné</strong><span>Základní fungování webu.</span></div>
      <input class="cookie-switch" type="checkbox" checked disabled aria-label="Nezbytné cookies jsou vždy aktivní">
    </div>
    <div class="cookie-row">
      <div><strong>Analytické</strong><span>Pomáhají zjistit, jak se web používá a co je možné zlepšit.</span></div>
      <input class="cookie-switch" id="analyticsCookies" type="checkbox" aria-label="Analytické cookies">
    </div>
    <div class="cookie-row">
      <div><strong>Marketingové</strong><span>Používají se pro marketingové a reklamní funkce, pokud jsou na webu zapojené.</span></div>
      <input class="cookie-switch" id="marketingCookies" type="checkbox" aria-label="Marketingové cookies">
    </div>
    <button class="info-sheet-action" id="saveCookies" type="button">Uložit nastavení</button>
  `,
  about: `
    <h2>O mně</h2>
    <p>Web pro mě není digitální dekorace, ale pracovní nástroj. Má rychle vysvětlit, co nabízíte, komu tím pomáháte a proč by měl zákazník oslovit právě vás. Stavím proto weby tak, aby se vaši návštěvníci nemuseli ztrácet, složitě hledat důležité informace nebo přemýšlet, kam mají kliknout — správnou odpověď by měli dostat jednoduše a ve chvíli, kdy ji potřebují.</p>
    <p>Způsob, jakým používáme internet, se mění, a s ním se mění i role firemního webu. Dnes je víc než kdy dřív skutečnou vizitkou vaší firmy: místem, podle kterého si zákazník během několika okamžiků udělá obrázek, najde odpověď na svůj problém a rozhodne se, jestli jste právě vy tím, koho hledá. Mým cílem je, aby váš web k tomuto rozhodnutí vedl cíleně, přehledně a bez zbytečných překážek.</p>
    <p class="about-article-note">Jak se funkce webu v posledních letech proměnila a co od webů dnes dává smysl očekávat, jsem napsal článek <a href="#" class="about-inline-link" data-about-blog-article>Web v druhé polovině dvacátých let</a>.</p>
    <div class="pricing-note pricing-note--about"><p><strong>DEVBYBOU je součástí portfolia služeb hodinového manžela Manžel Tomáš.</strong> Web development nabízím jako jednu z odborných služeb vedle ostatní technické a praktické pomoci.</p></div>
    <p>S webovými stránkami jsem začínal už jako dítě s příchodem internetu. Patřím ke generaci prvních dětí, které s internetem skutečně vyrůstaly — nebyl pro nás hotovou věcí, ale prostředím, které se teprve formovalo a které jsme se učili objevovat spolu s ním. Ve čtrnácti letech jsme založili internetovou hru HOCZ.org a od té doby mě vývoj webů, online služeb a technologií provází celý život.</p>
    <p>Dnes vyvíjím <strong>Hradec.info</strong>, digitální srdce Hradce Králové — aplikaci, kterou by měl mít v mobilu každý Hradečák. Spojuje informace, místa, události a místní obsah do jednoho prostředí a je pro mě zároveň ukázkou toho, jak může webová aplikace vyrůstat z reálných potřeb lidí, kteří ji používají.</p>
    <p>Stejný princip přenáším i do webů pro firmy. Nejde mi o efekty pro efekty, ale o to, aby vám stránky pomáhaly získávat zákazníky, odpovídaly na jejich skutečné otázky a usnadňovaly jim rozhodnutí. U varianty Standard vám web vytvořím a předám; u Business se starám i o průběžnou správu, aktualizace a technické věci, abyste se mohli věnovat své vlastní práci.</p>
    <p>Nechci stavět další anonymní korporátní layouty, které vypadají jako desítky jiných webů. Každý web by měl mít vlastní charakter, odpovídat lidem a značce, pro kterou vzniká, a být poznatelný i bez loga v rohu.</p>
    <div class="about-shot-stack-wrap">
      <div class="about-shot-stack" aria-label="Vybrané screenshoty z referencí">
        <button type="button" class="about-shot-card" aria-label="Zobrazit screenshot HOCZ.org v popředí" aria-pressed="false">
          <img src="assets/images/embedded-09.jpg" alt="Screenshot webu HOCZ.org">
        </button>
        <button type="button" class="about-shot-card is-active" aria-label="Zobrazit screenshot KittyStrips v popředí" aria-pressed="true">
          <img src="assets/images/embedded-10.jpg" alt="Screenshot webu KittyStrips">
        </button>
        <button type="button" class="about-shot-card" aria-label="Zobrazit screenshot Hradec.info v popředí" aria-pressed="false">
          <img src="assets/images/embedded-11.jpg" alt="Screenshot webu Hradec.info">
        </button>
      </div>
    </div>
    <p>Pokud chceš probrat konkrétní web, nejrychlejší cesta je tlačítko <strong>Napište mi</strong> přes WhatsApp.</p>
  `,
  references: `
    <h2>Reference</h2>
    <p class="pricing-lead">Ukázky webů, které mají zaujmout na první pohled, rychle vysvětlit službu a dovést návštěvníka ke kontaktu.</p>
    <div class="reference-wrap">
      
<section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <img src="assets/images/embedded-12.jpg" alt="Screenshot webu Manžel Tomáš">
          </figure>
          <article class="reference-card">
            <span class="reference-badge">Manžel Tomáš</span>
            <p>Prezentační web hodinového manžela Tomáše Janovského. Silná hero sekce, rychlý kontakt a jasně čitelné služby bez zbytečné omáčky.</p>
</article>
        </div>
      </section>
<section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <img src="assets/images/embedded-11.jpg" alt="Screenshot webu Hradec.info">
          </figure>
          <article class="reference-card">
            <span class="reference-badge">Hradec.info</span>
            <p>Lokální digitální platforma pro Hradec Králové. Na jednom místě propojuje mapu, akce, zprávy, petice a kontakty s důrazem na rychlou orientaci a jednoduché použití na mobilu.</p>
          </article>
        </div>
      </section>

      <section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <img src="assets/images/embedded-10.jpg" alt="Screenshot webu KittyStrips">
          </figure>
          <article class="reference-card">
            <span class="reference-badge">KittyStrips</span>
            <p>Komiksový web navržený tak, aby se jednotlivé stripy staly přirozenou součástí kresleného rozhraní. CMS umožňovalo plánovat publikaci i automatické sdílení na soc. sítě.</p>
          </article>
        </div>
      </section>

<section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <img src="assets/images/embedded-09.jpg" alt="Screenshot webu HOCZ.org">
          </figure>
          <article class="reference-card">
            <span class="reference-badge">HOCZ.org</span>
            <p>Komplexní webová RPG hra s rozsáhlým vývojem databázové architektury, herních mechanismů a interaktivního rozhraní. Napojení na velké fantasy festivaly v ČR. V provozu 2003–2024.</p>
          </article>
        </div>
      </section>

      <section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <img src="assets/images/embedded-13.jpg" alt="Screenshot aplikace WATCH+">
          </figure>
          <article class="reference-card">
            <span class="reference-badge">WATCH+</span>
            <p>Filmová databáze s rozšířenými filtry a vyhledáváním titulů napříč streamovacími platformami. Rozhraní optimalizováno jako televizní aplikace s důrazem na pohodlné procházení obsahu.</p>
          </article>
        </div>
      </section>

      <section class="reference-entry">
        <div class="reference-showcase">
          <figure class="reference-screen">
            <div class="reference-placeholder" role="img" aria-label="Výchozí náhled reference bez screenshotu"></div>
          </figure>
          <article class="reference-card">
            <span class="reference-badge">DreamOfMoravia</span>
            <p>Čtyřjazyčný web chovatelské stanice FCI zaměřené na lovecká plemena. Kompletní CMS pro správu psů a rodokmenů, odchovů, pracovních zkoušek, výstav, fotogalerií i běžného obsahu webu.</p>
          </article>
        </div>
      </section>


      

    </div>
  `,
  blog: `
    <h2>Blog</h2>
    <p class="blog-intro">Poznámky o internetu, technologiích, lidech kolem nich a věcech, které by jinak možná zůstaly jen bokem. O tom, jak se internet měnil, co po cestě zanechal a proč není jen technologií, ale i kulturou, historií a spoustou podivností kolem.</p>
    <div id="blogView"></div>
  `,
  pricing: `
    <h2>Ceník</h2>
    <p class="pricing-lead">Nabídka pokrývá jednoduchou splash page, klasický firemní web, web s průběžnou péčí i e-shop na klíč. Věci mimo dohodnutý rozsah řeším zvlášť a cenu vždy potvrdím předem.</p>
    <div class="pricing-compare-scroll" aria-label="Srovnání balíčků">
      <table class="pricing-compare-table">
        <thead>
          <tr>
            <th class="feature-col">Co obsahuje</th>
            <th>
              <span class="pkg-name">BASIC</span>
              <span class="pkg-desc">Splash page / digital business card</span>
            </th>
            <th>
              <span class="pkg-name">STANDARD</span>
              <span class="pkg-desc">Jednorázový web bez paušálu</span>
            </th>
            <th>
              <span class="pkg-name">BUSINESS</span>
              <span class="pkg-desc">Pravidelná péče o web</span>
            </th>
            <th>
              <span class="pkg-name">E-SHOP</span>
              <span class="pkg-desc">Internetový obchod na klíč</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Typ řešení</th>
            <td>Splash page / digital business card</td>
            <td>Firemní web</td>
            <td>Firemní web s péčí</td>
            <td>E-shop na klíč</td>
          </tr>
          <tr>
            <th>Rozsah</th>
            <td>1 samostatná splash page</td>
            <td>1–3 podstránky</td>
            <td>Landing page + 1–3 podstránky</td>
            <td><span class="yes">Bez omezení počtu produktů</span></td>
          </tr>
          <tr>
            <th>Responzivní zobrazení</th>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
          </tr>
          <tr>
            <th>Inline admin editor</th>
            <td><span class="yes">Ano</span></td>
            <td><span class="muted">Dle dohody</span></td>
            <td><span class="muted">Dle dohody</span></td>
            <td><span class="muted">Vlastní admin e-shopu</span></td>
          </tr>
          <tr>
            <th>Jméno, logo a kontakty</th>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
          </tr>
          <tr>
            <th>Mapa podle potřeby</th>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="muted">Dle potřeby</span></td>
          </tr>
          <tr>
            <th>3 návrhy vzhledu před realizací</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
          </tr>
          <tr>
            <th>Zpracování dodaného obsahu</th>
            <td><span class="muted">Základní rozsah</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="yes">Ano</span></td>
          </tr>
          <tr>
            <th>Správa produktů, objednávek a skladu</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="yes">Ano — vlastní přehledný admin</span></td>
          </tr>
          <tr>
            <th>Platební brány</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="yes">Napojení dle výběru</span></td>
          </tr>
          <tr>
            <th>Doprava</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="yes">Zvolené možnosti dopravy</span></td>
          </tr>
          <tr>
            <th>Pravidelná správa a aktualizace</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Ne</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="muted">Dle dohody</span></td>
          </tr>
          <tr>
            <th>Technická údržba a drobné změny</th>
            <td><span class="muted">Ne</span></td>
            <td><span class="muted">Nárazově dle ceníku</span></td>
            <td><span class="yes">Ano</span></td>
            <td><span class="muted">Dle dohody</span></td>
          </tr>
          <tr>
            <th>Pro koho je balíček vhodný</th>
            <td>Jednoduchá profesionální přítomnost online</td>
            <td>Menší firmy, služby a řemeslníci se stabilním obsahem</td>
            <td>Weby, které žijí a potřebují pravidelnou péči</td>
            <td>Firmy a projekty, které chtějí prodávat online ve vlastním řešení</td>
          </tr>
          <tr class="pricing-final-price">
            <th>Cena</th>
            <td data-btc-price data-czk="9990"><strong>9 990 Kč</strong></td>
            <td data-btc-price data-czk="21990" data-price-prefix="od "><strong><span class="price-prefix">od</span> 21 990 Kč</strong></td>
            <td data-btc-price data-czk="17990" data-czk-monthly="1990"><strong>17 990 Kč</strong><br><span>+ 1 990 Kč / měs.</span></td>
            <td data-btc-price data-czk="54990" data-price-prefix="od "><strong><span class="price-prefix">od</span> 54 990 Kč</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="pricing-compare-hint">Na mobilu můžete tabulku posouvat do stran.</p>
    <h3>Návrhy vzhledu před realizací</h3>
    <p>U balíčků Standard, Business a E-shop jsou v ceně <strong>3 návrhy vzhledu webu</strong>. Slouží k tomu, abyste si ještě před samotnou realizací vybrali vizuální směr, podle kterého pak web dokončím. Každý další návrh nad rámec základní trojice je zpoplatněn částkou <strong>1 000 Kč / návrh</strong>.</p>

    <h3>Jak funguje měsíční paušál Business</h3>
    <p>Paušál 1 990 Kč měsíčně je za průběžnou péči a běžné zásahy do existujícího webu. Není to neomezený vývoj úplně nových funkcí. Pokud požadavek přesáhne běžnou správu, domluvíme předem rozsah práce navíc.</p>

    <h3>Konzultace</h3>
    <p>První strategická konzultace (do 1 hodiny) je zdarma — a pokud si u mě web objednáte, je automaticky součástí zakázky. Každá další konzultace stojí <strong>1 000 Kč / hod.</strong></p>

    <h3>Vícepráce a hodinová sazba</h3>
    <p>Práce mimo balíček (nové funkce, větší úpravy) nikdy nezačínám bez domluvy a schválení ceny. Hodinová sazba je <strong>1 000 Kč / hod.</strong> (účtováno za každou započatou hodinu).</p>

    <div class="pricing-note">
      <p><strong>Žádné překvapení na faktuře.</strong> Cokoli není součástí balíčku nebo měsíční péče, řešíme dopředu — včetně odhadu času a ceny.</p>
      <p class="pricing-note-secondary"><strong>Hosting a domény:</strong> Uvedené ceny nezahrnují registraci domény a webhosting, ty se hradí samostatně podle vybraného poskytovatele.</p>
    </div>
    <section class="pricing-extras">
      <h3>Doplňkové služby</h3>
      <table class="pricing-extra-table">
        <thead>
          <tr>
            <th>Doplňková služba</th>
            <th>Orientační cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Další návrh vzhledu webu<br><small>(nad rámec 3 návrhů v balíčku Standard / Business / E-shop)</small></td>
            <td>1 000 Kč / návrh</td>
          </tr>
          <tr>
            <td>Hodinová sazba<br><small>(vícepráce a individuální práce)</small></td>
            <td>1 000 Kč / hod.</td>
          </tr>
          <tr>
            <td>Konzultace<br><small>(první hodina zdarma)</small></td>
            <td>další hodiny 1 000 Kč / hod.</td>
          </tr>
          <tr>
            <td>White label<br><small>(web bez podpisu DEVBYBOU v patičce)</small></td>
            <td>1 990 Kč</td>
          </tr>
          <tr>
            <td>CMS na míru<br><small>(v ceně základní rozhraní + 1 modul dle výběru)</small></td>
            <td>od 4 990 Kč</td>
          </tr>
          <tr>
            <td>Každý další modul CMS</td>
            <td>+ 2 450 Kč / modul</td>
          </tr>
          <tr>
            <td>Copywriting z dodaných podkladů</td>
            <td>od 1 490 Kč</td>
          </tr>
          <tr>
            <td>Jazyková mutace webu<br><small>(překlad dodává klient)</small></td>
            <td>od 2 490 Kč / jazyk</td>
          </tr>
          <tr>
            <td>Překlad EN / DE<br><small>(ostatní jazyky individuálně)</small></td>
            <td>od 490 Kč / normostrana</td>
          </tr>
          <tr>
            <td>Další podstránka</td>
            <td>od 1 490 Kč</td>
          </tr>
          <tr>
            <td>Speciální formulář / funkce</td>
            <td>individuálně</td>
          </tr>
          <tr>
            <td>Zařazení do Google a Seznamu*</td>
            <td>od 990 Kč</td>
          </tr>
          <tr>
            <td>Zařazení na Hradec.info pro firmy z Královéhradecka*</td>
            <td>zdarma</td>
          </tr>
          <tr>
            <td>Nastavení a správa hostingu / domény<br><small>(zajištění provozu, registrace na klienta)</small></td>
            <td>490 Kč + cena hostingu/domény</td>
          </tr>
        </tbody>
      </table>
      <p class="pricing-extras-note">U jazykových mutací standardně dodává hotový překlad klient. U jmenovaných jazyků v ceníku můžu zajistit překlad; cena se odvíjí od počtu normostran. U CMS, speciálních funkcí a dalších rozsáhlejších úprav vždy potvrdím rozsah a konečnou cenu předem.</p>
      <p class="pricing-extras-note"><strong>*</strong> Zařazení zahrnuje základní nastavení firemních údajů. Případné placené služby třetích stran nejsou součástí ceny.</p>
    </section>

    <p>Služby web developmentu DEVBYBOU jsou poskytovány v rámci portfolia služeb Manžel Tomáš.</p>
  `
};
let overlayHistoryActive = false;
let currentBlogArticleIndex = null;

// Shareable overlay URLs. The visible overlay state lives in ?detail=...
// while the page itself remains the same static GitHub document.
const OVERLAY_DETAIL_BY_KIND = {
  "info:benefitResponsive": "responzivita",
  "info:benefitSpeed": "rychlost",
  "info:benefitSecurity": "zabezpeceni",
  "info:benefitAI": "ai-vyhledavani",
  "info:bitcoin": "bitcoin",
  "info:cookies": "cookies",
  "info:about": "o-mne",
  "info:references": "reference",
  "info:pricing": "cenik",
  "info:blog": "blog",
  "package:basic": "basic",
  "package:standard": "standard",
  "package:business": "business",
  "package:eshop": "e-shop"
};

const OVERLAY_KIND_BY_DETAIL = Object.fromEntries(
  Object.entries(OVERLAY_DETAIL_BY_KIND).map(([kind, detail]) => [detail, kind])
);

// Friendly aliases keep older/manual links useful without changing the canonical URL.
Object.assign(OVERLAY_KIND_BY_DETAIL, {
  responsive: "info:benefitResponsive",
  responzivni: "info:benefitResponsive",
  speed: "info:benefitSpeed",
  security: "info:benefitSecurity",
  ai: "info:benefitAI",
  about: "info:about",
  pricing: "info:pricing",
  references: "info:references",
  eshop: "package:eshop"
});

function getOverlayUrl(kind){
  const detail = OVERLAY_DETAIL_BY_KIND[kind];
  const url = new URL(location.href);
  url.searchParams.delete("open");
  if (detail) url.searchParams.set("detail", detail);
  else url.searchParams.delete("detail");
  return `${url.pathname}${url.search}${url.hash}`;
}

function getBasePageUrl(){
  const url = new URL(location.href);
  url.searchParams.delete("detail");
  url.searchParams.delete("open");
  return `${url.pathname}${url.search}${url.hash}`;
}

function pushOverlayHistory(kind){
  const url = getOverlayUrl(kind);
  if (!overlayHistoryActive) {
    history.pushState({devbybouOverlay:true, kind}, "", url);
    overlayHistoryActive = true;
  } else {
    history.replaceState({devbybouOverlay:true, kind}, "", url);
  }
}
function hideAllOverlays(){
  infoSheet.classList.remove("open");
  infoSheet.setAttribute("aria-hidden","true");
  const packageSheet = document.getElementById("sheet");
  if (packageSheet) {
    packageSheet.classList.remove("open");
    packageSheet.setAttribute("aria-hidden","true");
  }
  document.body.style.overflow="";
}
function requestOverlayClose(){
  if (overlayHistoryActive && history.state?.devbybouOverlay) {
    history.back();
  } else {
    overlayHistoryActive = false;
    hideAllOverlays();
  }
}
window.addEventListener("popstate",(event)=>{
  if (!overlayHistoryActive) return;

  // If Back moved from a blog article to the Blog overlay state,
  // keep the overlay open and return only to the article list.
  if (
    currentBlogArticleIndex !== null &&
    event.state?.devbybouOverlay &&
    event.state?.kind === "info:blog"
  ) {
    currentBlogArticleIndex = null;
    clearBlogReaderTheme();
    infoSheetContent.innerHTML = INFO_OVERLAYS.blog;
    renderBlogList();
    infoSheet.classList.add("open");
    infoSheet.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
    const scroller = infoSheet.querySelector(".info-sheet-card");
    scroller?.scrollTo({top:0, behavior:"smooth"});
    return;
  }

  currentBlogArticleIndex = null;
  overlayHistoryActive = false;
  hideAllOverlays();
});


const BLOG_ARTICLES = [
  {
    category: "Web a technologie",
    title: "Deset tisíc AI agentů hledalo řešení za milion dolarů. Možná jsme právě viděli budoucnost vědecké práce",
    slug: "deset-tisic-ai-agentu-budoucnost-vedecke-prace",
    date: "28. 9. 2026",
    excerpt: "Matematici mají zvláštní zálibu v problémech, na které lidstvo desítky nebo stovky let nedokáže přijít. Jedním z takových případů jsou Navierovy–Stokesovy rovnice.",
    intro: [
      "Navierovy–Stokesovy rovnice popisují proudění kapalin a plynů: vodu v potrubí, vzduch kolem křídla letadla, vítr, turbulence a prakticky všechno, co se kolem nás hýbe a není to pevný beton.",
      "Rovnice používáme už dlouho. Jen jsme nevěděli, jestli se za určitých podmínek matematicky nerozbijí.",
      "A 8. září 2026 OpenAI oznámila:",
      "<strong>Rozbijí. A tady je důkaz.</strong>",
      "Což je poměrně ambiciózní věta na úterní dopoledne."
    ],
    sections: [
      {
        heading: "Milion dolarů za odpověď na otázku, které většina lidí nerozumí",
        paragraphs: [
          "Navierův–Stokesův problém patří mezi sedm slavných Millennium Prize Problems, které v roce 2000 vyhlásil Clay Mathematics Institute. Každý z nich má hodnotu jednoho milionu dolarů.",
          "Z původních sedmi byl dosud definitivně vyřešen pouze jeden — Poincarého domněnka. Clay Institute proto stále vede Navierův–Stokesův problém jako aktivní, přestože po zveřejnění práce OpenAI připustil, že může být fakticky vyřešen. Pravidla ale vyžadují publikaci, všeobecné přijetí matematickou komunitou a nejméně dvouletou dobu od zveřejnění výsledku.",
          "Takže ne. Sam Altman si zatím nemůže skočit vyzvednout šek. I když s ohledem na finanční situaci OpenAI by mu milion dolarů stejně nijak nepomohl."
        ]
      },
      {
        heading: "Co se vlastně řešilo?",
        paragraphs: [
          "Představte si dokonale hladké proudění tekutiny. Na začátku známe její stav a pomocí rovnic chceme spočítat, co bude dělat dál.",
          "Otázka zní:",
          "<strong>Zůstane řešení vždy hladké a matematicky dobře definované, nebo může někdy v konečném čase vzniknout singularita — bod, kde některé hodnoty utečou matematicky do extrému?</strong>",
          "Zjednodušeně: může se matematický popis proudící kapaliny najednou rozbít?",
          "OpenAI tvrdí, že její systém nalezl konstrukci, ve které skutečně vznikne singularita v konečném čase.",
          "Tedy nikoliv:",
          "„Dokázali jsme, že se rovnice nikdy nerozbijí.“",
          "Ale:",
          "„Našli jsme případ, kdy se rozbijí.“",
          "A tím by byl problém rozhodnut.",
          "OpenAI zveřejnila klasický matematický důkaz i jeho formalizovanou podobu v systému Lean, který umožňuje jednotlivé logické kroky strojově kontrolovat. Způsob, jakým se k důkazu došlo, je možná ještě zajímavější než samotný výsledek."
        ]
      },
      {
        heading: "Jeden génius? Ne. Deset tisíc agentů.",
        paragraphs: [
          "Představa „AI vyřešila matematický problém“ vyvolává obraz digitálního Einsteina, který sedí v datacentru a hluboce přemýšlí.",
          "Realita byla podstatně podivnější.",
          "OpenAI nasadila přibližně 10 000 AI agentů současně. Byli rozděleni do skupin a dostávali různé formulace problému. Zkoušeli různé přístupy: jedni hledali důkaz, že hladké řešení existuje vždy, jiní způsob, jak ukázat opak.",
          "První agenti byli spuštěni 1. září a k výsledku systém dospěl po přibližně 88 hodinách. Následovala formalizace důkazu v Leanu a další kontrola, která zabrala zhruba 17 hodin.",
          "Během práce na Navierově–Stokesově problému si agenti vyměnili asi 2,7 milionu zpráv a vytvořili přibližně 130 miliard výstupních tokenů. Celý experiment napříč zadanými matematickými problémy spotřeboval kolem 300 miliard tokenů."
        ]
      },
      {
        heading: "Tohle je možná skutečný průlom",
        paragraphs: [
          "Samotná schopnost AI řešit matematiku není nová. Modely už nějakou dobu dokazují věty, řeší olympiádní úlohy a pomáhají matematikům hledat nové směry.",
          "Nové je měřítko.",
          "Tady nezačínáme vidět jen lepšího chatbota, ale něco, co připomíná digitální výzkumnou organizaci.",
          "Představte si deset tisíc rychlých juniorních výzkumníků, kteří nepotřebují spát, mohou několik dní paralelně testovat tisíce nápadů a průběžně si předávat výsledky. Jeden najde zajímavou cestu, další ji rozpracují, většina zjistí, že nikam nevede, a několik z nich objeví něco podstatného.",
          "Lidská věda něco podobného dělá také. Jen tomu říkáme univerzity, konference, publikace a třicet let kariéry.",
          "AI to v tomto experimentu udělala za několik dní."
        ]
      },
      {
        heading: "Jenže matematika má jednu nepříjemnou vlastnost: důkaz musí být správně",
        paragraphs: [
          "Tady bych brzdil titulky typu:",
          "<strong>AI VYŘEŠILA PROBLÉM TISÍCILETÍ ZA ČTYŘI DNY. MATEMATICI MOHOU JÍT DOMŮ.</strong>",
          "Nemohou. Matematický důkaz není správný proto, že ho zveřejnila velká firma nebo že při jeho výpočtu shořel rozpočet menšího evropského města. Musí obstát před lidmi, jejichž profesní zálibou je několik měsíců hledat jednu drobnou chybu na straně 84.",
          "Práce OpenAI obsahuje formalizaci v Leanu, což výrazně zvyšuje důvěru v logickou konzistenci důkazu. Vědecká komunita ale stále potřebuje pochopit předpoklady, konstrukci i význam výsledku.",
          "Clay Mathematics Institute proto cenu zatím nikomu nepředal. OpenAI sama výslovně uvádí, že o milionovou cenu nyní neusiluje.",
          "Mezi „firma zveřejnila řešení“ a „matematická komunita definitivně uznala jeden z problémů tisíciletí jako vyřešený“ vede ještě dlouhá cesta. A matematika má tu otravnou vlastnost, že na ní tisková zpráva neplatí."
        ]
      },
      {
        heading: "A samozřejmě přišla kontroverze",
        paragraphs: [
          "Protože by nebyl rok 2026, kdyby významný průlom v umělé inteligenci nepřišel s minimálně jedním vláknem obvinění.",
          "Matematik Tristan Buckmaster a výzkumník společnosti Anthropic Levent Alpöge pracovali ve stejné době na příbuzném problému týkajícím se Eulerových rovnic. Objevily se otázky, zda OpenAI nezačala určitý směr zkoumat poté, co se dozvěděla o jejich neveřejné práci, případně zda se k některým informacím nemohla dostat prostřednictvím používání svých modelů.",
          "OpenAI to odmítla. Tvrdí, že její systém k jejich práci přístup neměl, že příslušné uživatelské prompty nemohly ovlivnit trénink modelu a že výsledky obou týmů se týkají odlišných variant problému. Zároveň uznala prioritu Alpögeho a Buckmastera u jejich výsledku pro nucené Eulerovy rovnice.",
          "Tahle debata je předzvěstí ještě většího problému.",
          "<strong>Co bude v době AI vlastně znamenat vědecké prvenství?</strong>",
          "Kdo je autorem výsledku, pokud člověk položí otázku a deset tisíc agentů nalezne důkaz? Firma, která model vytvořila? Lidé, kteří experiment spustili? Autoři vědeckých prací, na kterých se systém naučil matematiku? Nebo samotná AI, která právně není skoro nic?",
          "Máme před sebou krásných pár desetiletí filozofických hádek."
        ]
      },
      {
        heading: "Ne, matematici nejsou zbyteční",
        paragraphs: [
          "Mohlo by být lákavé skončit větou:",
          "<strong>Tak, a AI právě nahradila matematiky.</strong>",
          "Jenže to by bylo asi stejně přesné jako tvrdit, že kalkulačka nahradila účetní a fotoaparát malíře.",
          "Možná se ale zásadně změní jejich práce.",
          "Vědec budoucnosti nemusí sedět tři roky nad jednou slepou uličkou. Může formulovat problém, navrhovat směry, řídit stovky nebo tisíce agentů, vyhodnocovat jejich výsledky a hlavně se ptát:",
          "<strong>Proč je ten výsledek zajímavý?</strong>",
          "Věda není jen produkce správných vět. Je také o výběru správných otázek, pochopení souvislostí a schopnosti poznat, že právě tahle zvláštní vlastnost rovnice může změnit celý obor.",
          "Deset tisíc agentů dokáže velmi rychle hledat. Ale někdo jim pořád musí říct, co stojí za hledání."
        ]
      },
      {
        heading: "A možná jsme právě viděli budoucnost práce",
        paragraphs: [
          "Na celém příběhu mě proto nejvíc nezajímá Navier–Stokes. Ani milion dolarů. Ani 130 miliard tokenů.",
          "Nejzajímavější je organizace inteligence.",
          "Ještě nedávno jsme AI používali stylem:",
          "<strong>Člověk položí otázku → AI odpoví.</strong>",
          "Tady se dělo něco jiného:",
          "<strong>Člověk zadal cíl → tisíce digitálních agentů si rozdělilo práci → experimentovalo → komunikovalo → zahazovalo chyby → spojovalo poznatky → vytvořilo výsledek.</strong>",
          "A to už není jen chatbot. Začíná to připomínat instituci. Dnes matematickou laboratoř. Zítra vývojářský tým, výzkumné oddělení farmaceutické společnosti, projektanty, analytiky. Možná celou malou firmu.",
          "Samozřejmě s drobným detailem, že místo firemní kuchyňky potřebuje několik datacenter a energetickou spotřebu, na kterou se raději moc neptejte.",
          "Navierovy–Stokesovy rovnice možná dostanou svůj milionový šek. Možná se v důkazu objeví chyba a příběh získá úplně jiný konec. To teď není nejdůležitější.",
          "Protože i kdyby některý detail důkazu neobstál, experiment už ukázal něco jiného:",
          "<strong>AI nemusí být jen nástroj, se kterým člověk pracuje. Může se z ní stát celý tým, který člověk řídí.</strong>",
          "A jestli hledáme okamžik, kdy se z chatbotů začíná stávat něco podstatně většího, deset tisíc agentů hádajících se 88 hodin nad rovnicemi starými téměř století je docela dobrý kandidát."
        ]
      }
    ]
  },
  {
    category: "Web a technologie",
    title: "Web v druhé polovině dvacátých let. Internet se nezměnil, internet se mění pořád",
    slug: "web-v-druhe-polovine-dvacatych-let",
    pinned: true,
    date: "1. 10. 2026",
    excerpt: "Od vytáčeného modemu přes blikající GIFy až po AI crawlery. Internet dospěl, změnil pravidla hry a některé firemní weby pořád čekají, až jim někdo řekne, že už není rok 2007.",
    intro: [
      "Pamatuji dobu, kdy připojení k internetu vydávalo zvuky, které by dnes mladší generace považovala za poruchu elektroniky.",
      "Pamatuji web devadesátých let. Barevná pozadí, blikající GIFy, počítadla návštěvnosti, rámečky, tabulky a hrdé nápisy „optimalizováno pro rozlišení 800 × 600“. Webové stránky tehdy nebyly samozřejmost. Samotná skutečnost, že někdo měl web, byla událost.",
      "Od té doby jsme prošli katalogy a portály, érou vyhledávačů, nástupem Googlu, Webem 2.0, sociálními sítěmi, smartphony, responzivním designem, aplikacemi a cloudem.",
      "A teď přichází další změna.",
      "Umělá inteligence.",
      "Ne jako jedna nová funkce někde na internetu, ale jako něco, co postupně mění samotný způsob, jakým internet používáme.",
      "Nejlépe se tento vývoj dá popsat jako životní cyklus webu. Web se narodí jako jednoduchá prezentace, postupně se přizpůsobuje novým technologiím a způsobům používání internetu, a pokud se nevyvíjí, začne stárnout rychleji než firma, kterou reprezentuje.",
      "A právě proto dnes nestačí vytvořit web tak, jak se weby vytvářely před deseti nebo patnácti lety."
    ],
    sections: [
      {
        heading: "Web devadesátých let měl úplně jiný úkol",
        paragraphs: [
          "První firemní stránky bývaly v zásadě elektronickou verzí letáku. Obsahovaly název firmy, stručnou informaci o tom, co dělá, telefon, adresu a možná fotografii budovy. A pokud byl webmaster skutečný dobrodruh, také animovanou obálku vedle e-mailové adresy.",
          "Fungovalo to, protože jsme tehdy internet používali jinak. Informace nebyly všudypřítomné, vyhledávače byly jednodušší, internetových stránek bylo dramaticky méně a mobilní internet byl pro většinu lidí ještě science fiction. Když jste našli stránku firmy, byli jste rádi, že vůbec existuje.",
          "Dnes jsme na opačné straně problému. Informací není málo. Je jich příliš mnoho.",
          "A úkolem moderního webu proto není pouze informace zveřejnit. Musí pomoci správnému člověku správnou informaci rychle najít, pochopit a něco s ní udělat."
        ]
      },
      {
        heading: "Největší změna se neodehrála v technologiích. Odehrála se v nás.",
        paragraphs: [
          "Ještě před patnácti lety bylo naprosto normální přijít na webovou stránku přes její homepage, otevřít menu, najít sekci „Služby“, potom „Kontakt“ a chvíli hledat, co vlastně potřebujete.",
          "Dnes přicházíme na konkrétní podstránky z Googlu, Map, sociálních sítí, QR kódů, reklam, odkazů v komunikátorech — a stále častěji prostřednictvím odpovědi vytvořené umělou inteligencí.",
          "Uživatel už často web neprochází. Uživatel něco potřebuje. Chce vědět, zda daná firma dělá to, co potřebuje, kolik to stojí, jestli působí v jeho městě, zda jí může věřit, jak ji kontaktovat a jestli má právě otevřeno.",
          "Na rozhodnutí máte někdy několik sekund. Proto může být stránka technicky funkční a přesto být z pohledu roku 2026 prakticky zastaralá."
        ]
      },
      {
        heading: "Máme rok 2026. Některé firemní weby to zatím nezjistily.",
        paragraphs: [
          "Tohle je podle mě jeden z největších paradoxů současného internetu.",
          "Pořízení profesionální webové prezentace nikdy nebylo tak dostupné jako dnes. Na českém trhu dnes najdete menší a střední firemní prezentace běžně v cenových hladinách kolem 20–30 tisíc korun; aktuální ceníky řady dodavatelů začínají přibližně kolem 20 tisíc a standardní firemní realizace se podle rozsahu pohybují zhruba mezi 20 a 35 tisíci.",
          "Ve srovnání s automobilem, vybavením provozovny, reklamou nebo několika měsíci nájmu je to pro fungující podnikání často relativně malá investice.",
          "Přesto dodnes narazíte na firmy, jejichž web vypadá, jako kdyby ho někdo v roce 2007 dokončil, slavnostně zavřel notebook a už se k němu nikdy nevrátil. Malé písmo, web, který na telefonu připomíná pohled dalekohledem, kontaktní informace schované na třetí podstránce, fotografie široké 320 pixelů, deset položek menu, „Vítejte na našich internetových stránkách“ a někdy dokonce copyright končící někde kolem roku 2014.",
          "Nejde přitom jen o estetiku. Takový web vznikl pro způsob používání internetu, který už neexistuje."
        ]
      },
      {
        heading: "Mobil už není menší počítač",
        paragraphs: [
          "Kdysi vznikl web pro počítač a později se řešilo, jak ho nějak vměstnat do telefonu. Dnes je mnohem rozumnější uvažovat opačně.",
          "Telefon není nouzová verze internetu. Pro obrovské množství lidí je to internet.",
          "Člověk stojí na ulici, hledá instalatéra, restauraci, servis, právníka nebo kadeřnici. V jedné ruce drží telefon a nechce studovat firemní historii od roku 1993. Potřebuje odpověď.",
          "Moderní web proto musí respektovat nejen velikost displeje, ale i kontext, ve kterém jej člověk používá. Telefonní číslo má jít stisknout, adresa otevřít v mapě, formulář nemá vyžadovat dvacet polí, text nemá být stěna, nejdůležitější informace nemají být ukryté pod třemi úrovněmi navigace a stránka se nemá deset sekund rozmýšlet, jestli se vůbec zobrazí.",
          "Google ostatně při hodnocení uživatelské zkušenosti dlouhodobě zdůrazňuje mimo jiné dobré fungování na mobilních zařízeních, zabezpečení a rychlost stránky."
        ]
      },
      {
        heading: "A potom přišla AI. A s ní také AI slop.",
        paragraphs: [
          "Umělá inteligence dramaticky snížila cenu výroby digitálního obsahu. To je zároveň fantastická i děsivá zpráva.",
          "Nikdy nebylo jednodušší vytvořit text, obrázek, článek, produktový popis nebo rovnou celý web. Výsledkem je ale také něco, čemu se začalo velmi trefně říkat AI slop.",
          "Internet se plní obrovským množstvím generického obsahu vytvořeného hlavně proto, aby nějaký obsah existoval. Články opisují články, deset stránek vysvětluje stejnou věc téměř stejnými slovy, fotografie zachycují lidi, kteří nikdy neexistovali, a weby vznikají během odpoledne, aniž by přinášely něco nového.",
          "AI tedy zároveň umožňuje vytvářet lepší věci rychleji a zaplavit internet digitální vatou.",
          "A právě tady podle mě roste hodnota něčeho velmi obyčejného: autentického zdroje. Skutečné firmy, skutečného člověka, skutečné adresy, skutečných služeb, skutečných fotografií, skutečných zkušeností a webové stránky, která dokáže všechny tyto informace jasně popsat."
        ]
      },
      {
        heading: "Web už dnes nečte pouze člověk",
        paragraphs: [
          "Tohle je možná největší změna posledních let.",
          "Webovou stránku dnes nevytváříme pouze pro oči návštěvníka. Čte ji prohlížeč, Google, indexovací roboti, asistivní technologie a stále častěji její obsah nějakým způsobem zpracovávají také systémy umělé inteligence.",
          "Proto existují věci, které návštěvník na obrazovce vůbec nemusí vidět, ale pro moderní web mají význam: správná HTML struktura, smysluplné titulky, metadata, sitemap, robots.txt, canonical URL a strukturovaná data Schema.org.",
          "Schema není nějaké magické tlačítko „optimalizovat pro ChatGPT“. Je to standardizovaný způsob, jak stroji sdělit: Tohle je firma. Tohle je její adresa. Tohle je služba. Tohle je produkt. Tohle je událost. Tohle je článek a toto je jeho autor.",
          "Google přímo uvádí, že strukturovaná data používá k lepšímu pochopení obsahu stránky a k zobrazování rozšířených podob výsledků vyhledávání.",
          "A vedle klasických vyhledávačů už musíme počítat také s novým druhem návštěvníka: crawlerem AI systému. Například OpenAI provozuje samostatný OAI-SearchBot určený pro dohledávání webového obsahu pro vyhledávání v ChatGPT. Provozovatel webu může prostřednictvím robots.txt rozhodovat, zda mu přístup umožní.",
          "Tohle už není předpověď budoucnosti. Tohle je současný web."
        ]
      },
      {
        heading: "SEO nekončí. Jen už není samo.",
        paragraphs: [
          "Ještě poměrně nedávno zněla základní poučka jednoduše: máte web, musí vás najít Google. To pořád platí. Jen k tomu přibyla další otázka:",
          "Rozumějí vašemu webu také systémy, které informace z webu samy vyhledávají, kombinují a předávají uživateli?",
          "Dříve člověk zadal do Googlu například „oprava pračky Hradec Králové“ a otevřel několik výsledků. Dnes se může zeptat: „Najdi mi v Hradci někoho, kdo opravuje pračky, jezdí k zákazníkům domů a pracuje i v pátek odpoledne.“ A očekává odpověď.",
          "Nemusí přitom začít návštěvou vašeho webu. Možná jej navštíví až ve chvíli, kdy se rozhoduje, zda vám zavolá. A možná vůbec.",
          "To má zásadní důsledek. Web už není pouze místo, kam potřebujeme přivést člověka. Stává se také zdrojem pravdivých a dobře strukturovaných informací o firmě.",
          "A pokud z něj stroj nedokáže jednoznačně pochopit, kdo jste, co nabízíte, kde působíte a jak vás kontaktovat, dobrovolně mu jeho práci komplikujete."
        ]
      },
      {
        heading: "Znamená to, že webové stránky umírají?",
        paragraphs: [
          "Ano. A ne.",
          "Umírá určitý způsob jejich používání. Internet založený na modelu:",
          "«vyhledávač → deset modrých odkazů → článek → odpověď»",
          "už není jedinou cestou k informaci.",
          "U některých obsahových webů může být tenhle posun velmi bolestivý. Pokud jediným produktem stránky byla odpověď na jednoduchou otázku, AI může tuto odpověď uživateli předat bez nutnosti stránku vůbec navštívit.",
          "To je skutečné riziko.",
          "Ale firemní prezentace má jiný účel. Web instalatéra neexistuje proto, aby každý měsíc vytvořil sto tisíc pageviews. Má přesvědčit zákazníka, že instalatér existuje, pracuje v jeho oblasti, nabízí službu, kterou zákazník potřebuje, působí důvěryhodně a je možné se s ním spojit.",
          "Totéž platí pro účetní, restauraci, malý obchod, autoservis, advokátku, řemeslníka nebo lokální firmu.",
          "AI může změnit cestu zákazníka k vám. Nemění ale potřebu mít místo, které autoritativně říká, kdo jste.",
          "Spíš naopak."
        ]
      },
      {
        heading: "Sociální síť není vaše internetová identita",
        paragraphs: [
          "Další častý argument zní: „Web nepotřebuji. Mám Facebook.“ Nebo Instagram, TikTok, LinkedIn či Google Business Profile.",
          "To všechno jsou užitečné nástroje. Ale ani jeden z nich vám nepatří.",
          "Algoritmus se může změnit, dosah může zmizet, účet může být zablokovaný a platforma může zaniknout nebo jednoduše přestat být místem, kde se pohybují vaši zákazníci. Vzpomínka na MySpace by v tomto bodě mohla vyprávět dlouhý příběh.",
          "Doména je naproti tomu váš vlastní kus internetového prostoru. Sociální sítě mají přivádět lidi k vaší identitě. Neměly by ji vlastnit."
        ]
      },
      {
        heading: "Moderní web nemusí být obrovský",
        paragraphs: [
          "Tohle je další dědictví minulosti, kterého bychom se mohli konečně zbavit.",
          "Dobrý web není web, který má nejvíce podstránek. Instalatér nepotřebuje digitální Versailles. Potřebuje dobře postavenou prezentaci: kdo jsem, co dělám, kde to dělám, proč mi můžete věřit, kolik to přibližně stojí a jak se se mnou spojíte.",
          "Pokud to dává smysl, mohou přibýt reference, fotografie realizací, nejčastější otázky nebo další informace. To může být několik stránek. Někdy dokonce jediná.",
          "Rozdíl mezi dobrým a špatným webem není počet URL. Je to množství přemýšlení, které proběhlo před jejich vytvořením."
        ]
      },
      {
        heading: "Hezký web je dnes jen začátek",
        paragraphs: [
          "Když dnes tvořím web, nezajímá mě pouze to, jestli dobře vypadá. To je samozřejmost.",
          "Zajímá mě, co se stane, když na něj přijde člověk, když přijde z telefonu, co z něj přečte vyhledávač, jak jeho obsah pochopí stroj, co uvidí někdo, kdo firmu vůbec nezná, jestli člověk během několika sekund zjistí, co mu nabízíte, a jestli stránka nezestárne ve chvíli, kdy ji předám.",
          "A hlavně: jestli web skutečně řeší problém, kvůli kterému vznikl.",
          "Protože technologie se mění. To jsem za dobu veřejného internetu viděla už několikrát. Prohlížeče se změnily, displeje se změnily, vyhledávače se změnily, zařízení se změnila a změnil se i design. Právě teď se mění způsob, jakým informace vůbec hledáme.",
          "Jedna věc ale zůstává. Na druhém konci je pořád člověk, který něco potřebuje. A dobrý web mu má pomoci pochopit, že správnou odpověď možná nabízíte právě vy.",
          "To je web pro 21. století.",
          "Ne digitální leták. Ne povinná kolonka podnikání. Ale rychlý, srozumitelný a strojově čitelný bod vaší identity v prostředí, kde se člověk, Google i umělá inteligence musí shodnout na jediné věci:",
          "kdo jste, co děláte a proč by vás měl někdo oslovit."
        ]
      }
    ]
  },
  {
      "category": "Politika a společnost",
      "title": "Na internetu nikdy neříkej pravé jméno. Říkali nám lidé, kteří ho tam dnes chtějí povinně",
      slug: "na-internetu-nikdy-nerikej-prave-jmeno",
      "date": "28. 4. 2026",
      "excerpt": "Devadesátky mě učily, že pravé jméno na internetu je bezpečnostní chyba. Rok 2026 z něj dělá skoro morální kvalifikaci. Někde mezi modemem a sociálními sítěmi jsme si spletli identitu s občankou.",
      "intro": [
          "Když jsem v devadesátých letech začínal objevovat internet, jedna z prvních věcí, kterou člověk slyšel od rodičů, učitelů a prakticky každého dospělého, byla: Nikdy nikomu na internetu neříkej svoje skutečné jméno. Nesděluj adresu ani telefon, neříkej, kde bydlíš, a pokud možno ani to, kdo přesně jsi.",
          "Internet byl prezentován skoro jako digitální ekvivalent temné uličky, do které se po setmění nemá chodit bez dozoru. Což je při zpětném pohledu docela úsměvné. Internet devadesátých let byl totiž ve srovnání s tím dnešním skoro zelená louka s králíčky. Nebyl plný sociálních sítí mapujících naše vztahy, nebyly v něm miliardy fotografií obličejů a telefony neposílaly každých pár minut někam naši polohu. Neexistovala dnešní reklamní infrastruktura, datoví brokeři, masový phishing, deepfakes ani možnost během několika minut poskládat o člověku půl života z deseti různých databází. A neexistovaly ani maminy, které z rodinného alba vyráběly veřejný internetový archiv dětství svých potomků dávno předtím, než byli vůbec schopní vyslovit slovo souhlas.",
          "Přesto tehdy bylo používání přezdívky považováno za naprosto normální bezpečnostní opatření. A dnes? Dnes se pravidelně objevuje přesně opačná myšlenka: Kdyby každý vystupoval na internetu pod svým občanským jménem, internet by byl lepší. To je fascinující obrat. A absolutní bullshit."
      ],
      "sections": [
          {
              "heading": "Tehdy jsme o internetu nic nevěděli. Dnes si jen myslíme, že víme.",
              "paragraphs": [
                  "Je fér přiznat, že naši rodiče často vůbec netušili, co internet je. Byla to nová technologie a lidé mají před novými technologiemi přirozený respekt. Proto vznikala jednoduchá pravidla: neříkej, jak se jmenuješ, nevěř cizím lidem, nedomlouvej si schůzky a nic osobního neposílej. Část těch doporučení byla přehnaná, část velmi rozumná.",
                  "Zajímavé ale je, že dnešní běžná společnost není ve skutečnosti o tolik technologicky gramotnější. Umíme internet používat, ale to není totéž jako mu rozumět. Umíme otevřít Facebook, objednat si jídlo, natočit TikTok a napsat komentář pod článek. Většina lidí však nerozumí tomu, jak snadno lze spojovat data z různých zdrojů, jak fungují databáze, indexace a profilování nebo jak velký rozdíl může udělat jediný dobře dohledatelný identifikátor.",
                  "A právě tahle společnost dnes říká: „Když nemáš co skrývat, proč nepoužíváš svoje pravé jméno?“ Stejně sebevědomě, jako nám před třiceti lety jiná technologicky nepoučená společnost říkala: „Hlavně tam svoje pravé jméno nikdy nepiš.“"
              ]
          },
          {
              "heading": "Přezdívka není anonymita",
              "paragraphs": [
                  "Tady se podle mě ztrácí jedna zásadní věc. Pseudonym není totéž jako anonymita. Člověk vystupující dlouhodobě pod stejnou internetovou přezdívkou může být na internetu mnohem lépe identifikovatelný než nějaký Jan Novák.",
                  "Pokud někdo dvacet let používá stejné jméno, má pod ním web, fórum, GitHub, sociální sítě, články, fotografie a komentáře a komunikuje pod ním s ostatními lidmi, vzniká velmi konkrétní identita. Možná není napsaná v občanském průkazu, ale existuje. A je konzistentní.",
                  "Naopak „Petr Svoboda“ mi sám o sobě neříká skoro nic. V Česku mohou být stovky lidí stejného jména. To, že stát před lety zapsal určitý řetězec znaků do vašeho rodného listu, z něj automaticky nedělá nejlepší možný identifikátor pro všechny situace lidského života. Internet to pochopil velmi brzy."
              ]
          },
          {
              "heading": "My jsme se nechtěli skrývat",
              "paragraphs": [
                  "Tohle je důležitý rozdíl mezi náhodnou přezdívkou a skutečnou internetovou identitou. My, děti prvního internetu, jsme často nechtěli být anonymní. Právě naopak. Chtěli jsme být rozpoznatelní.",
                  "Proto nejlepší přezdívky nebyly něco jako „Jarda3857“ nebo „Mishulenka94“. Člověk si vytvořil jméno. Něco zapamatovatelného. Něco, podle čeho ho ostatní poznali na fóru, IRC, chatu, v online hře a později třeba na vlastním webu. A pokud byla přezdívka dobrá, člověk si ji hlídal, protože získávala reputaci.",
                  "Lidé věděli, kdo jste. Pamatovali si vás. Poznávali vaše názory, humor, práci nebo způsob komunikace. To není anonymita. To je identita oddělená od občanské identity. Internet byl možná jedním z prvních prostředí, kde jsme ve velkém zjistili, že tyhle dvě věci nemusí být totožné."
              ]
          },
          {
              "heading": "Občanské jméno není morální vlastnost",
              "paragraphs": [
                  "Na myšlence povinných skutečných jmen mi vadí ještě jedna věc. Vytváří zvláštní dojem, že podpis občanským jménem automaticky způsobuje slušnost. Historie sociálních sítí nabízí poměrně dost materiálu dokazujícího opak.",
                  "Lidé dokážou být vulgární, agresivní a nenávistní i pod fotografií vlastního obličeje, jménem, zaměstnavatelem a odkazem na profil své babičky. Občanské jméno není charakterová vlastnost. A přezdívka není důkaz špatného úmyslu.",
                  "Samozřejmě existují lidé, kteří využívají anonymitu k obtěžování ostatních, podvodům nebo šíření nenávisti. Jenže řešením problému anonymity není automaticky zrušení soukromí všech ostatních. To jsou dvě různé otázky."
              ]
          },
          {
              "heading": "Někdy je pseudonym bezpečnostní vrstva",
              "paragraphs": [
                  "Internet totiž není izolovaný svět. To, co o sobě zveřejníme online, má důsledky offline. Znáte-li něčí celé jméno, zaměstnavatele, přibližné bydliště a fotografie, může být překvapivě jednoduché dohledat další informace.",
                  "Proto mohou mít velmi dobrý důvod používat pseudonym například lidé veřejně diskutující citlivá témata, oběti stalkingu, aktivisté, sexuální pracovnice, LGBT lidé v nepřátelském prostředí nebo jednoduše kdokoliv, kdo nechce, aby každý jeho internetový názor byl během deseti sekund propojitelný s adresou zaměstnavatele.",
                  "Nemusíme přitom hledat dramatické příklady. Možná prostě jen nechci, aby člověk, se kterým diskutuji o počítačích, automaticky věděl, kde pracuji. To není podezřelé. To je soukromí."
              ]
          },
          {
              "heading": "Paradox internetu 21. století",
              "paragraphs": [
                  "A tak jsme se dostali do zvláštního bodu. V době, kdy internet věděl o člověku téměř nic, jsme děti učili, aby mu nesdělovaly svoje jméno. Dnes, kdy lze z několika drobků informací sestavit neuvěřitelně podrobný profil člověka, začínáme skutečné jméno považovat téměř za společenskou povinnost.",
                  "Možná jsme si z devadesátých let měli některé věci ponechat. Ne hysterický strach z každého člověka na druhé straně modemu, ale jednoduché vědomí, že soukromí není totéž jako anonymita a anonymita není totéž jako beztrestnost.",
                  "Internetová identita může být stabilní, důvěryhodná a dlouhodobě budovaná, aniž by byla totožná s kolonkou „jméno a příjmení“ v občanském průkazu. Ostatně právě na internetu jsme to věděli dávno předtím, než jsme na to začali zapomínat.",
                  "Někdy o člověku řekne jeho přezdívka víc než jeho skutečné jméno. Protože skutečné jméno dostal. To druhé si vybudoval."
              ]
          }
      ]
  },
  {
      "category": "Web a technologie",
      "title": "Architekti českého internetu. Kdo postavil web, na kterém jsme vyrostli",
      slug: "architekti-ceskeho-internetu",
      "date": "6. 2. 2024",
      "excerpt": "Kdo připojil Česko k internetu, postavil Seznam nebo vytvořil Nette? Známe lépe lidi, kteří internet používají, než ty, kteří nám ho postavili. A to už je docela slušný digitální trapas.",
      "intro": [
          "Kdybych se dnes náhodných lidí na ulici zeptal na jména několika českých influencerů, youtuberů nebo televizních bavičů, pravděpodobně bych uspěl docela rychle. Kdybych se ale zeptal, kdo připojil Československo k internetu, kdo vytvořil Seznam, kdo stojí za ČSFD nebo kdo vytvořil jeden z nejdůležitějších českých PHP frameworků, najednou by bylo podstatně větší ticho.",
          "A přitom jsou to právě tihle lidé, jejichž práce ovlivnila způsob, jakým český internet posledních třicet let používáme. Možná je v tom jeden z nejpodivnějších paradoxů digitální doby.",
          "Mnohem lépe známe lidi, kteří internet používají k tomu, aby byli vidět, než lidi, kteří nám ten internet postavili.",
          "Ne proto, že by byli méně důležití. Jen jejich práce obvykle nemá obličej, vlastní merch ani slevový kód. A když se jim něco podaří, výsledkem často není virální video, ale prostě to, že všechno funguje. Což je z hlediska internetu skoro nevděčná forma geniality."
      ],
      "sections": [
          {
              "heading": "Nejdřív bylo potřeba vůbec natáhnout kabel",
              "paragraphs": [
                  "Český internet nezačal Facebookem, Seznamem ani modemem v dětském pokoji. Nejdříve bylo potřeba Československo vůbec připojit.",
                  "Než se objevily weby, e-shopy, sociální sítě a influenceři, někdo musel postavit trubky, natáhnout kabely, propojit počítače a přesvědčit svět, že má smysl vytvořit síť, do které se vyplatí připojit. První architekti českého internetu nebyli lidé, které byste potkávali na titulních stranách časopisů. Byli to síťaři, technici, programátoři a akademici, kteří budovali infrastrukturu, na níž později vyrostlo všechno ostatní.",
                  "Jednou z nejdůležitějších osobností této části příběhu je Jan Gruntorád. Právě tým vedený Gruntorádem stál u experimentálního internetového spojení ČVUT s rakouským Lincem a 13. února 1992 také u oficiálního zahájení internetového připojení Československa. Později byl Gruntorád jedním z hlavních lidí kolem vzniku akademické sítě CESNET.",
                  "Tohle není vytvoření nějaké úspěšné webové stránky. Tohle je mnohem základnější úroveň. Nejdřív totiž někdo musí postavit silnici. Teprve potom po ní mohou začít jezdit auta.",
                  "A teprve potom se může objevit někdo, kdo na ní začne prodávat trička s nápisem „nejlepší řidič“. Internetová infrastruktura je zkrátka méně fotogenická než osobní značka, ale bez ní by osobní značka mohla maximálně viset na nástěnce v hospodě."
              ]
          },
          {
              "heading": "Lidé, kteří český internet nejen používali, ale také vysvětlovali",
              "paragraphs": [
                  "Internet nestačilo připojit.",
                  "Bylo také potřeba lidem vysvětlit, co to vlastně je.",
                  "A tady přicházejí osobnosti, které se možná nevejdou do jednoduché kolonky „zakladatel úspěšné firmy“, ale bez nich by česká internetová kultura vypadala úplně jinak.",
                  "Jedním z nich je Jiří Peterka.",
                  "Peterka se pohyboval kolem sítí už v době, kdy se v Československu používala akademická síť EARN, zažil samotný příchod internetu na začátku devadesátých let a dlouhodobě patří mezi nejvýraznější české autory vysvětlující počítačové sítě, internet, telekomunikace, elektronické podpisy nebo později eGovernment.",
                  "Jeho eArchiv, veřejně dostupný od roku 1996, je dnes skoro archeologickým nalezištěm českého internetu. Uchovává články, přednášky a vysvětlení technologií z doby, kdy většině společnosti nebylo potřeba vysvětlovat, jestli má kliknout na Wi-Fi nebo mobilní data. Bylo potřeba vysvětlit, co je to Internet.",
                  "A právě Peterka je důležitý ještě z jednoho důvodu.",
                  "Patří mezi lidi, kteří si včas uvědomili, že digitální historie mizí strašně rychle. Weby se přepisují, firmy zanikají, URL přestávají fungovat a věci, které jednu dobu považujeme za naprostou samozřejmost, mohou být o deset let později téměř nedohledatelné.",
                  "Dnes archivujeme fotografie oběda na Instagramu.",
                  "Peterka archivoval vznik českého internetu."
              ]
          },
          {
              "heading": "Patrick Zandl a internet, který začal mít vlastní média",
              "paragraphs": [
                  "Podobně důležitým jménem je Patrick Zandl.",
                  "V polovině devadesátých let stál u vzniku Mobil.cz, jednoho z prvních českých systematicky aktualizovaných internetových technologických médií. Projekt vznikal v době, kdy získat vlastní doménu nebylo několik kliknutí a kdy provozovat úspěšný internetový magazín nebyla normální podnikatelská disciplína, ale dost divoký experiment.",
                  "Mobil.cz později vyrostl do skupiny technologických serverů a stal se součástí MAFRY.",
                  "Zandl se tím ale do českého internetu nezapsal jen jako podnikatel.",
                  "Dlouhodobě o technologiích psal, blogoval, vedl Lupu a dokonce začal sepisovat Historii českého Internetu. Patří tedy do zvláštní skupiny lidí, kteří nejen pomáhali digitální prostředí vytvářet, ale zároveň si uvědomovali, že by bylo dobré zaznamenat, jak vlastně vznikalo.",
                  "To dnes zní samozřejmě.",
                  "Ale v devadesátých letech nikdo moc nevěděl, že jednou budou historici hledat screenshot toho, jak vypadal nějaký server v roce 1997.",
                  "Všichni měli totiž příliš mnoho práce s tím, aby ho vůbec udrželi online."
              ]
          },
          {
              "heading": "Český internet dostal domovskou stránku",
              "paragraphs": [
                  "Pak přichází generace lidí, kteří začali budovat to, co už běžný člověk skutečně vnímal jako „internet“. Asi nejvýraznější českou postavou je Ivo Lukačovič.",
                  "V roce 1996 založil Seznam.cz jako jednoduchý katalog internetových stránek. Postupně z něj vznikl vyhledávač, e-mail, mapy, zpravodajství a celý ekosystém služeb. Seznam v roce 2026 oslavil třicet let a Lukačovič zůstává jeho vlastníkem.",
                  "Pro jednu generaci Čechů byl Seznam prakticky vstupní branou na internet. Ale Lukačovičův příběh Seznamem nekončí. Později vytvořil také Windy.com, globální meteorologickou službu zobrazující počasí, vítr a meteorologické modely nad interaktivní mapou. Windy sám Lukačovič uvádí mezi projekty, které založil, a dodnes se na jeho vývoji osobně podílí.",
                  "To je na jeho příběhu možná zajímavější než samotné podnikatelské jmění. Člověk, který pomáhal definovat český internet devadesátých let, později vytvořil internetovou službu používanou po celém světě.",
                  "A přesto se o něm nemluví každý den v podcastu o osobním růstu. Možná proto, že „postavil vyhledávač a globální meteorologickou službu“ se hůř vejde do motivačního reelsu než „vstávej v pět a věř svému snu“."
              ]
          },
          {
              "heading": "A pak je tu Pavel Zima. Protože ani Seznam nepostavil jeden člověk.",
              "paragraphs": [
                  "Příběhy technologických firem máme rádi jednoduché.",
                  "Zakladatel dostane nápad.",
                  "Napíše pár řádků kódu.",
                  "A jednoho dne má miliardovou firmu.",
                  "Realita je pochopitelně mnohem méně filmová.",
                  "Jedním z lidí, bez kterých by příběh Seznamu nebyl úplný, je Pavel Zima. Do firmy přišel už v roce 1997 a patřil mezi nejbližší spolupracovníky Iva Lukačoviče. Později vedl technické zázemí a vývoj Seznamu jako technický ředitel a v roce 2006 se stal výkonným ředitelem společnosti.",
                  "A přesně proto ho má smysl připomínat.",
                  "Seznam totiž nebyl jen dobrý nápad a značka.",
                  "Byly to servery, infrastruktura, databáze, vývoj, provoz a postupné zvládání stále většího množství uživatelů v době, kdy nešlo jednoduše kliknout na tlačítko „přidej dalších deset cloudových instancí“.",
                  "Za ikonou, na kterou klikaly miliony lidí, byla spousta technické práce, kterou nikdo z těch milionů nikdy neviděl.",
                  "Což je vlastně dokonalá ukázka celého tohoto článku."
              ]
          },
          {
              "heading": "Martin Pomothy a web, který zná skoro každý Čech",
              "paragraphs": [
                  "Pak existují projekty, které jsou tak samozřejmou součástí internetu, že skoro zapomeneme, že je někdo musel vytvořit. Jedním z nich je ČSFD.",
                  "Její zakladatel Martin Pomothy spustil Česko-Slovenskou filmovou databázi v roce 2001. Původně šlo o malý komunitní projekt pro filmové fanoušky. Postupně z něj vznikla rozsáhlá databáze a sociální platforma kolem filmu.",
                  "Tohle je podle mě krásný příklad českého internetu. Nikdo nemusel čekat, až ze Silicon Valley přijde služba přeložená do češtiny. Někdo si prostě řekl: Takovou věc bych chtěl používat. Tak ji vytvořím. A o dvě desetiletí později působí její existence skoro samozřejmě.",
                  "ČSFD se stala tak běžnou součástí rozhodování, co večer sledovat, že její hodnocení někdy funguje jako kulturní kompas, jindy jako kolektivní soudní tribunál. Film má dvě hodiny, ale uživatelé mu dokážou během třiceti sekund vysvětlit, proč je odpad."
              ]
          },
          {
              "heading": "Než jsme začali objednávat všechno, musel někdo postavit první obchody",
              "paragraphs": [
                  "Podobný význam měl pro českou e-commerce Ondřej Fryc. V roce 2000 spoluzaložil projekt Bílézboží.cz, ze kterého později vznikl Mall.cz. Z malého internetového obchodu vyrostl jeden z nejvýraznějších e-commerce projektů českého internetu.",
                  "Jenže české nakupování na internetu začínalo ještě dřív.",
                  "Jedním z lidí, kteří u toho stáli, byl Jiří Hlavenka.",
                  "Hlavenka založil vydavatelství Computer Press, které se výrazně podepsalo na české počítačové literatuře a odborných médiích, a stál také za Vltava.cz, jedním z úplně prvních českých internetových obchodů. Dobové i pozdější zdroje Vltavu označují dokonce za první český e-shop.",
                  "To je důležitá součást příběhu.",
                  "Dnes internetové nakupování považujeme za infrastrukturu skoro stejně samozřejmou jako elektřinu.",
                  "Kliknete.",
                  "Zaplatíte.",
                  "Balík přijde.",
                  "Jenže někdo musel poprvé přijít s představou, že Češi budou ochotni nakupovat zboží na obrazovce počítače, aniž by si ho předem osahali a aniž by prodavač stál dva metry od nich.",
                  "Hlavenka navíc nebyl jen provozovatelem jednoho e-shopu. Psal odborné knihy a články, budoval Computer Press a podílel se tak zároveň na tom, jakým způsobem se o počítačích a internetu v Česku učilo a psalo.",
                  "Fryc pak patří k další etapě, kdy z internetového obchodování přestával být experiment a začínal z něj být masový byznys.",
                  "Dnes objednat pračku, počítač nebo televizi přes internet nepůsobí nijak převratně. Jenže někdo musel být u toho v době, kdy bylo potřeba zákazníkovi nejdřív vysvětlit, proč by vůbec měl zadat objednávku počítačem místo návštěvy obchodu.",
                  "Technologické revoluce mají zvláštní vlastnost. Jakmile vyhrají, přestanou vypadat revolučně.",
                  "Dnes se rozčilujeme, když kurýr přijede o deset minut později, než slíbil, a považujeme to za selhání civilizace. Na začátku přitom bylo potřeba přesvědčit lidi, že poslat peníze neznámému webu výměnou za lednici není začátek finančního podvodu."
              ]
          },
          {
              "heading": "Jeho práci možná používáte, aniž znáte jeho jméno",
              "paragraphs": [
                  "A pak jsou lidé ještě o patro níž. Neprovozují službu, kterou používají miliony běžných zákazníků. Vytvářejí nástroje, pomocí kterých jiní lidé ty služby stavějí.",
                  "David Grudl začal kolem roku 2004 vytvářet PHP framework Nette. Veřejně jej představil v roce 2007 a následně vydal jako open source. Kolem Nette vznikla rozsáhlá česká vývojářská komunita a framework ovlivnil celé generace českých PHP programátorů.",
                  "A tady vzniká skoro komický paradox. Část širší internetové veřejnosti možná zná Davida Grudla především jako výraznou osobnost českého Twitteru, dnes X. Jenže jeho podstatně hlubší stopa v českém internetu je schovaná v kódu. V aplikacích, které někdo postavil na Nette. V knihovnách. V programátorech, kteří se díky jeho článkům a přednáškám něco naučili.",
                  "To se do algoritmického feedu fotografuje podstatně hůř než ostrý tweet.",
                  "Framework navíc není zrovna materiál pro snadný virál. Těžko natočíte emotivní video s titulkem „Tento muž změnil způsob, jakým tisíce lidí píšou backend“. Algoritmus by se nejspíš nejdřív zeptal, jestli to není nějaký druh trestu."
              ]
          },
          {
              "heading": "Lidé, kteří učili ostatní internet stavět",
              "paragraphs": [
                  "Do stejné skupiny bych zařadil také Michala „Altaira“ Valáška. Dlouhé roky píše, přednáší a školí o webovém vývoji, ASP.NET, provozu aplikací a bezpečnosti. Působil jako Microsoft MVP pro ASP.NET a česká vývojářská komunita ho zná také díky dlouholetému blogování a přednáškám.",
                  "Jeho význam není v jedné službě s obřím logem na homepage. Je v něčem obtížněji měřitelném: v předávání znalostí.",
                  "Internet totiž nestavěli pouze lidé, kteří založili firmy. Stavěli ho také lidé, kteří napsali dokumentaci, vytvořili knihovnu, odpověděli na fóru, napsali technický článek nebo vysvětlili několika tisícům dalších programátorů, jak něco dělat správně.",
                  "To je práce, která se špatně prodává jako osobní značka. Nikdo vám obvykle nenabídne spolupráci na základě toho, že jste v roce 2008 někomu zachránili projekt před chybou v konfiguraci. Přitom právě takové drobné zásahy často rozhodují o tom, jestli se internet rozvíjí, nebo se jen slavnostně restartuje server."
              ]
          },
          {
              "heading": "A pod tím vším jsou další vrstvy",
              "paragraphs": [
                  "Mohli bychom pokračovat. Třeba Ondřejem Mirtesem, autorem PHPStanu — open-source nástroje pro statickou analýzu PHP kódu, který hledá chyby ještě před spuštěním programu a používají jej vývojáři daleko za hranicemi Česka.",
                  "Nebo lidmi jako Jiří Kosek, který už na přelomu tisíciletí psal české knihy a výukové materiály o HTML, PHP, XML, XSLT a dalších technologiích v době, kdy se velká část českých webových vývojářů teprve učila, co všechny ty zkratky znamenají.",
                  "A za každým známým jménem by šlo najít desítky dalších. Správce sítě. Vývojáře open-source knihovny. Autora dokumentace. Člověka, který dvacet let udržoval nějaký protokol, server nebo komunitní projekt.",
                  "Internet totiž nikdy nepostavilo pár géniů. Postavila ho obrovská vrstva lidí, jejichž nejlepší práce je často právě ta, které si nikdo nevšimne.",
                  "Je to trochu jako s elektřinou. Všimneme si jí hlavně tehdy, když nejde. U internetu je to podobné: o infrastruktuře začneme přemýšlet ve chvíli, kdy stránka načítá déle než tři sekundy a někdo v kanceláři pronese větu „asi je problém u mě“. V tu chvíli se z neviditelných hrdinů stávají viníci, ideálně s okamžitou nápravou a bez nároku na oběd."
              ]
          },
          {
              "heading": "Proč tedy známe spíš influencery?",
              "paragraphs": [
                  "Protože influencer pracuje s jedinou komoditou, která je v dnešním internetu možná nejdražší: s pozorností.",
                  "Jeho tvář je produkt. Jeho osobnost je produkt. Jeho každodenní život může být produkt. Algoritmus sociální sítě navíc nepotřebuje, abychom rozuměli tomu, jak funguje internetová infrastruktura. Potřebuje, abychom ještě deset sekund scrollovali.",
                  "Technologická práce funguje přesně opačně. Když svou práci udělá dokonale síťař, nevšimnete si ho. Když svou práci udělá dokonale programátor frameworku, aplikace prostě funguje. Když svou práci udělá dobře člověk spravující infrastrukturu, nic se nestane.",
                  "A „nic se nestalo“ je technologicky fantastický výsledek, ale příšerný virální obsah.",
                  "Influencer může každý den připomenout, že existuje. Síťový administrátor může každý den zabránit tomu, aby si někdo všiml, že existuje. Jeden sbírá lajky, druhý sbírá logy. A zatímco první dostane pozvánku na panel o budoucnosti médií, druhý dostane zprávu, že někomu nejde tiskárna."
              ]
          },
          {
              "heading": "Internet má svoje Smetany. Jen o nich moc nemluvíme.",
              "paragraphs": [
                  "Nejde o to, že bychom neměli znát baviče. Každá generace měla svoje populární osobnosti, herce, moderátory a komiky.",
                  "Petr Novotný byl ve své době známější široké veřejnosti než řada vědců, konstruktérů nebo lidí stojících za zásadními technologiemi. Na tom není nic překvapivého.",
                  "Bylo by ale trochu absurdní, kdybychom historii české kultury jednou popsali hlavně prostřednictvím televizních estrád a zapomněli při tom na Smetanu, Němcovou nebo Jiráska. A něco podobného možná děláme s historií internetu právě teď.",
                  "Pamatujeme si lidi, kteří dokázali získat naši pozornost. Mnohem méně si pamatujeme lidi, kteří vytvořili prostředí, ve kterém se o naši pozornost vůbec začalo bojovat.",
                  "Možná proto stojí za to si jejich jména občas připomenout. Protože internet nevznikl na timeline.",
                  "Nejdřív ho někdo musel připojit, postavit jeho trubky a kabely, naprogramovat, popsat, naučit ostatní, jak ho používat, a roky udržovat v chodu. Teprve potom na něm mohli začít vznikat influenceři.",
                  "A možná je to tak správně. Ne každý, kdo mění svět, musí být vidět v každém druhém videu. Někteří lidé totiž nemají potřebu vysvětlovat, že něco dokázali.",
                  "Stačí, že to funguje."
              ]
          }
      ]
  },
  {
    type: "external",
    category: "Internetový folklór",
    title: "Život s programátorem. Deset pravidel, která přežila dvacet let českého internetu",
    slug: "zivot-s-programatorem-deset-pravidel",
    originalTitle: "Život s programátorem – deset pravidel, jak to přežít",
    date: "28. 7. 2022",
    readingTime: "2 min čtení",
    author: "Mysh",
    sourceName: "Lživě.cz",
    sourceUrl: "https://www.lzive.cz/clanky/2002/05/194-zivot-s-programatorem.html",
    hideSourceCard: true,
    excerpt: "Některé texty na internetu zestárnou. Jiné se z něj stanou. A pak existují takové, které se po letech vracejí jako malá časová kapsle.",
    intro: [
      "Některé texty na internetu zestárnou. Jiné se z něj stanou. A pak existují takové, které se po letech vracejí jako malá časová kapsle: pořád jsou vtipné, jen mezitím začaly vyprávět i o době, ve které vznikly.",
      "Mysh kdysi sepsala deset pravidel, jak přežít život s programátorem. Tím programátorem byl Altair. A protože oba znám, čte se mi ten text dnes trochu jinak než jako anonymní internetový vtípek, který člověk někde našel po dvaceti letech.",
      "Zároveň je to ale přesně ten druh textu, který svého času žil vlastním internetovým životem. Z doby, kdy se podobné věci neposílaly přes sociální sítě, ale mailem, ICQ, diskusními fóry a kopírováním z jednoho webu na druhý.",
      "A překvapivě velká část těch programátorských stereotypů pořád funguje.",
      "Programátor nechodí pozdě proto, že by neuměl hodiny. Jen ještě potřeboval něco dodělat. Romantický dárek může být elektronika. Výlet do přírody má zásadní nedostatek v podobě chybějícího připojení k internetu. A pokud chcete mít jistotu, že si na cestu na konferenci vezme také spodní prádlo, nejlepší je dát mu ho do tašky s notebookem.",
      "Samozřejmě je to nadsázka. O to zajímavější ale je, že dnes celý text funguje také jako malá časová kapsle českého internetu začátku století.",
      "Objevuje se v něm Outlook, kapesní počítače, Microsoft .NET, SQL Server, MP3 nebo linuxová komunita v podobě „davu běsnících tučňáků“. Dnes to zní skoro jako pečlivě připravené retro. Tehdy to prostě byla současnost.",
      "A právě takhle podle mě vypadá internetový folklór.",
      "Nejsou to jen první memy, legendární weby nebo hlášky z diskusních fór. Patří sem i texty, které si lidé posílali dál, přetiskovali je na svých stránkách a které přežily weby, na nichž se kdysi objevily.",
      "Tenhle přežil.",
      "Dnes ho <a href=\"https://www.lzive.cz/clanky/2002/05/194-zivot-s-programatorem.html\" target=\"_blank\" rel=\"noopener noreferrer\">najdete třeba v archivu Lživě.cz</a>. A jestli jste někdy žili s programátorem — nebo jím sami jste — doporučuju si těch deset pravidel přečíst v originále."
    ],
    sections: []
  },
  {
    type: "external",
    category: "Politika a společnost",
    title: "Trvalé bydliště není to, co si většina lidí myslí, včetně úředníků",
    slug: "trvale-bydliste-neni-to-co-si-vetsina-lidi-mysli",
    originalTitle: "Úředně bezdomovcem po devíti letech: aktualizace článku",
    date: "25. 11. 2020",
    readingTime: "3 min čtení",
    author: "Michal Altair Valášek",
    sourceName: "Altair.blog",
    sourceUrl: "https://www.altair.blog/2020/11/uredne-bezdomovcem",
    hideSourceCard: true,
    excerpt: "Jsou věci, které člověk považuje za samozřejmé hlavně proto, že mu je celý život nikdo nezpochybnil. A často to platí i pro úředníky, kteří jsou zvyklí pracovat s tím, že každý člověk nějakou adresu prostě mít musí.",
    intro: [
      "Altair je přesně ten typ člověka, který podobnou větu uslyší a místo pokývnutí hlavou si otevře zákon. A před lety došel k poměrně zábavnému výsledku: nemusíte.",
      "Jeho článek <a href=\"https://www.altair.blog/2020/11/uredne-bezdomovcem\" target=\"_blank\" rel=\"noopener noreferrer\">Úředně bezdomovcem patří podle něj samotného k nejčtenějším textům na jeho blogu</a>. V roce 2020 proto vydal jeho aktualizovanou verzi a podrobně v ní rozebral, co vlastně české právo považuje za místo trvalého pobytu, co znamená mít adresu „na úřadě“ a co se stane, když trvalý pobyt na území České republiky úplně ukončíte.",
      "A to jsou mimochodem dvě různé věci.",
      "Pokud máte trvalý pobyt na adrese ohlašovny, pořád trvalý pobyt máte. Jen je místo vašeho bytu nebo domu vedený úřad. Vedle toho ale existuje i možnost nemít místo trvalého pobytu v České republice vůbec. Zákon jeho ukončení umožňuje a Altair popisuje i svou vlastní zkušenost s tím, jak na takovou možnost reagují systémy a úředníci. Ti jsou přitom často upřímně překvapení, protože jsou zvyklí na to, že nějakou adresu prostě mít musíte — a najednou před nimi stojí člověk, který tvrdí, že ji mít nechce a podle zákona ani nemusí.",
      "Právě tahle část mě na tom baví nejvíc.",
      "Ne ani tak samotná možnost být úředně bez adresy, jako střet mezi tím, co skutečně říká zákon, a tím, jak jsou navržené formuláře, databáze a procesy kolem nás.",
      "Člověk najednou zjistí, kolik systémů není postavených podle pravidel, ale podle předpokladu, že „tohle přece dělají všichni“.",
      "Bez trvalého pobytu přitom nepřestáváte být občanem České republiky. Situace ale přináší praktické komplikace — Altair zmiňuje například řidičský průkaz, některé volby, zdravotní pojištění nebo živnostenské oprávnění. Současně vysvětluje i řadu mýtů kolem trvalého pobytu, třeba že vám přihlášení na určité adrese dává nějaké právo k bytu. Nedává.",
      "Je to jeden z těch textů, po kterých se na něco úplně obyčejného začnete dívat trochu jinak.",
      "A taky pěkná ukázka toho, proč mám rád lidi, kteří na větu „to nejde“ reagují otázkou: „A kde přesně je napsáno, že to nejde?“"
    ],
    sections: []
  }
];


function getBlogReadingMinutes(article){
  const parts = [
    article.title,
    article.excerpt,
    ...(article.intro || []),
    ...((article.sections || []).flatMap(section => [
      section.heading,
      ...(section.paragraphs || [])
    ]))
  ];
  const words = parts
    .join(" ")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

let blogListObserver = null;

function parseBlogDate(dateString){
  const match = String(dateString).match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }

  const monthYear = String(dateString).match(/^(leden|únor|březen|duben|květen|červen|červenec|srpen|září|říjen|listopad|prosinec)\s+(\d{4})$/i);
  if (monthYear) {
    const months = {
      leden:0, únor:1, březen:2, duben:3, květen:4, červen:5,
      červenec:6, srpen:7, září:8, říjen:9, listopad:10, prosinec:11
    };
    return new Date(Number(monthYear[2]), months[monthYear[1].toLowerCase()], 1).getTime();
  }

  return 0;
}

function getSortedBlogArticles(){
  return BLOG_ARTICLES
    .map((article, originalIndex) => ({article, originalIndex}))
    .sort((a, b) => {
      const pinnedDiff = Number(Boolean(b.article.pinned)) - Number(Boolean(a.article.pinned));
      if (pinnedDiff) return pinnedDiff;
      return parseBlogDate(b.article.date) - parseBlogDate(a.article.date);
    });
}

function renderBlogCard(article, index){
  return `
    <article class="blog-card${article.pinned ? " is-pinned" : ""}" data-blog-index="${index}" tabindex="0" role="button" aria-label="${article.title}">
      ${article.pinned ? `
        <span class="blog-pin" aria-label="Připnutý článek" title="Připnutý článek">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 3h6l-1 5 3 3v2h-4v6l-1 2-1-2v-6H7v-2l3-3-1-5Z"/>
          </svg>
        </span>
      ` : ""}
      <span class="blog-card-topline">
        <button class="blog-category" type="button" data-blog-category="${article.category}" aria-label="Zobrazit články v kategorii ${article.category}">${article.category}</button>
        <span class="blog-meta-stack">
          <span class="blog-card-date">${article.date}</span>
          <span class="blog-reading-time">${article.type === "external" ? (article.readingTime || "1 min čtení") : `${getBlogReadingMinutes(article)} min čtení`}</span>
        </span>
      </span>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <span class="blog-card-more">Číst článek →</span>
    </article>
  `;
}

function renderBlogList(categoryFilter = null){
  const view = document.getElementById("blogView");
  if (!view) return;

  if (blogListObserver) {
    blogListObserver.disconnect();
    blogListObserver = null;
  }

  const batchSize = 5;
  const sortedArticles = getSortedBlogArticles()
    .filter(({article}) => !categoryFilter || article.category === categoryFilter);

  const filteredReadingMinutes = sortedArticles.reduce((sum, {article}) => {
    if (article.type === "external") {
      const match = String(article.readingTime || "").match(/\d+/);
      return sum + (match ? Number(match[0]) : 1);
    }
    return sum + getBlogReadingMinutes(article);
  }, 0);

  let visibleCount = Math.min(batchSize, sortedArticles.length);

  const allCategoriesCount = new Set(BLOG_ARTICLES.map(article => article.category)).size;
  const allReadingMinutes = BLOG_ARTICLES.reduce((sum, article) => {
    if (article.type === "external") {
      const match = String(article.readingTime || "").match(/\d+/);
      return sum + (match ? Number(match[0]) : 1);
    }
    return sum + getBlogReadingMinutes(article);
  }, 0);

  view.innerHTML = `
    ${categoryFilter ? `
      <div class="blog-filter-title">
        <span>${categoryFilter}</span>
        <button type="button" class="blog-filter-clear" data-blog-filter-back aria-label="Zrušit filtr ${categoryFilter}" title="Zrušit filtr">×</button>
        <span class="blog-filter-stats">${sortedArticles.length} ${sortedArticles.length === 1 ? "článek" : (sortedArticles.length >= 2 && sortedArticles.length <= 4 ? "články" : "článků")} · ${filteredReadingMinutes} min čtení</span>
      </div>
    ` : `
      <div class="blog-filter-title blog-filter-title--all">
        <span class="blog-filter-stats">${BLOG_ARTICLES.length} ${BLOG_ARTICLES.length === 1 ? "článek" : (BLOG_ARTICLES.length >= 2 && BLOG_ARTICLES.length <= 4 ? "články" : "článků")} · ${allCategoriesCount} ${allCategoriesCount === 1 ? "štítek" : (allCategoriesCount >= 2 && allCategoriesCount <= 4 ? "štítky" : "štítků")} · ${allReadingMinutes} min čtení</span>
      </div>
    `}
    <div class="blog-list" id="blogList"></div>
    <div class="blog-list-sentinel" id="blogListSentinel" aria-hidden="true"></div>
    <div class="blog-list-end" id="blogListEnd" hidden>NIC VÍC TU NENÍ</div>
  `;

  const list = view.querySelector("#blogList");
  const sentinel = view.querySelector("#blogListSentinel");
  const end = view.querySelector("#blogListEnd");

  view.querySelector("[data-blog-filter-back]")?.addEventListener("click", () => {
    renderBlogList();
  });

  function bindBlogCards(){
    list.querySelectorAll("[data-blog-index]:not([data-bound])").forEach(card => {
      card.dataset.bound = "1";

      const openArticle = () => renderBlogArticle(Number(card.dataset.blogIndex));
      card.addEventListener("click", openArticle);
      card.addEventListener("keydown", event => {
        if (event.target.closest("[data-blog-category]")) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openArticle();
        }
      });

      card.querySelector("[data-blog-category]")?.addEventListener("click", event => {
        event.stopPropagation();
        renderBlogList(event.currentTarget.dataset.blogCategory);
      });
    });
  }

  function paint(){
    list.innerHTML = sortedArticles
      .slice(0, visibleCount)
      .map(({article, originalIndex}) => renderBlogCard(article, originalIndex))
      .join("");

    bindBlogCards();

    const finished = visibleCount >= sortedArticles.length;
    sentinel.hidden = finished;
    end.hidden = !finished;
  }

  paint();

  if (visibleCount < sortedArticles.length) {
    const scroller = infoSheet.querySelector(".info-sheet-card");

    blogListObserver = new IntersectionObserver((entries) => {
      if (!entries.some(entry => entry.isIntersecting)) return;

      visibleCount = Math.min(visibleCount + batchSize, sortedArticles.length);
      paint();

      if (visibleCount >= sortedArticles.length && blogListObserver) {
        blogListObserver.disconnect();
        blogListObserver = null;
      }
    }, {
      root: scroller || null,
      rootMargin: "0px 0px 240px 0px",
      threshold: 0.01
    });

    blogListObserver.observe(sentinel);
  }
}


const BLOG_THEME_STORAGE_KEY = "devbybouBlogTheme";

function getSavedBlogTheme(){
  return localStorage.getItem(BLOG_THEME_STORAGE_KEY) === "light" ? "light" : "dark";
}

function applyBlogTheme(theme){
  const card = infoSheet.querySelector(".info-sheet-card");
  const toggle = infoSheetContent.querySelector(".blog-theme-toggle");
  if (!card) return;

  const isLight = theme === "light";
  card.classList.toggle("blog-reader-light", isLight);
  card.classList.toggle("blog-reader-dark", !isLight);

  if (toggle) {
    toggle.classList.toggle("is-light", isLight);
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute(
      "aria-label",
      isLight ? "Přepnout článek do tmavého režimu" : "Přepnout článek do světlého režimu"
    );
  }
}

function clearBlogReaderTheme(){
  const card = infoSheet.querySelector(".info-sheet-card");
  card?.classList.remove("blog-reader-light", "blog-reader-dark");
}



function getNextBlogArticleIndex(currentIndex){
  if (BLOG_ARTICLES.length < 2) return null;

  const candidates = BLOG_ARTICLES
    .map((_, index) => index)
    .filter(index => index !== currentIndex);

  const seedSource = BLOG_ARTICLES[currentIndex]?.title || String(currentIndex);
  let seed = 0;
  for (let i = 0; i < seedSource.length; i++) {
    seed = ((seed * 31) + seedSource.charCodeAt(i)) >>> 0;
  }

  return candidates[seed % candidates.length];
}

function renderBlogArticleFooter(currentIndex){
  const nextIndex = getNextBlogArticleIndex(currentIndex);
  const nextArticle = nextIndex === null ? null : BLOG_ARTICLES[nextIndex];

  return `
    <footer class="blog-article-footer">
      <div class="blog-end-divider" aria-hidden="true"></div>
      <p class="blog-end-author">Článek napsal Lukáš Bou Hlaváček</p>
      <p class="blog-view-count" data-article-view-count hidden></p>
      <div class="blog-end-actions">
        <button class="blog-end-action" type="button" data-blog-all>Všechny články</button>
        <span class="blog-end-separator" aria-hidden="true">|</span>
        <button class="blog-end-action" type="button" data-blog-share>Sdílet článek</button>
      </div>


    </footer>
  `;
}

async function shareBlogArticle(article){
  const shareData = {
    title: article.title,
    text: article.excerpt,
    url: article.slug ? `${location.origin}/clanek/${article.slug}/` : location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(article.slug ? `${location.origin}/clanek/${article.slug}/` : location.href);
    const button = infoSheetContent.querySelector("[data-blog-share]");
    if (button) {
      const original = button.textContent;
      button.textContent = "Odkaz zkopírován";
      setTimeout(() => { button.textContent = original; }, 1600);
    }
  } catch (error) {
    window.prompt("Zkopírujte odkaz na článek:", article.slug ? `${location.origin}/clanek/${article.slug}/` : location.href);
  }
}


function renderExternalArticleBody(article){
  return `
    <div class="blog-article blog-external-article">
      ${article.intro.map(paragraph => `<p class="blog-intro-paragraph">${paragraph}</p>`).join("")}
      ${article.hideSourceCard ? "" : `
        <aside class="external-source-card">
          <span class="external-source-kicker">Původní článek</span>
          <strong>${article.originalTitle || article.title}</strong>
          <dl class="external-source-meta">
            <div><dt>Autor</dt><dd>${article.author}</dd></div>
            <div><dt>Zdroj</dt><dd>${article.sourceName}</dd></div>
          </dl>
          <a class="external-source-button" href="${article.sourceUrl}" target="_blank" rel="noopener noreferrer">Přečíst původní článek ↗</a>
        </aside>
      `}
    </div>
  `;
}

function renderBlogArticle(index, {pushHistory=true} = {}){
  const article = BLOG_ARTICLES[index];
  if (!article) return;

  currentBlogArticleIndex = index;
  if (pushHistory) {
    history.pushState(
      {devbybouOverlay:true, kind:"info:blog", devbybouBlogArticle:true, articleIndex:index},
      "",
      article.slug ? `/clanek/${article.slug}/` : location.href
    );
  }

  infoSheetContent.innerHTML = `
    <article class="blog-detail">
      <header class="blog-detail-head">
        <div class="blog-reader-controls">
          <button class="blog-back" type="button" aria-label="Zpět na seznam článků">
            <svg class="blog-back-icon" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M18.5 7.5 10 16l8.5 8.5"/>
              <path d="M10.5 16H25"/>
            </svg>
          </button>
          <button class="blog-theme-toggle" type="button" aria-label="Přepnout světlý režim článku" aria-pressed="false">
            <svg class="blog-theme-icon" viewBox="0 0 32 32" aria-hidden="true">
              <path class="blog-theme-bulb" d="M11.2 20.3c-2.1-1.5-3.4-3.9-3.4-6.6a8.2 8.2 0 0 1 16.4 0c0 2.7-1.3 5.1-3.4 6.6-1 .8-1.6 1.8-1.7 3H12.9c-.1-1.2-.7-2.2-1.7-3Z"/>
              <path d="M12.7 26h6.6"/>
              <path d="M13.8 29h4.4"/>
              <path class="blog-theme-rays" d="M16 2v2.1M5.6 6.3l1.5 1.5M26.4 6.3l-1.5 1.5M3 15h2.2M29 15h-2.2"/>
            </svg>
          </button>
        </div>
        <div>
          <h2 class="blog-detail-title">${article.title}</h2>
          <div class="blog-detail-meta-row">
            <button class="blog-detail-category" type="button" data-blog-detail-category="${article.category}" aria-label="Zobrazit články v kategorii ${article.category}">${article.category}</button>
            <span class="blog-meta-stack">
              <span class="blog-detail-meta">${article.date}</span>
              <span class="blog-reading-time">${article.type === "external" ? (article.readingTime || "1 min čtení") : `${getBlogReadingMinutes(article)} min čtení`}</span>
            </span>
          </div>
        </div>
      </header>
      <p class="blog-detail-lead">${article.excerpt}</p>
      ${article.type === "external" ? renderExternalArticleBody(article) : `
        <div class="blog-article">
          ${article.intro.map(paragraph => `<p class="blog-intro-paragraph">${paragraph}</p>`).join("")}
          ${article.sections.map(section => `
            <h3>${section.heading}</h3>
            ${section.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
          `).join("")}
        </div>
      `}
      ${renderBlogArticleFooter(index)}
    </article>
  `;
  const scroller = infoSheet.querySelector(".info-sheet-card");
  scroller?.scrollTo({top:0, behavior:"smooth"});

  applyBlogTheme(getSavedBlogTheme());
  if (article.slug && window.DEVBYBOU_ARTICLE_VIEWS) {
    window.DEVBYBOU_ARTICLE_VIEWS.mount({
      slug: article.slug,
      articleElement: infoSheetContent.querySelector(".blog-detail"),
      counterElement: infoSheetContent.querySelector("[data-article-view-count]")
    });
  }
  infoSheetContent.querySelector(".blog-theme-toggle")?.addEventListener("click", () => {
    const nextTheme = getSavedBlogTheme() === "light" ? "dark" : "light";
    localStorage.setItem(BLOG_THEME_STORAGE_KEY, nextTheme);
    applyBlogTheme(nextTheme);
  });

  infoSheetContent.querySelector(".blog-back")?.addEventListener("click", () => {
    if (history.state?.devbybouBlogArticle) {
      history.back();
    } else {
      currentBlogArticleIndex = null;
      clearBlogReaderTheme();
      infoSheetContent.innerHTML = INFO_OVERLAYS.blog;
      renderBlogList();
      scroller?.scrollTo({top:0, behavior:"smooth"});
    }
  });

  infoSheetContent.querySelector("[data-blog-detail-category]")?.addEventListener("click", event => {
    currentBlogArticleIndex = null;
    clearBlogReaderTheme();
    infoSheetContent.innerHTML = INFO_OVERLAYS.blog;
    renderBlogList(event.currentTarget.dataset.blogDetailCategory);
    scroller?.scrollTo({top:0, behavior:"smooth"});
  });

  infoSheetContent.querySelector("[data-blog-all]")?.addEventListener("click", () => {
    currentBlogArticleIndex = null;
    clearBlogReaderTheme();
    infoSheetContent.innerHTML = INFO_OVERLAYS.blog;
    renderBlogList();
    history.replaceState(
      {devbybouOverlay:true, kind:"info:blog"},
      "",
      getOverlayUrl("info:blog")
    );
    scroller?.scrollTo({top:0, behavior:"smooth"});
  });

  infoSheetContent.querySelector("[data-blog-share]")?.addEventListener("click", () => {
    shareBlogArticle(article);
  });

}

function initReferenceInteraction(){
  const showcases = infoSheetContent.querySelectorAll('.reference-showcase');
  if (!showcases.length) return;

  showcases.forEach((showcase, index) => {
    const screen = showcase.querySelector('.reference-screen');
    const refCard = showcase.querySelector('.reference-card');
    if (!screen || !refCard) return;

    screen.setAttribute('role','button');
    screen.setAttribute('tabindex','0');
    screen.setAttribute('aria-label', `Přesunout náhled reference ${index + 1} do popředí`);
    refCard.setAttribute('role','button');
    refCard.setAttribute('tabindex','0');
    refCard.setAttribute('aria-label', `Přesunout kartu reference ${index + 1} do popředí`);

    const showScreen = () => showcase.classList.add('screen-front');
    const showCard = () => showcase.classList.remove('screen-front');
    const keyActivate = (fn) => e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); }
    };

    screen.addEventListener('click', showScreen);
    refCard.addEventListener('click', showCard);
    screen.addEventListener('keydown', keyActivate(showScreen));
    refCard.addEventListener('keydown', keyActivate(showCard));
  });
}

function initAboutScreenshotStack(){
  const stack = infoSheetContent.querySelector('.about-shot-stack');
  if (!stack) return;

  const cards = Array.from(stack.querySelectorAll('.about-shot-card'));
  if (!cards.length) return;

  const activate = (target) => {
    cards.forEach(card => {
      const active = card === target;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  cards.forEach(card => {
    card.addEventListener('click', () => activate(card));
  });
}

document.querySelectorAll("[data-benefit-overlay]").forEach((benefit) => {
  benefit.addEventListener("click", () => {
    openInfoSheet(benefit.dataset.benefitOverlay);
  });
});

btcPeekBadge?.addEventListener("click", () => {
  if (!btcPeekBadge.classList.contains("is-visible")) return;
  openInfoSheet("bitcoin");
});

btcPeekBadge?.addEventListener("keydown", (event) => {
  if (!btcPeekBadge.classList.contains("is-visible")) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInfoSheet("bitcoin");
  }
});

function openInfoSheet(kind){
  currentBlogArticleIndex = null;
  clearBlogReaderTheme();
  document.getElementById("sheet")?.classList.remove("open");
  document.getElementById("sheet")?.setAttribute("aria-hidden","true");
  pushOverlayHistory("info:"+kind);
  infoSheet.querySelector(".info-sheet-card")?.classList.toggle("bitcoin-sheet", kind === "bitcoin");
  infoSheetContent.innerHTML = INFO_OVERLAYS[kind];
  if(kind === "references") initReferenceInteraction();
  if(kind === "about") {
    initAboutScreenshotStack();
    infoSheetContent.querySelector("[data-about-blog-article]")?.addEventListener("click", (e) => {
      e.preventDefault();
      renderBlogArticle(0);
    });
  }
  if(kind === "blog") renderBlogList();
  infoSheet.classList.add("open");
  infoSheet.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  if(kind === "cookies") {
    const saved = JSON.parse(localStorage.getItem("devbybouCookiePrefs") || "{}");
    const a = document.getElementById("analyticsCookies");
    const m = document.getElementById("marketingCookies");
    if(a) a.checked = !!saved.analytics;
    if(m) m.checked = !!saved.marketing;
    document.getElementById("saveCookies")?.addEventListener("click",()=>{
      localStorage.setItem("devbybouCookiePrefs", JSON.stringify({analytics:a.checked, marketing:m.checked}));
      closeInfoSheet();
    });
  }
}
function closeInfoSheet(forceAll=false){
  if (
    forceAll &&
    currentBlogArticleIndex !== null &&
    history.state?.devbybouBlogArticle
  ) {
    // X zavírá celý Blog detail okamžitě.
    // History uklidíme až po schování overlaye, aby kliknutí vždy působilo okamžitě.
    currentBlogArticleIndex = null;
    clearBlogReaderTheme();
    overlayHistoryActive = false;
    hideAllOverlays();

    setTimeout(() => {
      try {
        history.go(-2);
      } catch (e) {}
    }, 0);
    return;
  }

  if (forceAll) {
    currentBlogArticleIndex = null;
    clearBlogReaderTheme();
  }
  requestOverlayClose();
}
document.getElementById("blogLink").addEventListener("click",e=>{e.preventDefault(); openInfoSheet("blog");});
document.getElementById("aboutLink").addEventListener("click",e=>{e.preventDefault(); openInfoSheet("about");});
document.getElementById("pricingLink").addEventListener("click",e=>{e.preventDefault(); openInfoSheet("pricing");});
document.getElementById("referencesLink").addEventListener("click",e=>{e.preventDefault(); openInfoSheet("references");});
document.getElementById("infoSheetClose").addEventListener("click",(e)=>{
  e.preventDefault();
  e.stopPropagation();
  closeInfoSheet(true);
}, true);
infoSheet.addEventListener("click",e=>{ if(e.target===infoSheet) closeInfoSheet(true); });

const PACKAGES = {
  basic: {
    title:"BASIC",
    sub:"SPLASH PAGE / DIGITAL BUSINESS CARD",
    items:["Jedna výrazná splash page jako celý web","Digital business card pro rychlé představení vás nebo firmy","Inline admin editor pro snadnou úpravu základních údajů","Jméno nebo logo, kontakty a adresa","Mapa podle potřeby"],
    fit:"Basic je malý web v nejčistší podobě: jedna samostatná splash page, která funguje jako digitální business card. Hodí se tam, kde nepotřebujete klasický vícestránkový web, ale chcete profesionální vlastní místo na internetu s jasným kontaktem a základními informacemi. Součástí je jednoduchý inline admin editor, takže základní údaje můžete upravovat přímo a přehledně bez práce s kódem.",
    price:'9 990&nbsp;<span class="currency">Kč</span>',
    czk:9990,
    dark:false
  },
  standard: {
    title:"STANDARD",
    sub:"WEB VYTVOŘÍM, PŘEDÁM A FUNGUJE",
    items:["Moderní responzivní web","1–3 podstránky","3 návrhy vzhledu před realizací","Váš obsah, můj čas","Bez zbytečných řečí"],
    fit:"Standard je ideální pro weby se stabilní nabídkou a obsahem, který není potřeba pravidelně měnit. Ještě před samotnou realizací ode mě dostanete 3 návrhy vzhledu webu a vyberete směr, podle kterého se pak web dokončí. Hodí se pro prezentaci služeb, řemeslníka nebo menší firmy, kde web hlavně spolehlivě informuje a funguje. Když je později potřeba něco upravit, změny lze řešit nárazově podle ceníku — bez pravidelného paušálu.",
    price:'<span class="price-prefix">od</span>&nbsp;21 990&nbsp;<span class="currency">Kč</span>',
    czk:21990,
    pricePrefix:"od ",
    dark:false
  },
  business: {
    title:"BUSINESS",
    sub:"VÁŠ WEB, MOJE STAROSTI",
    items:["Web + správa a aktualizace","Landing page + 1–3 podstránky","3 návrhy vzhledu před realizací","Pravidelné úpravy a podpora","Vyřeším technické věci za vás","Abyste se mohli věnovat své práci"],
    fit:"Business je vhodný pro weby, které žijí a potřebují pravidelnou péči, ale jejich majitele by vlastní aktualizace zbytečně zdržovaly od práce. Ještě před samotnou realizací ode mě dostanete 3 návrhy vzhledu webu a vyberete směr, podle kterého se pak web dokončí. Typicky tam, kde se průběžně mění nabídka, akce nebo obsah — třeba u restaurace s týdenním obědovým menu. Aktualizace i technické věci řeším průběžně za vás.",
    price:'17 990&nbsp;<span class="currency">Kč</span> <em>+ 1 990&nbsp;<span class="currency">Kč</span> / měs.</em>',
    czk:17990,
    czkMonthly:1990,
    dark:true
  },
  eshop: {
    title:"E-SHOP",
    sub:"E-SHOP NA KLÍČ",
    items:["Bez omezení počtu produktů v rámci balíčku","Intuitivní administrační prostředí pro produkty a objednávky","Přehledná správa skladových zásob","Napojení na zvolené platební brány","Napojení na zvolené možnosti dopravy"],
    fit:"E-shop stavím jako řešení na klíč s vlastním, intuitivním a přehledným administračním prostředím. Produkty, objednávky i skladové zásoby spravujete na jednom místě bez těžkopádného rozhraní a bez nutnosti sahat do kódu. Nechci obchod stavět na hromadě náhodných pluginů, které se mohou mezi sebou přestat snášet a vyžadují neustálé aktualizace jen proto, aby základ dál fungoval. Funkce a napojení navrhnu podle konkrétního provozu obchodu — včetně platebních bran a vybraných způsobů dopravy.",
    price:'<span class="price-prefix">od</span>&nbsp;54 990&nbsp;<span class="currency">Kč</span>',
    czk:54990,
    pricePrefix:"od ",
    dark:true
  }
};
const sheet = document.getElementById("sheet");
const card = document.getElementById("sheetCard");
function applySheetState(kind) {
  infoSheet.classList.remove("open");
  infoSheet.setAttribute("aria-hidden","true");
  pushOverlayHistory("package:"+kind);
  const p = PACKAGES[kind];
  document.getElementById("sheetTitle").textContent = p.title;
  document.getElementById("sheetSub").textContent = p.sub;
  document.getElementById("sheetList").innerHTML = p.items.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("sheetFit").textContent = p.fit;
  const sheetPrice = document.getElementById("sheetPrice");
  sheetPrice.dataset.czk = String(p.czk || "");
  if (p.czkMonthly) sheetPrice.dataset.czkMonthly = String(p.czkMonthly);
  else delete sheetPrice.dataset.czkMonthly;
  if (p.pricePrefix) sheetPrice.dataset.pricePrefix = p.pricePrefix;
  else delete sheetPrice.dataset.pricePrefix;
  if (window.DEVBYBOU_setBtcPrice) window.DEVBYBOU_setBtcPrice(sheetPrice, p.price);
  else sheetPrice.innerHTML = p.price;
  card.classList.toggle("dark", !!p.dark);
  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  card.scrollTop = 0;
}

function openSheet(kind, sourceCard) {
  /* Chrome/Android: visually morph the clicked card into the large overlay panel.
     The target has different HTML content; the browser animates snapshots between them. */
  if (sourceCard && document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sourceCard.style.viewTransitionName = "package-morph";
    const transition = document.startViewTransition(() => {
      sourceCard.style.viewTransitionName = "";
      card.style.viewTransitionName = "package-morph";
      applySheetState(kind);
    });
    transition.finished.finally(() => {
      sourceCard.style.viewTransitionName = "";
      card.style.viewTransitionName = "";
    });
  } else {
    applySheetState(kind);
  }
}
function closeSheet() {
  const kind = history.state?.kind?.startsWith("package:") ? history.state.kind.split(":")[1] : null;
  const targetCard = kind ? document.querySelector(`[data-package="${kind}"]`) : null;
  if (targetCard && document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    card.style.viewTransitionName = "package-morph";
    const transition = document.startViewTransition(() => {
      card.style.viewTransitionName = "";
      targetCard.style.viewTransitionName = "package-morph";
      requestOverlayClose();
    });
    transition.finished.finally(() => {
      card.style.viewTransitionName = "";
      targetCard.style.viewTransitionName = "";
    });
  } else {
    requestOverlayClose();
  }
}
document.querySelectorAll("[data-package]").forEach(b=>{
  b.addEventListener("click",()=>openSheet(b.dataset.package, b));
  b.addEventListener("keydown",e=>{ if(e.key==="Enter" || e.key===" "){ e.preventDefault(); openSheet(b.dataset.package, b); } });
});
document.getElementById("sheetClose").addEventListener("click",closeSheet);
sheet.addEventListener("click",e=>{ if(e.target===sheet) closeSheet(); });
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && (sheet.classList.contains("open") || infoSheet.classList.contains("open"))) requestOverlayClose();
});

const menuPanel=document.getElementById("menuPanel");
document.getElementById("menuBtn").addEventListener("click",()=>menuPanel.classList.toggle("open"));
document.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>{
  document.getElementById(b.dataset.scroll).scrollIntoView({behavior:"smooth"});
  menuPanel.classList.remove("open");
}));
document.querySelector("[data-home]").addEventListener("click",()=>{
  menuPanel.classList.remove("open");
  window.scrollTo({top:0, behavior:"smooth"});
});
document.querySelector("[data-about]").addEventListener("click",()=>{
  openInfoSheet("about");
  menuPanel.classList.remove("open");
});
document.querySelector("[data-bitcoin]").addEventListener("click",()=>{
  openInfoSheet("bitcoin");
  menuPanel.classList.remove("open");
});
document.querySelector("[data-cookies]").addEventListener("click",()=>{
  openInfoSheet("cookies");
  menuPanel.classList.remove("open");
});
document.querySelector("[data-pricing]").addEventListener("click",()=>{
  openInfoSheet("pricing");
  menuPanel.classList.remove("open");
});
document.querySelector("[data-references]").addEventListener("click",()=>{
  openInfoSheet("references");
  menuPanel.classList.remove("open");
});
document.querySelector("[data-blog]").addEventListener("click",()=>{
  openInfoSheet("blog");
  menuPanel.classList.remove("open");
});

(() => {
  const photo = document.querySelector('.hero-person');
  const hero = document.querySelector('.hero');
  const cards = document.querySelector('.cards');
  if (!photo || !hero || !cards) return;

  // Approximate landmarks in the supplied portrait, measured as fractions of its height.
  // Hairline/top of hair should sit at the top of the hero (directly under the sticky header),
  // while the chin must remain above the cards.
  const HAIR_TOP = 0.055;
  const CHIN = 0.475;
  const GAP_ABOVE_CARDS = 7;

  function fitHeroPortrait() {
    const heroRect = hero.getBoundingClientRect();
    const cardsRect = cards.getBoundingClientRect();
    const available = Math.max(180, cardsRect.top - heroRect.top - GAP_ABOVE_CARDS);
    const ratio = (photo.naturalWidth && photo.naturalHeight)
      ? photo.naturalWidth / photo.naturalHeight
      : 0.5625;

    // Largest portrait that still guarantees the chin sits above the card row.
    const heightByChin = available / (CHIN - HAIR_TOP);
    let width = heightByChin * ratio;

    // Keep the same mobile composition, just scaled for the viewport.
    const vw = window.innerWidth;
    const visualCap = vw <= 430 ? vw * 0.72 : vw <= 760 ? vw * 0.68 : vw <= 1099 ? vw * 0.49 : 500;
    width = Math.min(width, visualCap, 560);
    width = Math.max(width, Math.min(230, vw * 0.52));

    const height = width / ratio;
    const top = -(HAIR_TOP * height);

    photo.style.setProperty('width', `${width}px`, 'important');
    photo.style.setProperty('top', `${top}px`, 'important');
    photo.style.setProperty('transform', 'none', 'important');
    photo.style.setProperty('min-width', '0', 'important');
    photo.style.setProperty('max-width', 'none', 'important');
  }

  const run = () => requestAnimationFrame(() => requestAnimationFrame(fitHeroPortrait));
  if (photo.complete) run(); else photo.addEventListener('load', run, {once:true});
  window.addEventListener('resize', run, {passive:true});
  window.addEventListener('orientationchange', run, {passive:true});
  if ('ResizeObserver' in window) new ResizeObserver(run).observe(cards);
})();

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".footer-divider");
  const footer = document.querySelector(".footer");
  if (!divider || !footer || footer.closest(".fixed-footer-shell")) return;

  const shell = document.createElement("div");
  shell.className = "fixed-footer-shell";
  footer.parentNode.insertBefore(shell, footer);
  shell.appendChild(divider);
  shell.appendChild(footer);

  const syncFooterSpace = () => {
    const h = Math.ceil(shell.getBoundingClientRect().height);
    document.body.style.paddingBottom = `${h + 14}px`;
  };

  syncFooterSpace();
  window.addEventListener("resize", syncFooterSpace, { passive:true });
});

(() => {
  const startHeroSlogans = () => {
    const sloganEl = document.getElementById("heroSlogan");
    if (!sloganEl || sloganEl.dataset.rotatorStarted === "1") return;

    sloganEl.dataset.rotatorStarted = "1";

    const slogans = [
      "DĚLÁM WEBY PRO LIDI, KTEŘÍ MAJÍ\nSVOU PRÁCI NA PRÁCI",
      "ZATÍMCO VY ŘEŠÍTE ZAKÁZKY, JÁ VÁM\nOTEVÍRÁM DIGITÁLNÍ DVEŘE"
    ];

    const reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let sloganIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const TYPE_MS = 62;
    const DELETE_MS = 18;
    const HOLD_MS = 7600;
    const BETWEEN_MS = 900;

    if (reduceMotion) {
      sloganEl.textContent = slogans[0];
      window.setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganEl.textContent = slogans[sloganIndex];
      }, 10000);
      return;
    }

    sloganEl.textContent = "";

    const tick = () => {
      const current = slogans[sloganIndex];

      if (!deleting) {
        charIndex += 1;
        sloganEl.textContent = current.slice(0, charIndex);

        if (charIndex >= current.length) {
          deleting = true;
          window.setTimeout(tick, HOLD_MS);
        } else {
          window.setTimeout(tick, TYPE_MS);
        }
        return;
      }

      charIndex -= 1;
      sloganEl.textContent = current.slice(0, Math.max(0, charIndex));

      if (charIndex <= 0) {
        charIndex = 0;
        deleting = false;
        sloganIndex = (sloganIndex + 1) % slogans.length;
        window.setTimeout(tick, BETWEEN_MS);
      } else {
        window.setTimeout(tick, DELETE_MS);
      }
    };

    tick();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startHeroSlogans, { once:true });
  } else {
    startHeroSlogans();
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".cards");
  if (!carousel) return;

  const WIDE_BREAKPOINT = 1180;
  const RESUME_AFTER = 4500;
  const CARD_PAUSE = 3600;   // každá dvojice zůstane zobrazená stejně dlouho
  const MOVE_DURATION = 900; // plynulý posun vždy přesně o jednu kartu

  let timer = 0;
  let rafId = 0;
  let pausedByUser = false;
  let currentIndex = 0;
  let direction = 1;
  let gestureStartIndex = 0;

  const isWideStatic = () => window.innerWidth >= WIDE_BREAKPOINT;
  const getMaxScroll = () => Math.max(0, carousel.scrollWidth - carousel.clientWidth);

  const getCardStep = () => {
    const cards = [...carousel.querySelectorAll(".package-card")];
    if (cards.length > 1) {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      if (step > 0) return step;
    }
    const first = cards[0];
    if (!first) return carousel.clientWidth / 2;
    const styles = getComputedStyle(carousel.querySelector(".cards-track"));
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const getLastIndex = () => {
    const step = getCardStep();
    if (step <= 0) return 0;
    return Math.max(0, Math.round(getMaxScroll() / step));
  };

  const indexToScroll = index => {
    const step = getCardStep();
    return Math.min(getMaxScroll(), Math.max(0, index * step));
  };

  const nearestIndex = () => {
    const step = getCardStep();
    if (step <= 0) return 0;
    return Math.max(0, Math.min(getLastIndex(), Math.round(carousel.scrollLeft / step)));
  };

  const clearMotion = () => {
    clearTimeout(timer);
    timer = 0;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    carousel.classList.remove("is-auto-moving");
  };

  const easeInOut = t => t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animateToIndex = (index, done) => {
    clearMotion();

    index = Math.max(0, Math.min(getLastIndex(), index));
    const target = indexToScroll(index);
    const start = carousel.scrollLeft;
    const distance = target - start;

    if (Math.abs(distance) < 1) {
      carousel.scrollLeft = target;
      currentIndex = index;
      done?.();
      return;
    }

    carousel.classList.add("is-auto-moving");
    const started = performance.now();

    const frame = now => {
      if (pausedByUser || isWideStatic()) {
        clearMotion();
        return;
      }

      const p = Math.min((now - started) / MOVE_DURATION, 1);
      carousel.scrollLeft = start + distance * easeInOut(p);

      if (p < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        rafId = 0;
        carousel.scrollLeft = target;
        currentIndex = index;
        carousel.classList.remove("is-auto-moving");
        done?.();
      }
    };

    rafId = requestAnimationFrame(frame);
  };

  const scheduleNext = () => {
    if (pausedByUser || isWideStatic()) return;

    const last = getLastIndex();
    if (last <= 0) return;

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (pausedByUser || isWideStatic()) return;

      // 0 → 1 → 2 → 1 → 0 …, tedy pokaždé jen o jednu kartu.
      if (currentIndex >= last) direction = -1;
      if (currentIndex <= 0) direction = 1;

      animateToIndex(currentIndex + direction, scheduleNext);
    }, CARD_PAUSE);
  };

  const startAuto = () => {
    if (isWideStatic()) {
      clearMotion();
      pausedByUser = false;
      currentIndex = 0;
      direction = 1;
      carousel.scrollLeft = 0;
      return;
    }

    currentIndex = nearestIndex();
    const last = getLastIndex();
    if (currentIndex >= last) direction = -1;
    else if (currentIndex <= 0) direction = 1;
    scheduleNext();
  };

  const pauseForUser = () => {
    pausedByUser = true;
    clearMotion();

    clearTimeout(timer);
    timer = setTimeout(() => {
      pausedByUser = false;
      currentIndex = nearestIndex();
      const last = getLastIndex();
      if (currentIndex >= last) direction = -1;
      else if (currentIndex <= 0) direction = 1;
      scheduleNext();
    }, RESUME_AFTER);
  };

  const beginGesture = () => {
    gestureStartIndex = nearestIndex();
    pauseForUser();
  };

  carousel.addEventListener("pointerdown", beginGesture, { passive:true });

  carousel.addEventListener("wheel", e => {
    // Vertikální gesto patří stránce, horizontální carouselu.
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (!pausedByUser) gestureStartIndex = nearestIndex();
      pauseForUser();

      const step = getCardStep();
      const delta = Math.sign(e.deltaX);
      const targetIndex = Math.max(
        0,
        Math.min(getLastIndex(), gestureStartIndex + delta)
      );

      carousel.scrollTo({
        left:indexToScroll(targetIndex),
        behavior:"smooth"
      });
      currentIndex = targetIndex;
      gestureStartIndex = targetIndex;
      e.preventDefault();
    }
  }, { passive:false });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearMotion();
    else if (!pausedByUser) startAuto();
  });

  window.addEventListener("resize", () => {
    clearMotion();

    if (isWideStatic()) {
      pausedByUser = false;
      currentIndex = 0;
      direction = 1;
      carousel.scrollLeft = 0;
      return;
    }

    currentIndex = Math.min(currentIndex, getLastIndex());
    carousel.scrollLeft = indexToScroll(currentIndex);

    if (!pausedByUser) scheduleNext();
  }, { passive:true });


  startAuto();
});

(() => {
  const priceEls = [...document.querySelectorAll("[data-btc-price]")];
  if (!priceEls.length) return;

  const priceContents = new Map();
  const originals = new Map();
  let btcCzk = null;
  let showingBtc = false;
  let switchTimer = null;

  const btcPeekBadge = document.getElementById("btcPeekBadge");
  const heroInner = document.querySelector(".hero-inner");
  const cardsViewport = document.querySelector(".cards");

  let peekAnchor = null;

  const capturePeekAnchor = () => {
    if (!btcPeekBadge || !heroInner || !cardsViewport) return;

    const hero = heroInner.getBoundingClientRect();
    const cards = cardsViewport.getBoundingClientRect();
    const badgeW = btcPeekBadge.offsetWidth || 86;
    const badgeH = btcPeekBadge.offsetHeight || 86;

    // BTC badge belongs to the HERO, not to the current position of BUSINESS.
    // Keep it fixed at the right side near the portrait even when the carousel
    // is stopped on BUSINESS + BASIC.
    const left = hero.width - badgeW * 0.78 - 10;
    const top = cards.top - hero.top - badgeH * 0.48 - 14;

    peekAnchor = { left, top };
    btcPeekBadge.style.left = `${left}px`;
    btcPeekBadge.style.top = `${top}px`;
  };

  const syncPeekBadge = visible => {
    if (!btcPeekBadge) return;
    if (!peekAnchor) capturePeekAnchor();
    if (peekAnchor) {
      btcPeekBadge.style.left = `${peekAnchor.left}px`;
      btcPeekBadge.style.top = `${peekAnchor.top}px`;
    }
    btcPeekBadge.classList.toggle("is-visible", !!visible);
    btcPeekBadge.setAttribute("aria-hidden", visible ? "false" : "true");
  };

  // Recalculate only on viewport resize, not on carousel scroll.
  window.addEventListener("resize", () => {
    peekAnchor = null;
    capturePeekAnchor();
  }, { passive:true });

  const formatBtc = czk => {
    const value = Number(czk) / btcCzk;
    if (!Number.isFinite(value) || value <= 0) return null;
    return value.toFixed(value < 0.01 ? 6 : 5).replace(/0+$/, "").replace(/\.$/, "");
  };

  const btcHtmlFor = el => {
    const main = formatBtc(el.dataset.czk);
    if (!main) return null;
    const prefix = el.dataset.pricePrefix ? `<span class="price-prefix">${el.dataset.pricePrefix.trim()}</span>&nbsp;` : "";

    if (el.dataset.czkMonthly) {
      const monthly = formatBtc(el.dataset.czkMonthly);
      if (!monthly) return null;

      if (el.id === "sheetPrice") {
        return `<span class="btc-value">${prefix}₿ ${main}</span>` +
          `<span class="btc-value btc-monthly">+ ₿ ${monthly} / <span class="monthly-lower">měs.</span> *</span>`;
      }

      return `<span class="card-price-main btc-value">${prefix}₿ ${main}</span>` +
        `<span class="card-price-monthly btc-value">+ ₿ ${monthly} / <span class="monthly-lower">měs.</span> *</span>`;
    }

    return `<span class="btc-value">${prefix}₿ ${main}</span>`;
  };

  const ensureContent = el => {
    let content = priceContents.get(el);
    if (content && content.isConnected && content.parentElement === el) return content;

    content = document.createElement("span");
    content.className = "price-fade-content";
    content.innerHTML = el.innerHTML;
    el.innerHTML = "";
    el.appendChild(content);
    priceContents.set(el, content);
    return content;
  };

  const setOriginal = (el, html) => {
    const content = ensureContent(el);
    originals.set(el, html);
    const current = showingBtc && btcCzk ? btcHtmlFor(el) : html;
    content.innerHTML = current || html;
    content.classList.remove("is-price-fading");
  };

  priceEls.forEach(el => {
    const content = ensureContent(el);
    originals.set(el, content.innerHTML);
  });

  window.DEVBYBOU_setBtcPrice = (el, czkHtml) => {
    if (!el) return;
    if (!priceEls.includes(el)) priceEls.push(el);
    setOriginal(el, czkHtml);
  };

  const fadeSwap = (el, html) => {
    const content = ensureContent(el);
    if (!content || html == null) return;
    content.classList.add("is-price-fading");
    window.setTimeout(() => {
      content.innerHTML = html;
      requestAnimationFrame(() => content.classList.remove("is-price-fading"));
    }, 500);
  };

  const showBtc = () => {
    if (!btcCzk || showingBtc) return;
    showingBtc = true;
    syncPeekBadge(true);

    priceEls.forEach(el => {
      const html = btcHtmlFor(el);
      if (html) fadeSwap(el, html);
    });

    // BTC is just a short cameo; crowns remain visible most of the time.
    switchTimer = window.setTimeout(showCzk, 7600);
  };

  const showCzk = () => {
    if (!showingBtc) return;
    showingBtc = false;
    syncPeekBadge(false);
    priceEls.forEach(el => fadeSwap(el, originals.get(el)));

    // Keep CZK on screen substantially longer before the next BTC cameo.
    switchTimer = window.setTimeout(showBtc, 16000);
  };

  const scheduleFirstCameo = () => {
    window.clearTimeout(switchTimer);
    switchTimer = window.setTimeout(showBtc, 9000);
  };

  const loadRate = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=czk",
        { cache: "no-store" }
      );
      if (!response.ok) throw new Error("BTC rate unavailable");
      const data = await response.json();
      const rate = Number(data?.bitcoin?.czk);
      if (!Number.isFinite(rate) || rate <= 0) throw new Error("Invalid BTC rate");
      btcCzk = rate;
      if (!showingBtc) scheduleFirstCameo();
    } catch (error) {
      // Silent fallback: CZK stays visible if the external rate cannot be loaded.
    }
  };

  requestAnimationFrame(capturePeekAnchor);
  loadRate();
  window.setInterval(loadRate, 15 * 60 * 1000);
})();

(() => {
  const fallbackCopy = (value) => {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    area.style.top = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);

    area.focus();
    area.select();
    area.setSelectionRange(0, area.value.length);

    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_) {}

    area.remove();
    return ok;
  };

  const showCopiedState = (btn) => {
    const oldLabel = btn.getAttribute("aria-label") || "Kopírovat adresu";
    const oldTitle = btn.getAttribute("title") || "Kopírovat adresu";

    btn.classList.add("is-copied");
    btn.setAttribute("aria-label", "Zkopírováno");
    btn.setAttribute("title", "Zkopírováno");

    window.setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.setAttribute("aria-label", oldLabel);
      btn.setAttribute("title", oldTitle);
    }, 1400);
  };

  document.addEventListener("click", async (event) => {
    const btn = event.target.closest(".bitcoin-overlay-copy");
    if (!btn) return;

    event.preventDefault();
    event.stopPropagation();

    const value = btn.getAttribute("data-copy-text") || "";
    if (!value) return;

    let copied = false;

    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        copied = true;
      } catch (_) {}
    }

    if (!copied) copied = fallbackCopy(value);

    if (copied) showCopiedState(btn);
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const requestedDetail = (params.get("detail") || "").trim().toLowerCase();

  // Backward compatibility with the older ?open=... links.
  const legacyOpen = (params.get("open") || "").trim();
  const legacyMap = {
    references: "info:references",
    pricing: "info:pricing",
    about: "info:about",
    blog: "info:blog",
    bitcoin: "info:bitcoin",
    cookies: "info:cookies"
  };

  const kind = requestedDetail
    ? OVERLAY_KIND_BY_DETAIL[requestedDetail]
    : legacyMap[legacyOpen];

  if (!kind) return;

  // A directly shared URL should still close back to the clean homepage rather than
  // leave the visitor on the previous site/app. Create that base history entry first.
  history.replaceState({devbybouBase:true}, "", getBasePageUrl());
  overlayHistoryActive = false;

  window.setTimeout(() => {
    if (kind.startsWith("package:")) {
      const packageKind = kind.slice("package:".length);
      if (PACKAGES[packageKind]) openSheet(packageKind, null);
      return;
    }

    if (kind.startsWith("info:")) {
      const infoKind = kind.slice("info:".length);
      if (INFO_OVERLAYS[infoKind]) openInfoSheet(infoKind);
    }
  }, 0);
});
