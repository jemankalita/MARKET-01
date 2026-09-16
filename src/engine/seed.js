function series(price, change = 1.24, points = 48) {
  const open = price / (1 + change / 100);
  const history = [];
  for (let i = 0; i < points; i += 1) {
    const t = i / (points - 1);
    const wave =
      Math.sin(i / 6) * 0.004 +
      Math.sin(i / 2.3) * 0.0018 +
      Math.cos(i / 11) * 0.0012 +
      (change / 100) * t;
    history.push(Number((open * (1 + wave)).toFixed(2)));
  }
  history[history.length - 1] = Number(price.toFixed(2));
  return {
    open: Number(open.toFixed(2)),
    price: Number(price.toFixed(2)),
    change: Number(change.toFixed(2)),
    momentum: change / 8,
    volume: 54,
    history,
  };
}

export const INDICES = {
  NIFTY: { id: "NIFTY", name: "NIFTY", region: "IN", ...series(25421.3, 1.24) },
  SENSEX: { id: "SENSEX", name: "SENSEX", region: "IN", ...series(83912.11, 0.98) },
  BANKNIFTY: { id: "BANKNIFTY", name: "BANKNIFTY", region: "IN", ...series(56812.45, -0.31) },
  NIFTYIT: { id: "NIFTYIT", name: "NIFTY IT", region: "IN", ...series(38412.76, 1.62) },
  NIFTYPHARMA: { id: "NIFTYPHARMA", name: "NIFTY PHARMA", region: "IN", ...series(22147.32, 0.54) },
  NASDAQ: { id: "NASDAQ", name: "NASDAQ", region: "US", ...series(17421.62, 0.5) },
  "DOW JONES": { id: "DOW JONES", name: "DOW JONES", region: "US", ...series(41221.34, 0.45) },
  "S&P 500": { id: "S&P 500", name: "S&P 500", region: "US", ...series(5804.21, 0.62) },
  DAX: { id: "DAX", name: "DAX", region: "DE", ...series(18421.11, 0.71) },
  FTSE: { id: "FTSE", name: "FTSE", region: "UK", ...series(8312.21, -0.27) },
  NIKKEI: { id: "NIKKEI", name: "NIKKEI", region: "JP", ...series(38912.45, 0.71) },
  "HANG SENG": { id: "HANG SENG", name: "HANG SENG", region: "HK", ...series(17221.11, -0.41) },
  SSE: { id: "SSE", name: "SSE", region: "CN", ...series(3124.21, 0.22) },
  STI: { id: "STI", name: "STI", region: "SG", ...series(3421.08, -0.42) },
  NYA: { id: "NYA", name: "NY COMP", region: "US", ...series(18402.1, 0.84) },
  BTC: { id: "BTC", name: "BTC", region: "GL", ...series(62841.0, -1.02) },
};

export const SECTORS = {
  TECH: { id: "TECH", name: "TECH", ...series(100, 2.4, 24), volume: 71 },
  BANKING: { id: "BANKING", name: "BANKING", ...series(100, 1.1, 24), volume: 64 },
  ENERGY: { id: "ENERGY", name: "ENERGY", ...series(100, -1.2, 24), volume: 58 },
  AUTO: { id: "AUTO", name: "AUTO", ...series(100, 0.8, 24), volume: 49 },
  PHARMA: { id: "PHARMA", name: "PHARMA", ...series(100, 0.8, 24), volume: 44 },
  FMCG: { id: "FMCG", name: "FMCG", ...series(100, 0.3, 24), volume: 38 },
  REALESTATE: { id: "REALESTATE", name: "REAL ESTATE", ...series(100, -0.8, 24), volume: 41 },
  METALS: { id: "METALS", name: "METALS", ...series(100, -0.6, 24), volume: 46 },
  CONSUMER: { id: "CONSUMER", name: "CONSUMER", ...series(100, 0.4, 24), volume: 36 },
  INFRA: { id: "INFRA", name: "INFRA", ...series(100, 0.2, 24), volume: 33 },
};

export const COMPANIES = {
  RELIANCE: {
    id: "RELIANCE",
    slug: "reliance",
    name: "RELIANCE INDUSTRIES",
    ticker: "RELIANCE",
    exchange: "BSE 500325",
    sector: "ENERGY",
    cap: "19.5T",
    pe: "28.4",
    high: "3,217",
    low: "2,221",
    yield: "0.68%",
    ...series(2941.2, 1.84),
  },
  "HDFC BANK": {
    id: "HDFC BANK",
    slug: "hdfc-bank",
    name: "HDFC BANK",
    ticker: "HDFCBANK",
    sector: "BANKING",
    cap: "12.1T",
    pe: "19.2",
    high: "1,820",
    low: "1,430",
    yield: "1.12%",
    ...series(1642.1, 0.84),
  },
  "ICICI BANK": {
    id: "ICICI BANK",
    slug: "icici-bank",
    name: "ICICI BANK",
    ticker: "ICICIBANK",
    sector: "BANKING",
    cap: "8.4T",
    pe: "17.8",
    high: "1,420",
    low: "1,090",
    yield: "0.94%",
    ...series(1248.6, 1.12),
  },
  TCS: {
    id: "TCS",
    slug: "tcs",
    name: "TATA CONSULTANCY",
    ticker: "TCS",
    sector: "TECH",
    cap: "14.2T",
    pe: "31.1",
    high: "4,592",
    low: "3,590",
    yield: "1.40%",
    ...series(3984.5, 0.62),
  },
  INFOSYS: {
    id: "INFOSYS",
    slug: "infosys",
    name: "INFOSYS",
    ticker: "INFY",
    sector: "TECH",
    cap: "6.8T",
    pe: "26.4",
    high: "2,006",
    low: "1,360",
    yield: "2.10%",
    ...series(1688.4, 0.48),
  },
};

export const ARTICLES = [
  {
    id: "01",
    kind: "NEWS",
    kicker: "GLOBAL",
    title: "GLOBAL MARKETS SHIFT AS INVESTORS REASSESS RATE PATH",
    lede: "Markets rally as Powell hints at a more accommodative stance.",
    byline: "MARKET/01 NEWS DESK",
    desk: "NEW YORK / LONDON / MUMBAI",
    body: [
      "Equity desks in New York, London and Mumbai marked a coordinated bid after the Federal Reserve chair opened the door to a shallower rate path. The comment hit the tape before the cash open in India and re-priced banking, technology and the dollar in one move.",
      "That is the chain this board is built to show. A policy signal is not a headline sitting beside a candle — it is the event that should rearrange volume, sector heat, and the names inside that heat. Nifty, Nasdaq and the banking book moved together. Read the coupling, not the card.",
    ],
    related: ["NIFTY", "NASDAQ", "BANKING"],
    time: "09:12",
    read: "04 MIN READ",
    to: "/analysis",
    image: "/images/mosaic.jpg",
    position: "center",
  },
  {
    id: "02",
    kind: "NEWS",
    kicker: "INDIA",
    title: "INDIA'S BANKING SECTOR ENTERS NEW PHASE",
    lede: "Strong credit growth and improving asset quality lift sentiment.",
    time: "08:47",
    read: "03 MIN READ",
    to: "/news",
    image: "/images/bse.jpg",
    position: "center",
  },
  {
    id: "03",
    kind: "NEWS",
    kicker: "TECH",
    title: "AI STOCKS REBOUND ON STRONG DEMAND",
    lede: "Tech indices regain momentum after recent selling.",
    time: "08:11",
    read: "05 MIN READ",
    to: "/news",
    image: "/images/posters.jpg",
    position: "right center",
  },
  {
    id: "cycle",
    kind: "ANALYSIS",
    kicker: "GLOBAL",
    title: "THE NEXT MARKET CYCLE",
    lede: "As global markets signal recovery, investors ask — is this the beginning of a new era?",
    time: "16 SEP 2026",
    read: "06 MIN READ",
    to: "/analysis",
    body: "From falling inflation to resilient corporate earnings, the global economy is showing signs of a structural shift. That risks remain — and history reminds us that markets are never linear.",
  },
  {
    id: "04",
    kind: "NEWS",
    kicker: "ENERGY",
    title: "RELIANCE EXPANDS RENEWABLE ENERGY PORTFOLIO",
    lede: "Capex tilts further toward green hydrogen and solar manufacturing.",
    time: "09:02",
    read: "02 MIN READ",
    to: "/company/reliance",
    image: "/images/plant.jpg",
    position: "center",
  },
];

export const CITIES = [
  { id: "NY", name: "NEW YORK", x: 268, y: 186, index: "NYA" },
  { id: "LN", name: "LONDON", x: 448, y: 156, index: "FTSE" },
  { id: "MB", name: "MUMBAI", x: 646, y: 268, index: "NIFTY" },
  { id: "TK", name: "TOKYO", x: 822, y: 210, index: "NIKKEI" },
  { id: "SG", name: "SINGAPORE", x: 742, y: 328, index: "STI" },
];
