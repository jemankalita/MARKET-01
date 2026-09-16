import { seriesGeometry } from "../engine/chart.js";

export function Spark({ history, negative, width = 96, height = 36, stretch }) {
  const geo = seriesGeometry(history, { width, height, pad: 2 });
  if (!geo.line) return null;
  const stroke = negative ? "#E60000" : "#000000";
  const fill = negative ? "rgba(230,0,0,0.16)" : "rgba(0,0,0,0.12)";

  return (
    <svg
      className="spark"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={stretch ? "none" : undefined}
      aria-hidden="true"
    >
      <path d={geo.area} fill={fill} stroke="none" />
      <path d={geo.line} fill="none" stroke={stroke} strokeWidth="2" />
      <rect x={geo.last.x - 2} y={geo.last.y - 2} width="4" height="4" fill={stroke} />
    </svg>
  );
}

export function PriceChart({ history, negative, label }) {
  const width = 640;
  const height = 240;
  const geo = seriesGeometry(history, { width, height, pad: 28, padRight: 88 });
  if (!geo.line) return null;
  const stroke = negative ? "#E60000" : "#000000";
  const ticks = 4;
  const span = geo.max - geo.min || 1;
  const lastValue = history[history.length - 1];
  const lastText =
    geo.max >= 1000
      ? Math.round(lastValue).toLocaleString("en-IN")
      : Number(lastValue).toFixed(1);

  return (
    <svg className="price-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const y = 28 + ((height - 56) * i) / ticks;
        const value = geo.max - (span * i) / ticks;
        return (
          <g key={i}>
            <line x1="28" x2={width - 88} y1={y} y2={y} stroke="#000" strokeOpacity="0.12" />
            <text x="4" y={y + 4} className="chart-label">
              {value >= 1000 ? Math.round(value).toLocaleString("en-IN") : value.toFixed(1)}
            </text>
          </g>
        );
      })}
      <path d={geo.area} fill={negative ? "rgba(230,0,0,0.12)" : "rgba(0,0,0,0.1)"} />
      <path d={geo.line} fill="none" stroke={stroke} strokeWidth="2.2" />
      <rect x={geo.last.x - 3} y={geo.last.y - 3} width="6" height="6" fill={stroke} />
      <text
        x={geo.last.x + 10}
        y={Math.min(Math.max(geo.last.y + 5, 22), height - 10)}
        className="chart-label chart-last"
        textAnchor="start"
      >
        {lastText}
      </text>
    </svg>
  );
}
