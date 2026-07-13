// Landing / overview page content.
export default {
  stats: [
    { value: "DARK", label: "ATTRIBUTE" },
    { value: "Reptile", label: "MONSTER TYPE" },
    { value: "Level 8", label: "RITUAL BOSSES" },
    { value: "Level 4", label: "ENGINE MONSTERS" },
  ],
  loop: [
    { n: "01", title: "Tribute a monster", body: "For a Ritual Summon, a defensive save, or a card's own effect. The deck doesn't care why." },
    { n: "02", title: "Trigger fires", body: "The tributed monster searches, revives, or recurs a card from Deck, hand, or Graveyard." },
    { n: "03", title: "Rebuild the board", body: "Rituals re-summon themselves; searchers refill your hand. You rarely lose card advantage." },
    { n: "04", title: "Grind them out", body: "Disruptive on-field effects plus endless recursion make the board painful to break." },
  ],
  bosses: [
    { id: "murakumo", name: "Ame no Murakumo", short: "MURAKUMO", stat: "LV8 · ATK 3200 · DEF 800", image: "/assets/cards/main/murakumo.webp", desc: "Board-wipes the opponent's monsters on Special Summon, then offers a negate-or-discard Quick Effect. The primary payoff." },
    { id: "futsu", name: "Futsu no Mitama", short: "FUTSU", stat: "LV8 · ATK 2000 · DEF 3400", image: "/assets/cards/main/futsu.webp", desc: "Swarms Reptiles whenever the opponent Special Summons, recurring your searchers. The grind-game backbone." },
    { id: "habakiri", name: "Ame no Habakiri", short: "HABAKIRI", stat: "LV8 · ATK 2400 · DEF 1800", image: "/assets/cards/main/habakiri.webp", desc: "Reveal it in hand to Special Summon a Mitsurugi from Deck; the deck's best one-card starter, with a lingering -800 ATK." },
  ],
  synergy: [
    { name: "Fiendsmith", dot: "#cbb0ff", body: "A splashable LIGHT Fiend engine that adds an omni-negate and grindy recursion. It doesn't convert the Reptile bosses on its own, so you bridge into the package through Evilswarm Exciton Knight, while the new Skull Servant of Chaos bridges back into Mitsurugi." },
    { name: "Ryzeal", dot: "#b98cff", body: "A Rank-4 engine adding consistent starters and generic Xyz access to Habakiri. A high-power hybrid for raw speed." },
    { name: "Sky Striker", dot: "#7fd8c6", body: "TBA." },
    { name: "Clown Crew", dot: "#e0c46a", body: "TBA." },
    { name: "Chaos", dot: "#8f9bd0", body: "TBA." },
  ],
  turn: [
    { n: "1", card: "Pre-Prep of Rites", do: "Add Mitsurugi Mirror and Habakiri from the Deck." },
    { n: "2", card: "Reveal Habakiri", do: "Special Summon Saji from the Deck, then tribute it." },
    { n: "3", card: "Saji trigger", do: "The tributed Saji searches Mitsurugi Ritual, turning the engine on." },
    { n: "4", card: "Mitsurugi Ritual (hand)", do: "Ritual Summon Habakiri, using Aramasa and Kusanagi as material. CL1 Kusanagi returns Mitsurugi Ritual from the GY; CL2 Aramasa adds a Level 8 boss." },
    { n: "5", card: "Mitsurugi Ritual (Deck)", do: "Cast the recovered Ritual again, tributing Habakiri to Summon Ame no Murakumo from the Deck and wipe their board. From here you branch into the full combos." },
  ],
};
