import { Link } from "react-router-dom";
import { SiteFoot } from "./Home.jsx";
import { ARTICLES } from "../engine/seed.js";

export function News() {
  const items = ARTICLES.filter((a) => a.kind === "NEWS");
  const latest = [...items].reverse();

  return (
    <>
      <header className="page-head">
        <h1 className="display">NEWS</h1>
        <p className="aside">
          MARKETS. ECONOMY.
          <br />
          BUSINESS. TECHNOLOGY.
          <br />
          ALL SIGNALS.
        </p>
      </header>
      <div className="news-row">
        <div>
          {items.map((a) => (
            <Link key={a.id} className="news-item" to={a.to}>
              <span className="data">{a.id.padStart ? a.id.padStart(2, "0") : a.id}</span>
              <h2>{a.title}</h2>
              <span className="data">
                {a.time} / {a.read}
              </span>
            </Link>
          ))}
        </div>
        <aside className="latest">
          <p className="pad kicker">LATEST</p>
          {latest.map((a, i) => (
            <Link key={a.id} to={a.to}>
              <span className="data">{String(i + 1).padStart(2, "0")}</span>
              <span>{a.lede}</span>
            </Link>
          ))}
          <Link className="cta" to="/analysis" style={{ margin: 16 }}>
            VIEW ALL NEWS
          </Link>
        </aside>
      </div>
      <SiteFoot />
    </>
  );
}