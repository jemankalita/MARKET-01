import { Link } from "react-router-dom";
import { Heatmap } from "../components/Heatmap.jsx";
import { Move, Spark } from "../components/Move.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { ARTICLES } from "../engine/seed.js";

const STRIP = ["NIFTY", "SENSEX", "BANKNIFTY", "NASDAQ", "BTC"];

export function Home() {
  const { state } = useMarket();
  const stories = ARTICLES.filter((a) => a.kind === "NEWS").slice(0, 3);

  return (
    <>
      <p className="pad demo-flag">MARKET/01 / HOME · SIMULATED MARKET</p>
      <section className="hero block-hero" style={{ margin: 16 }}>
        <div className="hero-copy">
          <p className="kicker">MARKETS MOVE PEOPLE. PEOPLE BUILD TOMORROW.</p>
          <h1 className="display">
            THE
            <br />
            MARKET
            <br />
            NEVER
            <br />
            <span className="sleeps">SLEEPS.</span>
          </h1>
          <p>REAL DATA. REAL CONTEXT.</p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="duotone tower" />
          <div className="red-slash" />
        </div>
      </section>

      <section className="indices-strip" aria-label="Key indices">
        {STRIP.map((id) => {
          const row = state.indices[id];
          return (
            <Link key={id} to="/markets" className="idx">
              <span className="kicker">{row.name}</span>
              <Move value={row.change} withPrice={row.price} />
              <Spark history={row.history} negative={row.change < 0} />
            </Link>
          );
        })}
      </section>

      <section className="stories">
        {stories.map((s, i) => (
          <Link key={s.id} className="story" to={s.to}>
            <span className="story-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <span className="data">
              {s.time} / {s.read}
            </span>
          </Link>
        ))}
      </section>

      <section className="split hair-bottom">
        <div className="hair-right">
          <div className="pad kicker">MARKET HEATMAP</div>
          <Heatmap sectors={state.sectors} />
        </div>
        <div>
          <div className="pad kicker">SIGNALS</div>
          <ul className="signals">
            <Signal label="MOMENTUM" value={state.signals.momentum} />
            <Signal label="VOLUME" value={state.signals.volume} />
            <Signal label="VOLATILITY" value={state.signals.volatility} />
            <Signal label="NEWS ACTIVITY" value={state.signals.news} />
          </ul>
        </div>
      </section>
      <SiteFoot />
    </>
  );
}

function Signal({ label, value }) {
  return (
    <li>
      <div className="kicker">
        {label} <span className="data">{value}%</span>
      </div>
      <div className="bar">
        <div className="bar-fill" style={{ transform: `scaleX(${value / 100})` }} />
      </div>
    </li>
  );
}

export function SiteFoot() {
  return (
    <footer className="footer-note">
      <span>MARKET/01 · DEMO DATA · NOT LIVE PRICES</span>
      <span>SWISS BRUTALISM / SIGNALS</span>
    </footer>
  );
}
