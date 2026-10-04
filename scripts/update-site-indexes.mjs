import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE_URL = "https://www.strejdabou.cz";
const ARTICLE_DIR = path.join(ROOT, "clanek");
const MANIFEST_FILE = path.join(ROOT, "assets", "data", "articles.json");
const SITEMAP_FILE = path.join(ROOT, "sitemap.xml");
const RSS_FILE = path.join(ROOT, "rss.xml");

const decodeEntities = value => String(value ?? "")
  .replace(/&nbsp;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;/gi, '"')
  .replace(/&#39;/gi, "'")
  .replace(/&lt;/gi, "<")
  .replace(/&gt;/gi, ">");

const stripTags = value => decodeEntities(
  String(value ?? "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
).trim();

const xml = value => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

function firstMatch(source, regex, fallback = "") {
  const match = source.match(regex);
  return match ? stripTags(match[1]) : fallback;
}

function attr(source, property, name = "property") {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta[^>]+${name}=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+${name}=["']${escaped}["'][^>]*>`, "i")
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match) return decodeEntities(match[1].trim());
  }
  return "";
}

function linkHref(source, rel) {
  const escaped = rel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<link[^>]+rel=["']${escaped}["'][^>]+href=["']([^"']+)["'][^>]*>`, "i"),
    new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${escaped}["'][^>]*>`, "i")
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match) return decodeEntities(match[1].trim());
  }
  return "";
}

function readArticle(slug) {
  const file = path.join(ARTICLE_DIR, slug, "index.html");
  const source = fs.readFileSync(file, "utf8");

  const canonical = linkHref(source, "canonical") || `${BASE_URL}/clanek/${slug}/`;
  const title = attr(source, "og:title") ||
    firstMatch(source, /<h1[^>]*class=["'][^"']*blog-detail-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i);
  const description = attr(source, "og:description") || attr(source, "description", "name");
  const image = attr(source, "og:image");
  const published = attr(source, "article:published_time");
  const section = attr(source, "article:section");

  if (!title) throw new Error(`${slug}: chybí titulek`);
  if (!published) throw new Error(`${slug}: chybí article:published_time`);

  const date = new Date(`${published}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) throw new Error(`${slug}: neplatné datum ${published}`);

  return {slug, canonical, title, description, image, published, section, date};
}

if (!fs.existsSync(ARTICLE_DIR)) {
  throw new Error("Složka clanek/ neexistuje.");
}

const slugs = fs.readdirSync(ARTICLE_DIR, {withFileTypes:true})
  .filter(entry => entry.isDirectory() && fs.existsSync(path.join(ARTICLE_DIR, entry.name, "index.html")))
  .map(entry => entry.name);

const articles = slugs.map(readArticle)
  .sort((a,b) => b.date - a.date || a.slug.localeCompare(b.slug, "cs"));

// Keep current per-article manifest options such as "pinned", but automatically add/remove slugs.
let currentManifest = [];
try {
  currentManifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"));
  if (!Array.isArray(currentManifest)) currentManifest = [];
} catch {
  currentManifest = [];
}

const manifestMap = new Map(
  currentManifest
    .filter(item => item && typeof item.slug === "string")
    .map(item => [item.slug, item])
);

const nextManifest = articles.map(article => ({
  ...(manifestMap.get(article.slug) || {}),
  slug: article.slug
}));

fs.writeFileSync(
  MANIFEST_FILE,
  JSON.stringify(nextManifest, null, 2) + "\n",
  "utf8"
);

// Standalone public URLs. Article overlay/query URLs deliberately do not belong in sitemap.
const sitemapUrls = [
  `${BASE_URL}/`,
  `${BASE_URL}/blog/`,
  ...articles.map(article => article.canonical)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url><loc>${xml(url)}</loc></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(SITEMAP_FILE, sitemap, "utf8");

const rssItems = articles.map(article => `    <item>
      <title>${xml(article.title)}</title>
      <link>${xml(article.canonical)}</link>
      <guid isPermaLink="true">${xml(article.canonical)}</guid>
      <pubDate>${article.date.toUTCString()}</pubDate>
      ${article.section ? `<category>${xml(article.section)}</category>` : ""}
      <description>${xml(article.description)}</description>
      ${article.image ? `<enclosure url="${xml(article.image)}" type="image/png" />` : ""}
    </item>`).join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DEVBYBOU Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>Poznámky o internetu, technologiích, lidech kolem nich a věcech, které by jinak možná zůstaly jen bokem.</description>
    <language>cs-CZ</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${(articles[0]?.date ?? new Date()).toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>
`;

fs.writeFileSync(RSS_FILE, rss, "utf8");

console.log(`Hotovo: ${articles.length} článků`);
console.log("Aktualizováno: assets/data/articles.json, sitemap.xml, rss.xml");
