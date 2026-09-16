export function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatChange(pct) {
  if (Math.abs(pct) < 0.005) return "0.00%";
  const sign = pct > 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}

export function periodReturns(d1) {
  return {
    d1,
    w1: Number((d1 * 1.35).toFixed(2)),
    m1: Number((d1 * 2.4).toFixed(2)),
    y1: Number((d1 * 6.8).toFixed(2)),
  };
}

export function movementSymbol(pct) {
  if (pct > 0.005) return "↗";
  if (pct < -0.005) return "↘";
  return "—";
}

export function movementTone(pct) {
  if (pct > 0.005) return "pos";
  if (pct < -0.005) return "neg";
  return "neu";
}

export function heatmapLevel(pct) {
  if (pct <= -2.5) return "neg-strong";
  if (pct <= -0.8) return "neg-mid";
  if (pct <= -0.08) return "neg-light";
  if (pct >= 2) return "pos-strong";
  if (pct >= 0.8) return "pos-mid";
  if (pct >= 0.08) return "pos-light";
  return "neutral";
}

const FILLS = {
  "neg-strong": "#E60000",
  "neg-mid": "rgba(230, 0, 0, 0.72)",
  "neg-light": "rgba(230, 0, 0, 0.42)",
  "pos-strong": "#000000",
  "pos-mid": "rgba(0, 0, 0, 0.78)",
  "pos-light": "rgba(0, 0, 0, 0.38)",
  neutral: "#F2F0EA",
};

export function heatmapFill(pct) {
  return FILLS[heatmapLevel(pct)];
}

export function heatmapInk(pct) {
  const level = heatmapLevel(pct);
  if (level === "neg-strong" || level === "neg-mid" || level === "pos-strong" || level === "pos-mid") {
    return "#F2F0EA";
  }
  return "#000000";
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function istStamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).formatToParts(date);

  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    date: `${get("day")} ${get("month").toUpperCase()} ${get("year")}`,
    time: `${get("hour")}:${get("minute")}`,
    seconds: `${get("hour")}:${get("minute")}:${get("second")}`,
  };
}

export function istMinutes(stamp) {
  const [hour, minute] = String(stamp).split(":").map(Number);
  return hour * 60 + minute;
}

function inWindow(minutes, start, end) {
  if (start <= end) return minutes >= start && minutes < end;
  return minutes >= start || minutes < end;
}

export function deskSessions(stamp) {
  const minutes = istMinutes(stamp);
  return [
    { id: "INDIA", open: inWindow(minutes, 9 * 60 + 15, 15 * 60 + 30) },
    { id: "ASIA", open: inWindow(minutes, 5 * 60 + 30, 12 * 60) },
    { id: "EUROPE", open: inWindow(minutes, 13 * 60 + 30, 22 * 60) },
    { id: "US", open: inWindow(minutes, 19 * 60, 90) },
  ];
}
