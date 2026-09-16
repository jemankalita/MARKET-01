import { clamp, istStamp } from "./format.js";
import { ARTICLES, COMMODITIES, COMPANIES, CURRENCIES, INDICES, SECTORS } from "./seed.js";

export { ARTICLES, COMMODITIES, COMPANIES, CURRENCIES, INDICES, SECTORS };

function copySeries(item) {
  return {
    ...item,
    history: [...item.history],
  };
}

function cloneMap(map) {
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, copySeries(v)]));
}

export function createMarketState() {
  return {
    live: true,
    clock: istStamp(),
    indices: cloneMap(INDICES),
    sectors: cloneMap(SECTORS),
    companies: cloneMap(COMPANIES),
    commodities: cloneMap(COMMODITIES),
    currencies: cloneMap(CURRENCIES),
    sentiment: 72,
    signals: {
      momentum: 82,
      volume: 67,
      volatility: 51,
      news: 91,
    },
    events: [],
    eventSeq: 41,
  };
}

function bump(item, deltaPct, volumeDelta = 0) {
  const nextPrice = clamp(item.price * (1 + deltaPct / 100), item.open * 0.92, item.open * 1.08);
  const change = ((nextPrice - item.open) / item.open) * 100;
  const history = [...item.history, Number(nextPrice.toFixed(2))].slice(-96);
  return {
    ...item,
    price: Number(nextPrice.toFixed(2)),
    change: Number(change.toFixed(2)),
    momentum: clamp(item.momentum * 0.86 + deltaPct * 0.4, -1.8, 1.8),
    volume: clamp((item.volume ?? 50) + volumeDelta, 8, 99),
    history,
  };
}

function noise(rng, scale) {
  return (rng() - 0.5) * scale;
}

export function tickMarket(state, rng = Math.random) {
  const tickOne = (item, scale) =>
    bump(item, item.momentum * 0.22 + noise(rng, scale), noise(rng, 1.8));

  const indices = Object.fromEntries(
    Object.entries(state.indices).map(([k, v]) => [k, tickOne(v, 0.22)]),
  );
  const sectors = Object.fromEntries(
    Object.entries(state.sectors).map(([k, v]) => [k, tickOne(v, 0.32)]),
  );
  const companies = Object.fromEntries(
    Object.entries(state.companies).map(([k, v]) => [k, tickOne(v, 0.38)]),
  );
  const commodities = Object.fromEntries(
    Object.entries(state.commodities).map(([k, v]) => [k, tickOne(v, 0.28)]),
  );
  const currencies = Object.fromEntries(
    Object.entries(state.currencies).map(([k, v]) => [k, tickOne(v, 0.16)]),
  );

  const avgChange =
    Object.values(indices).reduce((sum, i) => sum + i.change, 0) / Object.keys(indices).length;

  return {
    ...state,
    clock: istStamp(),
    indices,
    sectors,
    companies,
    commodities,
    currencies,
    sentiment: clamp(Math.round(58 + avgChange * 12), 18, 92),
    signals: {
      momentum: clamp(Math.round(70 + avgChange * 8 + noise(rng, 4)), 12, 99),
      volume: clamp(Math.round(state.signals.volume + noise(rng, 3)), 12, 99),
      volatility: clamp(Math.round(state.signals.volatility + noise(rng, 2.4)), 12, 99),
      news: clamp(Math.round(state.signals.news + noise(rng, 1.8)), 20, 99),
    },
  };
}

export const EVENTS = [
  {
    id: "NIFTY_BREAK",
    label: "NIFTY BREAKS 25,400",
    impacts: [
      { group: "indices", key: "NIFTY", delta: 0.28, volume: 4 },
      { group: "sectors", key: "TECH", delta: 0.18, volume: 2 },
    ],
  },
  {
    id: "BANKING_VOLUME_SURGE",
    label: "BANKING VOLUME SURGE DETECTED",
    impacts: [
      { group: "sectors", key: "BANKING", delta: 1.42, volume: 18 },
      { group: "companies", key: "HDFC BANK", delta: 1.18, volume: 12 },
      { group: "companies", key: "ICICI BANK", delta: 1.63, volume: 14 },
      { group: "indices", key: "NIFTY", delta: 0.24, volume: 6 },
      { group: "indices", key: "BANKNIFTY", delta: 0.86, volume: 10 },
    ],
  },
  {
    id: "TECH_MOMENTUM",
    label: "TECH MOMENTUM INCREASED",
    impacts: [
      { group: "sectors", key: "TECH", delta: 1.1, volume: 9 },
      { group: "companies", key: "TCS", delta: 0.92, volume: 8 },
      { group: "companies", key: "INFOSYS", delta: 1.04, volume: 8 },
      { group: "indices", key: "NASDAQ", delta: 0.42, volume: 5 },
    ],
  },
  {
    id: "ENERGY_PRESSURE",
    label: "ENERGY SECTOR UNDER PRESSURE",
    impacts: [
      { group: "sectors", key: "ENERGY", delta: -1.6, volume: 11 },
      { group: "companies", key: "RELIANCE", delta: -0.72, volume: 7 },
      { group: "indices", key: "NIFTY", delta: -0.18, volume: 3 },
    ],
  },
  {
    id: "GLOBAL_SIGNAL",
    label: "GLOBAL MARKET SIGNAL UPDATED",
    impacts: [
      { group: "indices", key: "NASDAQ", delta: 0.22, volume: 3 },
      { group: "indices", key: "DOW JONES", delta: 0.14, volume: 2 },
      { group: "indices", key: "FTSE", delta: -0.11, volume: 2 },
      { group: "indices", key: "NIKKEI", delta: 0.31, volume: 3 },
    ],
  },
  {
    id: "VOLATILITY_UP",
    label: "MARKET VOLATILITY INCREASED",
    impacts: [
      { group: "indices", key: "NIFTY", delta: -0.12, volume: 8 },
      { group: "sectors", key: "AUTO", delta: -0.4, volume: 5 },
    ],
    signal: { volatility: 12 },
  },
  {
    id: "NEW_ANALYSIS",
    label: "NEW ANALYSIS AVAILABLE",
    impacts: [],
    signal: { news: 6 },
  },
];

export function applyEvent(state, eventId, rng = Math.random) {
  const def = EVENTS.find((e) => e.id === eventId);
  if (!def) return state;

  const next = {
    ...state,
    indices: cloneMap(state.indices),
    sectors: cloneMap(state.sectors),
    companies: cloneMap(state.companies),
    commodities: cloneMap(state.commodities),
    currencies: cloneMap(state.currencies),
    signals: { ...state.signals },
  };

  const recorded = [];
  def.impacts.forEach((impact) => {
    const bucket = next[impact.group];
    const current = bucket[impact.key];
    if (!current) return;
    const jitter = (rng() - 0.5) * 0.08;
    bucket[impact.key] = bump(current, impact.delta + jitter, impact.volume ?? 0);
    recorded.push({
      group: impact.group,
      key: impact.key,
      change: bucket[impact.key].change,
      delta: impact.delta,
    });
  });

  if (def.signal) {
    Object.entries(def.signal).forEach(([k, v]) => {
      next.signals[k] = clamp(next.signals[k] + v, 8, 99);
    });
  }

  if (eventId === "BANKING_VOLUME_SURGE") {
    next.signals.volume = clamp(next.signals.volume + 14, 8, 99);
  }

  const seq = state.eventSeq + 1;
  const clock = istStamp();
  const entry = {
    seq,
    id: def.id,
    label: def.label,
    time: clock.seconds,
    impacts: recorded,
    related: relatedFor(def.id),
  };

  return {
    ...next,
    clock,
    eventSeq: seq,
    events: [entry, ...state.events].slice(0, 18),
  };
}

function relatedFor(id) {
  if (id === "BANKING_VOLUME_SURGE") {
    return { news: 3, companies: 12, sectors: 1 };
  }
  if (id === "TECH_MOMENTUM") {
    return { news: 2, companies: 8, sectors: 1 };
  }
  if (id === "ENERGY_PRESSURE") {
    return { news: 2, companies: 4, sectors: 1 };
  }
  return { news: 1, companies: 3, sectors: 1 };
}

export function pickEvent(rng = Math.random) {
  return EVENTS[Math.floor(rng() * EVENTS.length)];
}

export function searchIndex(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits = [];

  Object.values(COMPANIES).forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)) {
      hits.push({ type: "COMPANY", title: c.name, to: `/company/${c.slug}` });
    }
  });

  Object.values(SECTORS).forEach((s) => {
    if (s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)) {
      hits.push({ type: "SECTOR", title: `${s.name} / INDIA`, to: "/markets" });
    }
  });

  Object.values(COMMODITIES).forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)) {
      hits.push({ type: "COMMODITY", title: c.name, to: "/markets" });
    }
  });

  Object.values(CURRENCIES).forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)) {
      hits.push({ type: "FX", title: c.name, to: "/markets" });
    }
  });

  ARTICLES.forEach((a) => {
    if (`${a.kicker} ${a.title} ${a.body}`.toLowerCase().includes(q)) {
      hits.push({
        type: a.kind,
        title: a.title.replace(/\n/g, " "),
        to: a.to,
      });
    }
  });

  return hits.slice(0, 8);
}
