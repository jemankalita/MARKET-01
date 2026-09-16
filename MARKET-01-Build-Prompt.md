# MARKET/01 --- Swiss Brutalist Financial Intelligence Website

You are building **MARKET/01**, an original financial intelligence
website for a 24-hour designathon.

The design track is **Swiss Brutalism**: Swiss grid discipline fused
with raw brutalist blocks, applied to financial information.

The core product concept is:

> **Markets are made of signals --- price, news, volume, sentiment and
> events. MARKET/01 connects those signals into one visual information
> system instead of scattering them across conventional cards and
> feeds.**

### Tagline

# REAL DATA. REAL CONTEXT.

The site should feel like:

**Swiss editorial design + brutalist architecture + financial
intelligence**

It must **NOT** feel like a generic SaaS dashboard, generic cyberpunk
UI, or a Bloomberg clone.

------------------------------------------------------------------------

# 1. BRAND --- LOCKED

Brand name:

# MARKET/01

Always use this exact name.

Never use:

-   Bloomberg
-   BLOOM
-   B/
-   B/ MARKET
-   B/MARKET
-   any Bloomberg-style naming

Sub-page labels:

``` text
MARKET/01 / HOME
MARKET/01 / MARKETS
MARKET/01 / COMPANY
MARKET/01 / NEWS
MARKET/01 / ANALYSIS
MARKET/01 / GLOBAL
```

MARKET/01 must have its own visual identity.

Do not reproduce Bloomberg's logo, branding, proprietary visual
identity, or exact layouts.

------------------------------------------------------------------------

# 2. CORE DESIGN PRINCIPLE

The most important requirement:

> **This must visibly be SWISS BRUTALISM, not simply Swiss editorial
> design.**

The design must combine:

### Swiss

-   strict 12-column grid
-   strong typographic hierarchy
-   intentional whitespace
-   asymmetric composition
-   visible alignment
-   disciplined spacing
-   editorial layouts

### Brutalism

-   hard rectangular blocks
-   2--3px solid black borders
-   hard offset shadows
-   zero border radius
-   exposed structural lines
-   raw/high-contrast imagery
-   unapologetic typography

The brutalist characteristics must be visible **above the fold on the
homepage**.

Do not make a polished flat editorial dashboard and call it brutalism.

------------------------------------------------------------------------

# 3. COLOUR SYSTEM

Use **three base design colours only**:

``` css
--black: #000000;
--offwhite: #F2F0EA;
--red: #E60000;
```

These are the only base colours allowed.

Tonal variations created through opacity, imagery treatment,
anti-aliasing, charts, or heatmaps are allowed, but **do not introduce
additional accent colours**.

## Meaning

### Black

Primary:

-   text
-   structure
-   borders
-   positive market information
-   charts
-   navigation

### Off-white

Used for:

-   page background
-   neutral information
-   empty states
-   secondary surfaces

### Red

Red is **semantic**, not decorative.

Use red only for:

-   negative market movement
-   active navigation state
-   critical alerts
-   selected/highlighted state
-   one intentional hero accent per page

Never use red simply because it looks good.

------------------------------------------------------------------------

# 4. MARKET MOVEMENT LANGUAGE

Every movement indicator must communicate using **both colour AND
symbol**.

### Positive

``` text
↗ +1.24%
```

Use black.

### Negative

``` text
↘ -1.24%
```

Use red.

### Neutral

``` text
— 0.00%
```

Use off-white/black depending on context.

Never rely on colour alone.

This rule must be consistent across:

-   ticker
-   tables
-   charts
-   heatmap
-   company pages
-   signals
-   global markets

------------------------------------------------------------------------

# 5. GRID SYSTEM

Build the grid **before building components**.

Desktop:

**12-column CSS Grid**

Grid unit:

**8px**

All:

-   padding
-   margin
-   gap
-   spacing
-   component dimensions where practical
-   shadow offsets

should use multiples of 8px.

Small 4px half-unit values are permitted only where necessary for fine
details.

### Visible grid

The grid must not only exist in CSS.

Use **1px black hairlines** between major sections and structural blocks
so the grid is visually obvious.

The architecture should be visible.

------------------------------------------------------------------------

# 6. BRUTALIST BORDER + SHADOW SYSTEM

This is a core judging requirement.

### Small

``` css
border: 2px solid #000;
box-shadow: 4px 4px 0 #000;
```

### Medium

``` css
border: 2px solid #000;
box-shadow: 6px 6px 0 #000;
```

### Large / Hero

``` css
border: 3px solid #000;
box-shadow: 8px 8px 0 #000;
```

Shadow offsets must align with the 8px grid system wherever possible.

## Apply hard shadows to:

-   hero block
-   primary market ticker
-   major chart
-   heatmap
-   featured article
-   company information block
-   primary CTA

Do NOT put shadows on every component.

Hierarchy:

``` text
MAJOR
→ border + hard shadow

SECONDARY
→ solid border

TERTIARY
→ 1px hairline
```

Global:

``` css
border-radius: 0;
```

No rounded corners anywhere.

------------------------------------------------------------------------

# 7. PHOTOGRAPHY

All editorial imagery must follow a unified treatment.

No full-colour photography.

Use:

-   black
-   off-white
-   red
-   high contrast
-   visible grain

Subjects:

-   financial districts
-   skyscrapers
-   stock exchanges
-   factories
-   infrastructure
-   city architecture
-   financial/editorial imagery

Photography should feel like **brutalist editorial posters**, not
stock-photo websites.

Use CSS filters or pre-processing to maintain the consistent treatment.

------------------------------------------------------------------------

# 8. HEATMAP

Create a market sector heatmap.

### Negative

Red intensity increases with magnitude.

``` text
-0.2% → light red
-1.0% → medium red
-3.0% → strong red
```

### Positive

Use black/off-white contrast.

Larger positive movements should have stronger visual weight.

Positive cells must retain enough contrast to remain clearly
distinguishable from neutral cells.

### Neutral

Flat off-white.

Every cell must include:

``` text
↗
↘
—
```

Never communicate movement through colour alone.

------------------------------------------------------------------------

# 9. COMPONENT LIBRARY

Build reusable components before assembling pages.

### 01 --- Navigation

-   MARKET/01 logo
-   navigation links
-   live clock
-   LIVE indicator
-   2px bottom border
-   no radius

### 02 --- Data Card

-   2px black border
-   6px hard shadow
-   grid aligned

### 03 --- Hero

-   3px black border
-   8px hard shadow
-   oversized display typography

### 04 --- CTA

Black background.

White text.

Red only for active/hover state.

No rounded corners.

### 05 --- Data Table

-   2px outer border
-   1px internal grid
-   monospace numeric values
-   arrow-based movement indicators

### 06 --- Heatmap

-   rectangular cells
-   no radius
-   visible grid
-   strict movement colour rules

### 07 --- Signal Bar

For:

-   momentum
-   volume
-   volatility
-   news activity

Use black fill against an off-white track.

### 08 --- Duotone Image

Consistent black/off-white/red treatment with grain.

------------------------------------------------------------------------

# 10. PAGE 01 --- HOME

This is the **most important screen**.

It must be the most polished page.

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

------------------------------------------------------------------------

## Hero

Large typography:

# THE MARKET

# NEVER

# SLEEPS.

Only **SLEEPS.** is red.

Everything else black.

Include one major editorial image treated in the MARKET/01 duotone
style.

------------------------------------------------------------------------

## Market Signal

Show:

``` text
NIFTY
25,421.30 ↗ +1.24%

SENSEX
83,912.11 ↗ +0.98%

BANKNIFTY
56,812.45 ↘ -0.31%
```

This is a major brutalist block with:

**2--3px border + hard offset shadow.**

------------------------------------------------------------------------

## Live ticker

Horizontal market ticker:

``` text
NIFTY ↗ +1.24%
SENSEX ↗ +0.98%
BANKNIFTY ↘ -0.31%
NASDAQ ↗ +0.50%
BTC ↘ -1.02%
```

------------------------------------------------------------------------

## Main content

Three major grid areas:

### 01 / TOP STORY

Large editorial headline.

### 02 / MARKET HEATMAP

Sector blocks.

### 03 / SIGNALS

Momentum / volume / volatility / news activity.

Give the layout enough whitespace to breathe.

Do not overcrowd the first screen.

------------------------------------------------------------------------

# 11. PAGE 02 --- MARKETS

Header:

``` text
MARKETS/01

GLOBAL MARKETS
LIVE
```

Main index table:

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

Use fictional/demo values.

Then:

### MARKET HEATMAP

Technology\
Banking\
Energy\
Auto\
Pharma\
FMCG\
etc.

This page should demonstrate the grid and brutalist component system.

------------------------------------------------------------------------

# 12. PAGE 03 --- COMPANY

Example:

``` text
RELIANCE/01
```

Huge:

# RELIANCE

# INDUSTRIES

Then:

``` text
₹2,941.20
↗ +1.84%
```

Key metrics:

``` text
MARKET CAP
P/E
52W HIGH
52W LOW
DIVIDEND YIELD
```

Then a large price chart with significant whitespace.

Then:

### SIGNALS

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

### WHAT'S MOVING THE STOCK?

Numbered news stories.

------------------------------------------------------------------------

# 13. PAGE 04 --- NEWS

Do NOT use a conventional card grid.

Use editorial numbering:

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

Occasionally use one brutalist red block for emphasis.

------------------------------------------------------------------------

# 14. PAGE 05 --- ARTICLE

Large editorial layout.

Example:

# THE NEXT

# MARKET

# CYCLE?

Use one large duotone architectural/financial image.

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

# 15. PAGE 06 --- GLOBAL

Title:

# GLOBAL

# MARKETS

Use a monochrome world map.

Show market data around geographic locations:

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

No Google Maps-style colourful map.

------------------------------------------------------------------------

# 16. SEARCH

Terminal-inspired but still Swiss Brutalist.

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

Use monospace only for the search/system layer.

------------------------------------------------------------------------

# 17. LIVE MODE

Implement only after the core pages are polished.

Create a LIVE toggle.

When activated:

``` text
● DATA STREAM ACTIVE
```

Simulate small price movements client-side.

Example:

``` text
09:42:18
> NIFTY BREAKS 25,400

09:42:23
> BANKING VOLUME SURGE DETECTED

09:42:31
> NEW ANALYSIS AVAILABLE
```

### IMPORTANT

This is **simulated demo data**, not real market data.

Clearly identify the mode as simulated/demo wherever necessary.

Do not connect to an external financial API.

------------------------------------------------------------------------

# 18. INTERACTIONS

After pages are complete:

### Table hover

Reveal:

``` text
VIEW CHART →
```

### Charts

Animate into view.

### Numbers

Animate smoothly when values change.

### Navigation

Active section becomes a red block.

### Page transitions

Fast, geometric transitions.

Avoid excessive animations.

The design should feel engineered, not flashy.

------------------------------------------------------------------------

# 19. RESPONSIVENESS

Desktop is the primary judging experience.

Mobile is secondary.

If time is limited, **prioritize desktop visual execution and the
visible grid over mobile polish**.

Do not simply shrink desktop.

On mobile:

-   convert grid into vertical editorial sections
-   maintain typography hierarchy
-   retain borders
-   retain brutalist shadows on important blocks
-   preserve whitespace
-   maintain red semantic rules

------------------------------------------------------------------------

# 20. ACCESSIBILITY

Maintain sufficient contrast.

Never rely on red/black alone to communicate movement.

Always use:

``` text
↗ positive
↘ negative
— neutral
```

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# 21. WHAT NOT TO DO

Absolutely no:

-   gradients
-   glassmorphism
-   rounded cards
-   rounded buttons
-   soft shadows
-   blur effects
-   neon cyberpunk styling
-   excessive glow
-   full-colour photography
-   generic SaaS dashboard layouts
-   excessive card grids
-   decorative red
-   random colours
-   excessive animation
-   unnecessary 3D
-   excessive icons
-   Bloomberg branding or cloning

Do not turn this into **Cyber Brutalism**.

The intended direction is:

> **Swiss Brutalism.**

------------------------------------------------------------------------

# 22. DATA

All market data can be fictional/static demo data.

Do not attempt to build a real trading system.

Use believable but clearly demo-oriented values.

The objective is **design and interaction**, not financial accuracy.

------------------------------------------------------------------------

# 23. BUILD ORDER

Follow this exact order.

### Phase 1 --- Foundation

1.  CSS variables
2.  12-column grid
3.  8px spacing system
4.  typography system
5.  colour system
6.  border system
7.  shadow system

### Phase 2 --- Components

1.  Navigation
2.  Data cards
3.  Hero
4.  Tables
5.  Heatmap
6.  Signal bars
7.  CTA
8.  Image treatment

### Phase 3 --- Core pages

1.  HOME
2.  MARKETS
3.  COMPANY

### Phase 4

4.  NEWS
5.  ARTICLE
6.  GLOBAL

### Phase 5

7.  Search
8.  Live Mode
9.  Micro-interactions
10. Responsive refinement

If time becomes limited, **cut features, not visual polish**.

------------------------------------------------------------------------

# 24. CRITICAL DESIGN PRIORITY

The homepage must immediately communicate:

### 1. Swiss

Visible grid + typography + whitespace.

### 2. Brutalism

Hard borders + offset shadows + rectangular blocks.

### 3. Finance

Charts + market data + news.

### 4. Originality

The concept of **signals** connecting price, news, volume and sentiment.

A judge should understand the design language **without reading the
explanation**.

------------------------------------------------------------------------

# 25. DESIGN PHILOSOPHY

Target aesthetic ratio:

**60% Swiss editorial**

**25% brutalist architecture**

**15% financial terminal**

The site should feel like:

> **A financial information system designed by an editorial designer who
> thinks like an architect.**

Not:

> A financial dashboard with a brutalist theme.

------------------------------------------------------------------------

# 26. FINAL QUALITY BAR

Before considering the project complete, inspect every page and ask:

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

### Creativity

> Does this feel like a new way of consuming financial information
> rather than a reskin?

If any answer is "no", fix it before adding more features.

------------------------------------------------------------------------

# 27. DESIGNATHON COMPLIANCE

This project must be created from scratch during the designathon.

Do not import or reuse:

-   an existing project
-   a pre-built website
-   a prior codebase
-   an existing design file

Open-source libraries, frameworks, fonts, and tools are permitted,
subject to the event rules and proper attribution where required.

Keep the implementation and design work in the team's required initial
repository/design file.

------------------------------------------------------------------------

# 28. FINAL DEMO FLOW

The intended judging/demo journey is:

1.  Open HOME and establish the visual identity.
2.  Show the live market signal block.
3.  Click an index and enter MARKETS.
4.  Demonstrate the heatmap and chart.
5.  Open a COMPANY page.
6.  Show how price, volume, momentum and news connect.
7.  Open the related ARTICLE.
8.  Switch to GLOBAL to demonstrate the broader market system.
9.  Finish with LIVE MODE or SEARCH as the closing interaction.

The demo should take approximately 2--3 minutes and tell one coherent
story:

> **A number is a signal.\
> A signal has context.\
> MARKET/01 connects the two.**

------------------------------------------------------------------------

# 29. FINAL INSTRUCTION TO THE CODING AGENT

**Prioritize design quality over feature quantity.**

Before coding each page, establish its composition using the shared
grid, spacing, typography, border, shadow and colour systems.

Do not fall back to common AI-generated dashboard patterns.

The final result should look intentionally art-directed and capable of
being presented as a serious design-system case study.

**The judge should understand the design language without reading the
explanation.**
