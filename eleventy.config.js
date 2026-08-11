// id -> the card it names, derived from the deck data files. Every href is
// root-absolute; linkCards() rewrites them relative to whichever page is
// rendering, so the same map works from /mitsurugi/combos/ and
// /handtraps/matchups/ alike, and relative output survives the
// /mitsurugi-guide/ pathPrefix without the filter knowing it (the pathPrefix
// isn't readable from the config callback).
//
// Nothing to register here when a card is added: put it in the deck's data
// file, give it art, and add an alias to CARD_LINKS below only if the prose
// calls it something other than its full name.
import { cardIndex as CARD_TARGETS } from "./src/_lib/card-index.js";

// Combo step text repeats card names; link the FIRST mention of each card per
// block so a reader can recall an effect without leaving the page. Longest
// aliases first so "Ame no Murakumo" wins over bare "Murakumo", etc.
const CARD_LINKS = [
  ["Mitsurugi Great Purification", "purification"],
  ["Pre-Preparation of Rites", "preprep"],
  ["Ragged Records of Rites", "raggedrecords"],
  ["Droll & Lock Bird", "droll"],
  ["Ash Blossom", "ash"],
  ["Ame no Murakumo", "murakumo"],
  ["Futsu no Mitama", "futsu"],
  ["Mitsurugi Prayers", "prayers"],
  ["Mitsurugi Mirror", "mirror"],
  ["Mitsurugi Ritual", "ritual"],
  ["Pre-Prep of Rites", "preprep"],
  ["Pre-Prep", "preprep"],
  ["Habakiri", "habakiri"],
  ["Murakumo", "murakumo"],
  ["Kusanagi", "kusanagi"],
  ["Aramasa", "aramasa"],
  ["Saji", "saji"],
  ["Futsu", "futsu"],
  // Fiendsmith and Sacred Beast names, used by the matchup map. Same rule:
  // full name before the bare one people actually write mid-sentence.
  ["Lacrima the Crimson Tears", "lacrima-the-crimson-tears"],
  ["Fiendsmith's Rextremende", "fiendsmiths-rextremende"],
  ["Fiendsmith's Requiem", "fiendsmiths-requiem"],
  ["Fiendsmith's Sequence", "fiendsmiths-sequence"],
  ["Fiendsmith's Desirae", "fiendsmiths-desirae"],
  ["Fiendsmith's Lacrima", "fiendsmiths-lacrima"],
  ["Fiendsmith Engraver", "fiendsmith-engraver"],
  ["Fiendsmith's Sanct", "fiendsmiths-sanct"],
  ["Fiendsmith's Tract", "fiendsmiths-tract"],
  ["Fiendsmith Kyrie", "fiendsmith-kyrie"],
  ["D/D/D Wave High King Caesar", "dddd-wave-high-king-caesar"],
  ["Fabled Lurrie", "fabled-lurrie"],
  ["Rextremende", "fiendsmiths-rextremende"],
  ["Engraver", "fiendsmith-engraver"],
  ["Requiem", "fiendsmiths-requiem"],
  ["Sequence", "fiendsmiths-sequence"],
  ["Desirae", "fiendsmiths-desirae"],
  ["Sanct", "fiendsmiths-sanct"],
  ["Tract", "fiendsmiths-tract"],
  ["The Chaotic Phantasmal Sacred Beasts", "chaotic-phantasmal-sacred-beasts"],
  ["Fallen Paradise of the Sacred Beasts", "fallen-paradise-of-the-sacred-beasts"],
  ["Sacred Beasts Combined Assault", "sacred-beasts-combined-assault"],
  ["Summoner of the Sacred Beasts", "summoner-of-the-sacred-beasts"],
  ["Martyr of the Sacred Beasts", "martyr-of-the-sacred-beasts"],
  ["Sacred Beasts Thunderclap", "sacred-beasts-thunderclap"],
  ["Sacred Beasts Released", "sacred-beasts-released"],
  ["Chaotic Phantasmal", "chaotic-phantasmal-sacred-beasts"],
  ["Fallen Paradise", "fallen-paradise-of-the-sacred-beasts"],
  ["Thunderclap", "sacred-beasts-thunderclap"],
  ["Martyr", "martyr-of-the-sacred-beasts"],
  ["Raviel", "raviel"],
  ["Uria", "uria"],
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// "/a/b/" -> "../../", so a root-absolute target becomes relative to this page.
const upTo = (url) => "../".repeat((String(url || "/").match(/[^/]+\//g) || []).length);

function linkCards(text) {
  if (!text) return text;
  // `this.page` is the page being rendered; depth decides how many "../" a
  // CARD_TARGETS path needs. Non-arrow function so Eleventy can bind it.
  const up = upTo(this && this.page && this.page.url);
  const rel = (p) => up + p.slice(1);
  // Escape first (input is plain text), then splice anchors via placeholders so
  // a shorter alias can't match inside an already-linked longer one. Aliases are
  // escaped the same way so names with "&" (Droll & Lock Bird) still match.
  let out = esc(text);
  const slots = [];
  for (const [alias, id] of CARD_LINKS) {
    const ea = esc(alias);
    const i = out.indexOf(ea);
    if (i < 0) continue;
    const token = "\x00" + slots.length + "\x00";
    const t = CARD_TARGETS[id];
    const img = t && t.image ? ` data-img="${rel(t.image)}"` : "";
    slots.push(`<a class="clink" href="${t ? rel(t.href) : "#" + id}"${img}>${ea}</a>`);
    out = out.slice(0, i) + token + out.slice(i + ea.length);
  }
  return out.replace(/\x00(\d+)\x00/g, (_, n) => slots[n]);
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Google Search Console verification file — served verbatim at the site root.
  // Ignore it as a template so it isn't rendered into a page or the sitemap;
  // passthrough copy still emits the raw file Google fetches.
  eleventyConfig.addPassthroughCopy("src/google*.html");
  eleventyConfig.ignores.add("src/google*.html");
  eleventyConfig.ignores.add("src/assets/**/*.md");
  eleventyConfig.addFilter("linkcards", linkCards);
  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
