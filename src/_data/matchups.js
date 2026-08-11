import handtraps from "./handtraps.js";
import { DECKS, indexDeck } from "../_lib/card-index.js";

// Interaction map, organized THREAT-FIRST: for each matchup, the opponent cards
// that actually decide the game, and for each one, which of your handtraps
// answers it and when. This is a scaffold, fill entries in as you verify them
// (same discipline as combos.js: unverified stays out). An empty `threats` list
// renders a "not mapped yet" stub, so a matchup is always shippable.
//
// WHY THREAT-FIRST. The reader arrives mid-game with a specific question: "they
// just resolved <card>, do I have an answer?" That makes the opponent's card the
// lookup key, and card ART the fastest way to hit it, which is why every threat
// renders its real card image. The old shape was handtrap-first (one row per
// handtrap, opponent cards listed in prose), which answered the rarer question
// and forced a reader to scan seven prose blocks for a card name. The reverse
// lookup ("I'm holding Ash, where does it go?") is not lost: the handtrap filter
// chips rebuild it on demand, and now they filter individual answers.
//
// Handtraps are shared across every deck in this guide, so this page is too: it
// lives under /handtraps/ and reads handtraps.js rather than any one deck's
// card list. What a handtrap DOES is documented on /handtraps/; this page only
// records where it lands.
//
// HOW TO ADD A MATCHUP
// --------------------
// Push an object to `decks`:
//
//   {
//     name: "Snake-Eye",
//     note: "Optional one-line read on how the matchup plays.",
//     threats: [
//       { deck: "mitsurugi", card: "habakiri", does: "The starter",
//         answers: [
//           { trap: "ash", when: "Why here, and when to fire it." },
//           { trap: "droll", blank: true, when: "Why it does nothing here." },
//         ] },
//     ],
//     dead: [{ trap: "purulia", why: "Why it's blank in this whole matchup." }],
//   }
//
//   threats[].deck  = "mitsurugi" | "fiendsmith" | "sacredBeasts", the deck data
//                     file the card lives in. Supplies name, art and a link to
//                     that card's compendium entry, so nothing is retyped here.
//                     Omit BOTH `deck` and `card` for an opponent card this site
//                     doesn't document (e.g. Branded); pass a literal `name` and
//                     it renders with the striped art placeholder instead.
//   threats[].does  = short caption: what the card does FOR THEM, i.e. why it is
//                     on this list at all. Not the card's type line.
//   answers[].trap  = a handtrap id from handtraps.js.
//   answers[].blank = this handtrap specifically does NOT answer this card, and
//                     a reader would reasonably expect it to. Renders as a BLANK
//                     verdict rather than being omitted, because "Ash doesn't
//                     stop Thunderclap" is the single most useful thing on the
//                     Sacred Beasts block: it's what stops you holding a dead
//                     card. Filters exactly like a normal answer, so filtering to
//                     ASH shows both where it lands and where it whiffs.
//   dead            = handtraps blank across the WHOLE matchup, belonging to no
//                     single card ("don't side this"). Deck-level, so it has
//                     nowhere to live in a threat row, but it's the most
//                     actionable line on the page when you're building a side.

// Canonical handtrap order, used to sort the filter chips. Every id must exist
// in handtraps.js.
const order = ["ash", "imperm", "nibiru", "droll", "fuwalos", "purulia", "dshifter"];

// Card pools keyed by the `deck` value a threat uses, indexed id -> card with
// its own anchor. Both the pool list and the indexing live in
// src/_lib/card-index.js, shared with the `linkcards` filter, so reading the
// deck files rather than restating card names here means a renamed or re-arted
// card updates this page for free (the three Sacred Beast Level 10s were
// renamed once already) and there is no second place to register a deck.
const cardIndex = Object.fromEntries(
  Object.entries(DECKS).map(([key, deck]) => [key, indexDeck(deck)]),
);

// Matchups. A block with an empty `threats` array renders a "not mapped yet"
// stub, so an archetype can go on the page before its targets are verified.
const decks = [
  {
    name: "Mitsurugi",
    note: "The mirror. Everything they do is on your own cards, so you know the chokepoints exactly. Almost all of it resolves on tribute, from the GY, which is where most of your interaction cannot reach.",
    threats: [
      { deck: "mitsurugi", card: "habakiri", does: "The starter · once per duel",
        answers: [
          { trap: "ash", when: "The hand reveal Special Summons a Mitsurugi from the Deck, and that reveal is once per DUEL, not per turn. An Ash here can end their turn outright, which makes it the single best target in the matchup." },
        ] },
      { deck: "mitsurugi", card: "saji", does: "The first search off Habakiri",
        answers: [
          { trap: "ash", when: "Adds from the Deck. Most pilots hold for this rather than the Habakiri reveal: same chain, one step later, and it's the target they can't chain-block." },
          { trap: "droll", when: "Their opening add. Land it here and Mitsurugi Ritual, Prayers and the rest of the Level 4 chain all stay in the Deck." },
        ] },
      { deck: "mitsurugi", card: "ritual", does: "Ritual Summons using Deck material",
        answers: [
          { trap: "ash", when: "It tributes from the Deck and can summon from there too, so the whole activation is live for Ash." },
          { trap: "fuwalos", when: "Every Ritual Summon off this, plus the self-revive each tributed monster gets, is another draw." },
        ] },
      { deck: "mitsurugi", card: "prayers", does: "Search plus revive, 800 LP",
        answers: [
          { trap: "ash", when: "Adds from the Deck. Worth more than it looks: this is also the card they set and fire on YOUR turn to wipe your board, so stopping the main-phase activation removes both jobs." },
          { trap: "droll", when: "Turns off the add half and leaves them the revive only." },
        ] },
      { deck: "mitsurugi", card: "murakumo", does: "Wipes your board on Special Summon",
        answers: [
          { trap: "imperm", when: "One of the few genuinely live targets: its quick-effect negate sits on the field, where Imperm can reach. Save it for a body rather than trying to catch the engine." },
        ] },
      { deck: "mitsurugi", card: "futsu", does: "3400 DEF wall, their end board",
        answers: [
          { trap: "imperm", when: "Same reasoning as Murakumo. Hit what is actually on the field, because the on-tribute effects all resolve from the GY." },
        ] },
    ],
    dead: [
      { trap: "dshifter", why: "Very little to turn off. Their on-Tribute effects resolve as the card is sent, not from the GY afterwards, and Kusanagi even recurs from banishment. Weak in the mirror, which is exactly why it's safe for you to run." },
      { trap: "nibiru", why: "The double Ritual loop and the self-revives can cross five, but they lead with tributes and can sequence around the count. Situational, never a clean answer." },
    ],
  },
  {
    name: "Fiendsmith",
    note: "One long chain off one card, and almost all of it routes through the GY. Nothing here is a floodgate, so if you let the line finish you're looking at a Desirae with two negates that you cannot target.",
    threats: [
      { deck: "fiendsmith", card: "fiendsmiths-tract", does: "A search now, a Fusion later",
        answers: [
          { trap: "ash", when: "The highest-value hit in the matchup: Tract searches on activation and banishes itself from the GY to Fusion Summon later, so one Ash costs them two cards." },
          { trap: "droll", when: "Only worth it if they lead on Tract. This line makes two adds, so Droll on the first costs them Fiendsmith's Sanct." },
        ] },
      { deck: "fiendsmith", card: "fiendsmith-engraver", does: "The battery, revives itself",
        answers: [
          { trap: "ash", when: "Its hand discard adds from the Deck." },
          { trap: "dshifter", when: "The GY effect is the engine: Engraver revives itself by shuffling any other LIGHT Fiend out of the GY, and every spent Link is one. Under Shifter it never gets there." },
        ] },
      { deck: "fiendsmith", card: "fiendsmiths-requiem", does: "Link 1 into a Deck Summon",
        answers: [
          { trap: "ash", when: "Tributing Requiem Special Summons a Fiendsmith from the Deck. If Tract already resolved, this is the window the rest of the line hangs on." },
          { trap: "imperm", when: "Fire it here, while Requiem is still a monster on the field. This is the last clean Imperm target in the whole line." },
        ] },
      { deck: "fiendsmith", card: "lacrima-the-crimson-tears", does: "Deck-to-GY send, then a free body",
        answers: [
          { trap: "ash", when: "Its summon trigger sends from the Deck." },
          { trap: "dshifter", when: "It also shuffles itself back from the GY on your turn to revive a Fiendsmith Link. Shifter takes that follow-up away too." },
        ] },
      { deck: "fiendsmith", card: "fabled-lurrie", does: "A free LIGHT Fiend off a discard",
        answers: [
          { trap: "dshifter", when: "The cleanest illustration of why Shifter is the best card here. Lurrie only Special Summons itself if it is discarded to the GY: under Shifter it never arrives, so it never triggers at all." },
        ] },
      { deck: "fiendsmith", card: "fiendsmiths-sequence", does: "The Link 2 one step before the payoff",
        answers: [
          { trap: "nibiru", when: "You cross five Special Summons exactly as Sequence hits the board, one summon before Desirae. Tribute here: waiting does not buy a better window." },
          { trap: "fuwalos", when: "Roughly four draws through a full Tract line, counting Requiem, the Deck summon, this, and the Fusion. Engraver reviving itself out of the GY is NOT one of them: that's neither Deck nor Extra Deck." },
        ] },
      { deck: "fiendsmith", card: "fiendsmiths-sanct", does: "Makes a Token out of nothing",
        answers: [
          { trap: "ash", blank: true, when: "Sanct does not add, Special Summon, or send from the Deck, it just makes a Token, and a Token is all Requiem asks for. A pilot who opens on Sanct instead of Tract is baiting your Ash onto the Requiem tribute, where losing it costs them far less." },
        ] },
      { deck: "fiendsmith", card: "fiendsmiths-desirae", does: "Two negates, cannot be targeted",
        answers: [
          { trap: "imperm", blank: true, when: "If the line reaches here your handtraps are finished. Sequence equips immediately on the Fusion, and the equip is what makes Desirae untargetable, so there is no window in between." },
        ] },
    ],
    dead: [
      { trap: "purulia", why: "Fiendsmith summons from the Deck, the GY and the Extra Deck, essentially never from the hand. Side Mulcharmy Fuwalos instead." },
    ],
  },
  {
    name: "Sacred Beasts",
    note: "Post-CORI this deck barely searches its way to a board, it PLACES its way there, and placing is neither adding nor summoning nor sending. That turns off half your usual handtraps. Hold for the Fallen Paradise activations, not for the placements.",
    threats: [
      { deck: "sacredBeasts", card: "sacred-beasts-released", does: "One card into three bosses",
        answers: [
          { trap: "ash", when: "One card into three, and Ash makes it nothing. The best Ash target in the matchup by a distance." },
          { trap: "droll", when: "Resolving this loads their hand with all three Level 10s; Droll then turns off every one of their reveal searches. Hold it for a hand that leads here." },
        ] },
      { deck: "sacredBeasts", card: "sacred-beasts-thunderclap", does: "Places itself, then the Field Spell",
        answers: [
          { trap: "ash", blank: true, when: "It places two more copies of itself and Fallen Paradise from the Deck. Placing a card face-up is not adding, not Special Summoning, and not sending to the GY, so there is nothing for Ash to negate." },
          { trap: "droll", blank: true, when: "Blank for the same reason: placing is not adding. A pilot who opens on Thunderclap instead of Released reaches their Field Spell and their first Fallen Paradise activation without ever exposing a search." },
        ] },
      { deck: "sacredBeasts", card: "fallen-paradise-of-the-sacred-beasts", does: "Up to three Summons a turn",
        answers: [
          { trap: "ash", when: "Its Special Summon includes \"from the Deck\", so the activation is live. If Released is already gone, hold Ash for the first Fallen Paradise activation." },
          { trap: "fuwalos", when: "Up to three Deck summons off this card alone, and around six draws across a full line. The best Mulcharmy in the matchup by a wide margin." },
          { trap: "imperm", blank: true, when: "Whatever it summons is unaffected by your opponent's activated Spell/Trap effects, and Impermanence is a Trap from either hand or field. It cannot touch a beast that came off the Field Spell, which is a real reason they sequence this first." },
        ] },
      { deck: "sacredBeasts", card: "martyr-of-the-sacred-beasts", does: "One body into three, plus a place",
        answers: [
          { trap: "ash", when: "The triple-summon pulls the other two copies from the Deck." },
          { trap: "imperm", when: "Hit it before it triples. The placement half resolves either way, so you're trading for the two extra bodies, not the Field Spell." },
        ] },
      { deck: "sacredBeasts", card: "chaotic-phantasmal-sacred-beasts", does: "5000 ATK, three negates a turn",
        answers: [
          { trap: "imperm", when: "This is where Imperm goes. It came from the Extra Deck rather than off Fallen Paradise, so it has none of that immunity. Save it for exactly this." },
          { trap: "nibiru", when: "Nibiru tributes rather than destroys, so its twice-per-turn destruction protection does not save it. You cross five summons around the third Martyr, well before this lands." },
        ] },
      { deck: "sacredBeasts", card: "uria", does: "Gains 1000 ATK per Trap in the GYs",
        answers: [
          { trap: "dshifter", when: "Keeps it at 0 ATK outright, since the boost counts Traps in both graveyards and Shifter stops either from filling." },
        ] },
      { deck: "sacredBeasts", card: "summoner-of-the-sacred-beasts", does: "Three summons from hand and GY",
        answers: [
          { trap: "dshifter", when: "Two of its three effects summon from or banish out of the GY. Shifter leaves it with the hand mode only." },
          { trap: "ash", blank: true, when: "Summoner only summons from the hand or the GY, never from the Deck, so there is no Ash window on any of its three effects." },
        ] },
      { deck: "sacredBeasts", card: "sacred-beasts-combined-assault", does: "Summon, negate, then Fusion later",
        answers: [
          { trap: "dshifter", when: "Both halves run through the GY: the summon-from-GY and the banish-itself-to-Fusion that brings back the Fusion boss on a later turn." },
        ] },
    ],
    dead: [
      { trap: "purulia", why: "The deck prefers Deck and GY sources; hand summons off Summoner are the exception, not the plan. Take Fuwalos." },
    ],
  },
  {
    name: "Branded",
    note: "A Fusion midrange deck that grinds out of the GY and banishment. Few summons, heavy recursion, so the handtraps that punish long summon chains are the ones that disappoint here.",
    threats: [
      { name: "Branded Fusion", does: "Usually their entire turn",
        answers: [
          { trap: "ash", when: "It sends Fallen of Albaz plus a Fusion Material from the Deck to the GY. Ash stops the Fusion outright, and this is typically the whole turn, so it's the hit that matters." },
        ] },
      { name: "Aluber the Jester of Despia", does: "Normal Summon search",
        answers: [
          { trap: "ash", when: "Adds a Branded Spell/Trap on Normal Summon." },
          { trap: "droll", when: "Their search chain runs through Aluber, Cartesia and the Branded Spells, so they add several cards across a turn." },
        ] },
      { name: "Branded in Red", does: "Banishes from the GY to Fusion Summon",
        answers: [
          { trap: "dshifter", when: "One of your best answers in the matchup. The Albaz Fusions recur from the GY and this banishes out of it to Fusion Summon, so Shifter turns off their recursion for two turns." },
        ] },
    ],
    dead: [
      { trap: "nibiru", why: "Branded is a low-summon Fusion deck that seldom reaches five Special Summons. Usually a dead draw in this matchup." },
    ],
  },
  { name: "Kewl Tunes", threats: [] },
  { name: "Doomz", threats: [] },
  { name: "Elfnote", threats: [] },
  { name: "Maliss", threats: [] },
  { name: "Light and Darkness Ritual", threats: [] },
  { name: "Blitzclique", threats: [] },
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Resolve a handtrap id to the fields the template needs (art + names).
function trap(id) {
  const c = handtraps.byId[id];
  if (!c) throw new Error(`matchups: unknown handtrap id "${id}"`);
  return { id, name: c.name, short: c.short, image: c.image };
}

// Resolve a threat to its card art and compendium link. An opponent card this
// site doesn't document (no `deck`) keeps its literal name and renders with the
// placeholder, rather than being dropped or given someone else's art.
function threatCard(t) {
  if (!t.deck) return { name: t.name, image: null, href: null };
  const deck = cardIndex[t.deck];
  if (!deck) throw new Error(`matchups: unknown deck "${t.deck}"`);
  const c = deck[t.card];
  if (!c) throw new Error(`matchups: unknown card "${t.card}" in deck "${t.deck}"`);
  return { name: c.name, image: c.image, href: c.href };
}

const matchups = decks.map((d) => ({
  name: d.name,
  slug: slug(d.name),
  note: d.note || "",
  threats: (d.threats || []).map((t) => ({
    ...threatCard(t),
    does: t.does,
    answers: (t.answers || []).map((a) => ({ ...trap(a.trap), when: a.when, blank: !!a.blank })),
  })),
  dead: (d.dead || []).map((x) => ({ ...trap(x.trap), why: x.why })),
}));

// Headline count: every discrete "this handtrap does / doesn't do something
// here" verdict on the page, blanks included. A blank is a finding, not a gap.
const documented = matchups.reduce(
  (n, d) => n + d.dead.length + d.threats.reduce((m, t) => m + t.answers.length, 0),
  0,
);
const threatCount = matchups.reduce((n, d) => n + d.threats.length, 0);

// Mapped matchups get a full block; the rest get one caption line naming them.
// They used to each render a gold diamond, a 28px heading, a collapse control,
// and "not mapped yet" TWICE, which put ~720px of six identical declarations of
// absence at the very end of the page. Weighting an empty archetype the same as
// a documented one is a lie about the page's contents, and it's the last thing
// a reader saw before the footer.
const mapped = matchups.filter((d) => d.threats.length);
const unmapped = matchups.filter((d) => !d.threats.length).map((d) => d.name);

// Handtraps that actually appear somewhere, in canonical order: the filter
// chips. No point offering a chip for a handtrap with nothing behind it.
const used = new Set(
  matchups.flatMap((d) => [
    ...d.dead.map((x) => x.id),
    ...d.threats.flatMap((t) => t.answers.map((a) => a.id)),
  ]),
);
const traps = order.filter((id) => used.has(id)).map(trap);

export default { traps, matchups: mapped, unmapped, documented, threatCount };
