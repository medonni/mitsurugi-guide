// Root deck-select hub. One entry per deck (including Fiendsmith, an engine
// rather than an archetype, but built out the same way: Overview/Cards/Combos
// of its own), plus a shared reference page that isn't tied to any one deck.
// This is also the single source base.njk's nav loops over to build each
// deck's dropdown, so `href` must be the deck's Overview URL, cards/combos
// URLs are derived from it (`{href}cards/`, `{href}combos/`), and `discord`
// is that deck's own community, not a shared site-wide one. `accent` mirrors
// that deck's `--violet` override in style.css's `body.deck-<id>` block, so
// the hub can preview each card in its own deck's color before you click,
// the hub page itself has no `deck-*` class to pull the token from.
export default {
  decks: [
    {
      id: "mitsurugi", name: "Mitsurugi", tagline: "DARK Reptile · Ritual",
      status: "live", href: "/mitsurugi/", image: "/assets/cards/main/murakumo.webp",
      body: "Tribute your own monsters to trigger their effects, then rebuild the board faster than the opponent can clear it.",
      discord: "https://discord.gg/wWpSsNafDT", accent: "#b98cff",
    },
    {
      id: "fiendsmith", name: "Fiendsmith", tagline: "LIGHT Fiend · Engine",
      status: "live", href: "/fiendsmith/", image: "/assets/cards/fiendsmith/fiendsmith-engraver.webp",
      body: "A splashable package, not piloted alone: a couple of starters that turn into an on-demand negate and a grindy recursion loop for whatever deck runs it.",
      discord: "https://discord.com/invite/CTvQBRwHmk", accent: "#4fc9e8",
    },
    {
      // "Nostalgia Bait" is a deliberate joke, not a missing card fact: these are
      // 2005 cards getting 2026 support, and the overview's closing paragraph pays
      // it off. Don't "correct" it to an attribute/type like the other two decks.
      id: "sacred-beasts", name: "Sacred Beasts", tagline: "Nostalgia Bait · Fusion",
      status: "wip", href: "/sacred-beasts/", image: "/assets/cards/sacred-beasts/chaotic-phantasmal-sacred-beasts.jpg",
      body: "Uria, Hamon, and Raviel, three Level 10 monsters that can't be Normal Summoned, fused into a 5000 ATK negate machine. Chaos Origins package documented; older staples and combo lines are still in progress.",
      discord: "https://discord.com/invite/vgWuQXT", accent: "#52d68f",
    },
  ],
  engines: [
    { name: "Handtraps", dot: "#7fd8c6", href: "/handtraps/", body: "The hand disruption run across every deck in this guide, in one shared reference instead of copy-pasted onto each deck page." },
  ],
};
