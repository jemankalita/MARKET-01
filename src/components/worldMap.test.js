import { createElement } from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { cityPercent, MAP_CITIES, MAP_HUBS, MAP_VIEW, WorldMap } from "./WorldMap.jsx";

const INDICES = {
  NYA: { change: 0.84 },
  FTSE: { change: -0.21 },
  NIFTY: { change: 1.24 },
  NIKKEI: { change: 1.12 },
  STI: { change: -0.42 },
};

function byId() {
  return Object.fromEntries(MAP_CITIES.map((c) => [c.id, c]));
}

describe("world map cities", () => {
  it("uses the geographic map viewBox", () => {
    expect(MAP_VIEW).toEqual({ width: 950, height: 620 });
  });

  it("places five labelled market cities inside the map", () => {
    expect(MAP_CITIES.map((c) => c.id)).toEqual(["NY", "LN", "MB", "TK", "SG"]);
    MAP_CITIES.forEach((city) => {
      expect(city.index).toBeTruthy();
      expect(city.tail).toMatch(/^(n|s|e|w)$/);
      const pos = cityPercent(city);
      expect(pos.left).toBeGreaterThan(10);
      expect(pos.left).toBeLessThan(92);
      expect(pos.top).toBeGreaterThan(12);
      expect(pos.top).toBeLessThan(70);
    });
  });

  it("keeps New York west of London and Mumbai west of Tokyo", () => {
    const cities = byId();
    expect(cities.NY.x).toBeLessThan(cities.LN.x);
    expect(cities.LN.x).toBeLessThan(cities.MB.x);
    expect(cities.MB.x).toBeLessThan(cities.TK.x);
    expect(cities.SG.y).toBeGreaterThan(cities.TK.y);
  });

  it("sits each pin on the matching landmass", () => {
    const cities = byId();
    expect(cities.NY.x).toBeGreaterThan(260);
    expect(cities.NY.x).toBeLessThan(280);
    expect(cities.NY.y).toBeGreaterThan(180);
    expect(cities.NY.y).toBeLessThan(205);
    expect(cities.LN.x).toBeGreaterThan(442);
    expect(cities.LN.x).toBeLessThan(460);
    expect(cities.LN.y).toBeGreaterThan(158);
    expect(cities.LN.y).toBeLessThan(178);
    expect(cities.MB.x).toBeGreaterThan(654);
    expect(cities.MB.x).toBeLessThan(672);
    expect(cities.MB.y).toBeGreaterThan(262);
    expect(cities.MB.y).toBeLessThan(286);
    expect(cities.TK.x).toBeGreaterThan(808);
    expect(cities.TK.x).toBeLessThan(824);
    expect(cities.TK.y).toBeGreaterThan(198);
    expect(cities.TK.y).toBeLessThan(216);
    expect(cities.SG.x).toBeGreaterThan(732);
    expect(cities.SG.x).toBeLessThan(748);
    expect(cities.SG.y).toBeGreaterThan(318);
    expect(cities.SG.y).toBeLessThan(334);
  });

  it("offsets each callout so the pin is not under the label", () => {
    MAP_CITIES.forEach((city) => {
      expect(Math.abs(city.ox)).toBeGreaterThanOrEqual(16);
      expect(Math.hypot(city.ox, city.oy)).toBeGreaterThan(36);
    });
    const sg = byId().SG;
    expect(sg.ox).toBeGreaterThan(18);
    expect(sg.oy).toBeLessThan(-24);
  });

  it("renders labelled pins plus quieter hub dots", () => {
    const { container } = render(createElement(WorldMap, { indices: INDICES }));
    const pins = container.querySelectorAll(".world-overlay .map-pin");
    const hubs = container.querySelectorAll(".world-overlay .map-hub");
    expect(pins).toHaveLength(MAP_CITIES.length);
    expect(hubs.length).toBe(MAP_HUBS.length);
    expect(hubs.length).toBeGreaterThan(8);
    expect(container.querySelectorAll(".city-card[data-tail]")).toHaveLength(5);
  });
});
