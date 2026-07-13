// Card compendium data. Ported from the design handoff (cardData()).
// Card names & effects © Konami: reference only.
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
    blurb: "The core Mitsurugi monsters, spells, and traps. Every monster has an on-Tribute trigger: this is where the deck's power lives." },
  { key: "support", title: "Supporting Cards", tag: "generic glue", dot: "#b98cff",
    blurb: "Non-Mitsurugi cards that specifically enable the engine: Ritual enablers and Reptile fodder that make the deck consistent." },
  { key: "nonengine", title: "Non-Engine Staples", tag: "interaction", dot: "#7fd8c6",
    blurb: "Format staples and handtraps you run to protect the combo and disrupt the opponent." },
  { key: "extra", title: "Extra Deck", tag: "toolbox", dot: "#cbb0ff",
    blurb: "Generic Extra Deck monsters you make off the deck's Level 4s to search or extend the engine." },
];

const cardData = [
  // ===== MAIN ARCHETYPE =====
  {
    id: "murakumo", section: "main", name: "Ame no Murakumo no Mitsurugi", short: "MURAKUMO", role: "Ritual Boss · Payoff",
    glyph: "叢", glyphColor: "#e0c46a", stat: "LV8 · 3200 / 800",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["FIELD", "On Special Summon: destroy ALL monsters your opponent controls: a built-in board wipe."],
      ["FIELD", "Quick Effect, once per turn: when the opponent activates a card/effect, they discard 1 or that effect is negated."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "Summon it with Mitsurugi Ritual to clear their board before you push for game.",
      "The negate is conditional: decks that WANT to discard (Dark World, Mermail) can pay it off. Respect the matchup.",
      "Ash Blossom is the common answer to the on-Tribute effect: negating the search also cancels the self-revive, since both resolve as one effect. The same is true for all three bosses.",
      "Set Mitsurugi Prayers and activate it on the opponent's turn to Special Summon Murakumo from your hand or GY, dropping its board wipe like a surprise Raigeki.",
    ],
  },
  {
    id: "futsu", section: "main", name: "Futsu no Mitama no Mitsurugi", short: "FUTSU", role: "Ritual Boss · Grind",
    glyph: "布", glyphColor: "#e0c46a", stat: "LV8 · 2000 / 3400",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["FIELD", "When the opponent Special Summons: target a Reptile in your GY (except itself) to search, revive, or replay. Once per Chain."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "Your grind-game anchor: it keeps generating advantage off the opponent's own summons.",
      "End on Futsu + Murakumo together: a board wipe, a negate, a swarm, and full recursion.",
      "\"Once per Chain\" means fire it early in a Chain so it doesn't get stranded.",
    ],
  },
  {
    id: "habakiri", section: "main", name: "Ame no Habakiri no Mitsurugi", short: "HABAKIRI", role: "Ritual Boss · Starter",
    glyph: "羽", glyphColor: "#e0c46a", stat: "LV8 · 2400 / 1800",
    badges: ["DARK", "Reptile", "Ritual", "Level 8"],
    zones: [
      ["HAND", "Reveal this card: Special Summon 1 Mitsurugi from Deck, then tribute 1 monster you control. Once per DUEL."],
      ["FIELD", "Monsters your opponent controls lose 800 ATK (lingering while it's on the field)."],
      ["ON TRIBUTE", "Add 1 Mitsurugi card from Deck (except itself), then Special Summon this card back."],
    ],
    tips: [
      "The deck's best starter: the hand reveal turns one card into a full combo. It's Limited, so you're capped at 1 copy.",
      "The reveal is once per Duel, so an Ash Blossom on it can end your game. Bait handtraps or protect it first.",
      "Tribute the summoned monster right away so its effect can't be negated on the field.",
    ],
  },
  {
    id: "aramasa", section: "main", name: "Mitsurugi no Mikoto, Aramasa", short: "ARAMASA", role: "Lv4 Searcher",
    glyph: "荒", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["TRIGGER", "If Normal/Special Summoned or tributed: add 1 Mitsurugi monster from your Deck (except itself)."],
      ["FIELD", "If another Reptile you control would be destroyed by battle or effect, tribute this card instead (protection). Shared by all three Level 4 Mikoto monsters."],
    ],
    tips: [
      "A common way to open: Normal Summon it to search Habakiri and snowball from there.",
      "The protection tribute doubles as a free trigger, searching again when your board is attacked.",
    ],
  },
  {
    id: "saji", section: "main", name: "Mitsurugi no Mikoto, Saji", short: "SAJI", role: "Lv4 Spell/Trap Searcher",
    glyph: "早", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["TRIGGER", "If Normal/Special Summoned or tributed: add 1 Mitsurugi Spell/Trap from your Deck to your hand."],
      ["FIELD", "If another Reptile you control would be destroyed by battle or effect, tribute this card instead (protection). Shared by all three Level 4 Mikoto monsters."],
    ],
    tips: [
      "Your Spell/Trap searcher: grabs Mitsurugi Ritual to turn the engine on.",
      "Run just 1 copy: it's underwhelming drawn in hand, so you'd rather search or tribute it than open it.",
    ],
  },
  {
    id: "kusanagi", section: "main", name: "Mitsurugi no Mikoto, Kusanagi", short: "KUSANAGI", role: "Lv4 Recursion",
    glyph: "草", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["TRIGGER", "If Normal/Special Summoned or tributed: add 1 Mitsurugi card from your GY or banishment (not the Deck) back to your hand."],
      ["FIELD", "If another Reptile you control would be destroyed by battle or effect, tribute this card instead (protection). Shared by all three Level 4 Mikoto monsters."],
    ],
    tips: [
      "The grind-game recovery piece: recycles used resources instead of thinning the Deck.",
      "Best triggered by tribute in the late game; run just 1 copy.",
    ],
  },
  {
    id: "ritual", section: "main", name: "Mitsurugi Ritual", short: "RITUAL SPELL", role: "Ritual Spell · Core",
    glyph: "儀", glyphColor: "#7fd8c6", stat: "Ritual Spell",
    badges: ["Spell", "Ritual"],
    zones: [
      ["HAND", "Ritual Summon 1 Reptile Ritual from your DECK, tributing Reptiles from your hand or field. Once per turn."],
      ["HAND", "Ritual Summon 1 Reptile Ritual from your HAND, tributing up to 2 Reptiles from hand, Deck, or field. Once per turn."],
    ],
    tips: [
      "The single most important card in the deck: run 3 in Pure builds, usually 2 in hybrids. Both modes are once per turn, so you can Ritual twice.",
      "Summoning from Deck is an Ash Blossom chokepoint; hold an extender or bait it.",
      "Requires exact Levels: the Level 4s and the Level 8 bosses line up perfectly.",
      "If you run Night Sword Serpent, it can put a Reptile back on the field to refund fodder for the tribute cost.",
    ],
  },
  {
    id: "prayers", section: "main", name: "Mitsurugi Prayers", short: "PRAYERS", role: "Quick-Play · Extend",
    glyph: "祈", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["HAND", "Tribute 1 Reptile from your hand or field, then add 1 Mitsurugi monster from your Deck."],
      ["HAND", "Then, in sequence, you can Special Summon 1 Mitsurugi monster from your hand or GY."],
    ],
    tips: [
      "Recursion and extension in one card: your main tool to rebuild after disruption.",
      "Tributing a Reptile to pay the cost fires its on-Tribute trigger too. Value stacks.",
      "It can be a starter on its own: add Habakiri and get the combo going.",
      "Biggest trick: activate it during your Draw Phase, where Droll & Lock Bird can't stop the add from Deck.",
      "It is named on the bosses, so it can be searched by Ragged Records of Rites.",
    ],
  },
  {
    id: "magatama", section: "main", name: "Mitsurugi Magatama", short: "MAGATAMA", role: "Quick-Play · Removal",
    glyph: "勾", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["FIELD", "Tribute 1 Reptile, then target and destroy 1 face-up card your opponent controls."],
      ["HAND", "Ritual Summon 1 Mitsurugi Ritual from your hand by tributing monsters you control."],
    ],
    tips: [
      "A Quick-Play, so it gives you interaction on the opponent's turn.",
      "The tribute cost fires a Reptile's on-Tribute effect: removal that plusses.",
      "Once per turn."
    ],
  },
  {
    id: "mirror", section: "main", name: "Mitsurugi Mirror", short: "MIRROR", role: "Ritual Spell · Enabler",
    glyph: "鏡", glyphColor: "#7fd8c6", stat: "Ritual Spell",
    badges: ["Spell", "Ritual"],
    zones: [
      ["HAND", "Ritual Summon 1 Mitsurugi Ritual Monster from your hand or GY, tributing monsters from your hand or field. Once per turn."],
      ["GY", "When a Mitsurugi monster is tributed while this is in the GY: shuffle this card back into the Deck."],
    ],
    tips: [
      "It names the three bosses, so Pre-Preparation of Rites can search it, that's its main reason to run.",
      "The hand effect can revive a boss from the GY using field monsters as tribute, firing their on-Tribute triggers.",
      "Whether to run 1 or 2 copies is a hot topic: a second copy reduces the odds of bricking alongside Pre-Prep.",
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
      "A \"win-more\" omni-negate: devastating when ahead, clunky when you're behind.",
      "The GY revive tributes a monster (another trigger) and reloads your board.",
    ],
  },
  // ===== SUPPORTING =====
  {
    id: "preprep", section: "support", name: "Pre-Preparation of Rites", short: "PRE-PREP", role: "Normal Spell · Extender",
    label: "RITUAL ACCESS",
    glyph: "備", glyphColor: "#b98cff", stat: "Normal Spell",
    badges: ["Spell", "Generic"],
    zones: [
      ["HAND", "Add 1 Ritual Spell + 1 matching Ritual Monster from your Deck to your hand, in one card."],
    ],
    tips: [
      "In Mitsurugi it searches Mitsurugi Mirror plus a boss, so it only works while Mirror is still in the Deck.",
      "Drawing Mirror and Pre-Prep together is a brick, which is why many players run 2 Mirror to avoid it.",
      "One of the best cards in the deck: a clean +1, run 3.",
    ],
  },
  {
    id: "raggedrecords", section: "support", name: "Ragged Records of Rites", short: "RAGGED RECORDS", role: "Normal Spell · Searcher",
    glyph: "録", glyphColor: "#b98cff", stat: "Normal Spell",
    badges: ["Spell", "Ritual", "Generic"],
    zones: [
      ["HAND", "Reveal 1 Ritual Spell (hand or Deck), then add 1 monster from Deck that mentions ita. Once per turn."],
      ["GY", "If a Ritual Monster you control leaves by effect (and you control only Ritual Monsters): add this back from GY. Once per turn."],
    ],
    tips: [
      "Live because Mitsurugi Ritual is named on the bosses: reveal Ritual to add a Ritual boss, same idea as Pre-Prep.",
      "The GY recur fires when your own boss is tributed, so it keeps refunding itself.",
    ],
  },
  {
    id: "manju", section: "support", name: "Manju of the Ten Thousand Hands", short: "MANJU", role: "Lv4 · Ritual Searcher",
    glyph: "萬", glyphColor: "#b98cff", stat: "LV4 · Fairy",
    badges: ["LIGHT", "Fairy", "Effect", "Level 4"],
    zones: [
      ["FIELD", "When Normal or Flip Summoned: add 1 Ritual Monster OR 1 Ritual Spell from your Deck to hand."],
    ],
    tips: [
      "A generic one-card starter: grab Habakiri or Mitsurugi Ritual off a Normal Summon.",
      "It's LIGHT attribute which may not work if you play Dominus Impulse.",
      "It's not a Reptile, so it can't be tributed for Mitsurugi Ritual's cost, unlike Lamia.",
    ],
  },
  {
    id: "lamia", section: "support", name: "Lamia", short: "LAMIA", role: "Lv4 Reptile · Boss Searcher",
    label: "REPTILE ENGINE",
    glyph: "妖", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["FIELD", "On Normal/Special Summon: add 1 Level 8 Reptile from your Deck: grabs a Mitsurugi boss directly. Once per turn."],
      ["GY", "If banished: give 1 Reptile you control effect-destruction protection until the end of the next turn. Once per turn."],
    ],
    tips: [
      "A DARK Reptile that fetches Murakumo, Futsu, or Habakiri on summon, and is Ritual fodder itself.",
      "The banish trigger fires off any banish cost or discard, shielding a boss for free.",
      "Is a DARK attribute, so it works with Dominus Impulse."
    ],
  },
  {
    id: "nightsword", section: "support", name: "Night Sword Serpent", short: "NIGHT SWORD", role: "Lv4 Reptile Fodder",
    glyph: "夜", glyphColor: "#b98cff", stat: "LV4 · Reptile",
    badges: ["DARK", "Reptile", "Effect", "Level 4"],
    zones: [
      ["GY", "If sent to the GY by an effect of Mitsurugi Ritual, it special summons itself."],
      ["FIELD", "Extra Reptile presence for tributes and Rank 4 plays."],
    ],
    tips: [
      "Cheap Reptile fodder when you need bodies for Mitsurugi Ritual's exact Levels.",
      "Flexible filler in more Reptile-focused builds.",
      "Great for Rank 4 Xyz plays, since it can be summoned from the GY by Mitsurugi Ritual.",
    ],
  },
  // ===== NON-ENGINE =====
  {
    id: "extravagance", section: "nonengine", name: "Pot of Extravagance", short: "EXTRAVAGANCE", role: "Normal Spell · Draw",
    label: "DRAW & CONSISTENCY",
    glyph: "壺", glyphColor: "#7fd8c6", stat: "Normal Spell",
    badges: ["Spell", "Draw"],
    zones: [
      ["HAND", "Banish 3 or 6 random cards from your Extra Deck face-down; draw 1 or 2. You can't draw more cards by effects this turn."],
    ],
    tips: [
      "Must be activated at the start of MP1. If running additional card draw cards, you may draw this and not be able to activate it.",
      "Mitsurugi leans on the main deck, so its small Extra Deck is cheap to banish: close to a free draw 1 or 2.",
      "It fights the Extra Deck toolbox (Gallant Granite, Fiendsmith), so run it only if you can spare those pieces.",
    ],
  },
  {
    id: "prosperity", section: "nonengine", name: "Pot of Prosperity", short: "PROSPERITY", role: "Normal Spell · Dig",
    glyph: "繁", glyphColor: "#7fd8c6", stat: "Normal Spell",
    badges: ["Spell", "Dig"],
    zones: [
      ["HAND", "Banish 3 or 6 cards from your Extra Deck face-down; excavate that many from the top of your Deck, add 1 to your hand, send the rest to the bottom. No other draws that turn."],
    ],
    tips: [
      "Your opponent takes half the damage the turn you activate it, don't forget.",
      "Deck-fixing over raw cards: dig 6 to find your best starter or the missing combo piece.",
      "Same Extra Deck tension as Extravagance, so pick one Pot based on how much you lean on the toolbox.",
    ],
  },
  {
    id: "ttt", section: "nonengine", name: "Triple Tactics Talent", short: "TRIPLE TACTICS", role: "Normal Spell · Value",
    glyph: "策", glyphColor: "#7fd8c6", stat: "Normal Spell",
    badges: ["Spell", "Generic"],
    zones: [
      ["HAND", "After the opponent activates a monster effect on your turn, choose 1: draw 2 cards; take control of an opponent's monster until the End Phase; or look at their hand."],
    ],
    tips: [
      "Turns an opposing handtrap into a plus: they Ash your Ritual, you draw 2 and keep pushing.",
      "Only live once they've used a monster effect during your turn, so bait the handtrap first.",
    ],
  },
  {
    id: "rtv", section: "nonengine", name: "Radiant Typhoon Vision", short: "RADIANT TYPHOON", role: "Quick-Play · Draw & Search",
    glyph: "閃", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play", "Draw"],
    zones: [
      ["HAND", "Draw 2, then discard a Quick-Play/Radiant Typhoon card (or your whole hand if you have none); OR add 1 Mystical Space Typhoon from Deck or GY. Each effect once per turn."],
      ["FIELD", "If destroyed by Mystical Space Typhoon's effect: Set this card again."],
    ],
    tips: [
      "Run it with Mystical Space Typhoon: MST pops it, you Set it back, then draw 2 or fetch another MST, turning removal into card advantage.",
      "A consistency tool that digs toward your combo while keeping backrow interaction live.",
    ],
  },
  {
    id: "mst", section: "nonengine", name: "Mystical Space Typhoon", short: "MST", role: "Quick-Play · S/T Removal",
    glyph: "颶", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["FIELD", "Target 1 Spell/Trap on the field; destroy it."],
    ],
    tips: [
      "Cheap, splashable backrow removal to clear a floodgate or trap before you commit to the combo.",
      "A Quick-Play, so you can also pop the opponent's set cards on their turn.",
      "Easily fetched by Radiant Typhoon Vision, which is often used for consistency in Mitsurugi builds.",
      "It does NOT negate the effect."
    ],
  },
  {
    id: "cbtg", section: "nonengine", name: "Called by the Grave", short: "CALLED BY", role: "Quick-Play · Protection",
    label: "PROTECTION",
    glyph: "墓", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["HAND", "Banish 1 monster in opponent's GY; if it's a handtrap, negate its effects for the turn."],
      ["FIELD", "Your main protection for the fragile combo against Ash, Droll , and more."],
    ],
    tips: [
      "Point it at their handtrap so your once-per-Duel Habakiri reveal resolves safely.",
      "Best used against Droll & Lock Bird, as that card kills your combo.",
    ],
  },
  {
    id: "crossout", section: "nonengine", name: "Crossout Designator", short: "CROSSOUT", role: "Quick-Play · Protection",
    glyph: "抹", glyphColor: "#7fd8c6", stat: "Quick-Play Spell",
    badges: ["Spell", "Quick-Play"],
    zones: [
      ["HAND", "Declare 1 card name, then banish a copy of it from your Deck; every card with that name has its effects negated for the rest of the turn."],
    ],
    tips: [
      "Your best protection, next to Called by the Grave: name Ash Blossom or Droll to force the combo through.",
      "You must own a copy in the Deck to banish, so run a couple of maindeck handtraps as designator fodder.",
    ],
  },
  {
    id: "ash", section: "nonengine", name: "Ash Blossom & Joyous Spring", short: "ASH", role: "Handtrap",
    label: "HANDTRAPS",
    glyph: "灰", glyphColor: "#7fd8c6", stat: "LV3 · Handtrap",
    badges: ["FIRE", "Zombie", "Tuner"],
    zones: [
      ["HAND", "Discard: negate a card that adds from Deck, Special Summons from Deck, or sends Deck-to-GY."],
    ],
    tips: [
      "The universal handtrap and your best answer to an opposing Mitsurugi Ritual.",
      "Remember your own Ritual-from-Deck is Ash-able too: sequence to bait theirs.",
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
      "Wrecks a pure Mitsurugi endboard mid-combo: a real threat to their whole plan.",
      "Careful: they can discard Nibiru to Murakumo's negate and dodge it. Timing matters.",
      "Easily searchable: it's a Rock, so <a href=\"#granite\">Gallant Granite</a> tutors it straight from the Deck, making the handtrap far more consistent.",
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
      "Flexible interaction that works from hand on an empty board: great on the draw.",
      "Set it to threaten column lockdown against backrow-reliant decks.",
    ],
  },
  {
    id: "droll", section: "nonengine", name: "Droll & Lock Bird", short: "DROLL", role: "Handtrap · Search Lock",
    glyph: "封", glyphColor: "#7fd8c6", stat: "LV1 · Handtrap",
    badges: ["WIND", "Winged Beast"],
    zones: [
      ["HAND", "If a card is added from the Deck to a hand (except during the Draw Phase): discard this. For the rest of this turn, neither player can add cards from the Deck to the hand."],
    ],
    tips: [
      "A hard stop against search-heavy decks: they add one card, then everything else in the Deck is locked off.",
      "Double-edged, it also shuts off your own Mitsurugi searches, so it's a go-second disruption you open with, not a combo piece.",
    ],
  },
  {
    id: "fuwalos", section: "nonengine", name: "Mulcharmy Fuwalos", short: "FUWALOS", role: "Handtrap · Draw",
    glyph: "綿", glyphColor: "#7fd8c6", stat: "LV4 · Handtrap",
    badges: ["WIND", "Winged Beast"],
    zones: [
      ["HAND", "If you control no monsters (Quick Effect): discard this. Each time the opponent Special Summons a monster from the Deck or Extra Deck this turn, draw 1 (keeping a set hand size at the End Phase)."],
    ],
    tips: [
      "A go-second draw engine that punishes big combo turns, refueling your hand while the opponent builds.",
      "Only live on an empty board, so it's a handtrap you open with, not something you set up.",
    ],
  },
  {
    id: "purulia", section: "nonengine", name: "Mulcharmy Purulia", short: "PURULIA", role: "Handtrap · Draw",
    glyph: "毬", glyphColor: "#7fd8c6", stat: "LV4 · Handtrap",
    badges: ["WATER", "Aqua"],
    zones: [
      ["HAND", "If you control no monsters (Quick Effect): discard this. Each time the opponent Normal or Special Summons a monster from the Hand this turn, draw 1 (End Phase hand-size limit applies)."],
    ],
    tips: [
      "The HAND-Special-Summon counterpart to Fuwalos.",
      "Like every Mulcharmy card, it needs an empty board on your side to fire.",
    ],
  },
  {
    id: "dshifter", section: "nonengine", name: "Dimension Shifter", short: "DIM. SHIFTER", role: "Handtrap · GY Hate",
    glyph: "次", glyphColor: "#7fd8c6", stat: "LV6 · Handtrap",
    badges: ["DARK", "Spellcaster", "Effect", "Level 6"],
    zones: [
      ["HAND", "If your GY is empty (Quick Effect): send this from hand to GY: until the end of the next turn, cards sent to the GY are banished instead."],
    ],
    tips: [
      "Disruptive tech that turns off Graveyard strategies before they start: best opened turn one on an empty GY.",
      "Double-edged: it also banishes YOUR GY plays (Kusanagi, Futsu, Prayers), so run it in pure builds since Mitsurugi monsters activate on Tribute, so it resolves no matter where they are.",
    ],
  },
  // ===== EXTRA DECK =====
  {
    id: "granite", section: "extra", name: "Gallant Granite", short: "GRANITE", role: "Rank 4 Xyz · Rock Searcher",
    glyph: "岩", glyphColor: "#cbb0ff", stat: "R4 · 2300 / 1800",
    badges: ["EARTH", "Rock", "Xyz", "Rank 4"],
    cost: "2 Level 4 monsters",
    zones: [
      ["FIELD", "Detach 1 material: add 1 Rock from Deck to hand, OR Special Summon 1 Rock from hand face-down. Once per turn."],
    ],
    tips: [
      "Made off any two Level 4s, so the searchers (Aramasa/Saji/Kusanagi) line up for it perfectly.",
      "Its Rock search grabs <a href=\"#nibiru\">Nibiru</a> from the Deck, turning a situational brick into a reliable disruption target.",
    ],
  },
  {
    id: "ipmask", section: "extra", name: "I:P Masquerena", short: "I:P MASQUERENA", role: "Link 2 · Turn-Skip",
    glyph: "仮", glyphColor: "#cbb0ff", stat: "LINK-2 · 800",
    badges: ["DARK", "Cyberse", "Link"],
    cost: "2 non-Link monsters",
    zones: [
      ["FIELD", "Quick Effect, on the opponent's turn: Link Summon a Link Monster using materials you control including this card, usually S:P Little Knight."],
    ],
    tips: [
      "Two of the Level 4 searchers make her, then she converts into disruption on the opponent's turn.",
      "Leaving her up at end of turn threatens a Link play right through the opponent's setup.",
    ],
  },
  {
    id: "splittle", section: "extra", name: "S:P Little Knight", short: "S:P LITTLE KNIGHT", role: "Link 2 · Disruptor",
    glyph: "騎", glyphColor: "#cbb0ff", stat: "LINK-2 · 1600",
    badges: ["DARK", "Warrior", "Link"],
    cost: "2 Effect Monsters",
    zones: [
      ["FIELD", "Quick Effect: banish 1 other card on the field or in either Graveyard, face-down, until the End Phase."],
    ],
    tips: [
      "A generic disruptor off two Level 4s: banish a key combo piece on their turn, or protect your own board.",
      "Pairs with I:P Masquerena to interact during the opponent's turn.",
    ],
  },
  {
    id: "dugares", section: "extra", name: "Number 60: Dugares the Timeless", short: "DUGARES", role: "Rank 4 Xyz · Value",
    glyph: "刻", glyphColor: "#cbb0ff", stat: "R4 · 1000 / 1000",
    badges: ["FIRE", "Fairy", "Xyz", "Rank 4"],
    cost: "2 Level 4 monsters",
    zones: [
      ["FIELD", "Once per turn, detach 1 material and pick one: draw 2 then discard 1; double a face-up monster's ATK and skip NEXT turn's battle phase; or Special Summon a monster from your GY in defense position and skip NEXT turn's  MP1."],
    ],
    tips: [
      "Use it for cards or a revived body.",
      "The GY-summon mode can bring back a tributed Reptile to re-trigger its on-Tribute effect on next turn, as long as it was properly summoned in the first place.",
    ],
  },
  {
    id: "bagooska", section: "extra", name: "Number 41: Bagooska the Terribly Tired Tapir", short: "BAGOOSKA", role: "Rank 4 Xyz · Wall",
    glyph: "眠", glyphColor: "#cbb0ff", stat: "R4 · 2100 / 2000",
    badges: ["EARTH", "Beast", "Xyz", "Rank 4"],
    cost: "2 Level 4 monsters",
    zones: [
      ["FIELD", "While in Defense Position: flip your all monsters to face-up Defense and negate their effects."],
      ["FIELD", "Detach 1 material during each of your Standby Phases, or send this card to the GY."],
      ["FIELD", "While in Attack Position: this card cannot be targeted by your opponent's card effects."],
    ],
    tips: [
      "A go-first stall body off two Level 4s that neuters non-piercing beatdown while you set up the grind.",
      "Useful insurance when you can't reach the full Murakumo/Futsu endboard.",
    ],
  },
  {
    id: "tornado", section: "extra", name: "Tornado Dragon", short: "TORNADO DRAGON", role: "Rank 4 Xyz · S/T Removal",
    glyph: "旋", glyphColor: "#cbb0ff", stat: "R4 · 2100 / 2000",
    badges: ["WIND", "Dragon", "Xyz", "Rank 4"],
    cost: "2 Level 4 monsters",
    zones: [
      ["FIELD", "Once per turn, detach 1 material; target 1 Spell/Trap on the field and destroy it."],
    ],
    tips: [
      "Backrow removal attached to a 2100 body, made from any two of the Level 4 searchers.",
      "Clears a floodgate or trap that would otherwise stop your combos.",
      "Great against decks that rely on Trap cards, like Blue-Eyes."
    ],
  },
  {
    id: "exciton", section: "extra", name: "Evilswarm Exciton Knight", short: "EXCITON KNIGHT", role: "Rank 4 Xyz · Reset",
    glyph: "掃", glyphColor: "#cbb0ff", stat: "R4 · 1800 / 1000",
    badges: ["DARK", "Fiend", "Xyz", "Rank 4"],
    cost: "2 Level 4 monsters",
    zones: [
      ["FIELD", "Once per chain, during your MP or your opponent's BP, if the opponent has more cards (hand + field) than you, detach 1 material: destroy all other cards on the field."],
    ],
    tips: [
      "A one-sided reset when you're behind.",
      "Built from two Level 4s, so it's a live comeback button the deck reaches naturally.",
      "It's a Light Fiend, so it can bridge into Fiendsmith for a grindy engine, or easy access into D/D/D Wave High King Caesar.",
    ],
  },
];

const synergy = [
  { name: "Ogdoadic", dot: "#7fd8c6", rating: "F-TIER", body: "The best Reptile partner. Ogdoadic tributes its own field monsters to revive from the GY, free-triggering your Mitsurugi on-Tribute effects. Shared Level 8s also open Rank 8 plays." },
  { name: "Azamina", dot: "#e0c46a", rating: "TBA", body: "TBA." },
  { name: "Fiendsmith", dot: "#cbb0ff", rating: "STRONG", body: "A splashable LIGHT Fiend engine that adds an omni-negate and grindy recursion. It doesn't convert the Reptile bosses on its own, so you bridge into the package through Evilswarm Exciton Knight, while the new Skull Servant of Chaos bridges back into Mitsurugi." },
  { name: "Ryzeal", dot: "#b98cff", rating: "FLEX", body: "A Rank-4 engine adding consistent starters and generic Xyz access to Habakiri. A high-power hybrid for raw speed." },
];

// Attach detected image path, then group cards by section.
for (const c of cardData) c.image = findImage(c.section, c.id);

const groups = sections.map((s) => ({
  ...s,
  cards: cardData.filter((c) => c.section === s.key),
}));

// Zone-filter chips: canonical order, but only zones some card actually uses
// (so an unused label like DECK never renders a dead filter).
const ZONE_ORDER = ["HAND", "DECK", "GY", "FIELD", "TRIGGER", "ON TRIBUTE"];
const usedZones = new Set(cardData.flatMap((c) => c.zones.map((z) => z[0])));
const zones = ZONE_ORDER.filter((z) => usedZones.has(z));

export default { groups, synergy, total: cardData.length, zones };
