import { describe, expect, it } from "vitest";
import {
  createMarketState,
  tickMarket,
  applyEvent,
  EVENTS,
  searchIndex,
} from "./market.js";

function seeded(sequence) {
  let i = 0;
  return () => {
    const v = sequence[i % sequence.length];
    i += 1;
    return v;
  };
}

describe("createMarketState", () => {
  it("seeds indices, sectors, and companies with prices and momentum", () => {
    const state = createMarketState();
    expect(state.indices.NIFTY.price).toBeCloseTo(25421.3, 1);
    expect(state.sectors.BANKING).toBeTruthy();
    expect(state.companies.RELIANCE.price).toBeCloseTo(2941.2, 1);
    expect(state.live).toBe(true);
    expect(state.events).toEqual([]);
  });
});

describe("tickMarket", () => {
  it("drifts prices with momentum instead of replacing them randomly", () => {
    const state = createMarketState();
    const next = tickMarket(state, seeded([0.5, 0.5, 0.5, 0.5]));
    expect(next).not.toBe(state);
    expect(Math.abs(next.indices.NIFTY.price - state.indices.NIFTY.price)).toBeLessThan(40);
    expect(next.indices.NIFTY.history.length).toBe(state.indices.NIFTY.history.length + 1);
  });

  it("keeps percentage change consistent with open price", () => {
    const state = createMarketState();
    const next = tickMarket(state, () => 0.51);
    const nifty = next.indices.NIFTY;
    const expected = ((nifty.price - nifty.open) / nifty.open) * 100;
    expect(nifty.change).toBeCloseTo(expected, 2);
  });
});

describe("applyEvent", () => {
  it("correlates a banking volume surge across sector, banks, and nifty", () => {
    const state = createMarketState();
    const next = applyEvent(state, "BANKING_VOLUME_SURGE", () => 0.5);
    expect(next.sectors.BANKING.change).toBeGreaterThan(state.sectors.BANKING.change);
    expect(next.companies["HDFC BANK"].change).toBeGreaterThan(
      state.companies["HDFC BANK"].change,
    );
    expect(next.companies["ICICI BANK"].change).toBeGreaterThan(
      state.companies["ICICI BANK"].change,
    );
    expect(next.indices.NIFTY.change).toBeGreaterThan(state.indices.NIFTY.change);
    expect(next.sectors.BANKING.volume).toBeGreaterThan(state.sectors.BANKING.volume);
    expect(next.events[0].id).toBe("BANKING_VOLUME_SURGE");
    expect(next.events[0].impacts.length).toBeGreaterThan(2);
  });

  it("defines the demo event catalog", () => {
    const ids = EVENTS.map((e) => e.id);
    expect(ids).toContain("BANKING_VOLUME_SURGE");
    expect(ids).toContain("ENERGY_PRESSURE");
    expect(ids).toContain("TECH_MOMENTUM");
  });
});

describe("searchIndex", () => {
  it("returns companies, news, analysis, and sectors", () => {
    const results = searchIndex("reliance");
    expect(results[0].type).toBe("COMPANY");
    expect(results.some((r) => r.type === "NEWS")).toBe(true);
  });

  it("returns empty for unmatched queries", () => {
    expect(searchIndex("zzzz")).toEqual([]);
  });
});
