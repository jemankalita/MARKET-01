import { heatmapFill, heatmapInk, movementSymbol, formatChange } from "../engine/format.js";

export function Heatmap({ sectors }) {
  return (
    <section className="heatmap" aria-label="Market heatmap">
      {Object.values(sectors).map((s) => {
        const fill = heatmapFill(s.change);
        const ink = heatmapInk(s.change);
        return (
          <article
            key={s.id}
            className="heat-cell"
            style={{ background: fill, color: ink }}
          >
            <div className="kicker">{s.name}</div>
            <div className="data" style={{ fontSize: 24 }}>
              {movementSymbol(s.change)} {formatChange(s.change)}
            </div>
          </article>
        );
      })}
    </section>
  );
}
