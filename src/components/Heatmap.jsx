import { heatmapFill, heatmapInk, movementSymbol, formatChange } from "../engine/format.js";
import { HOME_HEAT, HOME_HEAT_COLUMNS } from "../engine/homeHeat.js";

export function heatmapEntries(sectors, compact) {
  if (!compact) return Object.values(sectors);
  return HOME_HEAT.map((id) => sectors[id]).filter(Boolean);
}

function sectorSummary(s) {
  const dir = s.change >= 0 ? "hot" : "cold";
  return `${s.name} is ${dir} at ${formatChange(s.change)}. Volume ${Math.round(s.volume ?? 50)}.`;
}

export function Heatmap({ sectors, columns, compact = false }) {
  const cols = columns ?? (compact ? HOME_HEAT_COLUMNS : 4);
  const items = heatmapEntries(sectors, compact);

  return (
    <section
      className={compact ? "heatmap compact" : "heatmap"}
      aria-label="Market heatmap"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {items.map((s) => {
        const fill = heatmapFill(s.change);
        const ink = heatmapInk(s.change);
        return (
          <article
            key={s.id}
            className="heat-cell"
            style={{ background: fill, color: ink }}
            tabIndex={0}
            title={sectorSummary(s)}
          >
            <div className="ticker-name">{s.name}</div>
            <div className="figure">
              {movementSymbol(s.change)} {formatChange(s.change)}
            </div>
            <p className="heat-summary">{sectorSummary(s)}</p>
          </article>
        );
      })}
    </section>
  );
}
