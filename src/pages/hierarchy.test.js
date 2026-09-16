import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MarketProvider } from "../context/MarketProvider.jsx";
import { Nav } from "../components/Nav.jsx";
import { Heatmap } from "../components/Heatmap.jsx";
import { ARTICLES } from "../engine/seed.js";
import { Home } from "./Home.jsx";
import { News } from "./News.jsx";
import { Article } from "./Article.jsx";

afterEach(cleanup);

function wrap(node) {
  return render(createElement(MemoryRouter, null, createElement(MarketProvider, null, node)));
}

describe("site visual hierarchy", () => {
  it("treats home story byline, clock, and read time as metadata", () => {
    const { container } = wrap(createElement(Home));
    const story = ARTICLES.find((a) => a.kind === "NEWS");
    const meta = container.querySelector(".story-meta");
    expect(meta).toBeTruthy();
    expect(meta).toHaveClass("meta");
    expect(meta.textContent).toMatch(story.read);
    expect(meta.className).not.toMatch(/\bdata\b/);
    expect(meta.className).not.toMatch(/\bfigure\b/);
  });

  it("renders heatmap percents as figures", () => {
    const { container } = render(
      createElement(Heatmap, {
        sectors: {
          TECH: { id: "TECH", name: "TECHNOLOGY", change: 1.24 },
        },
      }),
    );
    const figure = within(container).getByText(/1\.24%/);
    expect(figure).toHaveClass("figure");
  });

  it("quiets the masthead date and clock versus LIVE", () => {
    const { container } = wrap(createElement(Nav, { onSearch: () => {} }));
    const date = container.querySelector(".nav-meta .meta");
    expect(date).toBeTruthy();
    expect(within(container).getByRole("button", { name: /LIVE/ })).not.toHaveClass("meta");
  });

  it("keeps news read times out of the data/figure roles", () => {
    const { container } = wrap(createElement(News));
    const reads = within(container).getAllByText(/MIN READ/);
    expect(reads.length).toBeGreaterThan(0);
    reads.forEach((el) => {
      expect(el).toHaveClass("meta");
      expect(el.className).not.toMatch(/\bfigure\b/);
    });
  });

  it("keeps article date and read time as metadata", () => {
    const { container } = wrap(createElement(Article));
    const line = within(container).getByText(/06 MIN READ/);
    expect(line).toHaveClass("meta");
  });
});
