import { describe, expect, it } from "vitest";
import { heatmapEntries } from "./Heatmap.jsx";
import { HOME_HEAT, HOME_HEAT_COLUMNS } from "../engine/homeHeat.js";

describe("compact heatmap", () => {
  it("uses three columns of nine preview sectors", () => {
    expect(HOME_HEAT).toHaveLength(9);
    expect(HOME_HEAT.length % HOME_HEAT_COLUMNS).toBe(0);
    expect(HOME_HEAT_COLUMNS).toBe(3);
  });

  it("keeps the mock front row then adds a third density row", () => {
    const sectors = Object.fromEntries(
      [...HOME_HEAT, "CONSUMER"].map((id) => [id, { id, name: id }]),
    );
    expect(heatmapEntries(sectors, true).map((s) => s.id)).toEqual(HOME_HEAT);
  });
});
