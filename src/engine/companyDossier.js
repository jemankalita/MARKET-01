export const COMPANY_TABS = ["OVERVIEW", "CHART", "FINANCIALS", "NEWS", "ANALYSIS", "HOLDINGS"];

const SECTOR_LINE = {
  ENERGY: "refining, petrochemicals, retail fuel and a growing new-energy book",
  BANKING: "retail deposits, wholesale credit and a widening payments stack",
  TECH: "global services, platforms and a concentrated AI delivery pipeline",
  AUTO: "volume brands, exports and a staged EV conversion",
  PHARMA: "formulations, API and regulated-market filings",
  FMCG: "staple brands, rural reach and pricing power",
};

const SECTOR_HQ = {
  ENERGY: "MUMBAI",
  BANKING: "MUMBAI",
  TECH: "BENGALURU",
  AUTO: "PUNE",
  PHARMA: "HYDERABAD",
  FMCG: "MUMBAI",
};

const SECTOR_SEGMENTS = {
  ENERGY: [
    ["OIL TO CHEMICALS", 46],
    ["RETAIL", 28],
    ["DIGITAL", 16],
    ["NEW ENERGY", 10],
  ],
  BANKING: [
    ["RETAIL BANKING", 41],
    ["WHOLESALE", 27],
    ["CARDS / PAYMENTS", 18],
    ["TREASURY", 14],
  ],
  TECH: [
    ["BANKING CLIENTS", 32],
    ["MANUFACTURING", 24],
    ["RETAIL / CPG", 22],
    ["COMMUNICATIONS", 22],
  ],
};

const HOLDERS = [
  "LIC OF INDIA",
  "SBI MUTUAL FUND",
  "ICICI PRUDENTIAL MF",
  "HDFC MUTUAL FUND",
  "GOVERNMENT PENSION FUND",
  "NPS TRUST",
  "VANGUARD EMERGING",
  "BLACKROCK INDIA",
  "UTI MUTUAL FUND",
  "KOTAK MUTUAL FUND",
];

function fingerprint(text) {
  let n = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    n ^= text.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return n >>> 0;
}

function pick(n, min, span) {
  return min + ((n >>> 0) % span);
}

function rupeesCr(value) {
  return `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })} Cr`;
}

function mixFrom(seed) {
  const promoter = pick(seed, 38, 22);
  const fii = pick(seed >>> 3, 14, 16);
  const dii = pick(seed >>> 7, 9, 12);
  const publicShare = 100 - promoter - fii - dii;
  if (publicShare < 8) {
    return { promoter: promoter - 4, fii, dii, publicShare: publicShare + 4 };
  }
  return { promoter, fii, dii, publicShare };
}

function segmentsFor(sector, seed) {
  const base = SECTOR_SEGMENTS[sector] ?? SECTOR_SEGMENTS.TECH;
  const tilt = pick(seed, -3, 7);
  return base.map(([name, pct], i) => ({
    name,
    pct: i === 0 ? pct + tilt : pct,
  }));
}

export function companyDossier(company) {
  const seed = fingerprint(company.id);
  const line = SECTOR_LINE[company.sector] ?? SECTOR_LINE.TECH;
  const mix = mixFrom(seed);
  const cap = Number.parseFloat(String(company.cap)) || 8;
  const revenue = Math.round(cap * 42000 + pick(seed, 800, 9000));
  const ebitda = Math.round(revenue * (0.18 + pick(seed, 0, 12) / 100));
  const pat = Math.round(ebitda * (0.52 + pick(seed >>> 2, 0, 10) / 100));
  const eps = Number((pat / (cap * 38)).toFixed(1));
  const roe = Number((12 + pick(seed, 0, 14) + (company.change > 0 ? 1.4 : 0)).toFixed(1));
  const rating = ["BUY", "HOLD", "SELL"][seed % 3];
  const target = Number((company.price * (1 + pick(seed, 4, 16) / 100)).toFixed(2));
  const buy = pick(seed, 8, 12);
  const sell = pick(seed >>> 4, 4, 6);
  const hold = 32 - buy - sell;
  const holderWeights = HOLDERS.map((_, i) => Number((6.8 - i * 0.62 + pick(seed + i, 0, 80) / 100).toFixed(2)));

  return {
    overview: {
      about: `${company.name} is a listed ${company.sector.toLowerCase()} franchise covering ${line}. The tape still prices the core book first; the second read is whether the next rupee of capex compounds or dilutes that franchise.`,
      hq: SECTOR_HQ[company.sector] ?? "MUMBAI",
      listed: "NSE / BSE",
      founded: String(1971 + pick(seed, 0, 28)),
      employees: `${pick(seed, 48, 220).toLocaleString("en-IN")},000+`,
      segments: segmentsFor(company.sector, seed),
      facts: [
        { k: "TICKER", v: company.ticker },
        { k: "SECTOR", v: company.sector },
        { k: "HEADQUARTERS", v: SECTOR_HQ[company.sector] ?? "MUMBAI" },
        { k: "LISTING", v: company.exchange ?? "NSE / BSE" },
      ],
    },
    financials: {
      years: ["FY24", "FY25", "FY26"],
      rows: [
        { label: "REVENUE", values: [rupeesCr(Math.round(revenue * 0.82)), rupeesCr(Math.round(revenue * 0.91)), rupeesCr(revenue)] },
        { label: "EBITDA", values: [rupeesCr(Math.round(ebitda * 0.78)), rupeesCr(Math.round(ebitda * 0.9)), rupeesCr(ebitda)] },
        { label: "PAT", values: [rupeesCr(Math.round(pat * 0.74)), rupeesCr(Math.round(pat * 0.88)), rupeesCr(pat)] },
        { label: "EPS", values: [(eps * 0.72).toFixed(1), (eps * 0.88).toFixed(1), eps.toFixed(1)] },
        { label: "ROE", values: [`${(roe - 2.1).toFixed(1)}%`, `${(roe - 0.8).toFixed(1)}%`, `${roe}%`] },
      ],
    },
    news: [
      {
        id: `${company.slug}-n1`,
        time: "09:14",
        title: `${company.ticker} BOARD CLEARS THE NEXT CAPEX TRANCHE`,
        lede: `Management keeps the ${company.sector.toLowerCase()} spend on the calendar and leaves guidance unchanged.`,
        to: "/analysis",
      },
      {
        id: `${company.slug}-n2`,
        time: "08:41",
        title: `STREET LIFTS ${company.ticker} AFTER VOLUME SPIKE`,
        lede: "Cash desks flagged unusual prints into the close; the follow-through is still being marked.",
        to: "/news",
      },
      {
        id: `${company.slug}-n3`,
        time: "07:58",
        title: `${company.sector} DESK REPRICES THE PEER SET`,
        lede: `${company.name} sits in the first bucket of that move, with the rest of the group lagging by a session.`,
        to: `/company/${company.slug}`,
      },
      {
        id: `${company.slug}-n4`,
        time: "YDAY",
        title: "PROMOTER BOOK HOLDS; MUTUAL FUNDS ADD A SLICE",
        lede: "The latest shareholding pattern is a demo tape, not a filing.",
        to: `/company/${company.slug}`,
      },
    ],
    analysis: {
      rating,
      target,
      upside: Number((((target - company.price) / company.price) * 100).toFixed(1)),
      books: { buy, hold, sell },
      notes: [
        `The core ${company.sector.toLowerCase()} book still funds the story.`,
        rating === "SELL"
          ? "Valuation is asking for a cleaner print than the last two quarters delivered."
          : "Street targets assume the next print holds the current margin band.",
        "Treat this page as a demo dossier until live filings are wired in.",
      ],
    },
    holdings: {
      mix: [
        { label: "PROMOTER", pct: mix.promoter },
        { label: "FII", pct: mix.fii },
        { label: "DII", pct: mix.dii },
        { label: "PUBLIC", pct: mix.publicShare },
      ],
      holders: HOLDERS.map((name, i) => ({
        name,
        type: i < 1 ? "INSURER" : i < 6 ? "MUTUAL FUND" : "FII",
        pct: holderWeights[i],
        shares: `${(12.4 - i * 1.1 + pick(seed + i, 0, 9) / 10).toFixed(1)} Cr`,
      })),
    },
  };
}
