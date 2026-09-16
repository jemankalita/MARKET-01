# MARKET/01

**v0.2.0** · **REAL DATA. REAL CONTEXT.**

Swiss Brutalist financial intelligence for **Redefine** — a 24-hour designathon.

Markets are not a pile of KPI cards. They are **signals**: price, volume, momentum, news, sentiment, sector, global event. MARKET/01 puts those signals on one visible grid so a reader can trace:

```
EVENT → NEWS → VOLUME → PRICE → SECTOR → COMPANY
```

This is an original information system. It is not a Bloomberg clone, not a SaaS dashboard, and not cyberpunk.

All figures are **SIMULATED / DEMO DATA**. The tape moves in the browser. No live exchange feed is connected.

---

## Concept

Most financial products split data, news, and analysis into disconnected feeds. MARKET/01 rebuilds the product around **relationship**.

| Page | What it teaches |
| --- | --- |
| **Home** | The poster. Indices, story, heatmap, signal bars in one first viewport. |
| **Markets** | The tape. Working desks: INDICES / HEATMAP / SECTORS / COMMODITIES / CURRENCIES. |
| **Company** | One name in depth: quote → tabs → chart / financials / news / holdings. Ranges on the chart. |
| **News** | Numbered editorial list. Desks: TOP STORIES / INDIA / GLOBAL / BUSINESS / TECH / OPINION. |
| **Analysis** | Long read. Same type, same grid, slower measure. |
| **Sectors** | Heat as a map of the book. |
| **Global** | Sessions, cities, board. The market that never sleeps. |

**LIVE** is on by default: a **correlated client-side simulation**. Prices, sparklines, heatmap cells, and company quotes drift together. When an event fires, related names move as one tape. **STREAM** in the masthead opens or hides the data-stream overlay so it never covers the board unless you ask for it. Analysis crumbs (`NEWS`) return to the news desk.

---

## Design direction

**60% Swiss editorial + 25% brutalist architecture + 15% financial terminal.**

The sheet is newsprint off-white. Structure is drawn, not implied: 12-column grid, 1px hairlines, 2–3px black borders, hard offset shadows. Radius is **0**. Red is a **signal** — negative move, live/active, one hero accent — never decoration.

Brand lockup is always `MARKET/01`. Sub-pages read `MARKET/01 / HOME`, `/ MARKETS`, `/ COMPANY`, `/ NEWS`, `/ ANALYSIS`, `/ GLOBAL`.

---

## Design system

### Colour (three bases only)

| Token | Hex | Job |
| --- | --- | --- |
| Black | `#000000` | Type, structure, positive movement, charts |
| Off-white | `#F2F0EA` | Page ground, neutral cells |
| Red | `#E60000` | Negative movement, active nav, LIVE, one accent |

Heat uses opacity of black or red. No extra hues, no gradients, no neon, no glass.

Movement is **dual-coded** (never colour alone):

- Positive: `↗ +1.24%` in black  
- Negative: `↘ -1.24%` in red  
- Neutral: `— 0.00%`

### Type

Scale: **12 / 16 / 24 / 48 / 96**.

- **Display:** Inter 900 (Helvetica Neue / Neue Haas when available). Tight leading, negative tracking, poster headlines.
- **Body:** Inter 400 / 500. Measure ~65–75ch on analysis.
- **Data:** JetBrains Mono — prices, percents, clocks, tickers, search, event log.

Headlines are never mono. Body is never mono.

### Layout & elevation

- Desktop is the judging surface.
- **12-column CSS grid**, spacing unit **8px**.
- Major blocks: 2–3px solid black + hard offset `8px 8px 0 #000` (or `6px 6px 0`).
- Secondary: 2px solid black, no shadow.
- Tertiary: 1px hairline.
- Focus: 2px red, offset 2px. Selection: red on off-white.
- `prefers-reduced-motion` is honored.

Full tokens live in [`DESIGN.md`](./DESIGN.md). Product intent lives in [`PRODUCT.md`](./PRODUCT.md).

---

## How the design was made

| Source | Role |
| --- | --- |
| **Higgsfield** | Generated the visual comps (homepage poster, page boards, editorial photography direction). Those frames were treated as visual authority, then tightened in code. |
| **Dribbble** | Inspiration — Swiss editorial, brutalist blocks, financial terminals. Mood and craft, not copies. |
| **Pinterest** | Inspiration — newsprint, grids, architecture, maps, type posters. |
| **Brain (god gifted)** | The concept, the edit, the “signals not cards” call, and every judgment about what to cut. Tools generate. Taste decides. |

Also used on the clock: **Figma** for Review 1 wireframes; open-source **Inter** and **JetBrains Mono**; custom SVG world map and authored demo photography treated as demonstration material.

---

## Version log

Each version is a real pass on this repo during the designathon. **Final** is the submission that should be pushed.

### v1 — First ship

Built MARKET/01 from scratch (Vite + React, no prior codebase). Six core pages, masthead, search (`Ctrl/Cmd + K`), Event Log / Event Trace, simulated market engine, Live Mode, `DESIGN.md`. Swiss Brutalist lock: three colours, 12-col grid, 0 radius, dual-coded movement. First complete site on GitHub.

### v2 — Higgsfield homepage as law

Matched the generated homepage comps: `THE MARKET NEVER SLEEPS.` poster, BSE Mumbai tower, index strip, numbered stories. Photography entered the sheet as duotone editorial, not stock collage.

### v3 — Rest of the board

Markets, Company, News, Analysis brought onto the same comps. Page chrome, kickers, and data tables aligned to the generated set instead of inventing a second look.

### v4 — One system, every page

Stopped treating pages as separate posters. Shared hairlines, shadows, type scale, and nav language. Where the comps were thin, the live site was made denser and more consistent.

### v5 — Global remake

Rebuilt Global from the board: custom world map, session clocks, city markers, indices. The “never sleeps” idea became a geographic surface, not a list.

### v6 — Map craft

Fixed geography and labels (Singapore pin vs caption, Mumbai on India). Restyled the map to **white sheet / black–grey land** from map reference boards — terminal ink, not a colourful atlas.

### v7 — Home density

Home heatmap gained another column. Index strip gained another row. Story column gained real copy so the first viewport stopped looking empty.

### v8 — Contrast and fill

`BSE · MUMBAI · EST. 1875` made readable on the photograph. Global indices column filled so the right rail was not a blank slab.

### v9 — What should shout

Site-wide hierarchy pass: **prices, chart values, and moves** louder than metadata (read time, dates, clocks). Signal first, furniture second.

### v10 — Heatmap + bars

Home heatmap cells filled instead of sitting blank. Signal-bar numerics locked to the **right edge**.

### v11 — Visual QA

Stopped chasing the spec as a checklist. Fixed clamped type, overlapping labels, search related-results alignment and uneven row heights. If a number or a word could not be read, it was a bug.

### v12 — Chart as the room

Company chart given the majority of the page. The quote is a headline; the graph is the body.

### v13 — Axis and accent

Chart y-axis labels (e.g. `2194`) no longer clipped. `ENERGY DRIVES PROGRESS` dropped the black highlight slab — type does the work, red stays semantic.

### v14 — Company dossier

Every stock: **OVERVIEW / CHART / FINANCIALS / NEWS / ANALYSIS / HOLDINGS**, with authored demo data. Company is a dossier, not a single chart dump.

### v15 — Live demo tape

The site breathes. LIVE starts on. Indices, sectors, companies, commodities, and FX tick in-browser. Markets desks actually switch. News desks actually filter. Hover summaries on stories, heat, and cities. STREAM is a masthead toggle (off by default) so the event overlay does not sit on the photograph. Article `NEWS` crumb returns to `/news`. Package version **0.2.0**.

### FINAL — This push

**v0.2.0 / v15.** This README, the current working tree, and the design system as judged. Original Swiss Brutalist financial intelligence, Higgsfield-led comps, Dribbble/Pinterest as inspo, human edit on top — now with a moving demo tape.

---

## Stack

- React 19 + React Router  
- Vite 6  
- Vitest + Testing Library  
- Client-only simulated engine (`src/engine/`)  
- No external market API  

---

## Run

```bash
npm install
npm run dev
npm test
npm run test:coverage
npm run build
```

Demo path for judges (desktop first, ~2–3 minutes):

**Home → Markets (desks) → Company (tabs) → News (desks) → Analysis (NEWS crumb) → Global → STREAM → LIVE**

---

## What we refused

- Bloomberg naming, logo, or layout cloning  
- Sidebar + KPI card dashboards  
- Gradients, glass, rounded cards, soft shadows, neon  
- Colour-only movement  
- Slot-machine tickers that ignore correlation  
- Undeclared live data  

---

## Credits

**MARKET/01** — built during Redefine.

Design generated in **Higgsfield**. Inspiration from **Dribbble** and **Pinterest**. Creativity from the **brain (god gifted)**.
