import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
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

describe("home indices strip", () => {
  it("draws each sparkline across the cell instead of a postage stamp", () => {
    renderHome();
    const strip = screen.getByRole("region", { name: "Key indices" });
    const sparks = strip.querySelectorAll("svg.spark");
    expect(sparks).toHaveLength(5);
    sparks.forEach((spark) => {
      expect(spark.getAttribute("viewBox")).toBe("0 0 240 80");
      expect(spark.getAttribute("preserveAspectRatio")).toBe("none");
    });
  });
});
