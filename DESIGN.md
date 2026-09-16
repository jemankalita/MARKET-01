---
name: MARKET/01
description: Swiss Brutalist financial intelligence — signals, not feeds.
colors:
  black: "#000000"
  offwhite: "#F2F0EA"
  red: "#E60000"
  pos-mid: "rgba(0, 0, 0, 0.78)"
  pos-light: "rgba(0, 0, 0, 0.18)"
  neg-mid: "rgba(230, 0, 0, 0.72)"
  neg-light: "rgba(230, 0, 0, 0.32)"
typography:
  display:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(48px, 8vw, 96px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  kicker:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  unit: "8px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.black}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
  nav-active:
    backgroundColor: "{colors.red}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
  heat-negative-strong:
    backgroundColor: "{colors.red}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
  heat-positive-strong:
    backgroundColor: "{colors.black}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
  heat-neutral:
    backgroundColor: "{colors.offwhite}"
    textColor: "{colors.black}"
    rounded: "{rounded.none}"
---

# MARKET/01 Design System

## Overview

MARKET/01 is a **Swiss Brutalist** financial information system (about 60% Swiss editorial, 25% brutalist architecture, 15% terminal). The product idea is **signals**: price, volume, news, sentiment and events share one grid instead of living in disconnected cards.

The sheet is off-white newsprint. Structure is drawn with 1px hairlines, 2–3px black borders, and hard offset shadows on a few major blocks. Red is semantic: negative movement, live/active state, and one hero accent per page (for example **SLEEPS.**). Brand lockup is always `MARKET/01`.

All figures are labeled **SIMULATED MARKET** / **DEMO DATA**.

## Colors

Three base colours only:

| Token | Hex | Role |
| --- | --- | --- |
| `black` | `#000000` | Text, structure, positive movement, charts, nav |
| `offwhite` | `#F2F0EA` | Page ground, neutral cells, secondary surfaces |
| `red` | `#E60000` | Negative movement, active nav, alerts, one hero accent |

Heatmaps may use opacity of black or red. No other accent hues, no gradients, no neon.

Movement language is dual-coded:

- Positive: `↗ +1.24%` in black
- Negative: `↘ -1.24%` in red
- Neutral: `— 0.00%`

Never colour alone.

## Typography

Scale: **12 / 16 / 24 / 48 / 96**. Display may fluid-clamp but should not invent extra sizes as a habit.

- **Display:** Inter 900 (Helvetica Neue / Neue Haas when available). Tight leading, negative tracking, uppercase posters.
- **Body:** Inter 400/500 for article and explanation copy. Measure near 65–75ch on analysis.
- **Data:** JetBrains Mono for prices, percents, clocks, tickers, search, event log.

Do not set headlines in mono. Do not set body copy in mono.

## Layout

Desktop is the judging surface.

- **12-column CSS grid** with visible 1px black hairlines between major regions.
- Spacing unit **8px** (half-unit 4px only for optical tweaks).
- Masthead: brand | sections | search | date + IST clock + LIVE.
- Home first viewport: poster headline left, duotone tower right, index strip, three numbered stories, then heatmap + signal bars.
- News is a numbered editorial list, not a card gallery.
- Company reads **price → chart/signals → news**.

At ≤980px, stacks become a vertical editorial column. Keep borders, shadows on major blocks, and type hierarchy. Do not shrink the desktop composition uniformly.

## Elevation & Depth

Radius is **0** everywhere.

| Rank | Treatment |
| --- | --- |
| Major (hero, ticker table, chart, heatmap host, search, Event Trace) | 2–3px solid black + hard offset `8px 8px 0 #000` or `6px 6px 0 #000` |
| Secondary | 2px solid black, no shadow |
| Tertiary | 1px hairline |

No blur, no soft shadows, no glass. Selection highlight is red on off-white. Focus ring is 2px red, offset 2px.

## Shapes

Rectangles only. Heatmap cells, buttons, city markers, LIVE dot (8×8 square), and image crops are orthogonal. Duotone “photography” is constructed from high-contrast architectural blocks plus a film-grain hatch; a single red multiply slab is allowed when it is the page’s one accent.

## Components

- **Nav:** 2px bottom rule. Active route is a red block with off-white type.
- **CTA:** black field, off-white type; hover/focus becomes red.
- **Data table:** 2px outer border, 1px inner rules, mono numerals, hover reveals `VIEW CHART →`.
- **Heatmap:** rectangular cells, symbol + percent, red intensity for losses, black weight for gains.
- **Signal bar:** black fill on an off-white track.
- **Search:** terminal prompt `> SEARCH MARKET/01_`, mono, overlay dialog.
- **Event Trace:** clicking a log line opens EVENT / 0n with correlated impacts.

Motion: numbers drift, sparklines extend, heatmap and bars update when LIVE is on. Page change is a short clip-path wipe. Honor `prefers-reduced-motion`.

## Do's and Don'ts

**Do**

- Keep the grid visible.
- Spend red only where it means something.
- Connect an event to sector, names, and index in one trace.
- Label demo data.

**Don't**

- Gradients, glass, rounded cards, soft shadows, neon cyberpunk.
- Bloomberg branding or clone layouts.
- Sidebar + KPI card dashboards.
- Decorative red, extra palette colours, colour-only movement.
- Full-colour photography.
- Independent random tickers that ignore correlation.
