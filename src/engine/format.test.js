import { describe, expect, it } from "vitest";
import {
  formatPrice,
  formatChange,
  movementSymbol,
  movementTone,
  heatmapLevel,
  heatmapFill,
} from "./format.js";

describe("formatPrice", () => {
  it("formats with thousands separators and two decimals", () => {
    expect(formatPrice(25421.3)).toBe("25,421.30");
  });

  it("formats rupees without the symbol", () => {
    expect(formatPrice(2941.2)).toBe("2,941.20");
  });
});

describe("movement language", () => {
  it("uses ↗ and black tone for positive movement", () => {
    expect(movementSymbol(1.24)).toBe("↗");
    expect(movementTone(1.24)).toBe("pos");
    expect(formatChange(1.24)).toBe("+1.24%");
  });

  it("uses ↘ and red tone for negative movement", () => {
    expect(movementSymbol(-0.31)).toBe("↘");
    expect(movementTone(-0.31)).toBe("neg");
    expect(formatChange(-0.31)).toBe("-0.31%");
  });

  it("uses — for near-zero movement", () => {
    expect(movementSymbol(0.004)).toBe("—");
    expect(movementTone(0)).toBe("neu");
    expect(formatChange(0)).toBe("0.00%");
  });
});

describe("heatmap", () => {
  it("maps negative magnitude to red intensity", () => {
    expect(heatmapLevel(-0.2)).toBe("neg-light");
    expect(heatmapLevel(-1)).toBe("neg-mid");
    expect(heatmapLevel(-3)).toBe("neg-strong");
  });

  it("maps positive magnitude to black weight", () => {
    expect(heatmapLevel(0.3)).toBe("pos-light");
    expect(heatmapLevel(1.1)).toBe("pos-mid");
    expect(heatmapLevel(2.4)).toBe("pos-strong");
  });

  it("treats near-zero as neutral off-white", () => {
    expect(heatmapLevel(0)).toBe("neutral");
    expect(heatmapFill(0)).toBe("#F2F0EA");
  });

  it("never uses colour-only: every cell still has a symbol", () => {
    expect(movementSymbol(heatmapLevel(-3) ? -3 : 0)).toBe("↘");
  });
});
