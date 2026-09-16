import { Move, Spark } from "../components/Move.jsx";
import { WireGlobe, WorldMap } from "../components/WorldMap.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { deskSessions, formatPrice } from "../engine/format.js";

export const GLOBAL_BOARD = [
  "NIFTY",
  "SENSEX",
  "S&P 500",
  "NASDAQ",
  "DOW JONES",
  "FTSE",
  "DAX",
  "NIKKEI",
  "HANG SENG",
  "SSE",
  "STI",
  "BTC",
];

export function Global() {
  const { state } = useMarket();

  return (
    <>
      <div className="global-shell">
        <div className="global-left">
          <h1 className="display global-title">
            GLOBAL
            <br />
            MARKETS
          </h1>
          <WorldMap indices={state.indices} />
          <div className="clock-bar">
            <div>
              <p className="kicker">MARKET CLOCK</p>
              <p className="display clock-num">
                {state.clock.seconds} <span className="kicker clock-tz">IST</span>
              </p>
            </div>
            <div className="live-pill">
              <span className={state.live ? "live-dot on" : "live-dot"} />
              <span className="kicker">
                LIVE
                <br />
                DATA STREAM ACTIVE
                <br />
                (SIMULATED)
              </span>
            </div>
          </div>
        </div>
        <aside className="global-right">
          <p className="global-tag">
            DIFFERENT MARKETS.
            <br />
            A CONNECTED WORLD.
          </p>
          <div className="index-board">
            <div className="index-board-head">INDICES</div>
            <ul className="index-board-body">
              {GLOBAL_BOARD.map((id) => {
                const row = state.indices[id];
                return (
                  <li key={id} className="index-row" title={`${row.name} demo ${row.price}`}>
                    <span className="index-name">{row.name}</span>
                    <Spark history={row.history} negative={row.change < 0} width={72} height={22} />
                    <span className="figure index-price">{formatPrice(row.price)}</span>
                    <Move value={row.change} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="session-strip" aria-label="Market sessions">
            <p className="index-board-head">SESSIONS</p>
            <ul className="session-grid">
              {deskSessions(state.clock.seconds).map((desk) => (
                <li key={desk.id} className={desk.open ? "session-desk open" : "session-desk"}>
                  <span className="kicker">{desk.id}</span>
                  <span className="data">{desk.open ? "OPEN" : "CLOSED"}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="globe-row">
            <WireGlobe />
            <p className="kicker globe-copy">
              CAPITAL
              <br />
              IDEAS
              <br />
              PEOPLE
              <br />
              A STRONGER
              <br />
              TOMORROW.
            </p>
          </div>
        </aside>
      </div>
      <SiteFoot />
    </>
  );
}
