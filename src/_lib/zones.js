// Shared by every deck's card-data file (cards.js, fiendsmith.js,
// sacredBeasts.js, ...): computes which zone-filter chips a card compendium
// page should show. Only zones some card in the deck actually uses render a
// chip (so an unused label never shows a dead filter), in a fixed canonical
// order so chip order is consistent across every deck. A deck introducing a
// new zone label adds it here, in the position it should sort to.
const ZONE_ORDER = ["HAND", "GY", "FIELD", "TRIGGER", "ON TRIBUTE"];

export function deriveZones(cardData) {
  const used = new Set(cardData.flatMap((c) => c.zones.map((z) => z[0])));
  return ZONE_ORDER.filter((z) => used.has(z));
}
