import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
import { HOME_HEAT, HOME_HEAT_COLUMNS } from "../engine/homeHeat.js";
import { Home } from "./Home.jsx";

function renderHome() {
  return render(
    createElement(
      MemoryRouter,
      null,
      createElement(MarketProvider, null, createElement(Home)),
    ),
  );
}

describe("home market heatmap", () => {
  it("fills three rows of three sectors", () => {
    expect(HOME_HEAT_COLUMNS).toBe(3);
    expect(HOME_HEAT).toHaveLength(9);
    expect(HOME_HEAT.length % HOME_HEAT_COLUMNS).toBe(0);
  });

  it("keeps the mock front row then adds a third density row", () => {
    expect(HOME_HEAT.slice(0, 6)).toEqual([
      "TECH",
      "BANKING",
      "ENERGY",
      "PHARMA",
      "AUTO",
      "REALESTATE",
    ]);
    expect(HOME_HEAT.slice(6)).toEqual(["FMCG", "METALS", "INFRA"]);
  });

  it("paints the nine-sector board including the density row", () => {
    renderHome();
    const heat = screen.getByRole("region", { name: "Market heatmap" });
    expect(heat.style.gridTemplateColumns).toContain("3");
    HOME_HEAT.forEach((id) => {
      expect(heat).toHaveTextContent(id === "REALESTATE" ? "REAL ESTATE" : id);
    });
  });
});
