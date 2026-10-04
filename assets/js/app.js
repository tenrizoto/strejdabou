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


let BLOG_ARTICLES = [];
let blogArticlesPromise = null;
let blogListObserver = null;

const BLOG_MANIFEST_URL = "/assets/data/articles.json";
const BLOG_THEME_STORAGE_KEY = "devbybouBlogTheme";

function parseBlogDate(dateString){
  const match = String(dateString).match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }
  return 0;
}

function articleReadingMinutes(article){
  return Math.max(1, Number(article?.readingMinutes) || 1);
}

function articleReadingLabel(article){
  return article?.readingTime || `${articleReadingMinutes(article)} min čtení`;
}

async function fetchArticleRecord(entry){
  const slug = String(entry?.slug || "").trim();
  if (!slug) throw new Error("Article manifest entry has no slug");

  const response = await fetch(`/clanek/${encodeURIComponent(slug)}/index.html`, {cache:"no-cache"});
  if (!response.ok) throw new Error(`Article ${slug}: HTTP ${response.status}`);

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const title = doc.querySelector(".blog-detail-title")?.textContent?.trim() || "";
  const category = doc.querySelector(".blog-detail-category")?.textContent?.trim() || "Bez štítku";
  const date = doc.querySelector(".blog-detail-meta")?.textContent?.trim() || "";
  const readingTime = doc.querySelector(".blog-reading-time")?.textContent?.trim() || "1 min čtení";
  const readingMatch = readingTime.match(/\d+/);
  const excerpt = doc.querySelector(".blog-detail-lead")?.textContent?.trim() ||
    doc.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() || "";
  const detail = doc.querySelector(".blog-detail");
  const body = doc.querySelector(".blog-article");

  if (!title || !body || !detail) throw new Error(`Article ${slug}: missing article structure`);

  return {
    slug,
    pinned:Boolean(entry?.pinned),
    title,
    category,
    date,
    excerpt,
    readingTime,
    readingMinutes:readingMatch ? Number(readingMatch[0]) : 1,
    articleHtml:detail.outerHTML
  };
}

async function loadBlogArticles(){
  if (BLOG_ARTICLES.length) return BLOG_ARTICLES;
  if (blogArticlesPromise) return blogArticlesPromise;

  blogArticlesPromise = (async () => {
    const response = await fetch(BLOG_MANIFEST_URL, {cache:"no-cache"});
    if (!response.ok) throw new Error(`Blog manifest HTTP ${response.status}`);
    const manifest = await response.json();
    if (!Array.isArray(manifest)) throw new Error("Blog manifest must be an array");

    const results = await Promise.allSettled(manifest.map(fetchArticleRecord));
    BLOG_ARTICLES = results
      .filter(result => result.status === "fulfilled")
      .map(result => result.value);

    if (!BLOG_ARTICLES.length) throw new Error("No blog article could be loaded");
    return BLOG_ARTICLES;
  })().catch(error => {
    blogArticlesPromise = null;
    throw error;
  });

  return blogArticlesPromise;
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
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 5 3 3v2h-4v6l-1 2-1-2v-6H7v-2l3-3-1-5Z"/></svg>
        </span>
      ` : ""}
      <span class="blog-card-topline">
        <button class="blog-category" type="button" data-blog-category="${article.category}" aria-label="Zobrazit články v kategorii ${article.category}">${article.category}</button>
        <span class="blog-meta-stack">
          <span class="blog-card-date">${article.date}</span>
          <span class="blog-reading-time">${articleReadingLabel(article)}</span>
        </span>
      </span>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <span class="blog-card-more">Číst článek →</span>
    </article>
  `;
}

async function renderBlogList(categoryFilter = null){
  const view = document.getElementById("blogView");
  if (!view) return;

  if (blogListObserver) {
    blogListObserver.disconnect();
    blogListObserver = null;
  }

  if (!BLOG_ARTICLES.length) {
    view.innerHTML = `<div class="blog-list-end">NAČÍTÁM ČLÁNKY…</div>`;
  }

  try {
    await loadBlogArticles();
  } catch (error) {
    view.innerHTML = `<div class="blog-list-end">ČLÁNKY SE NEPODAŘILO NAČÍST</div>`;
    console.error(error);
    return;
  }

  const batchSize = 5;
  const sortedArticles = getSortedBlogArticles()
    .filter(({article}) => !categoryFilter || article.category === categoryFilter);

  const filteredReadingMinutes = sortedArticles.reduce((sum, {article}) => sum + articleReadingMinutes(article), 0);
  const allCategoriesCount = new Set(BLOG_ARTICLES.map(article => article.category)).size;
  const allReadingMinutes = BLOG_ARTICLES.reduce((sum, article) => sum + articleReadingMinutes(article), 0);
  let visibleCount = Math.min(batchSize, sortedArticles.length);

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

  view.querySelector("[data-blog-filter-back]")?.addEventListener("click", () => renderBlogList());

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
    }, {root:scroller || null, rootMargin:"0px 0px 240px 0px", threshold:0.01});
    blogListObserver.observe(sentinel);
  }
}

function getSavedBlogTheme(){
  try { return localStorage.getItem(BLOG_THEME_STORAGE_KEY) === "light" ? "light" : "dark"; }
  catch (_) { return "dark"; }
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
    toggle.setAttribute("aria-label", isLight ? "Přepnout článek do tmavého režimu" : "Přepnout článek do světlého režimu");
  }
}

function clearBlogReaderTheme(){
  window.DEVBYBOU_ARTICLE_VIEWS?.dispose?.();
  const card = infoSheet.querySelector(".info-sheet-card");
  card?.classList.remove("blog-reader-light", "blog-reader-dark");
}

function getNextBlogArticleIndex(currentIndex){
  if (BLOG_ARTICLES.length < 2) return null;
  const candidates = BLOG_ARTICLES.map((_, index) => index).filter(index => index !== currentIndex);
  const seedSource = BLOG_ARTICLES[currentIndex]?.title || String(currentIndex);
  let seed = 0;
  for (let i = 0; i < seedSource.length; i++) seed = ((seed * 31) + seedSource.charCodeAt(i)) >>> 0;
  return candidates[seed % candidates.length];
}

async function shareBlogArticle(article){
  const articleUrl = `${location.origin}/clanek/${article.slug}/`;
  const shareData = {title:article.title, text:article.excerpt, url:articleUrl};
  if (navigator.share) {
    try { await navigator.share(shareData); return; }
    catch (error) { if (error?.name === "AbortError") return; }
  }
  try {
    await navigator.clipboard.writeText(articleUrl);
    const button = infoSheetContent.querySelector("[data-blog-share]");
    if (button) {
      const original = button.textContent;
      button.textContent = "Odkaz zkopírován";
      setTimeout(() => { button.textContent = original; }, 1600);
    }
  } catch (_) {
    window.prompt("Zkopírujte odkaz na článek:", articleUrl);
  }
}


let articleCommonLoader = null;
async function ensureArticleCommon(){
  if (window.DEVBYBOU_ARTICLE_UI?.renderEndFooter) return;
  if (!articleCommonLoader) {
    articleCommonLoader = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-article-common-loader]');
      if (existing) {
        existing.addEventListener('load', resolve, {once:true});
        existing.addEventListener('error', reject, {once:true});
        return;
      }
      const script = document.createElement('script');
      script.src = '/assets/js/article-common.js?v=279';
      script.defer = true;
      script.dataset.articleCommonLoader = '1';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  await articleCommonLoader;
}

async function renderBlogArticleBySlug(slug, options={}){
  try { await loadBlogArticles(); }
  catch (error) { console.error(error); return; }
  const index = BLOG_ARTICLES.findIndex(article => article.slug === slug);
  if (index >= 0) return renderBlogArticle(index, options);
}

async function renderBlogArticle(index, {pushHistory=true} = {}){
  try {
    await loadBlogArticles();
    await ensureArticleCommon();
  }
  catch (error) { console.error(error); return; }

  const article = BLOG_ARTICLES[index];
  if (!article) return;

  currentBlogArticleIndex = index;
  if (pushHistory) {
    history.pushState(
      {devbybouOverlay:true, kind:"info:blog", devbybouBlogArticle:true, articleIndex:index, articleSlug:article.slug},
      "",
      `/clanek/${article.slug}/`
    );
  }

  infoSheetContent.innerHTML = article.articleHtml;
  window.DEVBYBOU_ARTICLE_UI?.renderEndFooter(infoSheetContent.querySelector("[data-article-end-footer]"));

  const scroller = infoSheet.querySelector(".info-sheet-card");
  scroller?.scrollTo({top:0, behavior:"smooth"});
  applyBlogTheme(getSavedBlogTheme());

  window.DEVBYBOU_ARTICLE_VIEWS?.mount({
    slug:article.slug,
    articleElement:infoSheetContent.querySelector(".blog-detail"),
    counterElement:infoSheetContent.querySelector("[data-article-view-count]")
  });

  infoSheetContent.querySelector(".blog-theme-toggle")?.addEventListener("click", () => {
    const nextTheme = getSavedBlogTheme() === "light" ? "dark" : "light";
    try { localStorage.setItem(BLOG_THEME_STORAGE_KEY, nextTheme); } catch (_) {}
    applyBlogTheme(nextTheme);
  });

  const detailCategory = infoSheetContent.querySelector(".blog-detail-category");
  if (detailCategory) {
    detailCategory.dataset.blogDetailCategory = article.category;
    detailCategory.setAttribute("role", "button");
    detailCategory.setAttribute("tabindex", "0");
    detailCategory.setAttribute("aria-label", `Zobrazit články v kategorii ${article.category}`);
  }

  infoSheetContent.querySelector(".blog-back")?.addEventListener("click", event => {
    event.preventDefault();
    if (history.state?.devbybouBlogArticle) history.back();
    else {
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
    history.replaceState({devbybouOverlay:true, kind:"info:blog"}, "", getOverlayUrl("info:blog"));
    scroller?.scrollTo({top:0, behavior:"smooth"});
  });

  infoSheetContent.querySelector("[data-blog-share]")?.addEventListener("click", () => shareBlogArticle(article));
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
      renderBlogArticleBySlug("web-v-druhe-polovine-dvacatych-let");
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
