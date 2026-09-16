export function seriesGeometry(history, { width, height, pad = 4, padRight } = {}) {
  if (!history?.length) {
    return { line: "", area: "", last: { x: 0, y: 0 }, min: 0, max: 0 };
  }

  const min = Math.min(...history);
  const max = Math.max(...history);
  const span = max - min || 1;
  const right = padRight ?? pad;
  const innerW = width - pad - right;
  const innerH = height - pad * 2;
  const pts = history.map((v, i) => {
    const x = pad + (history.length === 1 ? innerW / 2 : (i / (history.length - 1)) * innerW);
    const y = pad + innerH - ((v - min) / span) * innerH;
    return { x, y };
  });

  const line = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");
  const last = pts[pts.length - 1];
  const area = `${line} L${last.x.toFixed(2)} ${(height - pad).toFixed(2)} L${pts[0].x.toFixed(2)} ${(height - pad).toFixed(2)} Z`;

  return { line, area, last, min, max, pts };
}

export function volumeBars(history, { width, height, pad = 0 } = {}) {
  if (!history?.length) return [];
  const max = Math.max(...history) || 1;
  const gap = 1;
  const barW = Math.max(2, (width - pad * 2) / history.length - gap);
  return history.map((v, i) => ({
    x: pad + i * (barW + gap),
    y: height - (v / max) * height,
    w: barW,
    h: (v / max) * height,
  }));
}
