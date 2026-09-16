import { describe, expect, it } from "vitest";
import { seriesGeometry } from "./chart.js";

describe("seriesGeometry", () => {
  it("builds a line and closed area for a rising series", () => {
    const geo = seriesGeometry([10, 20, 30], { width: 100, height: 50, pad: 0 });
    expect(geo.line.startsWith("M")).toBe(true);
    expect(geo.area.endsWith("Z")).toBe(true);
    expect(geo.last.x).toBe(100);
    expect(geo.last.y).toBe(0);
  });

  it("returns empty geometry without points", () => {
    const geo = seriesGeometry([], { width: 100, height: 50 });
    expect(geo.line).toBe("");
    expect(geo.area).toBe("");
  });

  it("keeps the last point left of a right gutter so the last value is not on the stroke", () => {
    const geo = seriesGeometry([10, 20, 30], { width: 640, height: 240, pad: 28, padRight: 88 });
    expect(geo.last.x).toBe(640 - 88);
    expect(geo.last.x).toBeLessThan(640 - 40);
  });
});
