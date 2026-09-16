import { Spark } from "./Chart.jsx";
import { formatChange, formatPrice, movementSymbol, movementTone } from "../engine/format.js";

export { Spark };

export function Move({ value, withPrice }) {
  const tone = movementTone(value);
  const change = (
    <span className={`${withPrice != null ? "data move-chg" : "figure"} tone-${tone}`}>
      {movementSymbol(value)} {formatChange(value)}
    </span>
  );
  if (withPrice == null) return change;
  return (
    <span className="move">
      <span className="figure">{formatPrice(withPrice)}</span>
      {change}
    </span>
  );
}

export function SignalBar({ label, value }) {
  return (
    <li>
      <div className="signal-head">
        <span className="kicker">{label}</span>
        <span className="figure signal-val">{value}%</span>
      </div>
      <div className="bar" aria-hidden="true">
        <div className="bar-fill" style={{ transform: `scaleX(${value / 100})` }} />
      </div>
    </li>
  );
}
