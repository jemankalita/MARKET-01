import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
import { INDICES } from "../engine/seed.js";
import { GLOBAL_BOARD, Global } from "./Global.jsx";

function renderGlobal() {
  return render(
    createElement(
      MemoryRouter,
      null,
      createElement(MarketProvider, null, createElement(Global)),
    ),
  );
}

describe("global indices board", () => {
  it("packs a full world tape instead of eight sparse rows", () => {
    expect(GLOBAL_BOARD.length).toBeGreaterThanOrEqual(12);
    GLOBAL_BOARD.forEach((id) => {
      expect(INDICES[id]).toBeTruthy();
    });
  });

  it("prints every board name and a session strip", () => {
    renderGlobal();
    GLOBAL_BOARD.forEach((id) => {
      expect(screen.getByText(INDICES[id].name)).toBeInTheDocument();
    });
    expect(screen.getByText("SESSIONS")).toBeInTheDocument();
    expect(screen.getByText("INDIA")).toBeInTheDocument();
    expect(screen.getByText("ASIA")).toBeInTheDocument();
    expect(screen.getByText("EUROPE")).toBeInTheDocument();
    expect(screen.getByText("US")).toBeInTheDocument();
  });
});
