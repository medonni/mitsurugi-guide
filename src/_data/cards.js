// Card compendium data. Ported from the design handoff (cardData()).
// Card names & effects © Konami — reference only.
//
// Image auto-wiring: drop a file at src/assets/cards/<section>/<id>.<ext>
// (jpg/png/webp/avif) and it gets picked up automatically as the card art.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// Lightest formats win when multiple exist for one card.
const EXTS = ["avif", "webp", "png", "jpg", "jpeg"];

function findImage(section, id) {
  for (const ext of EXTS) {
    const rel = `assets/cards/${section}/${id}.${ext}`;
    if (fs.existsSync(path.join(HERE, "..", rel))) return "/" + rel;
  }
  return null;
}

const sections = [
  { key: "main", title: "Main Archetype Cards", tag: "the engine", dot: "#e0c46a",
    blurb: "The core Mitsurugi monsters, spells, and traps. Every monster has an on-Tribute trigger — this is where the deck's power lives." },
  { key: "support", title: "Supporting Cards", tag: "generic glue", dot: "#b98cff",
    blurb: "Non-Mitsurugi cards that specifically enable the engine — Ritual enablers and Reptile fodder that make the deck consistent." },
  { key: "nonengine", title: "Non-Engine Staples", tag: "interaction", dot: "#7fd8c6",
    blurb: "Format staples and handtraps you run to protect the combo and disrupt the opponent." },
  { key: "extra", title: "Extra Deck", tag: "toolbox", dot: "#cbb0ff",
    blurb: "Generic Extra Deck monsters you make off the deck's Level 4s to search or extend the engine." },
];

const cardData = [
  // ===== MAIN ARCHETYPE =====
  {
    id: "murakumo", section: "main", name: "Ame no Murakumo no Mitsurugi", short: "MURAKUMO", role: "Ritual Boss · Payoff",
    glyph: "叢", glyphColor: "#e0c46a", stat: "LV8 · 2600 / 800",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["FIELD", "On Special Summon: destroy ALL monsters your opponent controls — a built-in board wipe."],
      ["FIELD", "Quick Effect, once per turn: when the opponent activates a card/effect, they discard 1 or that effect is negated."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "Summon it with Mitsurugi Ritual to clear their board before you push for game.",
      "The negate is conditional — decks that WANT to discard (Dark World, Mermail) can pay it off. Respect the matchup.",
      "Its self-revive makes it resilient, but D.D. Crow can banish it in response to the tribute trigger to break the loop.",
    ],
  },
  {
    id: "futsu", section: "main", name: "Futsu no Mitama no Mitsurugi", short: "FUTSU", role: "Ritual Boss · Grind",
    glyph: "布", glyphColor: "#e0c46a", stat: "LV8 · 800 / 2600",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["FIELD", "When the opponent Special Summons: target a Reptile in your GY (except itself) to search, revive, or replay. Once per Chain."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "Your grind-game anchor — it keeps generating advantage off the opponent's own summons.",
      "End on Futsu + Murakumo together: a board wipe, a negate, a swarm, and full recursion.",
      "\"Once per Chain\" means fire it early in a Chain so it doesn't get stranded.",
    ],
  },
  {
    id: "habakiri", section: "main", name: "Ame no Habakiri no Mitsurugi", short: "HABAKIRI", role: "Ritual Boss · Starter",
    glyph: "羽", glyphColor: "#e0c46a", stat: "LV8 · 2500 / 900",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["HAND", "Reveal this card: Special Summon 1 Mitsurugi from Deck, then tribute 1 monster you control. Once per DUEL."],
      ["FIELD", "Monsters your opponent controls lose 800 ATK (lingering while it's on the field)."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "The deck's best starter — the hand reveal turns one card into a full combo. Run 3.",
      "The reveal is once per Duel, so an Ash Blossom on it can end your game. Bait handtraps or protect it first.",
      "Tribute the summoned monster right away so its effect can't be negated on the field.",
    ],
  },
  {
    id: "aramasa", section: "main", name: "Mitsurugi no Mikoto, Aramasa", short: "ARAMASA", role: "Lv4 Searcher",
    glyph: "荒", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["ON TRIBUTE", "If Normal/Special Summoned OR tributed: add 1 Mitsurugi monster from Deck (except itself)."],
      ["FIELD", "If another Reptile you control would be destroyed by battle or effect, tribute this card instead (protection)."],
    ],
    tips: [
      "Usually the first link of the combo — search Habakiri to snowball everything.",
      "The protection tribute doubles as a free on-Tribute search when your board is attacked.",
    ],
  },
  {
    id: "saji", section: "main", name: "Mitsurugi no Mikoto, Saji", short: "SAJI", role: "Lv4 Spell/Trap Searcher",
    glyph: "早", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["DECK", "If Summoned or tributed: add 1 Mitsurugi Spell/Trap from your Deck to hand."],
      ["ON TRIBUTE", "Same trigger fires when Saji is used as tribute material — search on the way out."],
    ],
    tips: [
      "Your Spell/Trap searcher — grabs Mitsurugi Ritual to turn the engine on.",
      "The closest thing the deck has to a normal searcher; run 1–3 copies.",
    ],
  },
  {
    id: "kusanagi", section: "main", name: "Mitsurugi no Mikoto, Kusanagi", short: "KUSANAGI", role: "Lv4 Recursion",
    glyph: "草", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["GY", "If Summoned or tributed: add 1 Mitsurugi card from your GY or banishment (NOT the Deck) back to hand."],
      ["FIELD", "Helps protect your other Reptile monsters from destruction."],
    ],
    tips: [
      "The grind-game recovery piece — recycles used resources instead of thinning the Deck.",
      "Best triggered by Tribute in the late game; usually just 1 copy.",
    ],
  },
  {
    id: "ritual", section: "main", name: "Mitsurugi Ritual", short: "RITUAL SPELL", role: "Ritual Spell · Core",
    glyph: "儀", glyphColor: "#7fd8c6", stat: "Ritual Spell",
    badges: ["Spell", "Ritual"],
    zones: [
      ["DECK", "Ritual Summon 1 Reptile Ritual from your DECK, tributing Reptiles from hand/field. Once per turn."],
      ["HAND", "Ritual Summon 1 Reptile Ritual from your HAND, tributing up to 2 Reptiles from hand/Deck/field. Once per turn."],
    ],
    tips: [
      "The single most important card in the deck — run 3. Both modes are once per turn, so you can Ritual twice.",
      "Summoning from Deck is an Ash Blossom chokepoint; hold an extender or bait it.",
      "Requires exact Levels — the Level 4s and Level 8 bosses (and Ogdoadic) line up perfectly.",
    ],
  },
  {
    id: "prayers", section: "main", name: "Mitsurugi Prayers", short: "PRAYERS", role: "Quick-Play · Extend",
    glyph: "祈", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["DECK", "Tribute 1 Reptile from hand or field, then add 1 Mitsurugi monster from your Deck."],
      ["GY", "In sequence, you can then Special Summon 1 Mitsurugi monster from your hand or GY."],
    ],
    tips: [
      "Recursion and extension in one card — your main tool to rebuild after disruption.",
      "Tributing a Reptile to pay the cost fires its on-Tribute trigger too. Value stacks.",
    ],
  },
  {
    id: "magatama", section: "main", name: "Mitsurugi Magatama", short: "MAGATAMA", role: "Quick-Play · Removal",
    glyph: "勾", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["FIELD", "Tribute 1 Reptile, then target and destroy 1 face-up card your opponent controls."],
      ["HAND", "OR Ritual Summon 1 Mitsurugi Ritual from your hand by tributing monsters you control. Once per turn."],
    ],
    tips: [
      "A Quick-Play, so it dodges Droll and gives you interaction on the opponent's turn.",
      "The tribute cost fires a Reptile's on-Tribute effect — removal that plusses.",
    ],
  },
  {
    id: "mirror", section: "main", name: "Mitsurugi Mirror", short: "MIRROR", role: "Ritual Spell · Enabler",
    glyph: "鏡", glyphColor: "#7fd8c6", stat: "Ritual Spell",
    badges: ["Spell", "Ritual"],
    zones: [
      ["HAND", "A second Ritual Spell that NAMES the three ritual bosses — so Pre-Preparation of Rites can search it."],
      ["GY", "Shuffles itself back into the Deck when a Mitsurugi monster is tributed while it's in the GY."],
    ],
    tips: [
      "Mostly played to make Pre-Preparation of Rites live — it's the key to a searchable Ritual Spell.",
      "Its GY float means casting it early isn't a dead card later on.",
    ],
  },
  {
    id: "purification", section: "main", name: "Mitsurugi Great Purification", short: "PURIFICATION", role: "Trap · Negate",
    glyph: "祓", glyphColor: "#7fd8c6", stat: "Trap Card",
    badges: ["Trap", "Normal"],
    zones: [
      ["FIELD", "Tribute 1 Level 5+ Ritual Monster: negate the activation of any card/effect and destroy it (omni-negate)."],
      ["GY", "Banish this from the GY: revive 1 Reptile from your GY by tributing another monster you control."],
    ],
    tips: [
      "A \"win-more\" omni-negate — devastating when ahead, clunky when you're behind.",
      "The GY revive tributes a monster (another trigger) and reloads your board.",
    ],
  },
  // ===== SUPPORTING =====
  {
    id: "preprep", section: "support", name: "Pre-Preparation of Rites", short: "PRE-PREP", role: "Normal Spell · Extender",
    glyph: "備", glyphColor: "#b98cff", stat: "Normal Spell",
    badges: ["Spell", "Generic"],
    zones: [
      ["DECK", "Add 1 Ritual Spell + 1 matching Ritual Monster from your Deck to your hand, in one card."],
    ],
    tips: [
      "Only lives because Mitsurugi Mirror names the bosses — it grabs Mirror + a Ritual boss together.",
      "A powerful one-card extender that opens multiple combo lines.",
    ],
  },
  {
    id: "nightsword", section: "support", name: "Night Sword Serpent", short: "NIGHT SWORD", role: "Lv4 Reptile Fodder",
    glyph: "夜", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect"],
    zones: [
      ["DECK", "A Level-4 Reptile body you can send or summon to serve as Ritual material."],
      ["FIELD", "Extra Reptile presence for tributes and Rank 4 plays."],
    ],
    tips: [
      "Cheap Reptile fodder when you need bodies for Mitsurugi Ritual's exact Levels.",
      "Flexible filler in more Reptile-focused builds.",
    ],
  },
  {
    id: "lamia", section: "support", name: "Lamia", short: "LAMIA", role: "Lv4 Reptile · Boss Searcher",
    glyph: "妖", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["DECK", "On Normal/Special Summon: add 1 Level 8 Reptile from your Deck — grabs a Mitsurugi boss directly. Once per turn."],
      ["GY", "If banished: give 1 Reptile you control effect-destruction protection until the end of the next turn. Once per turn."],
    ],
    tips: [
      "A DARK Reptile that fetches Murakumo, Futsu, or Habakiri on summon — and is Ritual fodder itself.",
      "The banish trigger fires off any banish cost or discard, shielding a boss for free.",
    ],
  },
  {
    id: "manju", section: "support", name: "Manju of the Ten Thousand Hands", short: "MANJU", role: "Lv4 · Ritual Searcher",
    glyph: "萬", glyphColor: "#b98cff", stat: "LV4 · Fairy",
    badges: ["LIGHT", "Fairy", "Effect", "Level 4"],
    zones: [
      ["DECK", "When Normal or Flip Summoned: add 1 Ritual Monster OR 1 Ritual Spell from your Deck to hand."],
    ],
    tips: [
      "A generic one-card starter — grab Habakiri or Mitsurugi Ritual off a Normal Summon.",
      "It uses your Normal Summon, so sequence it before Saji/Aramasa lines that also want the summon.",
    ],
  },
  {
    id: "raggedrecords", section: "support", name: "Ragged Records of Rites", short: "RAGGED RECORDS", role: "Normal Spell · Searcher",
    glyph: "録", glyphColor: "#b98cff", stat: "Normal Spell",
    badges: ["Spell", "Ritual", "Generic"],
    zones: [
      ["DECK", "Reveal 1 Ritual Spell (hand or Deck), then add 1 monster from Deck that mentions it — Mirror grabs a boss. Once per turn."],
      ["GY", "If a Ritual Monster you control leaves by effect (and you control only Ritual Monsters): add this back from GY. Once per turn."],
    ],
    tips: [
      "Live because Mitsurugi Mirror names the bosses — reveal Mirror to add a Ritual boss, same idea as Pre-Prep.",
      "The GY recur fires when your own boss is tributed, so it keeps refunding itself.",
    ],
  },
  {
    id: "dshifter", section: "support", name: "Dimension Shifter", short: "DIM. SHIFTER", role: "Handtrap · GY Hate",
    glyph: "次", glyphColor: "#b98cff", stat: "LV6 · Handtrap",
    badges: ["DARK", "Spellcaster", "Effect", "Level 6"],
    zones: [
      ["HAND", "If your GY is empty (Quick Effect): send this from hand to GY — until the end of the next turn, cards sent to the GY are banished instead."],
    ],
    tips: [
      "Disruptive tech that turns off Graveyard strategies before they start — best opened turn one on an empty GY.",
      "Double-edged: it also banishes YOUR GY plays (Kusanagi, Futsu, Prayers), so run it in builds that lean on Deck/hand, not GY loops.",
    ],
  },
  // ===== NON-ENGINE =====
  {
    id: "ash", section: "nonengine", name: "Ash Blossom & Joyous Spring", short: "ASH", role: "Handtrap",
    glyph: "灰", glyphColor: "#7fd8c6", stat: "LV3 · Handtrap",
    badges: ["FIRE", "Zombie", "Tuner"],
    zones: [
      ["HAND", "Discard: negate a card that adds from Deck, Special Summons from Deck, or sends Deck-to-GY."],
    ],
    tips: [
      "The universal handtrap and your best answer to an opposing Mitsurugi Ritual.",
      "Remember your own Ritual-from-Deck is Ash-able too — sequence to bait theirs.",
    ],
  },
  {
    id: "nibiru", section: "nonengine", name: "Nibiru, the Primal Being", short: "NIBIRU", role: "Handtrap",
    glyph: "星", glyphColor: "#7fd8c6", stat: "LV11 · Handtrap",
    badges: ["LIGHT", "Rock"],
    zones: [
      ["HAND", "After the opponent's 5th+ summon this turn: tribute ALL monsters both players control, gain a token."],
    ],
    tips: [
      "Wrecks a pure Mitsurugi endboard mid-combo — a real threat to their whole plan.",
      "Careful: they can discard Nibiru to Murakumo's negate and dodge it. Timing matters.",
      "Easily searchable — it's a Rock, so <a href=\"#granite\">Gallant Granite</a> tutors it straight from the Deck, making the handtrap far more consistent.",
    ],
  },
  {
    id: "imperm", section: "nonengine", name: "Infinite Impermanence", short: "IMPERM", role: "Handtrap / Trap",
    glyph: "無", glyphColor: "#7fd8c6", stat: "Trap Card",
    badges: ["Trap", "Normal"],
    zones: [
      ["HAND", "From hand (if you control no cards): negate a face-up monster's effects."],
      ["FIELD", "If Set, also nullifies other Spell/Trap effects in that column this turn."],
    ],
    tips: [
      "Flexible interaction that works from hand on an empty board — great on the draw.",
      "Set it to threaten column lockdown against backrow-reliant decks.",
    ],
  },
  {
    id: "cbtg", section: "nonengine", name: "Called by the Grave", short: "CALLED BY", role: "Quick-Play · Protection",
    glyph: "墓", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["HAND", "Banish 1 monster in either GY; if it's a handtrap, negate its effects for the turn."],
      ["FIELD", "Your main protection for the fragile combo against Ash, Maxx \"C\", and more."],
    ],
    tips: [
      "Point it at their handtrap so your once-per-Duel Habakiri reveal resolves safely.",
      "Also neuters graveyard effects that would break your loops.",
    ],
  },
  // ===== EXTRA DECK =====
  {
    id: "granite", section: "extra", name: "Gallant Granite", short: "GRANITE", role: "Rank 4 Xyz · Rock Searcher",
    glyph: "岩", glyphColor: "#cbb0ff", stat: "R4 · 2300 / 1800",
    badges: ["EARTH", "Rock", "Xyz", "Rank 4"],
    zones: [
      ["FIELD", "2 Level 4 monsters. Detach 1 material: add 1 Rock from Deck to hand, OR Special Summon 1 Rock from hand face-down. Once per turn."],
    ],
    tips: [
      "Made off any two Level 4s — the Mikoto searchers (Aramasa/Saji/Kusanagi) line up for it.",
      "Its Rock search grabs <a href=\"#nibiru\">Nibiru</a> from the Deck, turning a situational brick into a reliable disruption target.",
    ],
  },
];

const synergy = [
  { name: "Ogdoadic", dot: "#7fd8c6", rating: "S-TIER", body: "The best partner. Ogdoadic tributes field monsters to revive from the GY — free-triggering your Mitsurugi on-Tribute effects. Shared Level 8s also open Rank 8 plays." },
  { name: "Ryzeal", dot: "#b98cff", rating: "STRONG", body: "A Rank-4 engine adding consistent starters and generic Xyz access to Habakiri. A high-power hybrid, though it pushes the balance ceiling." },
  { name: "Dogmatika / Drytron", dot: "#e0c46a", rating: "FLEX", body: "Ritual-adjacent shells that share the subtheme and lean on Mitsurugi's flexible summoning to run the snakes as a splashable engine." },
];

// Attach detected image path, then group cards by section.
for (const c of cardData) c.image = findImage(c.section, c.id);

const groups = sections.map((s) => ({
  ...s,
  cards: cardData.filter((c) => c.section === s.key),
}));

export default { groups, synergy, total: cardData.length };
