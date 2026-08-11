// Site-wide constants for absolute URLs (canonical, Open Graph, sitemap).
// origin is the bare domain; `page.url | url` supplies the /mitsurugi-guide/ prefix.
export default {
  origin: "https://medonni.github.io",
  // Formal site name: <title> suffix, OG site_name/title. Not any one deck's
  // name, since the site covers more than one (see neutralWordmark below).
  name: "Medonni's Guides",
  ogImage: "/assets/cards/main/murakumo.webp",
  // Header wordmark on pages with no deck-scoped brand (the hub, and the
  // shared /handtraps/ page). Each deck sets its own `brand` via a directory
  // data file, e.g. src/mitsurugi/mitsurugi.11tydata.js, and Fiendsmith gets
  // the same treatment despite being an engine, not an archetype.
  neutralWordmark: "MEDONNI'S GUIDES",
};
