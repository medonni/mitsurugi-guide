import cardsData from "./cards.js";

// Interaction map data, organized ARCHETYPE-FIRST: for each matchup, which of
// your handtraps hits which of the opponent's cards. This is a scaffold, fill
// entries in as you verify them (same discipline as combos.js: unverified stays
// out). An empty `decks` list just renders the toolkit reference, so the page is
// always shippable.
//
// HOW TO ADD A MATCHUP
// --------------------
// Push an object to `decks`:
//
//   {
//     name: "Snake-Eye",
//     note: "Optional one-line read on how the matchup plays.",
//     entries: [
//       { card: "ash",
//         hits: "Snake-Eye Ash on Special Summon, the WATER search off Diabellstar",
//         note: "Best held for the Ash: their main deck-thinning search." },
//       { card: "droll", hits: "Locks them out after their first Snake-Eye add." },
//     ],
//   }
//
//   name    = opponent archetype (also the section anchor)
//   note    = optional matchup summary
//   entries = one per handtrap that hits something here; `card` is a handtrap id
//             from the toolkit below. `hits` = which of their cards it stops.
//             `note` = optional timing tip (your own card names auto-link).
// Only list handtraps that actually do something, order them by priority.

// Canonical handtrap order, used to sort the filter chips. Every id must exist
// in cards.js. What each one does lives on the /cards/ page, not repeated here.
const order = ["ash", "imperm", "nibiru", "droll", "fuwalos", "purulia", "dshifter"];

// Matchups. A block with an empty `entries` array renders a "not mapped yet"
// stub, so an archetype can go on the page before its targets are verified.
const decks = [
  {
    name: "Mitsurugi",
    note: "The mirror. Everything they do is on your own cards, so you know the chokepoints exactly.",
    entries: [
      { card: "ash",
        hits: "Their Habakiri hand reveal (Special Summons a Mitsurugi from the Deck), the Level 4 triggers on Aramasa, Saji and Kusanagi (all add from the Deck), Mitsurugi Ritual summoning from the Deck, and Mitsurugi Prayers.",
        note: "Habakiri's reveal is once per DUEL, so an Ash there can end their turn. If that's already gone, hit the Ritual-from-Deck or their first Level 4 search." },
      { card: "droll",
        hits: "Every add after their first: Saji into Mitsurugi Ritual, Prayers, and the Level 4 search chain.",
        note: "They search relentlessly, so Droll after the opening add strands the whole loop." },
      { card: "imperm",
        hits: "A resolved body: Murakumo's quick-effect negate, Futsu's on-summon response, or a Level 4 sitting on board.",
        note: "Best saved for the field. Most of their engine fires on tribute in the GY, where Imperm can't reach." },
      { card: "nibiru",
        hits: "The full line can cross five Special Summons through the double Ritual loop and the self-revives.",
        note: "But they can lead with tributes and sequence around the count, so treat it as situational, not a clean answer." },
      { card: "fuwalos",
        hits: "Their Ritual Summons from the Deck and the string of revivals each net you a draw.",
        note: "Good on the draw against their big turn." },
      { card: "dshifter",
        hits: "Very little: their on-Tribute effects resolve as the card is sent, and Kusanagi even recurs from banishment.",
        note: "Weak in the mirror, the same reason it's safe for you to run. Don't lean on it here." },
    ],
  },
  {
    name: "Kewl Tunes",
    entries: [],
  },
  {
    name: "Doomz",
    entries: [],
  },
  {
    name: "Branded",
    note: "A Fusion midrange deck that grinds from the GY and banishment. Few summons, heavy recursion.",
    entries: [
      { card: "ash",
        hits: "Branded Fusion, which sends Fallen of Albaz plus a Fusion Material from the Deck to the GY. Aluber's search on Normal Summon is also live.",
        note: "Branded Fusion is usually their whole turn, so an Ash there stops the Fusion outright." },
      { card: "droll",
        hits: "Their search chain off Aluber, Cartesia and the Branded Spells.",
        note: "Solid: they add several cards across a turn." },
      { card: "dshifter",
        hits: "The core loop: Albaz Fusions recur from the GY and Branded in Red banishes to Fusion Summon.",
        note: "One of your best answers here, it turns off their recursion for two turns." },
      { card: "nibiru",
        hits: "Rarely live: Branded is a low-summon Fusion deck that seldom reaches five Special Summons.",
        note: "Usually a dead draw in this matchup." },
    ],
  },
  {
    name: "Elfnote",
    entries: [],
  },
  {
    name: "Maliss",
    entries: [],
  },
  {
    name: "Light and Darkness Ritual",
    entries: [],
  },
  {
    name: "Blitzclique",
    entries: [],
  },
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Resolve a handtrap id to the fields the template needs (art, name, badges).
function card(id) {
  const c = cardsData.byId[id];
  if (!c) throw new Error(`matchups: unknown handtrap id "${id}"`);
  return { id, name: c.name, short: c.short, role: c.role, image: c.image, badges: c.badges, glyph: c.glyph, glyphColor: c.glyphColor };
}

const matchups = decks.map((d) => ({
  name: d.name,
  slug: slug(d.name),
  note: d.note || "",
  entries: (d.entries || []).map((e) => ({ ...card(e.card), hits: e.hits, note: e.note })),
}));
const documented = matchups.reduce((n, d) => n + d.entries.length, 0);

// Handtraps that actually appear in a matchup, in canonical order: the filter
// chips. No point offering a chip for a handtrap with nothing behind it.
const used = new Set(matchups.flatMap((d) => d.entries.map((e) => e.id)));
const traps = order.filter((id) => used.has(id)).map((id) => {
  const c = card(id);
  return { id, short: c.short, name: c.name };
});

export default { traps, matchups, documented };
