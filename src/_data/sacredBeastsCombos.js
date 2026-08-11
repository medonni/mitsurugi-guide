// Sacred Beast combo lines for the "Chaos Origins" (CORI, July 2026) package.
// Card names & effects © Konami: reference only.
//
// Honesty rule, same as the other two decks: these two lines were compiled by
// hand rather than transcribed from a published, played-out write-up. Every
// effect was re-checked against the printed CORI text in sacredBeasts.js and,
// for the generic Extra Deck cards line 2 leans on, against the YGOPRODeck API.
// The sequencing is verified as legal, not battle-tested, and the page says so.
//
// Those generic cards (Linkuriboh, Cross-Sheep, Protectcode Talker, Firewall
// Dragon, Zenna's Deceiving Doll Maidens, Charmer Quartet in Bloom, S:P Little
// Knight, Thunder Dragon Colossus, Albion the Branded Dragon, The Fallen & The
// Virtuous) are not in the compendium, so they read as plain text. Add them to
// sacredBeasts.js with art if the Link line becomes the deck's main plan.
export default {
  kicker: '// COMBO LINES · SACRED BEASTS <span class="wip-badge">WORK IN PROGRESS</span>',
  h1: "Every card in hand fetches the next one",
  intro:
    "The three Level 10 bosses share one shape: reveal it in hand, search, discard. Raviel finds monsters, Hamon finds Spells, Uria finds Traps, so whichever one you open decides the order, not whether the line works. The discards are not a tax either, since Summoner of the Sacred Beasts, Martyr of the Sacred Beasts and the bosses themselves all want to be in the GY. The lines below were compiled against the printed CORI text rather than taken from a published write-up: every effect is verified, the sequencing is not battle-tested.",

  lines: [
    {
      id: "sb-raviel",
      name: "Raviel opener",
      section: "1 Card Combos",
      tag: "The clean one",
      starter: "Infinity of the Sacred Beasts - Raviel, Lord of Phantasms in hand, plus cards you don't mind discarding",
      result:
        "Raviel and Summoner of the Sacred Beasts on board under Fallen Paradise of the Sacred Beasts, two cards drawn, and three Martyrs left over for any Link you want",
      steps: [
        { n: "1", card: "Raviel in hand", do: "Reveal Raviel to add Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder from the Deck, then discard 1.",
          info: "All three Level 10s share this effect. Raviel searches monsters, Hamon searches Spells, Uria searches Traps, so the opener you hold only changes the order." },
        { n: "2", card: "Hamon in hand", do: "Reveal Hamon to add Sacred Beasts Released, then discard 1." },
        { n: "3", card: "Sacred Beasts Released", do: "Add three Sacred Beast monsters with different names: Uria, Martyr of the Sacred Beasts and Summoner of the Sacred Beasts. Then discard 2, pitching Raviel and Summoner.",
          why: "Both discards are live down there. Summoner banishes itself from the GY to revive a Sacred Beast, and Raviel is what it revives." },
        { n: "4", card: "Uria in hand", do: "Reveal Uria to add Sacred Beasts Combined Assault, then discard 1.",
          info: "The discard is mandatory, and pitching the Combined Assault you just searched is not a waste: from the GY it banishes itself to Fusion Summon The Chaotic Phantasmal Sacred Beasts using monsters in your hand or on your field." },
        { n: "5", card: "Martyr", do: "Normal Summon Martyr of the Sacred Beasts. Its summon trigger places Sacred Beasts Thunderclap from the Deck face-up on your field." },
        { n: "6", card: "Thunderclap", do: "Place 2 more Thunderclaps face-up from your hand, Deck and/or GY, then reveal a Level 10 Sacred Beast in your hand to place Fallen Paradise of the Sacred Beasts in your Field Zone.",
          why: "One Normal Summon is now three Continuous Spells plus the Field Spell, and those three Thunderclaps are exactly the send-3-of-a-type cost Paradise charges later." },
        { n: "7", card: "Summoner in GY", do: "Banish Summoner of the Sacred Beasts from the GY to Special Summon Raviel from the GY in Defense Position.",
          warn: "None of Summoner's three effects can summon a Level 8 monster, so it is the Level 10s or nothing." },
        { n: "8", card: "Martyr again", do: "You control another Sacred Beast monster, so Special Summon 2 more Martyrs from your hand, Deck and/or GY." },
        { n: "9", card: "Fallen Paradise", do: "You control a Sacred Beast whose original Level is 10, so draw 2 cards." },
        { n: "10", card: "Fallen Paradise again", do: "Send the three face-up Thunderclaps to the GY, then Special Summon Summoner of the Sacred Beasts back from banishment, unaffected by your opponent's activated Spell/Trap effects.",
          info: "Paradise wants 3 cards of the same type and the Thunderclaps are all Spells, which is why step 6 matters. One of them adds itself back to your hand during your opponent's End Phase." },
        { n: "11", card: "Three Martyrs", do: "Spend the three Level 1 Martyrs on whatever Link your build wants. Everything above is already on the board." },
      ],
    },
    {
      id: "sb-hamon-links",
      name: "Hamon into the Link chain",
      section: "1 Card Combos",
      tag: "Colossus lock",
      starter: "Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder in hand, plus a generic Link package in the Extra Deck",
      result:
        "Thunder Dragon Colossus, which stops your opponent searching at all, next to Cross-Sheep and three Martyrs, with Fallen Paradise up and two cards drawn",
      note:
        "This one rents the Cyberse Link toolbox: Linkuriboh, Cross-Sheep, Protectcode Talker, Firewall Dragon, Zenna's Deceiving Doll Maidens, Charmer Quartet in Bloom, S:P Little Knight, two Thunder Dragon Colossus and Albion the Branded Dragon. None of those are in the compendium yet, so they do not link below. Stopping here is a real board. The extension underneath spends the three Martyrs on the rest of the Link chain.",
      steps: [
        { n: "1", card: "Hamon in hand", do: "Reveal Hamon to add Sacred Beasts Released, then discard 1.",
          why: "It also quietly turns on Thunder Dragon Colossus for the rest of the turn: Colossus can be Special Summoned by Tributing 1 Thunder Effect monster during a turn a Thunder monster's effect was activated in the hand, and Hamon is a Thunder monster." },
        { n: "2", card: "Sacred Beasts Released", do: "Add Martyr of the Sacred Beasts, Infinity of the Sacred Beasts - Raviel, Lord of Phantasms and Summoner of the Sacred Beasts, then discard 2, pitching Hamon and a spare.",
          why: "Hamon has already done its job in the hand, and step 12 revives it from the GY." },
        { n: "3", card: "Martyr", do: "Normal Summon Martyr of the Sacred Beasts and place Sacred Beasts Thunderclap from the Deck face-up on your field." },
        { n: "4", card: "Thunderclap", do: "Place 2 more Thunderclaps, then reveal a Level 10 Sacred Beast in hand to place Fallen Paradise of the Sacred Beasts in your Field Zone." },
        { n: "5", card: "Raviel in hand", do: "Reveal Raviel to add Uria, then discard Raviel itself.",
          why: "The discard is mandatory and Raviel is a revival target once it is down there, so it pays for its own search." },
        { n: "6", card: "Uria in hand", do: "Reveal Uria to add Sacred Beasts Combined Assault, then discard the Combined Assault you just added.",
          why: "Combined Assault does its real work from the GY: banish it to Fusion Summon the Level 10 Fusion out of your hand or field, which is the last step of this line." },
        { n: "7", card: "Summoner in hand", do: "Reveal Summoner of the Sacred Beasts, discard Summoner itself, and Special Summon Uria from your hand in Defense Position.",
          info: "The discard happens on resolution rather than as a cost, so Summoner can pay with itself and load its own GY effects at the same time." },
        { n: "8", card: "Martyr again", do: "Special Summon 2 more Martyrs from your hand, Deck and/or GY." },
        { n: "9", card: "Fallen Paradise", do: "Uria is a Level 10 on your field, so draw 2 cards." },
        { n: "10", card: "Martyr", do: "Link Summon Linkuriboh with one Martyr." },
        { n: "11", card: "Uria + Linkuriboh", do: "Link Summon Cross-Sheep." },
        { n: "12", card: "Summoner in GY", do: "Banish Summoner from the GY to Special Summon Hamon from the GY in Defense Position." },
        { n: "13", card: "Hamon", do: "Tribute Hamon to Special Summon Thunder Dragon Colossus, into a zone Cross-Sheep points to.",
          warn: "The zone is the whole point. Cross-Sheep only pays out for a monster Special Summoned to a zone it points to." },
        { n: "14", card: "Cross-Sheep", do: "A Fusion Monster arrived in a zone it points to, so Special Summon 1 Level 4 or lower monster from your GY: take a Martyr back.",
          info: "Board check: Thunder Dragon Colossus, Cross-Sheep and three Martyrs, with Fallen Paradise in the Field Zone and Summoner in the GY. The extension below starts here." },
      ],
    },
    {
      id: "sb-hamon-extension",
      name: "The Link wall extension",
      jump: "Link wall",
      section: "1 Card Combos",
      tag: "Where it goes long",
      starter: "The board the line above ends on: Colossus, Cross-Sheep and three Martyrs",
      result:
        "S:P Little Knight, Charmer Quartet in Bloom and a second Thunder Dragon Colossus, with The Fallen & The Virtuous Set for their turn",
      note:
        'Continues from <a class="clink" href="#sb-hamon-links">Hamon into the Link chain</a>, spending the three Martyrs it left over. Past the first two Links these are decision points rather than a fixed script: read the board before committing, because every step here trades a body for a different kind of interaction.',
      steps: [
        { n: "1", card: "Martyr + Cross-Sheep", do: "Link Summon Protectcode Talker." },
        { n: "2", card: "Martyr + Protectcode", do: "Link Summon Firewall Dragon." },
        { n: "3", card: "Protectcode in GY", do: "You control a \"Firewall\" Link Monster, so banish Link Monsters from your GY whose Link Ratings total exactly 3, Linkuriboh and Cross-Sheep, to Special Summon Protectcode Talker back from the GY." },
        { n: "4", card: "Firewall Dragon", do: "Return Uria from the GY to your hand, or bounce a monster your opponent controls instead.",
          warn: "Firewall returns up to the number of monsters co-linked to it, so this does nothing unless something points back at it. Place Protectcode in step 3 accordingly." },
        { n: "5", card: "Martyr + Firewall", do: "Link Summon Zenna's Deceiving Doll Maidens. Every material was a monster you controlled, so its trigger sends 1 monster from your Extra Deck to the GY: send Albion the Branded Dragon." },
        { n: "6", card: "Fallen Paradise", do: "Send the three Thunderclaps to the GY and Special Summon Summoner of the Sacred Beasts back from banishment." },
        { n: "7", card: "Summoner on the field", do: "Discard Uria to Special Summon Raviel from the GY in Defense Position.",
          info: "This is Summoner's third and last effect, the one it uses from the field. All three are once per turn each, and this line uses all three." },
        { n: "8", card: "Protectcode + Raviel", do: "Link Summon Charmer Quartet in Bloom." },
        { n: "9", card: "Charmer Quartet", do: "Target 2 monsters in your GY with the same Attribute but different Types: Firewall Dragon and Hamon are both LIGHT. Special Summon both.",
          warn: "Until the end of the next turn, Quartet and both revived monsters cannot be used as material for a Fusion, Synchro, Xyz or Link Summon." },
        { n: "10", card: "Zenna + Summoner", do: "Link Summon S:P Little Knight.",
          info: "Zenna is a Link Monster, so S:P's Link-Summon trigger turns on: banish 1 card on the field or in either GY." },
        { n: "11", card: "Hamon", do: "Tribute Hamon for a second Thunder Dragon Colossus.",
          why: "Charmer Quartet only blocks using the revived monsters as Fusion, Synchro, Xyz or Link material. Colossus' alternate Special Summon is a Tribute, not a material, so Hamon is still allowed to pay for it." },
        { n: "12", card: "Albion, End Phase", do: "Albion was sent to the GY this turn, so Set The Fallen & The Virtuous from the Deck.",
          info: "It is a Quick-Play Spell that is always treated as a \"Branded\" card, which is why Albion can fetch it. Set now, it is live on your opponent's turn." },
        { n: "13", card: "Combined Assault in GY", do: "If you still hold or control three Level 10 monsters that cannot be Normal Summoned, banish Combined Assault from the GY to Fusion Summon The Chaotic Phantasmal Sacred Beasts using them from your hand or field.",
          warn: "This line spends its Level 10s on the Link chain, so the Fusion only comes up when you drew into more of them, for instance off the two Paradise draws." },
      ],
    },
  ],

  interactionsTitle: "What to know before you pilot it",
  interactions: [
    { name: "The discard is the engine", body:
      "Every search on the three Level 10s ends in a mandatory discard, and almost everything in the deck would rather be in the GY: Summoner revives from there, Martyr adds itself back during your opponent's End Phase, and Sacred Beasts Combined Assault Fusion Summons from there. Pick what you pitch, don't just dump the worst card." },
    { name: "Summoner has three effects and three places", body:
      "Reveal it in hand to summon from your hand. On the field, discard 1 to summon from your hand or GY. In the GY, banish it to summon from your GY. Each is once per turn, so a line can use all three, and none of the three can summon a Level 8 monster." },
    { name: "Thunderclap is the Field Spell's ammunition", body:
      "One Martyr placement becomes three Thunderclaps plus Fallen Paradise. That matters because Paradise charges you 3 cards of the same type per Special Summon, and three face-up Continuous Spells are the cheapest way to pay it. One Thunderclap returns to your hand during your opponent's End Phase." },
    { name: "Combined Assault is the backdoor Fusion", body:
      "Its GY effect Fusion Summons any \"Phantasm\" Fusion Monster, which is what The Chaotic Phantasmal Sacred Beasts is under the hood, using monsters in your hand or field. Discarding it early to a Level 10's search is often better than holding it as a Trap." },
  ],

  pending: ["Fiendsmith splash variants", "2-card combos"],
};
