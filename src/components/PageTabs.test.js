import { createElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PageTabs } from "./PageTabs.jsx";

describe("PageTabs", () => {
  it("notifies when a tab is selected", () => {
    const onSelect = vi.fn();
    render(createElement(PageTabs, { items: ["A", "B"], active: "A", onSelect }));
    fireEvent.click(screen.getByRole("tab", { name: "B" }));
    expect(onSelect).toHaveBeenCalledWith("B");
  });
});
