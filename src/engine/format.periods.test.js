import { describe, expect, it } from "vitest";
import { periodReturns } from "./format.js";

describe("periodReturns", () => {
  it("keeps 1D equal to the live change and scales demo windows", () => {
    expect(periodReturns(1.24)).toEqual({
      d1: 1.24,
      w1: 1.67,
      m1: 2.98,
      y1: 8.43,
    });
  });

  it("preserves negative direction across windows", () => {
    const next = periodReturns(-0.31);
    expect(next.d1).toBe(-0.31);
    expect(next.w1).toBeLessThan(0);
    expect(next.y1).toBeLessThan(next.d1);
  });
});
