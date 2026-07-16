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
];

// id -> art path (relative to /combos/). Card art is a fixed set; if a card's
// file/section changes, update here. Powers the hover/tap image preview.
const CARD_IMG = {
  murakumo: "main/murakumo", futsu: "main/futsu", habakiri: "main/habakiri",
  saji: "main/saji", aramasa: "main/aramasa", kusanagi: "main/kusanagi",
  ritual: "main/ritual", mirror: "main/mirror", prayers: "main/prayers",
  purification: "main/purification", preprep: "support/preprep",
  raggedrecords: "support/raggedrecords",
  ash: "nonengine/ash", droll: "nonengine/droll",
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function linkCards(text) {
  if (!text) return text;
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
    const img = CARD_IMG[id] ? ` data-img="../assets/cards/${CARD_IMG[id]}.webp"` : "";
    slots.push(`<a class="clink" href="../cards/#${id}"${img}>${ea}</a>`);
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
