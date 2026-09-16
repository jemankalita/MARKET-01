import { Move } from "./Move.jsx";

export const MAP_VIEW = { width: 950, height: 620 };

export const MAP_CITIES = [
  { id: "NY", name: "NEW YORK", x: 272, y: 193, index: "NYA", ox: -148, oy: -28, tail: "e" },
  { id: "LN", name: "LONDON", x: 452, y: 166, index: "FTSE", change: -0.21, ox: -36, oy: -78, tail: "s" },
  { id: "MB", name: "MUMBAI", x: 660, y: 282, index: "NIFTY", ox: 24, oy: -70, tail: "s" },
  { id: "TK", name: "TOKYO", x: 818, y: 206, index: "NIKKEI", change: 1.12, ox: 24, oy: -32, tail: "w" },
  { id: "SG", name: "SINGAPORE", x: 740, y: 326, index: "STI", ox: 28, oy: -48, tail: "w" },
];

export const MAP_HUBS = [
  { id: "sf", x: 158, y: 198 },
  { id: "chi", x: 228, y: 186 },
  { id: "mex", x: 168, y: 248 },
  { id: "sao", x: 312, y: 392 },
  { id: "jnb", x: 528, y: 408 },
  { id: "fra", x: 478, y: 174 },
  { id: "dxb", x: 598, y: 268 },
  { id: "sel", x: 790, y: 214 },
  { id: "sha", x: 758, y: 236 },
  { id: "hkg", x: 748, y: 262 },
  { id: "syd", x: 848, y: 432 },
  { id: "akl", x: 913, y: 484 },
];

export function cityPercent(city) {
  return {
    left: (city.x / MAP_VIEW.width) * 100,
    top: (city.y / MAP_VIEW.height) * 100,
  };
}

function cityMove(city, indices) {
  return city.change ?? indices[city.index].change;
}

export function WorldMap({ indices }) {
  return (
    <div className="map-stage">
      <div className="map-frame">
        <div className="map-canvas">
          {/* Geographic outline: Wikimedia Commons "World map - low resolution". */}
          <img className="world-land" src="/images/world.svg?v=geo" alt="" />
          <svg
            className="world-overlay"
            viewBox={`0 0 ${MAP_VIEW.width} ${MAP_VIEW.height}`}
            role="img"
            aria-label="World markets map"
          >
            {MAP_HUBS.map((h) => (
              <rect key={h.id} className="map-hub" x={h.x - 2} y={h.y - 2} width="4" height="4" fill="#E60000" />
            ))}
            {MAP_CITIES.map((c) => (
              <rect
                key={c.id}
                className="map-pin"
                x={c.x - 4}
                y={c.y - 4}
                width="8"
                height="8"
                fill="#E60000"
              />
            ))}
          </svg>
        </div>
        <div className="city-board">
          {MAP_CITIES.map((c) => {
            const pos = cityPercent(c);
            return (
              <div
                key={c.id}
                className="city-card"
                data-tail={c.tail}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  transform: `translate(${c.ox}px, ${c.oy}px)`,
                }}
              >
                <div className="kicker">{c.name}</div>
                <Move value={cityMove(c, indices)} />
                <p className="city-summary">
                  {c.name} desk · {c.index} demo tape. Hover a city for the local move.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function WireGlobe() {
  return (
    <svg className="wire-globe" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="94" fill="#111" />
      <g fill="none" stroke="#F2F0EA" strokeWidth="1.4">
        <circle cx="100" cy="100" r="94" />
        <ellipse cx="100" cy="100" rx="28" ry="94" />
        <ellipse cx="100" cy="100" rx="56" ry="94" />
        <ellipse cx="100" cy="100" rx="80" ry="94" />
        <ellipse cx="100" cy="100" rx="94" ry="22" />
        <ellipse cx="100" cy="100" rx="94" ry="48" />
        <ellipse cx="100" cy="100" rx="94" ry="72" />
        <line x1="100" y1="6" x2="100" y2="194" />
        <line x1="6" y1="100" x2="194" y2="100" />
      </g>
    </svg>
  );
}
