import { Link, useParams } from "react-router-dom";
import { Move, SignalBar } from "../components/Move.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { ARTICLES } from "../engine/seed.js";
import { formatPrice } from "../engine/format.js";

export function Company() {
  const { slug } = useParams();
  const { state } = useMarket();
  const company =
    Object.values(state.companies).find((c) => c.slug === slug) ?? state.companies.RELIANCE;

  const d = pathFrom(company.history);

  return (
    <>
      <p className="pad demo-flag">MARKET/01 / COMPANY · {company.exchange ?? "NSE"}</p>
      <header className="quote-row">
        <div className="pad-l hair-right">
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 88px)", margin: 0 }}>
            {company.name.split(" ").slice(0, 1).join(" ")}
            <br />
            {company.name.split(" ").slice(1).join(" ") || company.ticker}
          </h1>
        </div>
        <div className="pad-l">
          <p className="data" style={{ fontSize: 40, margin: 0 }}>
            ₹{formatPrice(company.price)}
          </p>
          <p style={{ fontSize: 24, margin: "8px 0" }}>
            <Move value={company.change} />
          </p>
          <Link className="cta" to="/markets">
            ADD TO WATCHLIST
          </Link>
        </div>
      </header>
      <div className="metrics">
        <Metric k="MARKET CAP" v={company.cap} />
        <Metric k="P/E RATIO" v={company.pe} />
        <Metric k="52W HIGH" v={company.high} />
        <Metric k="52W LOW" v={company.low} />
        <Metric k="DIVIDEND YIELD" v={company.yield} />
      </div>
      <div className="split">
        <div className="hair-right">
          <div className="pad kicker">CHART · DEMO SERIES</div>
          <div className="chart-wrap block-major" style={{ margin: 16 }}>
            <svg viewBox="0 0 640 240" role="img" aria-label={`${company.name} price chart`}>
              <path d={d} fill="none" stroke="#000" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div>
          <div className="pad kicker">SIGNALS</div>
          <ul className="signals">
            <SignalBar label="MOMENTUM" value={state.signals.momentum} />
            <SignalBar label="VOLUME" value={state.signals.volume} />
            <SignalBar label="VOLATILITY" value={state.signals.volatility} />
            <SignalBar label="NEWS ACTIVITY" value={state.signals.news} />
          </ul>
        </div>
      </div>
      <div className="split">
        <div className="hair-right">
          <div className="pad kicker">WHAT'S MOVING THE STOCK?</div>
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Link key={a.id} className="news-item" to={a.to} style={{ gridTemplateColumns: "48px 1fr" }}>
              <span className="data">{String(i + 1).padStart(2, "0")}</span>
              <h2 style={{ fontSize: 24 }}>{a.title}</h2>
            </Link>
          ))}
        </div>
        <div className="hero-media" style={{ minHeight: 280, position: "relative" }}>
          <div className="duotone plant" />
        </div>
      </div>
      <SiteFoot />
    </>
  );
}

function Metric({ k, v }) {
  return (
    <div className="metric">
      <span className="kicker">{k}</span>
      <b>{v}</b>
    </div>
  );
}

function pathFrom(history) {
  if (!history?.length) return "";
  const min = Math.min(...history);
  const max = Math.max(...history);
  const span = max - min || 1;
  return history
    .map((v, i) => {
      const x = (i / (history.length - 1)) * 640;
      const y = 220 - ((v - min) / span) * 200;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}
