import { createElement } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
import { Company } from "./Company.jsx";

function renderCompany(slug = "reliance") {
  return render(
    createElement(
      MemoryRouter,
      { initialEntries: [`/company/${slug}`] },
      createElement(
        MarketProvider,
        null,
        createElement(
          Routes,
          null,
          createElement(Route, { path: "/company/:slug", element: createElement(Company) }),
        ),
      ),
    ),
  );
}

afterEach(cleanup);

function tab(name) {
  return screen.getByRole("tab", { name });
}

describe("company stock tabs", () => {
  it("lists every stock section and opens overview first", () => {
    renderCompany();
    ["OVERVIEW", "CHART", "FINANCIALS", "NEWS", "ANALYSIS", "HOLDINGS"].forEach((name) => {
      expect(tab(name)).toBeTruthy();
    });
    expect(tab("OVERVIEW")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "OVERVIEW" }).textContent).toMatch(/RELIANCE INDUSTRIES/);
  });

  it("switches chart, financials, news, analysis, and holdings", () => {
    renderCompany("tcs");
    fireEvent.click(tab("CHART"));
    expect(screen.getByRole("img", { name: /price chart/i })).toBeTruthy();

    fireEvent.click(tab("FINANCIALS"));
    const books = screen.getByRole("tabpanel", { name: "FINANCIALS" });
    expect(within(books).getByText("FY26")).toBeTruthy();
    expect(within(books).getByText("REVENUE")).toBeTruthy();

    fireEvent.click(tab("NEWS"));
    expect(screen.getByRole("tabpanel", { name: "NEWS" }).querySelectorAll("a").length).toBeGreaterThan(2);

    fireEvent.click(tab("ANALYSIS"));
    const note = screen.getByRole("tabpanel", { name: "ANALYSIS" });
    expect(note.textContent).toMatch(/BUY|HOLD|SELL/);
    expect(note.textContent).toMatch(/TARGET/);

    fireEvent.click(tab("HOLDINGS"));
    const book = screen.getByRole("tabpanel", { name: "HOLDINGS" });
    expect(within(book).getByText("PROMOTER")).toBeTruthy();
    expect(within(book).getByText("LIC OF INDIA")).toBeTruthy();
    expect(tab("HOLDINGS")).toHaveAttribute("aria-selected", "true");
  });
});
