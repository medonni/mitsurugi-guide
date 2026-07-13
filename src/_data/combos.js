// Combo-line content. The core line is the verified end-to-end play (same
// sequence as landing.turn, expanded with the resource logic per step).
// Card names & effects © Konami: reference only.
//
// To add a line: push an object to `lines`. Keep steps honest (verified card
// text only): unverified lines stay in `pending` until the effects are confirmed.
export default {
  intro:
    "Mitsurugi wins by looping tributes into searches and revivals. Below is the main line that turns a single starter into a board wipe plus a grind engine. Each step notes not just what to do, but why the resources come back.",

  lines: [
    {
      id: "main-1",
      name: "Main combo line 1",
      tag: "Bread and butter",
      starter: 'Any opener that reaches Habakiri: <a href="../cards/#preprep">Pre-Prep of Rites</a>, <a href="../cards/#prayers">Mitsurugi Prayers</a>, an <a href="../cards/#aramasa">Aramasa</a> Normal Summon, or <a href="../cards/#raggedrecords">Ragged Records of Rites</a>',
      result: "Murakumo, Futsu no Mitama, and Habakiri, plus a set Trap or Mitsurugi Mirror",
      steps: [
        { n: "0", card: "Get to Habakiri", do: "Reach Habakiri through any opener: Pre-Prep of Rites, Mitsurugi Prayers, an Aramasa Normal Summon, or Ragged Records of Rites.",
          why: "The next steps can vary a little depending on the rest of your hand and how you got to Habakiri." },
        { n: "1", card: "Habakiri effect in hand", do: "Reveal Habakiri, Special Summon Saji from the Deck, then tribute Saji.",
          warn: "Ash Blossom hits this trigger and stops the whole search. Bait it out first if you can." },
        { n: "1.5", card: "Saji triggers in GY", do: "Add Mitsurugi Ritual to hand.",
          warn: "Droll & Lock Bird shuts off every further add for the turn once you make this search." },
        { n: "2", card: "Ritual summon from hand, tribute from Deck", do: "Activate Mitsurugi Ritual to Ritual Summon Habakiri, tributing Aramasa and Kusanagi from the Deck. If you run it, use NSS instead of Aramasa to revive it." },
        { n: "2.5", card: "Tributed monsters trigger", do: "CL1 Kusanagi returns Mitsurugi Mirror; CL2 Aramasa fetches Futsu no Mitama.",
          why: "Both on-Tribute effects resolve from the GY." },
        { n: "3", card: "Ritual summon from Deck, tribute from field", do: "Activate Mitsurugi Ritual again, tributing Habakiri to summon Ame no Murakumo from the Deck.",
          why: "Murakumo wipes the opponent's board on Special Summon." },
        { n: "3.5", card: "Habakiri on-Tribute", do: "Habakiri's on-Tribute effect adds Mitsurugi Mirror and revives itself." },
        { n: "4", card: "Mirror activation", do: "Activate Mitsurugi Mirror, tributing Murakumo to Special Summon Futsu no Mitama from the hand in defense position.",
          why: "Futsu is a 3400 DEF wall, a very big defender." },
        { n: "4.5", card: "Murakumo on-Tribute", do: "Murakumo activates in the GY, adding a Mitsurugi card and reviving itself. Add either a Trap or Mitsurugi Mirror." },
        { n: "5", card: "Set the added card", do: "Set the Trap or Mitsurugi Mirror you added to finish." },
      ],
    },
  ],

  // Verified interactions worth knowing mid-combo (pulled from card tips).
  interactions: [
    { name: "Ash Blossom on the bosses", body:
      "Negating a boss's on-Tribute search also cancels its self-revive: both resolve as one effect. Bait or play around Ash before committing." },
    { name: "Mitsurugi Prayers, surprise wipe", body:
      "Set Prayers and activate on the opponent's turn to Special Summon Murakumo from hand or GY, dropping its board wipe like a Raigeki." },
    { name: "The negate is conditional", body:
      "Murakumo's discard-or-negate helps decks that WANT to discard (Dark World, Mermail). Respect the matchup instead of leaning on it." },
  ],

  // Lines awaiting verified effects before they go on the page.
  pending: ["Ogdoadic Rank 8 extension", "Fiendsmith omni-negate bridge"],
};
