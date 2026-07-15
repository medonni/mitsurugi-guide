// Fiendsmith synergy cards. Card data (names, types, stats) and official effect
// text pulled from the YGOPRODeck API; © Konami, reference only. The effect text
// is split by WHERE it triggers (materials / field / GY / hand), wording kept
// verbatim; `pre` holds a leading static/limit line, `note` the once-per-turn
// clause. No strategy commentary here on purpose, only factual card info.
// First-pass segmentation, to be refined by hand.
const cards = [
  {
    id: "fiendsmith-engraver",
    name: "Fiendsmith Engraver",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["LIGHT", "Fiend", "Effect", "Level 6"],
    stat: "ATK 1800 / DEF 2400",
    zones: [
      [
        "HAND",
        `You can discard this card; add 1 "Fiendsmith" Spell/Trap from your Deck to your hand.`,
      ],
      [
        "FIELD",
        `You can target 1 "Fiendsmith" Equip Card you control and 1 monster on the field; send them to the GY.`,
      ],
      [
        "GY",
        `If this card is in your GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck; Special Summon this card.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith Engraver" once per turn.`,
    tips: [
      `The engine's backbone: its GY effect turns a single LIGHT Fiend into two bodies (one of them a LIGHT Fiend), so any line that reaches Engraver ends on more than it started.`,
      `The in-hand discard usually grabs <a class="clink" href="#fiendsmiths-tract" data-img="../assets/cards/fiendsmith/fiendsmiths-tract.webp">Fiendsmith's Tract</a> to open a play, and conveniently loads Engraver into the GY for that revive.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmith-engraver.webp",
  },
  {
    id: "lacrima-the-crimson-tears",
    name: "Lacrima the Crimson Tears",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["LIGHT", "Fiend", "Effect", "Level 4"],
    stat: "ATK 1200 / DEF 1200",
    pre: `(This card is always treated as a "Fiendsmith" card.)`,
    zones: [
      [
        "FIELD",
        `If this card is Normal or Special Summoned: You can send 1 "Fiendsmith" card from your Deck to the GY, except "Lacrima the Crimson Tears".`,
      ],
      [
        "GY",
        `During your opponent's turn, if this card is in your GY (Quick Effect): You can target 1 "Fiendsmith" Link Monster in your GY; shuffle this card into the Deck, and if you do, Special Summon that monster.`,
      ],
    ],
    note: `You can only use each effect of "Lacrima the Crimson Tears" once per turn.`,
    tips: [
      `Prime <a class="clink" href="#fiendsmiths-requiem" data-img="../assets/cards/fiendsmith/fiendsmiths-requiem.webp">Fiendsmith's Requiem</a> target: summon it, then send <a class="clink" href="#fiendsmith-engraver" data-img="../assets/cards/fiendsmith/fiendsmith-engraver.webp">Fiendsmith Engraver</a> or <a class="clink" href="#fiendsmith-in-paradise" data-img="../assets/cards/fiendsmith/fiendsmith-in-paradise.webp">Fiendsmith in Paradise</a> to the GY to build your grind.`,
      `Its opponent-turn GY effect revives a Fiendsmith Link for free interaction. As a Level 4 LIGHT Fiend it also pairs with a Level 6 (Engraver or <a class="clink" href="#necroquip-princess" data-img="../assets/cards/fiendsmith/necroquip-princess.webp">Necroquip Princess</a>) toward <a class="clink" href="#chaos-angel" data-img="../assets/cards/fiendsmith/chaos-angel.webp">Chaos Angel</a>.`,
    ],
    image: "/assets/cards/fiendsmith/lacrima-the-crimson-tears.webp",
  },
  {
    id: "fiendsmiths-desirae",
    name: "Fiendsmith's Desirae",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["LIGHT", "Fiend", "Fusion", "Level 9"],
    stat: "ATK 2800 / DEF 2400",
    cost: `"Fiendsmith Engraver" + 2 LIGHT Fiend monsters`,
    zones: [
      [
        "FIELD",
        `(Quick Effect): You can negate the effects of a number of face-up cards on the field, up to the total Link Rating of Link Monsters equipped to this card, until the end of this turn.`,
      ],
      [
        "GY",
        `If this card is sent to the GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck, then target 1 card on the field; send it to the GY.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith's Desirae" once per turn.`,
    tips: [
      `The engine's main payoff: an on-demand Quick Effect negate of face-up cards, up to the total Link Rating equipped to it, and it doesn't target.`,
      `Even off the field it's removal: its GY effect sends a card to the GY. Foolishing it with <a class="clink" href="#fiendsmith-in-paradise" data-img="../assets/cards/fiendsmith/fiendsmith-in-paradise.webp">Fiendsmith in Paradise</a> turns that into opponent-turn interaction.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-desirae.webp",
  },
  {
    id: "fiendsmiths-lacrima",
    name: "Fiendsmith's Lacrima",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["LIGHT", "Fiend", "Fusion", "Level 6"],
    stat: "ATK 2400 / DEF 2400",
    cost: `2 LIGHT Fiend monsters`,
    zones: [
      ["FIELD", `Monsters your opponent controls lose 600 ATK.`],
      [
        "FIELD",
        `If this card is Fusion Summoned: You can target 1 of your LIGHT Fiend monsters that is banished or in your GY; add it to your hand or Special Summon it.`,
      ],
      [
        "GY",
        `If this card is sent to the GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck; inflict 1200 damage to your opponent.`,
      ],
    ],
    note: `You can only use each of the following effects of "Fiendsmith's Lacrima" once per turn.`,
    tips: [
      `The easiest Fiendsmith Fusion (just 2 LIGHT Fiends) and a strong extender: on Fusion Summon it revives or adds back a LIGHT Fiend. Banned in the TCG; legal in the OCG and Master Duel.`,
      `Its GY effect burns 1200 for a cost that's basically upside (shuffle back a LIGHT Fiend), and it adds up across a grind.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-lacrima.webp",
  },
  {
    id: "fiendsmiths-rextremende",
    name: "Fiendsmith's Rextremende",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["LIGHT", "Fiend", "Fusion", "Level 9"],
    stat: "ATK 3000 / DEF 3600",
    cost: `1 "Fiendsmith" Fusion Monster + 1 Fusion or Link Monster`,
    zones: [
      [
        "FIELD",
        `Unaffected by card effects, except "Fiendsmith" cards, while equipped with a "Fiendsmith" Equip Spell.`,
      ],
      [
        "FIELD",
        `If this card is Fusion Summoned: You can discard 1 card; send 1 LIGHT Fiend monster from your Deck or Extra Deck to the GY.`,
      ],
      [
        "GY",
        `If this card is sent to the GY: You can target 1 other "Fiendsmith" card in your GY or banishment; add it to your hand.`,
      ],
    ],
    note: `You can only use each of the following effects of "Fiendsmith's Rextremende" once per turn.`,
    tips: [
      `A towers: unaffected by everything while it has a Fiendsmith Equip Spell on it.`,
      `Rarely worth it: its materials (a Fiendsmith Fusion + a Fusion or Link) are steep, so you seldom trade <a class="clink" href="#fiendsmiths-desirae" data-img="../assets/cards/fiendsmith/fiendsmiths-desirae.webp">Fiendsmith's Desirae</a> away for it. Largely outclassed by <a class="clink" href="#aerial-eater" data-img="../assets/cards/fiendsmith/aerial-eater.webp">Aerial Eater</a>.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-rextremende.webp",
  },
  {
    id: "fiendsmiths-agnumday",
    name: "Fiendsmith's Agnumday",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["LIGHT", "Fiend", "Link", "LINK-3"],
    stat: "ATK 1800 · LINK-3",
    cost: `2+ monsters, including a LIGHT Fiend monster`,
    zones: [
      [
        "FIELD",
        `Once per turn (Quick Effect): You can target 1 LIGHT non-Link Fiend monster in your GY; Special Summon it, and if you do, equip this card you control to that monster as an Equip Spell with the following effects.\n● The equipped monster gains ATK equal to the total Link Rating of Link Monsters equipped to it x 600.\n● If the equipped monster attacks a Defense Position monster, inflict piercing battle damage to your opponent.`,
      ],
    ],
    tips: [
      `Quick Effect revives any LIGHT non-Link Fiend from the GY and equips itself for an ATK boost plus piercing, most often to recur <a class="clink" href="#fiendsmiths-desirae" data-img="../assets/cards/fiendsmith/fiendsmiths-desirae.webp">Fiendsmith's Desirae</a>.`,
      `ATK gain is 600 × the total Link Rating equipped; stacked with <a class="clink" href="#fiendsmiths-sequence" data-img="../assets/cards/fiendsmith/fiendsmiths-sequence.webp">Fiendsmith's Sequence</a> on Desirae you get a huge, untargetable negate.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-agnumday.webp",
  },
  {
    id: "fiendsmiths-requiem",
    name: "Fiendsmith's Requiem",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["LIGHT", "Fiend", "Link", "LINK-1"],
    stat: "ATK 600 · LINK-1",
    cost: `1 LIGHT Fiend monster`,
    pre: `You can only Special Summon "Fiendsmith's Requiem(s)" once per turn.`,
    zones: [
      [
        "FIELD",
        `During the Main Phase (Quick Effect): You can Tribute this card; Special Summon 1 "Fiendsmith" monster from your hand or Deck.`,
      ],
      [
        "FIELD",
        `You can target 1 LIGHT non-Link Fiend monster you control; equip this card from your field or GY to that monster you control as an Equip Spell that gives it 600 ATK.`,
      ],
    ],
    note: `You can only use this effect of "Fiendsmith's Requiem" once per turn.`,
    tips: [
      `The core bridge: Link it off any one LIGHT Fiend, then tribute it to Special Summon <a class="clink" href="#lacrima-the-crimson-tears" data-img="../assets/cards/fiendsmith/lacrima-the-crimson-tears.webp">Lacrima the Crimson Tears</a> from the Deck. The tribute is a Quick Effect, so it dodges targeted negation and works on either turn.`,
      `Its equip effect (onto a LIGHT non-Link Fiend) enables <a class="clink" href="#fiendsmith-engraver" data-img="../assets/cards/fiendsmith/fiendsmith-engraver.webp">Fiendsmith Engraver</a>'s removal and the <a class="clink" href="#necroquip-princess" data-img="../assets/cards/fiendsmith/necroquip-princess.webp">Necroquip Princess</a> contact fusion.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-requiem.webp",
  },
  {
    id: "fiendsmiths-sequence",
    name: "Fiendsmith's Sequence",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["LIGHT", "Fiend", "Link", "LINK-2"],
    stat: "ATK 1200 · LINK-2",
    cost: `2 monsters, including a LIGHT Fiend monster`,
    zones: [
      [
        "FIELD",
        `During your Main Phase: You can Fusion Summon 1 Fiend Fusion Monster from your Extra Deck, by shuffling its materials from your GY into the Deck.`,
      ],
      [
        "FIELD",
        `You can target 1 LIGHT non-Link Fiend monster you control; equip this card from your field or GY to that monster you control as an Equip Spell with the following effect.\n● Your opponent cannot target the equipped monster with card effects.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith's Sequence" once per turn.`,
    tips: [
      `The best way to make the Fiendsmith Fusions: it Fusion Summons a Fiend Fusion using GY fodder instead of hand or field. Great for <a class="clink" href="#fiendsmiths-desirae" data-img="../assets/cards/fiendsmith/fiendsmiths-desirae.webp">Fiendsmith's Desirae</a> or generic Fiend Fusions like <a class="clink" href="#aerial-eater" data-img="../assets/cards/fiendsmith/aerial-eater.webp">Aerial Eater</a>.`,
      `It can summon ANY Fiend Fusion, not just Fiendsmith. Its equip effect makes the equipped monster untargetable, so pair it with Desirae for a protected negate.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-sequence.webp",
  },
  {
    id: "fiendsmiths-sanct",
    name: "Fiendsmith's Sanct",
    role: "Quick-Play Spell",
    accent: "#7fd8c6",
    badges: ["Quick-Play", "Spell"],
    stat: "",
    zones: [
      [
        "FIELD",
        `If you control no face-up monsters, or the only face-up monsters you control are LIGHT Fiend monsters: Special Summon 1 "Fiendsmith Token" (Fiend/LIGHT/Level 1/ATK 0/DEF 0), also you cannot declare attacks for the rest of this turn, except with Fiend monsters.`,
      ],
      [
        "GY",
        `If a face-up "Fiendsmith" monster(s) you control is destroyed by an opponent's card effect, while this card is in your GY: You can Set this card.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith's Sanct" once per turn.`,
    tips: [
      `An alternate starter/extender: the Token gives you a LIGHT Fiend to reach <a class="clink" href="#fiendsmiths-requiem" data-img="../assets/cards/fiendsmith/fiendsmiths-requiem.webp">Fiendsmith's Requiem</a>. Supplemental to <a class="clink" href="#fiendsmiths-tract" data-img="../assets/cards/fiendsmith/fiendsmiths-tract.webp">Fiendsmith's Tract</a>, not a replacement: the Token vanishes when it leaves the field, leaving no LIGHT Fiend in the GY.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-sanct.webp",
  },
  {
    id: "fiendsmiths-tract",
    name: "Fiendsmith's Tract",
    role: "Normal Spell",
    accent: "#7fd8c6",
    badges: ["Normal", "Spell"],
    stat: "",
    zones: [
      [
        "FIELD",
        `Add 1 LIGHT Fiend monster from your Deck to your hand, then discard 1 card.`,
      ],
      [
        "GY",
        `You can banish this card from your GY; Fusion Summon 1 "Fiendsmith" Fusion Monster from your Extra Deck, using monsters from your hand or field.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith's Tract" once per turn.`,
    tips: [
      `It doesn't say "Fiendsmith"; it searches ANY LIGHT Fiend. Grab <a class="clink" href="#fabled-lurrie" data-img="../assets/cards/fiendsmith/fabled-lurrie.webp">Fabled Lurrie</a> and discard it: the discard Special Summons Lurrie for free.`,
      `A consistency booster for any LIGHT-Fiend deck; its GY effect banishes it to Fusion Summon a Fiendsmith Fusion from your hand or field.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmiths-tract.webp",
  },
  {
    id: "fiendsmith-kyrie",
    name: "Fiendsmith Kyrie",
    role: "Normal Trap",
    accent: "#d98cba",
    badges: ["Normal", "Trap"],
    stat: "",
    zones: [
      [
        "FIELD",
        `This turn, your LIGHT Fiend monsters cannot be destroyed by battle, also any battle damage you take becomes halved.`,
      ],
      [
        "GY",
        `You can banish this card from your GY; Fusion Summon 1 "Fiendsmith" Fusion Monster from your Extra Deck, using monsters you control, and/or monsters in your Spell & Trap Zones that are equipped to a "Fiendsmith" monster as an Equip Spell, as material.`,
      ],
    ],
    note: `You can only use this effect of "Fiendsmith Kyrie" once per turn.`,
    tips: [
      `The least-used engine card. Its on-field battle protection rarely matters for the big bodies you end on.`,
      `The draw is the GY effect: a Fusion Summon that can use equipped Fiendsmith Links as material, but it costs too much setup to justify over <a class="clink" href="#fiendsmiths-tract" data-img="../assets/cards/fiendsmith/fiendsmiths-tract.webp">Fiendsmith's Tract</a> or <a class="clink" href="#fiendsmiths-sequence" data-img="../assets/cards/fiendsmith/fiendsmiths-sequence.webp">Fiendsmith's Sequence</a>.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmith-kyrie.webp",
  },
  {
    id: "fiendsmith-in-paradise",
    name: "Fiendsmith in Paradise",
    role: "Normal Trap",
    accent: "#d98cba",
    badges: ["Normal", "Trap"],
    stat: "",
    zones: [
      [
        "FIELD",
        `Target 1 Level 7 or higher LIGHT Fiend monster you control; send all cards on the field to the GY that are not that monster.`,
      ],
      [
        "GY",
        `If your opponent Special Summons a monster(s), while this card is in your GY: You can banish this card; send 1 "Fiendsmith" monster from your Deck or Extra Deck to the GY.`,
      ],
    ],
    note: `You can only use each effect of "Fiendsmith in Paradise" once per turn.`,
    tips: [
      `GY effect + <a class="clink" href="#fiendsmiths-desirae" data-img="../assets/cards/fiendsmith/fiendsmiths-desirae.webp">Fiendsmith's Desirae</a> is the payoff: when the opponent Special Summons, foolish Desirae, then use Desirae's GY effect to send a card away for removal on their turn.`,
      `The on-field effect is a Zeus-like board wipe, but it needs a Level 7+ LIGHT Fiend (Desirae or <a class="clink" href="#fiendsmiths-rextremende" data-img="../assets/cards/fiendsmith/fiendsmiths-rextremende.webp">Fiendsmith's Rextremende</a>) and sends your own cards too.`,
    ],
    image: "/assets/cards/fiendsmith/fiendsmith-in-paradise.webp",
  },

  // --- Staples run alongside Fiendsmith (not "Fiendsmith" cards themselves) ---
  {
    id: "necroquip-princess",
    image: "/assets/cards/fiendsmith/necroquip-princess.webp",
    name: "Necroquip Princess",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["DARK", "Fiend", "Fusion", "Level 6"],
    stat: "ATK 2000 / DEF 2000",
    cost: `1 monster equipped with a Monster Card + 1 Fiend Monster Card`,
    pre: `Must be Special Summoned (from your Extra Deck) by sending the above cards from your hand and/or field to the GY. You can only control 1 "Necroquip Princess".`,
    zones: [
      [
        "FIELD",
        `If a monster(s) is sent from the hand to the GY to activate a card or effect: You can activate 1 of these effects;\n● Equip 1 of those monsters to this card as an Equip Spell that gives it 500 ATK.\n● Draw 1 card.`,
      ],
    ],
    note: `You can only use this effect of "Necroquip Princess" once per turn.`,
    tips: [
      `Contact-fuse onto a Fiend equipped with a Fiendsmith Link. Do it on top of <a class="clink" href="#fiendsmith-engraver" data-img="../assets/cards/fiendsmith/fiendsmith-engraver.webp">Fiendsmith Engraver</a> equipped with <a class="clink" href="#fiendsmiths-requiem" data-img="../assets/cards/fiendsmith/fiendsmiths-requiem.webp">Fiendsmith's Requiem</a> and both go to the GY, letting Engraver revive itself, for two Level 6 Fiends ready to Xyz into <a class="clink" href="#dddd-wave-high-king-caesar" data-img="../assets/cards/fiendsmith/dddd-wave-high-king-caesar.webp">D/D/D Wave High King Caesar</a>.`,
    ],
  },
  {
    id: "fabled-lurrie",
    image: "/assets/cards/fiendsmith/fabled-lurrie.webp",
    name: "Fabled Lurrie",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["LIGHT", "Fiend", "Effect", "Level 1"],
    stat: "ATK 200 / DEF 400",
    zones: [["GY", `If this card is discarded to the GY: Special Summon it.`]],
    tips: [
      `Not a "Fiendsmith" card, but it's a LIGHT Fiend, which most Fiendsmith cards ask for, most notably to Link into <a class="clink" href="#fiendsmiths-requiem" data-img="../assets/cards/fiendsmith/fiendsmiths-requiem.webp">Fiendsmith's Requiem</a>.`,
      `The best <a class="clink" href="#fiendsmiths-tract" data-img="../assets/cards/fiendsmith/fiendsmiths-tract.webp">Fiendsmith's Tract</a> target: when Tract makes you discard, discarding Lurrie Special Summons it for free.`,
    ],
  },
  {
    id: "dddd-wave-high-king-caesar",
    image: "/assets/cards/fiendsmith/dddd-wave-high-king-caesar.webp",
    name: "D/D/D Wave High King Caesar",
    role: "Xyz Effect Monster",
    accent: "#b8a0c8",
    badges: ["WATER", "Fiend", "Xyz", "Rank 6"],
    stat: "ATK 2800 / DEF 1800",
    cost: `2 Level 6 Fiend monsters`,
    zones: [
      [
        "FIELD",
        `When a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster (Quick Effect): You can detach 1 material from this card; negate the activation, and if you do, destroy that card, then you can make 1 other "D/D" monster you control and this card gain 1800 ATK until the end of this turn.`,
      ],
      [
        "GY",
        `If this card is sent from the field to the GY: You can add 1 "Dark Contract" card from your Deck to your hand.`,
      ],
    ],
    tips: [
      `Its GY effect adds a "Dark Contract" card, dead weight here since the deck runs none.`,
      `A common, easily-accessed Fiendsmith end-board piece: its two Special-Summon negates answer Spells, Traps, and monster effects alike (even Nibiru), which is very strong.`,
    ],
  },
  {
    id: "aerial-eater",
    image: "/assets/cards/fiendsmith/aerial-eater.webp",
    name: "Aerial Eater",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["WIND", "Fiend", "Fusion", "Level 6"],
    stat: "ATK 2100 / DEF 2600",
    cost: `2 Fiend monsters with the same Attribute`,
    zones: [
      [
        "FIELD",
        `If this card is Fusion Summoned: You can send 1 Fiend monster from your Deck to the GY.`,
      ],
      [
        "GY",
        `If this card is in your GY: You can banish 2 Level 6 or higher Fiend monsters with the same Attribute as each other from your GY, except "Aerial Eater"; Special Summon this card.`,
      ],
    ],
    note: `You can only use each effect of "Aerial Eater" once per turn.`,
    tips: [
      `Summon it off <a class="clink" href="#fiendsmiths-sequence" data-img="../assets/cards/fiendsmith/fiendsmiths-sequence.webp">Fiendsmith's Sequence</a> and send a Fiend to the GY. In the Mitsurugi variant, send <a class="clink" href="#skull-archfiend-of-chaos" data-img="../assets/cards/fiendsmith/skull-archfiend-of-chaos.webp">Skull Archfiend of Chaos</a>, whose GY effect then bridges you to <a class="clink" href="../cards/#habakiri" data-img="../assets/cards/main/habakiri.webp">Habakiri</a>.`,
      `Its own GY effect revives it by banishing two Level 6+ Fiends of the same Attribute, so a single copy can represent two bodies.`,
    ],
  },
  {
    id: "skull-archfiend-of-chaos",
    image: "/assets/cards/fiendsmith/skull-archfiend-of-chaos.webp",
    name: "Skull Archfiend of Chaos",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["DARK", "Fiend", "Effect", "Level 6"],
    stat: "ATK 2500 / DEF 1200",
    zones: [
      [
        "HAND / GY",
        `If this card is in your hand or GY: You can target 3 other cards in the GYs and/or face-up banishment, including a card that mentions "Light and Darkness Ritual"; place them on the bottom of the Deck in any order, and if you do, Special Summon this card.`,
      ],
      [
        "GY",
        `If this card is sent to the GY: You can send 1 Ritual Spell from your hand or Deck to the GY; add 1 Ritual Monster whose name is mentioned on that card from your Deck to your hand.`,
      ],
    ],
    note: `You can only use each effect of "Skull Archfiend of Chaos" once per turn.`,
    tips: [
      `Best <a class="clink" href="#aerial-eater" data-img="../assets/cards/fiendsmith/aerial-eater.webp">Aerial Eater</a> mill target: when it hits the GY, send <a class="clink" href="../cards/#mirror" data-img="../assets/cards/main/mirror.webp">Mitsurugi Mirror</a>, which names the Mitsurugi Ritual Monsters, so you add <a class="clink" href="../cards/#habakiri" data-img="../assets/cards/main/habakiri.webp">Habakiri</a>. (Mitsurugi Ritual names none, so it can't fetch anything.)`,
      `The HAND / GY self-Special Summon is dead here: it needs a card that mentions "Light and Darkness Ritual", and the deck runs none.`,
    ],
  },
  {
    id: "chaos-angel",
    name: "Chaos Angel",
    role: "Synchro Effect Monster",
    accent: "#c9c2d6",
    badges: ["DARK", "Fiend", "Synchro", "Level 10"],
    stat: "ATK 3500 / DEF 2800",
    cost: `1 Tuner + 1+ non-Tuner LIGHT or DARK monsters`,
    pre: `For this card's Synchro Summon, you can treat 1 LIGHT or DARK monster you control as a Tuner.`,
    zones: [
      [
        "FIELD",
        `If this card is Special Summoned: You can target 1 card on the field; banish it. This card gains these effects based on the original Attributes of materials used for its Synchro Summon.\n● LIGHT: Synchro Monsters you control are unaffected by monster effects activated by your opponent.\n● DARK: Monsters you control cannot be destroyed by battle.`,
      ],
    ],
    tips: [
      `Easy off two Fiends, e.g. <a class="clink" href="#necroquip-princess" data-img="../assets/cards/fiendsmith/necroquip-princess.webp">Necroquip Princess</a> (Level 6) + <a class="clink" href="#lacrima-the-crimson-tears" data-img="../assets/cards/fiendsmith/lacrima-the-crimson-tears.webp">Lacrima the Crimson Tears</a> (Level 4), treating one as the Tuner, for a Level 10 that banishes a card on summon.`,
      `Made with both a LIGHT and a DARK material it turns on both clauses: your Synchros dodge the opponent's monster effects and your monsters can't be destroyed by battle.`,
    ],
    image: "/assets/cards/fiendsmith/chaos-angel.webp",
  },
];

// Deck-section grouping. Card order within a group is set here by hand, so
// Fusions read low→high Level and Links low→high Rating with no runtime sort.
// Non-Fiendsmith cards live in their own "support" group, except Fabled Lurrie,
// which is a main-deck LIGHT Fiend the engine runs as fodder.
const byId = Object.fromEntries(cards.map((c) => [c.id, c]));
const pick = (...ids) => ids.map((id) => byId[id]);

export default {
  groups: [
    { key: "maindeck", title: "Main Deck Monsters", tag: "starters", dot: "#e0c46a",
      blurb: "The Level monsters you open with: Engraver and Lacrima are the archetype's starters, Fabled Lurrie a free discard-fodder body.",
      cards: pick("fiendsmith-engraver", "lacrima-the-crimson-tears", "fabled-lurrie") },
    { key: "extra", title: "Extra Deck", tag: "payoffs", dot: "#cbb0ff",
      blurb: "The Fiendsmith Fusions and Links. Fusions listed by Level, Links by Rating.",
      cards: pick("fiendsmiths-lacrima", "fiendsmiths-desirae", "fiendsmiths-rextremende",
                  "fiendsmiths-requiem", "fiendsmiths-sequence", "fiendsmiths-agnumday") },
    { key: "spells", title: "Spells", tag: "enablers", dot: "#7fd8c6",
      blurb: "The archetype's search and Fusion-enabling Spells.",
      cards: pick("fiendsmiths-tract", "fiendsmiths-sanct") },
    { key: "traps", title: "Traps", tag: "protection", dot: "#d98cba",
      blurb: "Protection and follow-up Traps that also Fusion Summon from the GY.",
      cards: pick("fiendsmith-kyrie", "fiendsmith-in-paradise") },
    { key: "support", title: "Supporting Cards", tag: "generic glue", dot: "#b98cff",
      blurb: "Non-Fiendsmith Extra Deck targets and enablers the engine leans on to actually function.",
      cards: pick("skull-archfiend-of-chaos", "necroquip-princess", "aerial-eater",
                  "dddd-wave-high-king-caesar", "chaos-angel") },
  ],
};
