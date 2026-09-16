import { describe, expect, it } from "vitest";
import { COMPANIES } from "./seed.js";
import { COMPANY_TABS, companyDossier } from "./companyDossier.js";

describe("companyDossier", () => {
  it("exposes the six stock tabs", () => {
    expect(COMPANY_TABS).toEqual(["OVERVIEW", "CHART", "FINANCIALS", "NEWS", "ANALYSIS", "HOLDINGS"]);
  });

  it("builds a complete demo dossier for every listed company", () => {
    Object.values(COMPANIES).forEach((company) => {
      const dossier = companyDossier(company);
      expect(dossier.overview.about).toMatch(company.name);
      expect(dossier.overview.segments.length).toBeGreaterThan(1);
      expect(dossier.financials.years).toEqual(["FY24", "FY25", "FY26"]);
      expect(dossier.financials.rows.length).toBeGreaterThan(3);
      expect(dossier.news.length).toBeGreaterThan(2);
      expect(["BUY", "HOLD", "SELL"]).toContain(dossier.analysis.rating);
      const books = dossier.analysis.books;
      expect(books.buy + books.hold + books.sell).toBe(32);
      expect(books.buy).toBeGreaterThan(0);
      expect(books.sell).toBeGreaterThan(0);
      expect(dossier.holdings.holders.length).toBeGreaterThan(4);
      const mixTotal = dossier.holdings.mix.reduce((sum, row) => sum + row.pct, 0);
      expect(mixTotal).toBeCloseTo(100, 1);
    });
  });

  it("keeps holdings mix distinct across names", () => {
    const a = companyDossier(COMPANIES.RELIANCE).holdings.mix.map((row) => row.pct).join(",");
    const b = companyDossier(COMPANIES.TCS).holdings.mix.map((row) => row.pct).join(",");
    expect(a).not.toEqual(b);
  });
});
