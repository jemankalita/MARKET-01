import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Search } from "./Search.jsx";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../index.css"), "utf8");

describe("Search related hits", () => {
  it("keeps every related hit on one full-width rule so line length matches", () => {
    render(
      createElement(
        MemoryRouter,
        null,
        createElement(Search, { onClose() {} }),
      ),
    );
    fireEvent.change(screen.getByLabelText("Query"), { target: { value: "re" } });
    const hits = screen.getAllByRole("button");
    expect(hits.length).toBeGreaterThan(1);
    hits.forEach((hit) => {
      expect(hit).toHaveClass("search-hit");
      expect(hit.querySelector(".search-hit-title")).toBeTruthy();
    });
    expect(css).toMatch(/\.search-hit\s*\{[^}]*width:\s*100%/);
    expect(css).toMatch(/\.search-hit-title\s*\{[^}]*text-overflow:\s*ellipsis/);
    expect(css).toMatch(/\.search-hit-title\s*\{[^}]*white-space:\s*nowrap/);
  });
});
