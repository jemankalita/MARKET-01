# MARKET/01 --- Full Build Prompt

## Swiss Brutalist Financial Intelligence Website

You are building **MARKET/01**, an original financial intelligence
website for a 24-hour designathon.

The design track is **Swiss Brutalism**: strict Swiss grid discipline
fused with raw brutalist blocks, applied to financial information.

The core product concept is:

> **Markets are made of signals --- price, news, volume, sentiment and
> events. MARKET/01 connects those signals into one visual information
> system instead of scattering them across conventional cards and
> feeds.**

### Tagline

# REAL DATA. REAL CONTEXT.

The intended aesthetic is:

**60% Swiss editorial + 25% brutalist architecture + 15% financial
terminal**

The final product must feel like an intentionally art-directed financial
information system, **not a generic SaaS dashboard, not generic
cyberpunk, and not a Bloomberg clone.**

------------------------------------------------------------------------

# 0. DESIGNATHON COMPLIANCE

This project must be created from scratch during the designathon.

Do not import or reuse:

-   an existing project
-   a pre-built website
-   a previous codebase
-   an existing design file
-   a previous component library created before the event

Open-source libraries, frameworks, fonts and tools are permitted subject
to the event rules and proper attribution where required.

Keep all implementation and design work in the team's required initial
repository/design file.

------------------------------------------------------------------------

# 1. BRAND --- LOCKED

The brand name is:

# MARKET/01

Always use this exact format.

Never use:

-   Bloomberg
-   BLOOM
-   B/
-   B/ MARKET
-   B/MARKET
-   any Bloomberg-style branding

Sub-page labels must follow this pattern:

``` text
MARKET/01 / HOME
MARKET/01 / MARKETS
MARKET/01 / COMPANY
MARKET/01 / NEWS
MARKET/01 / ANALYSIS
MARKET/01 / GLOBAL
```

MARKET/01 must have an original visual identity.

Do not reproduce Bloomberg's logo, branding, proprietary visual
identity, or exact layouts.

------------------------------------------------------------------------

# 2. CORE PRODUCT IDEA --- "SIGNALS"

The central UX concept is that financial information should not exist as
isolated cards.

A market movement is a **signal**.

A signal can contain:

``` text
PRICE
VOLUME
MOMENTUM
NEWS
SENTIMENT
SECTOR
GLOBAL EVENT
```

These signals should connect.

The user should be able to move conceptually from:

``` text
EVENT
   ↓
NEWS
   ↓
VOLUME
   ↓
PRICE
   ↓
SECTOR
   ↓
COMPANY
```

This relationship is more important than simply displaying lots of
financial information.

### Example

If the simulated system generates:

``` text
> BANKING VOLUME SURGE DETECTED
```

the interface should be capable of showing related changes in:

-   Banking sector movement
-   selected banking-company prices
-   banking volume
-   market heatmap
-   signal bars
-   related news

This is what makes MARKET/01 an **information system**, rather than a
dashboard with animations.

------------------------------------------------------------------------

# 3. SWISS BRUTALISM --- NON-NEGOTIABLE

The most important visual requirement:

> **This must visibly qualify as SWISS BRUTALISM, not merely Swiss
> editorial design.**

The interface must combine two distinct halves.

## Swiss

-   strict 12-column grid
-   strong typographic hierarchy
-   intentional whitespace
-   asymmetric composition
-   visible alignment
-   disciplined spacing
-   editorial layouts
-   large typography

## Brutalism

-   hard rectangular blocks
-   2--3px solid black borders
-   hard offset shadows
-   zero border radius
-   exposed structural lines
-   raw/high-contrast imagery
-   deliberately physical-looking blocks
-   unapologetic typography

The brutalist characteristics must be visible **above the fold on the
homepage**.

Do not produce a polished, flat, minimal editorial dashboard and call it
Swiss Brutalism.

------------------------------------------------------------------------

# 4. COLOUR SYSTEM

Use **three base design colours only**:

``` css
--black: #000000;
--offwhite: #F2F0EA;
--red: #E60000;
```

These are the only base colours allowed.

Tonal variations produced through opacity, image treatment, heatmaps,
anti-aliasing or other rendering effects are allowed.

Do not introduce additional accent colours.

## Colour meaning

### BLACK

Use for:

-   primary text
-   structure
-   borders
-   positive market information
-   charts
-   navigation
-   major typography

### OFF-WHITE

Use for:

-   page backgrounds
-   neutral information
-   secondary surfaces
-   empty space
-   neutral states

### RED

Red is **semantic, not decorative**.

Use red only for:

-   negative market movement
-   active navigation state
-   critical alerts
-   selected/highlighted states
-   one intentional hero accent per page

Do not use red because it "looks good."

------------------------------------------------------------------------

# 5. MARKET MOVEMENT LANGUAGE

Every market movement must communicate through both **symbol and
colour**.

## Positive

``` text
↗ +1.24%
```

Use black.

## Negative

``` text
↘ -1.24%
```

Use red.

## Neutral

``` text
— 0.00%
```

Use black/off-white depending on context.

Never rely on colour alone.

This rule must be consistent across:

-   ticker
-   tables
-   heatmap
-   charts
-   company pages
-   signals
-   global markets
-   event logs

------------------------------------------------------------------------

# 6. GRID SYSTEM

Build the grid **before building components**.

Desktop:

**12-column CSS Grid**

Grid unit:

**8px**

Use the 8px system for:

-   padding
-   margins
-   gaps
-   spacing
-   component dimensions where practical
-   shadow offsets

Small 4px half-unit values are permitted only for fine-detail
adjustments.

## Visible grid

The grid must not exist only in CSS.

Use **1px black hairlines** to visibly separate major sections and
structural blocks.

The architecture should be visible.

A judge should be able to look at the page and immediately understand
that a grid system exists.

Do not sacrifice the visible desktop grid during the responsive pass if
time is limited.

------------------------------------------------------------------------

# 7. BRUTALIST BORDER + SHADOW SYSTEM

This is a core judging requirement.

## Small component

``` css
border: 2px solid #000;
box-shadow: 4px 4px 0 #000;
```

## Medium component

``` css
border: 2px solid #000;
box-shadow: 6px 6px 0 #000;
```

## Hero / large block

``` css
border: 3px solid #000;
box-shadow: 8px 8px 0 #000;
```

Shadow offsets should align with the 8px grid wherever possible.

## Apply hard shadows to major structural elements

Use them on:

-   hero block
-   primary market ticker
-   major chart
-   heatmap
-   featured article
-   company information block
-   primary CTA

Do NOT put hard shadows on every element.

Use this hierarchy:

``` text
MAJOR
→ border + hard offset shadow

SECONDARY
→ solid border only

TERTIARY
→ 1px hairline divider
```

Global:

``` css
border-radius: 0;
```

No rounded corners anywhere.

------------------------------------------------------------------------

# 8. TYPOGRAPHY

Use three typographic roles.

## DISPLAY

Use a heavy grotesk:

-   Helvetica Neue Bold
-   Neue Haas Grotesk
-   Inter Black as fallback

Use for:

-   hero headlines
-   page titles
-   company names
-   major editorial headlines

Example:

``` text
THE MARKET
NEVER
SLEEPS.
```

## DATA

Use:

-   JetBrains Mono
-   IBM Plex Mono

Use ONLY for:

-   prices
-   percentages
-   timestamps
-   coordinates
-   tickers
-   numerical market data
-   search input
-   system metadata
-   event timestamps

Example:

``` text
09:42:18 IST
NIFTY/50
25,421.30
```

Do not use monospace for headlines or normal body copy.

## BODY

Use:

-   Inter Regular
-   Inter Medium

Use for:

-   article copy
-   descriptions
-   explanatory text

------------------------------------------------------------------------

# 9. TYPE SCALE

Use a strict type system.

Suggested base scale:

``` text
12px
16px
24px
48px
96px
```

Responsive display typography may scale fluidly, but do not introduce
arbitrary typography sizes throughout the system.

Hierarchy should primarily come from:

-   size
-   weight
-   position
-   spacing
-   alignment

not decoration.

------------------------------------------------------------------------

# 10. PHOTOGRAPHY

No full-colour photography anywhere.

All editorial/stock imagery should use:

-   black
-   off-white
-   red
-   high contrast
-   visible film grain

Subjects may include:

-   financial districts
-   skyscrapers
-   stock exchanges
-   factories
-   infrastructure
-   city architecture
-   editorial financial imagery

Images should resemble **brutalist editorial posters**, not generic
stock photography.

Use CSS filters or pre-processed assets.

Maintain one consistent treatment across the entire website.

------------------------------------------------------------------------

# 11. HEATMAP SYSTEM

Create a market sector heatmap.

## Negative movement

Use red intensity based on magnitude.

Example:

``` text
-0.2% → light red
-1.0% → medium red
-3.0% → strong red
```

## Positive movement

Use black/off-white contrast.

Larger positive movements should have stronger visual weight.

Positive cells must retain enough contrast to remain clearly
distinguishable from neutral cells.

## Neutral

Use flat off-white.

Every cell must include a symbol:

``` text
↗
↘
—
```

Never rely on colour alone.

------------------------------------------------------------------------

# 12. COMPONENT LIBRARY

Build reusable components before assembling pages.

## 01 --- Navigation

Contains:

-   MARKET/01 logo
-   navigation links
-   live clock
-   LIVE indicator
-   2px bottom border
-   no radius

## 02 --- Data Card

-   2px black border
-   6px hard shadow
-   grid aligned

## 03 --- Hero Block

-   3px black border
-   8px hard shadow
-   oversized display typography

## 04 --- CTA

Default:

``` text
BLACK BACKGROUND
WHITE TEXT
```

Active/hover:

``` text
RED
```

No rounded corners.

## 05 --- Data Table

-   2px outer border
-   1px internal grid
-   monospace numeric columns
-   arrow-based movement indicators

## 06 --- Heatmap

-   rectangular cells
-   no radius
-   visible grid
-   strict movement colour logic

## 07 --- Signal Bar

For:

-   momentum
-   volume
-   volatility
-   news activity

Use black fill against an off-white track.

## 08 --- Duotone Image

Consistent black/off-white/red treatment with grain.

------------------------------------------------------------------------

# 13. PAGE 01 --- HOME

This is the **showcase screen** and receives the most polish.

## Header

``` text
MARKET/01

MARKETS
NEWS
ANALYSIS
SECTORS
GLOBAL

SEARCH

16 SEP 2026
09:42 IST
● LIVE
```

Use visible structural hairlines.

------------------------------------------------------------------------

## Hero

Large display typography:

``` text
THE MARKET
NEVER
SLEEPS.
```

Only **SLEEPS.** should be red.

Everything else black.

Include one large editorial image using the duotone/grain treatment.

The hero must have a brutalist border and hard offset shadow.

------------------------------------------------------------------------

## Market Signal Block

Example:

``` text
NIFTY
25,421.30 ↗ +1.24%

SENSEX
83,912.11 ↗ +0.98%

BANKNIFTY
56,812.45 ↘ -0.31%
```

Use a major brutalist block:

**2--3px border + hard offset shadow**

------------------------------------------------------------------------

## Live Ticker

Horizontal ticker:

``` text
NIFTY ↗ +1.24%
SENSEX ↗ +0.98%
BANKNIFTY ↘ -0.31%
NASDAQ ↗ +0.50%
BTC ↘ -1.02%
```

Red only appears on negative values.

------------------------------------------------------------------------

## Main Content

Use a strong three-area grid:

### 01 / TOP STORY

Large editorial headline.

### 02 / MARKET HEATMAP

Sector blocks.

### 03 / SIGNALS

Momentum / volume / volatility / news activity.

Do not overcrowd the homepage.

Swiss restraint depends on negative space.

------------------------------------------------------------------------

# 14. PAGE 02 --- MARKETS

Header:

``` text
MARKETS/01

GLOBAL MARKETS
LIVE
```

## Main Index Table

Columns:

``` text
INDEX
VALUE
CHANGE
CHART
```

Include:

-   NIFTY
-   SENSEX
-   BANKNIFTY
-   NASDAQ
-   DOW
-   FTSE
-   NIKKEI

Use fictional/demo data.

The main table should be a major structural brutalist element.

Then show:

## MARKET HEATMAP

Sectors:

-   Technology
-   Banking
-   Energy
-   Auto
-   Pharma
-   FMCG
-   etc.

This page should demonstrate the grid, table and heatmap systems.

------------------------------------------------------------------------

# 15. PAGE 03 --- COMPANY

Use a fictional/demo company data state such as:

``` text
RELIANCE/01
```

Huge:

``` text
RELIANCE
INDUSTRIES
```

Then:

``` text
₹2,941.20
↗ +1.84%
```

## Key Metrics

``` text
MARKET CAP
P/E
52W HIGH
52W LOW
DIVIDEND YIELD
```

Then a large price chart with significant whitespace.

Then:

## SIGNALS

``` text
MOMENTUM
██████████████ 82%

VOLUME
███████████ 67%

VOLATILITY
████████ 51%

NEWS ACTIVITY
██████████████ 91%
```

Then:

## WHAT'S MOVING THE STOCK?

Numbered related news stories.

The page should visually connect:

**price → signals → news**

------------------------------------------------------------------------

# 16. PAGE 04 --- NEWS

Do NOT use a conventional card grid.

Use an editorial numbered list.

Example:

``` text
01

GLOBAL MARKETS
REASSESS RATE
EXPECTATIONS

09:42 / 04 MIN READ
```

Then:

``` text
02

INDIA'S BANKING
SECTOR ENTERS
NEW PHASE
```

Then:

``` text
03

AI INVESTMENT
ACCELERATES
```

Use thin structural dividers.

Use occasional single red blocks only when semantically justified.

------------------------------------------------------------------------

# 17. PAGE 05 --- ARTICLE

Large editorial layout.

Example headline:

``` text
THE NEXT
MARKET
CYCLE?
```

Use one large duotone editorial image.

Metadata:

``` text
MARKET/01 RESEARCH
16 SEP 2026
06 MIN READ
```

Article body uses Inter.

Large pull quote:

> **THE NUMBERS TELL ONE STORY.\
> THE MARKET TELLS ANOTHER.**

Do not overdecorate.

------------------------------------------------------------------------

# 18. PAGE 06 --- GLOBAL

Title:

``` text
GLOBAL
MARKETS
```

Use a monochrome world map.

Show market information around geographic locations:

``` text
NEW YORK
↗ +0.84%

LONDON
↘ -0.21%

TOKYO
↗ +1.12%

MUMBAI
↗ +1.24%
```

Red markers only where semantically required.

No default colourful map styling.

The world map should visually belong to the MARKET/01 design system.

------------------------------------------------------------------------

# 19. SEARCH

Terminal-inspired, but still Swiss Brutalist.

Input:

``` text
> SEARCH MARKET/01_
```

Example:

``` text
> RELIANCE_
```

Results:

``` text
01 / COMPANY
RELIANCE INDUSTRIES

02 / NEWS
RELIANCE EXPANDS...

03 / ANALYSIS
THE NEXT PHASE...

04 / SECTOR
ENERGY / INDIA
```

Use monospace for the system/search layer only.

------------------------------------------------------------------------

# 20. LIVE MARKET SIMULATION --- IMPORTANT

MARKET/01 must feel like a **living financial product** when LIVE mode
is activated.

Do not use simple independent random number changes such as:

``` text
price = random()
```

Build a lightweight client-side simulated market engine that maintains
state across assets and produces believable correlated movement.

No external financial API is required.

## Simulation should include

-   small continuous price fluctuations
-   momentum/trend persistence
-   dynamic percentage changes
-   volume changes
-   animated sparklines
-   animated charts
-   heatmap updates
-   signal-bar updates
-   periodic market events
-   correlated sector/company movements
-   live timestamp
-   scrolling event log

------------------------------------------------------------------------

# 21. SIMULATED MARKET ENGINE

Maintain state for a small group of indices, sectors and companies.

For example:

``` text
NIFTY
SENSEX
BANKNIFTY
NASDAQ

TECH
BANKING
ENERGY
AUTO
PHARMA

RELIANCE
HDFC BANK
ICICI BANK
TCS
INFOSYS
```

Use a simple stateful model rather than independent randomness.

Conceptually:

``` text
newPrice =
previousPrice
+ smallRandomChange
+ momentum
+ eventImpact
```

Use bounded movements so the interface remains believable.

Avoid dramatic jumps every second.

The market should appear to **breathe and drift**, not behave like a
slot machine.

------------------------------------------------------------------------

# 22. CORRELATED MARKET EVENTS

Create a small set of predefined events.

Examples:

``` text
> NIFTY BREAKS 25,400
> BANKING VOLUME SURGE DETECTED
> TECH MOMENTUM INCREASED
> ENERGY SECTOR UNDER PRESSURE
> GLOBAL MARKET SIGNAL UPDATED
> MARKET VOLATILITY INCREASED
> NEW ANALYSIS AVAILABLE
```

Each event should influence related data.

Example:

``` text
EVENT:
BANKING VOLUME SURGE DETECTED
```

could cause:

``` text
BANKING       +1.42% ↗
HDFC BANK     +1.18% ↗
ICICI BANK    +1.63% ↗
NIFTY         +0.24% ↗
```

and increase:

``` text
BANKING VOLUME
████████████████ 91%
```

The heatmap should update as well.

This creates visible cause-and-effect.

------------------------------------------------------------------------

# 23. EVENT LOG

Show a small scrolling system log when LIVE mode is active.

Example:

``` text
09:42:18
> NIFTY BREAKS 25,400

09:42:23
> BANKING VOLUME SURGE DETECTED

09:42:31
> NEW ANALYSIS AVAILABLE
```

Make events clickable.

------------------------------------------------------------------------

# 24. EVENT TRACE --- SIGNATURE INTERACTION

Clicking an event should open a detailed signal view.

Example:

``` text
EVENT / 042

BANKING VOLUME SURGE

IMPACT

BANKING       +1.42% ↗
HDFC BANK     +1.18% ↗
ICICI BANK    +1.63% ↗
NIFTY         +0.24% ↗

VOLUME
████████████████ 91%

RELATED SIGNALS

03 NEWS STORIES
12 COMPANIES
01 SECTOR
```

This interaction is a key demonstration of the product concept.

It proves that MARKET/01 connects signals instead of merely displaying
them.

------------------------------------------------------------------------

# 25. LIVE MODE UX

When LIVE mode is OFF:

Show normal market data.

When LIVE mode is ON:

``` text
● DATA STREAM ACTIVE
```

Numbers should fluctuate subtly.

Charts should extend/update.

Sparklines should change.

Heatmap values should update.

Signal bars should change.

Event log should produce events.

The live timestamp should update.

The entire interface should feel connected.

------------------------------------------------------------------------

# 26. IMPORTANT DATA DISCLAIMER

All financial data is **fictional/demo data**.

Do not imply that simulated values are real market prices.

Do not connect to an external market API.

Where appropriate, show a subtle label such as:

``` text
DEMO DATA
```

or:

``` text
SIMULATED MARKET
```

The simulation exists to demonstrate the interface, not financial
accuracy.

------------------------------------------------------------------------

# 27. SEARCH + LIVE MODE AS DEMO CLOSERS

Implement these after the core pages are polished.

Search should feel like a system query.

Live Mode should demonstrate that the system is alive.

Do not sacrifice the homepage, Markets or Company visual quality to add
these features early.

------------------------------------------------------------------------

# 28. INTERACTIONS

After all core pages exist:

## Table hover

Reveal:

``` text
VIEW CHART →
```

## Charts

Animate/draw into view.

## Numbers

Animate smoothly when values change rather than snapping.

## Navigation

Active section becomes a red block.

## Page transitions

Use fast geometric transitions.

Avoid excessive motion.

The interface should feel engineered rather than flashy.

------------------------------------------------------------------------

# 29. RESPONSIVENESS

Desktop is the primary judging surface.

Mobile is secondary.

If time becomes limited:

> **Prioritize desktop visual execution and visible grid structure over
> mobile polish.**

Do not simply shrink desktop.

On mobile:

-   convert the grid into vertical editorial sections
-   maintain typography hierarchy
-   retain borders
-   retain brutalist shadows on major blocks
-   preserve whitespace
-   maintain red semantic rules

------------------------------------------------------------------------

# 30. ACCESSIBILITY

Maintain sufficient contrast.

Never rely on red/black alone to communicate movement.

Always use:

``` text
↗ positive
↘ negative
— neutral
```

Respect:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# 31. WHAT NOT TO DO

Absolutely no:

-   gradients
-   glassmorphism
-   rounded cards
-   rounded buttons
-   soft shadows
-   blurred shadows
-   blur effects
-   neon cyberpunk styling
-   excessive glow
-   full-colour photography
-   generic SaaS dashboard layouts
-   sidebar-heavy dashboard patterns
-   excessive card grids
-   decorative red
-   random colours
-   excessive animation
-   unnecessary 3D
-   excessive icons
-   Bloomberg branding
-   Bloomberg cloning
-   generic AI-generated dashboard aesthetics

Do not turn this into Cyber Brutalism.

The intended direction is:

> **SWISS BRUTALISM.**

------------------------------------------------------------------------

# 32. DATA RULES

Use believable fictional/demo financial values.

The data should be internally consistent enough for a design demo.

Examples:

``` text
NIFTY
25,421.30

SENSEX
83,912.11

BANKNIFTY
56,812.45
```

These are demonstration values only.

Do not present them as live market data.

------------------------------------------------------------------------

# 33. BUILD ORDER

Follow this order exactly.

## PHASE 1 --- FOUNDATION

1.  CSS variables
2.  12-column grid
3.  8px spacing system
4.  typography system
5.  colour system
6.  border system
7.  shadow system

## PHASE 2 --- COMPONENTS

1.  Navigation
2.  Data cards
3.  Hero
4.  Tables
5.  Heatmap
6.  Signal bars
7.  CTA
8.  Duotone image treatment

## PHASE 3 --- CORE PAGES

1.  HOME
2.  MARKETS
3.  COMPANY

## PHASE 4 --- SECONDARY PAGES

4.  NEWS
5.  ARTICLE
6.  GLOBAL

## PHASE 5 --- INTERACTION

7.  Search
8.  Live simulation engine
9.  Event system
10. Event Trace interaction
11. Chart animations
12. Number animations
13. Page transitions

## PHASE 6 --- RESPONSIVE

14. Desktop refinement
15. Mobile adaptation
16. Accessibility
17. Final QA

If time becomes limited:

> **Cut features, not visual polish.**

------------------------------------------------------------------------

# 34. 24-HOUR PRIORITY

If the team is running out of time, the priority order is:

### MUST HAVE

-   HOME
-   MARKETS
-   COMPANY
-   12-column visible grid
-   Swiss typography
-   hard brutalist borders
-   hard offset shadows
-   disciplined red system
-   duotone photography
-   heatmap
-   believable static demo data

### SHOULD HAVE

-   NEWS
-   ARTICLE
-   GLOBAL
-   chart animation
-   hover states

### NICE TO HAVE

-   Live Mode
-   correlated market simulation
-   event log
-   Event Trace
-   Search
-   advanced transitions

Do not sacrifice the first three pages for optional features.

------------------------------------------------------------------------

# 35. CRITICAL DESIGN PRIORITY

The homepage must immediately communicate four things.

## 1. SWISS

Visible grid + typography + whitespace.

## 2. BRUTALISM

Hard borders + offset shadows + rectangular blocks.

## 3. FINANCE

Charts + market data + news.

## 4. ORIGINALITY

The concept of signals connecting price, news, volume and sentiment.

A judge should understand the design language **without reading the
explanation**.

------------------------------------------------------------------------

# 36. FINAL QUALITY BAR

Before considering the project complete, inspect every page.

Ask:

### Architecture

> Can I visibly see the grid?

### Brutalism

> Are the hard borders and offset shadows unmistakable?

### Colour

> Is red genuinely meaningful?

### Typography

> Does typography establish hierarchy without decoration?

### Photography

> Are all images visually consistent?

### Whitespace

> Does the page breathe?

### Data

> Does the information feel connected rather than scattered?

### Interaction

> Does Live Mode feel like a living system rather than random animation?

### Creativity

> Does this feel like a new way of consuming financial information
> rather than a reskin?

If any answer is "no", fix it before adding more features.

------------------------------------------------------------------------

# 37. TARGET VISUAL RATIO

Aim for:

**60% Swiss editorial**

**25% brutalist architecture**

**15% financial terminal**

The site should feel like:

> **A financial information system designed by an editorial designer who
> thinks like an architect.**

Not:

> A financial dashboard with a brutalist theme.

------------------------------------------------------------------------

# 38. FINAL DEMO FLOW

The intended judging/demo journey is approximately 2--3 minutes.

## STEP 1 --- HOME

Open the homepage.

Show:

``` text
THE MARKET
NEVER
SLEEPS.
```

Establish:

-   grid
-   typography
-   brutalist blocks
-   market signal
-   editorial image

## STEP 2 --- MARKETS

Click an index.

Show:

-   live-looking market data
-   table
-   chart
-   heatmap

## STEP 3 --- COMPANY

Open a company.

Show:

-   price
-   chart
-   signals
-   related news

## STEP 4 --- TRACE THE SIGNAL

Trigger or select a market event.

Example:

``` text
> BANKING VOLUME SURGE DETECTED
```

Open Event Trace.

Show how:

``` text
EVENT
↓
VOLUME
↓
SECTOR
↓
COMPANIES
↓
PRICE
↓
NEWS
```

connects.

## STEP 5 --- ARTICLE

Open related analysis.

Demonstrate the editorial side of the system.

## STEP 6 --- GLOBAL

Show global market context.

## STEP 7 --- LIVE MODE

Activate:

``` text
● DATA STREAM ACTIVE
```

Let numbers, charts, heatmap and event log update.

Finish on the live system.

------------------------------------------------------------------------

# 39. FINAL PITCH

If a judge asks:

> "What did you redefine?"

Answer:

> **"Most financial platforms treat market data, news and analysis as
> separate feeds. MARKET/01 treats them as connected signals and
> rebuilds the experience around that relationship."**

If asked:

> "Why Swiss Brutalism?"

Answer:

> **"The grid structures the information, typography creates hierarchy,
> and brutalist blocks make the underlying structure physically visible.
> Red is reserved for signals that demand attention."**

------------------------------------------------------------------------

# 40. FINAL INSTRUCTION TO THE CODING AGENT

**Prioritize design quality over feature quantity.**

Before implementing each page:

1.  Establish its composition using the shared grid.
2.  Apply the spacing system.
3.  Apply the typography hierarchy.
4.  Apply the colour semantics.
5.  Apply the brutalist border/shadow hierarchy.
6.  Establish whitespace.
7.  Then add interaction.

Do not fall back to common AI-generated dashboard patterns.

Do not create a sidebar + cards + chart + cards layout unless it is
explicitly justified by the grid and editorial composition.

The final result should look intentionally art-directed and capable of
being presented as a serious design-system case study.

**The judge should understand the design language without reading the
explanation.**
