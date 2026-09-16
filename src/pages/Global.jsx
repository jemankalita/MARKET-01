import { Move } from "../components/Move.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { CITIES } from "../engine/seed.js";

export function Global() {
  const { state } = useMarket();

  return (
    <>
      <header className="page-head">
        <h1 className="display">
          GLOBAL
          <br />
          MARKETS
        </h1>
        <p className="aside">
          DIFFERENT MARKETS.
          <br />
          A CONNECTED WORLD.
        </p>
      </header>
      <div className="map-stage">
        <svg className="world" viewBox="0 0 1000 560" role="img" aria-label="World markets map">
          <rect width="1000" height="560" fill="#F2F0EA" />
          <g fill="rgba(0,0,0,0.08)" stroke="#000" strokeWidth="1">
            <path d="M80 180 L140 150 L210 155 L250 190 L230 250 L180 280 L120 260 L90 220 Z" />
            <path d="M230 200 L280 185 L310 220 L290 270 L250 255 Z" />
            <path d="M430 145 L490 130 L540 145 L560 190 L530 230 L470 240 L430 210 Z" />
            <path d="M540 175 L620 160 L700 190 L740 240 L700 280 L620 270 L560 230 Z" />
            <path d="M720 185 L800 170 L860 180 L920 210 L900 260 L820 270 L740 240 Z" />
            <path d="M760 300 L840 290 L900 330 L870 390 L800 400 L740 360 Z" />
            <path d="M200 360 L280 350 L320 400 L260 430 L190 410 Z" />
          </g>
          {CITIES.map((c) => {
            const idx = state.indices[c.index];
            const neg = idx.change < -0.005;
            return (
              <g key={c.id}>
                <rect
                  x={c.x * 10 - 4}
                  y={c.y * 5.6 - 4}
                  width="8"
                  height="8"
                  fill={neg ? "#E60000" : "#000"}
                />
              </g>
            );
          })}
        </svg>
        {CITIES.map((c) => {
          const idx = state.indices[c.index];
          return (
            <div
              key={c.id}
              className={c.id === "MB" ? "city-card major" : "city-card block-minor"}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <div className="kicker">{c.name}</div>
              <Move value={idx.change} />
            </div>
          );
        })}
      </div>
      <div className="split">
        <div className="pad hair-right">
          <p className="kicker">INDICES</p>
          {["NASDAQ", "NIKKEI", "FTSE", "NIFTY", "DOW JONES"].map((id) => (
            <p key={id} className="data">
              {id} <Move value={state.indices[id].change} withPrice={state.indices[id].price} />
            </p>
          ))}
        </div>
        <blockquote className="pull">
          “A MORE CONNECTED FINANCIAL WORLD BUILDS A STRONGER TOMORROW.”
        </blockquote>
      </div>
      <SiteFoot />
    </>
  );
}
