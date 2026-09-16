import { formatChange, formatPrice, movementSymbol, movementTone } from "../engine/format.js";

export function Move({ value, withPrice }) {
  const tone = movementTone(value);
  return (
    <span className={`data tone-${tone}`}>
      {withPrice != null ? `${formatPrice(withPrice)} ` : null}
      {movementSymbol(value)} {formatChange(value)}
    </span>
  );
}

export function Spark({ history, negative }) {
  if (!history?.length) return null;
  const min = Math.min(...history);
  const max = Math.max(...history);
  const span = max - min || 1;
  const d = history
    .map((v, i) => {
      const x = (i / (history.length - 1)) * 72;
      const y = 26 - ((v - min) / span) * 24;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg className="spark" viewBox="0 0 72 28" aria-hidden="true">
      <path d={d} stroke={negative ? "#E60000" : "#000"} />
    </svg>
  );
}

export function SignalBar({ label, value }) {
  return (
    <li>
      <div className="kicker">
        {label} <span className="data">{value}%</span>
      </div>
      <div className="bar" aria-hidden="true">
        <div className="bar-fill" style={{ transform: `scaleX(${value / 100})` }} />
      </div>
    </li>
  );
}
