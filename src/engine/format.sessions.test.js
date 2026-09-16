import { describe, expect, it } from "vitest";
import { deskSessions, istMinutes } from "./format.js";

describe("istMinutes", () => {
  it("parses an IST clock stamp into minutes", () => {
    expect(istMinutes("17:21:08")).toBe(17 * 60 + 21);
  });
});

describe("deskSessions", () => {
  it("marks India open during the cash session", () => {
    const desks = deskSessions("11:00:00");
    expect(desks.find((d) => d.id === "INDIA").open).toBe(true);
    expect(desks.find((d) => d.id === "US").open).toBe(false);
  });

  it("marks US open after the New York cash open in IST", () => {
    const desks = deskSessions("20:15:00");
    expect(desks.find((d) => d.id === "US").open).toBe(true);
    expect(desks.find((d) => d.id === "INDIA").open).toBe(false);
  });
});
