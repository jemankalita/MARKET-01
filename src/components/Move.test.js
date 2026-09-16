import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Move, SignalBar } from "./Move.jsx";

describe("Move hierarchy", () => {
  it("prints a price as a figure, not as metadata", () => {
    render(createElement(Move, { value: 1.24, withPrice: 25421.3 }));
    const price = screen.getByText("25,421.30");
    expect(price).toHaveClass("figure");
    expect(price.className).not.toMatch(/meta/);
  });

  it("keeps a lone change as a figure so heatmap and map values still lead", () => {
    render(createElement(Move, { value: -0.84 }));
    const change = screen.getByText(/-0\.84%/);
    expect(change).toHaveClass("figure");
  });
});

describe("SignalBar", () => {
  it("parks the numeric reading at the right of the label row", () => {
    render(createElement("ul", null, createElement(SignalBar, { label: "MOMENTUM", value: 82 })));
    const label = screen.getByText("MOMENTUM");
    const value = screen.getByText("82%");
    expect(label.nextElementSibling).toBe(value);
    expect(value).toHaveClass("signal-val");
    expect(value).toHaveClass("figure");
  });
});
