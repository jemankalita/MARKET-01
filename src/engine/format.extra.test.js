import { describe, expect, it } from "vitest";
import { heatmapInk } from "./format.js";
import { pickEvent, EVENTS } from "./market.js";

describe("heatmapInk", () => {
  it("uses off-white on strong fills for contrast", () => {
    expect(heatmapInk(-3)).toBe("#F2F0EA");
    expect(heatmapInk(2.4)).toBe("#F2F0EA");
    expect(heatmapInk(0)).toBe("#000000");
  });
});

describe("pickEvent", () => {
  it("returns a catalog event", () => {
    const event = pickEvent(() => 0);
    expect(EVENTS.map((e) => e.id)).toContain(event.id);
  });
});
