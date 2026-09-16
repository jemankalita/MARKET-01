# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Vite + React (user confirmed). Client-side only. No external market API.

## Users

Judges and practitioners in a 24-hour designathon evaluating a financial information system. They scan desktop first, then follow a 2–3 minute demo: Home → Markets → Company → Event Trace → Article → Global → Live Mode.

## Product Purpose

MARKET/01 is a financial intelligence website that treats markets as connected **signals** (price, volume, momentum, news, sentiment, sector, global events) instead of isolated cards and feeds. Success is a judge understanding the design language without reading an explanation, and being able to trace EVENT → NEWS → VOLUME → PRICE → SECTOR → COMPANY.

## Positioning

Most financial platforms treat market data, news, and analysis as separate feeds. MARKET/01 treats them as connected signals and rebuilds the experience around that relationship. It is an original information system, not a Bloomberg clone, not a SaaS dashboard, and not cyberpunk.

## Operating Context

Desktop-primary judging surface. Demo data is fictional and labeled as such. Live Mode is a client-side correlated simulation. Designathon: original work, no reused prior codebase or component library.

## Capabilities and Constraints

- Six core pages: Home, Markets, Company, News, Article, Global, plus Search and Event Trace.
- Simulated market engine with momentum, bounded drift, correlated events, heatmap, signal bars, sparklines, event log.
- Brand name always `MARKET/01`. Never Bloomberg-style branding or proprietary layouts.
- Colour locked to `#000000`, `#F2F0EA`, `#E60000` (semantic red only).
- Visible 12-column grid, 8px spacing, 0 radius, hard offset shadows on major blocks.
- Movement always communicated with both symbol (↗ ↘ —) and colour.
- No external financial API. All values are demo/simulated.
- Desktop visual execution outranks mobile polish.
- Accessibility: contrast, never colour-only movement, `prefers-reduced-motion`.

## Brand Commitments

- Name: MARKET/01 (exact format).
- Tagline: REAL DATA. REAL CONTEXT.
- Sub-page labels: `MARKET/01 / HOME`, `/ MARKETS`, `/ COMPANY`, `/ NEWS`, `/ ANALYSIS`, `/ GLOBAL`.
- Visual track: Swiss Brutalism (60% Swiss editorial + 25% brutalist architecture + 15% financial terminal).
- User-provided six-page mock set is visual authority for composition.
- Display: heavy grotesk (Helvetica Neue / Neue Haas; Inter Black fallback). Data: JetBrains Mono or IBM Plex Mono. Body: Inter.

## Evidence on Hand

- `MARKET-01-Full-Build-Prompt.md` — locked product and visual brief.
- Attached six-page mock: Home, Markets, Company, News, Article, Global.
- No real market data, photography rights, or customer proof. Imagery and numbers are authored demonstration material and must be labeled demo/simulated.

## Product Principles

1. Signals connect; cards do not define the product.
2. Structure is visible: grid, hairlines, and blocks are the architecture.
3. Red is a signal, never decoration.
4. Cut features before cutting visual polish.
5. Demo data must breathe and correlate, never slot-machine.

## Accessibility & Inclusion

WCAG-oriented contrast. Movement is never colour-alone. Honor `prefers-reduced-motion`. Keyboard-accessible navigation, search, and Event Trace.
