import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
import { ARTICLES } from "../engine/seed.js";
import { Home } from "./Home.jsx";

function leadStory() {
  return ARTICLES.find((a) => a.kind === "NEWS");
}

function renderHome() {
  return render(
    createElement(
      MemoryRouter,
      null,
      createElement(MarketProvider, null, createElement(Home)),
    ),
  );
}

describe("home top story", () => {
  it("carries a full desk brief, not only a one-line lede", () => {
    const story = leadStory();
    expect(story.lede.length).toBeGreaterThan(20);
    expect(story.body).toHaveLength(2);
    story.body.forEach((para) => expect(para.length).toBeGreaterThan(80));
    expect(story.byline).toMatch(/DESK/);
    expect(story.desk).toBeTruthy();
    expect(story.related).toEqual(["NIFTY", "NASDAQ", "BANKING"]);
  });

  it("prints that brief in the first home column", () => {
    renderHome();
    const story = leadStory();
    expect(screen.getByRole("heading", { name: story.title })).toBeInTheDocument();
    expect(screen.getByText(story.lede)).toBeInTheDocument();
    expect(screen.getByText(story.body[0])).toBeInTheDocument();
    expect(screen.getByText(story.body[1])).toBeInTheDocument();
    expect(screen.getByText(story.byline)).toBeInTheDocument();
    expect(screen.getByText(/CONTINUE READING/)).toBeInTheDocument();
    expect(screen.getByText("SIGNAL · NIFTY · NASDAQ · BANKING")).toBeInTheDocument();
  });
});
