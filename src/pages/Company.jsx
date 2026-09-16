import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PriceChart } from "../components/Chart.jsx";
import { EditorialImage } from "../components/EditorialImage.jsx";
import { Move, SignalBar } from "../components/Move.jsx";
import { PageTabs } from "../components/PageTabs.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { COMPANY_TABS, companyDossier } from "../engine/companyDossier.js";
import { formatPrice } from "../engine/format.js";

const RANGES = ["1D", "1W", "1M", "6M", "1Y", "MAX"];
const SECTOR_IMAGE = {
  ENERGY: "/images/plant.jpg",
  BANKING: "/images/bse.jpg",
  TECH: "/images/mosaic.jpg",
};

export function Company() {
  const { slug } = useParams();
  const { state } = useMarket();
  const [tab, setTab] = useState("OVERVIEW");
  const company =
    Object.values(state.companies).find((c) => c.slug === slug) ?? state.companies.RELIANCE;
  const dossier = companyDossier(company);

  useEffect(() => {
    setTab("OVERVIEW");
  }, [slug]);

  return (
    <>
      <p className="pad kicker">MARKET/01 / COMPANY / {company.ticker}</p>
      <header className="quote-row">
        <div className="pad-l hair-right">
          <h1 className="display company-name">
            {company.name.split(" ").slice(0, 1).join(" ")}
            <br />
            {company.name.split(" ").slice(1).join(" ") || company.ticker}
          </h1>
          <p className="kicker">
            {company.sector} / INDIA · NSE {company.ticker} · {company.exchange ?? "NSE / BSE"}
          </p>
        </div>
        <div className="pad-l quote-price">
          <p className="figure quote-num">₹{formatPrice(company.price)}</p>
          <p className="quote-move">
            <Move value={company.change} />
          </p>
          <Link className="cta" to="/markets">
            ADD TO WATCHLIST
          </Link>
        </div>
      </header>
      <div className="metrics">
        <Metric k="MARKET CAP" v={`₹${company.cap}`} />
        <Metric k="P/E RATIO" v={company.pe} />
        <Metric k="52W HIGH" v={company.high} />
        <Metric k="52W LOW" v={company.low} />
        <Metric k="DIVIDEND YIELD" v={company.yield} />
      </div>
      <PageTabs items={COMPANY_TABS} active={tab} onSelect={setTab} />
      <StockPanel tab={tab} company={company} dossier={dossier} signals={state.signals} />
      <SiteFoot />
    </>
  );
}

function StockPanel({ tab, company, dossier, signals }) {
  return (
    <section
      className="stock-panel"
      role="tabpanel"
      id={`panel-${tab}`}
      aria-labelledby={`tab-${tab}`}
      aria-label={tab}
    >
      {tab === "OVERVIEW" ? <Overview company={company} dossier={dossier} /> : null}
      {tab === "CHART" ? <ChartPane company={company} signals={signals} /> : null}
      {tab === "FINANCIALS" ? <Financials dossier={dossier} /> : null}
      {tab === "NEWS" ? <CompanyNews dossier={dossier} /> : null}
      {tab === "ANALYSIS" ? <Analysis company={company} dossier={dossier} /> : null}
      {tab === "HOLDINGS" ? <Holdings dossier={dossier} /> : null}
    </section>
  );
}

function Overview({ company, dossier }) {
  return (
    <div className="split">
      <div className="hair-right">
        <div className="pad kicker">THE FRANCHISE</div>
        <p className="dossier-copy">{dossier.overview.about}</p>
        <div className="metrics hold-mix">
          {dossier.overview.facts.map((row) => (
            <Metric key={row.k} k={row.k} v={row.v} />
          ))}
        </div>
        <table className="table dossier-table">
          <thead>
            <tr>
              <th>SEGMENT</th>
              <th>MIX</th>
            </tr>
          </thead>
          <tbody>
            {dossier.overview.segments.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td className="figure">{row.pct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hero-media plant-frame">
        <EditorialImage
          src={SECTOR_IMAGE[company.sector] ?? "/images/posters.jpg"}
          alt={`${company.sector} operations`}
        />
        <p className="media-quote kicker">
          {company.sector}
          <br />
          DRIVES
          <br />
          THE TAPE.
        </p>
      </div>
    </div>
  );
}

function ChartPane({ company, signals }) {
  return (
    <>
      <div className="split">
        <div className="hair-right">
          <div className="pad kicker chart-ranges">
            {RANGES.map((range, i) => (
              <span key={range} className={i === 0 ? "range on" : "range"}>
                {range}
              </span>
            ))}
          </div>
          <div className="chart-wrap">
            <PriceChart
              history={company.history}
              negative={company.change < 0}
              label={`${company.name} price chart`}
            />
          </div>
        </div>
        <div>
          <div className="pad kicker">SIGNALS</div>
          <ul className="signals">
            <SignalBar label="MOMENTUM" value={signals.momentum} />
            <SignalBar label="VOLUME" value={signals.volume} />
            <SignalBar label="VOLATILITY" value={signals.volatility} />
            <SignalBar label="NEWS ACTIVITY" value={signals.news} />
          </ul>
        </div>
      </div>
    </>
  );
}

function Financials({ dossier }) {
  return (
    <div className="block-major markets-table">
      <p className="pad kicker">DEMO BOOKS / CONSOLIDATED</p>
      <table className="table">
        <thead>
          <tr>
            <th>LINE</th>
            {dossier.financials.years.map((year) => (
              <th key={year}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dossier.financials.rows.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              {row.values.map((value) => (
                <td key={`${row.label}-${value}`} className="figure">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompanyNews({ dossier }) {
  return (
    <div>
      <div className="pad kicker">COMPANY WIRE</div>
      {dossier.news.map((item, i) => (
        <Link key={item.id} className="moving-item" to={item.to}>
          <span className="data">{String(i + 1).padStart(2, "0")}</span>
          <span>
            <strong>{item.title}</strong>
            <span className="meta news-lede">
              {item.time} / {item.lede}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function Analysis({ company, dossier }) {
  const { rating, target, upside, books, notes } = dossier.analysis;
  return (
    <div className="split">
      <div className="hair-right">
        <div className="metrics metrics-3">
          <Metric k="STREET RATING" v={rating} />
          <Metric k="TARGET" v={`₹${formatPrice(target)}`} />
          <Metric k="UPSIDE" v={`${upside > 0 ? "+" : ""}${upside}%`} />
        </div>
        <div className="pad kicker">32-HOUSE DEMO BOOK</div>
        <div className="books-bar" aria-hidden="true">
          <span className="book-buy" style={{ flexGrow: books.buy }} />
          <span className="book-hold" style={{ flexGrow: books.hold }} />
          <span className="book-sell" style={{ flexGrow: books.sell }} />
        </div>
        <p className="pad data">
          BUY {books.buy} · HOLD {books.hold} · SELL {books.sell}
        </p>
        <ol className="dossier-notes">
          {notes.map((note, i) => (
            <li key={note}>
              <span className="data">{String(i + 1).padStart(2, "0")}</span>
              {note}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="pad kicker">MARK VS SPOT</div>
        <p className="pad-l figure quote-num">₹{formatPrice(company.price)}</p>
        <p className="pad">Spot versus the demo target. Not a recommendation.</p>
      </div>
    </div>
  );
}

function Holdings({ dossier }) {
  return (
    <div>
      <p className="pad kicker">DEMO SHAREHOLDING PATTERN</p>
      <div className="metrics hold-mix">
        {dossier.holdings.mix.map((row) => (
          <Metric key={row.label} k={row.label} v={`${row.pct}%`} />
        ))}
      </div>
      <div className="block-major markets-table">
        <table className="table">
          <thead>
            <tr>
              <th>HOLDER</th>
              <th>TYPE</th>
              <th>STAKE</th>
              <th>SHARES</th>
            </tr>
          </thead>
          <tbody>
            {dossier.holdings.holders.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td className="figure">{row.pct.toFixed(2)}%</td>
                <td className="figure">{row.shares}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Metric({ k, v }) {
  return (
    <div className="metric">
      <span className="kicker">{k}</span>
      <b className="figure">{v}</b>
    </div>
  );
}
