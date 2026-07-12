// Landing / overview page content. Ported from the design handoff.
export default {
  stats: [
    { value: "DARK", label: "ATTRIBUTE" },
    { value: "Reptile", label: "MONSTER TYPE" },
    { value: "Level 8", label: "RITUAL BOSSES" },
    { value: "Level 4", label: "MIKOTO SEARCHERS" },
  ],
  loop: [
    { n: "01", title: "Tribute a monster", body: "For a Ritual Summon, a defensive save, or a card's own effect — Mitsurugi doesn't care why." },
    { n: "02", title: "Trigger fires", body: "The tributed monster searches, revives, or recurs a card from Deck, hand, or Graveyard." },
    { n: "03", title: "Rebuild the board", body: "Rituals re-summon themselves; searchers refill your hand. You rarely lose card advantage." },
    { n: "04", title: "Grind them out", body: "Disruptive on-field effects plus endless recursion make the board painful to break." },
  ],
  bosses: [
    { name: "Ame no Murakumo", short: "MURAKUMO", stat: "LV8 · ATK 2600 · DEF 800", desc: "Board-wipes the opponent's monsters on Special Summon, then offers a negate-or-discard Quick Effect. The primary payoff." },
    { name: "Futsu no Mitama", short: "FUTSU", stat: "LV8 · ATK 800 · DEF 2600", desc: "Swarms Reptiles whenever the opponent Special Summons, recurring your searchers. The grind-game backbone." },
    { name: "Ame no Habakiri", short: "HABAKIRI", stat: "LV8 · ATK 2500 · DEF 900", desc: "Reveal it in hand to Special Summon a Mitsurugi from Deck — the deck's best one-card starter, plus a lingering -800 ATK." },
  ],
  synergy: [
    { name: "Ogdoadic", dot: "#7fd8c6", body: "The premier partner. Ogdoadic tributes monsters from the field to revive from the GY — which triggers your Mitsurugi on-Tribute effects for free. Shared Level 8s enable Rank 8 plays too." },
    { name: "Ryzeal", dot: "#b98cff", body: "A Rank-4 engine that gives extra consistent starters and easy access to Habakiri via generic Xyz. A popular hybrid for raw power." },
    { name: "Dogmatika / Drytron", dot: "#e0c46a", body: "Ritual-adjacent shells that share Mitsurugi's Ritual subtheme, leaning on the flexible summoning to slot the snakes in as an engine." },
  ],
  turn: [
    { n: "1", card: "Pre-Prep of Rites", do: "Add Habakiri + Mitsurugi Mirror from Deck." },
    { n: "2", card: "Habakiri (hand)", do: "Reveal it to Special Summon Aramasa, then tribute it." },
    { n: "3", card: "Aramasa → Saji", do: "Tributed Aramasa searches Saji; Normal Summon it for Mitsurugi Ritual." },
    { n: "4", card: "Mitsurugi Ritual", do: "Tribute Habakiri to summon Murakumo from Deck — wiping their board." },
    { n: "5", card: "End on the bosses", do: "Pivot into Futsu; sit on a negate, a swarm, and full recursion." },
  ],
};
