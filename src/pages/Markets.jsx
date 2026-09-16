import { useState } from "react";
import { Link } from "react-router-dom";
import { Heatmap } from "../components/Heatmap.jsx";
import { HoverTip } from "../components/HoverTip.jsx";
import { Move, Spark } from "../components/Move.jsx";
import { PageTabs } from "../components/PageTabs.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";

const TABS = ["INDICES", "HEATMAP", "SECTORS", "COMMODITIES", "CURRENCIES"];

const CORE = [
  "NIFTY",
  "SENSEX",
  "BANKNIFTY",
  "NIFTYIT",
  "NIFTYPHARMA",
  "NASDAQ",
  "DOW JONES",
  "FTSE",
  "NIKKEI",
  "BTC",
];

function scaled(change, factor) {
  return Number((change * factor).toFixed(2));
}

function hintFor(row, kind) {
  const dir = row.change >= 0 ? "bid" : "offer";
  return `${row.name} is on the ${dir} at ${row.price.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}. Demo tape — not a live quote.`;
}

function TapeTable({ rows, nameHeader, kind }) {
  return (
    <div className="block-major markets-table">
      <table className="table">
        <thead>
          <tr>
            <th>{nameHeader}</th>
            <th>VALUE</th>
            <th>CHANGE</th>
            <th>1D</th>
            <th>1W</th>
            <th>1M</th>
            <th>1Y</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} title={hintFor(r, kind)}>
              <td>
                <HoverTip summary={hintFor(r, kind)}>
                  {r.name}
                  {r.unit ? <span className="hint"> · {r.unit}</span> : <span className="hint"> · HOVER</span>}
                </HoverTip>
              </td>
              <td className="figure">
                {r.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td>
                <Move value={r.change} />
              </td>
              <td>
                <Spark history={r.history} negative={r.change < 0} width={72} height={28} />
              </td>
              <td>
                <Move value={scaled(r.change, 0.72)} />
              </td>
              <td>
                <Move value={scaled(r.change, 1.85)} />
              </td>
              <td>
                <Move value={scaled(r.change, 7.4)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Markets() {
  const { state } = useMarket();
  const [tab, setTab] = useState("INDICES");
  const indexRows = CORE.map((id) => state.indices[id]);
  const sectorRows = Object.values(state.sectors);
  const commodityRows = Object.values(state.commodities);
  const fxRows = Object.values(state.currencies);

  return (
    <>
      <header className="page-head">
        <h1 className="display">MARKETS</h1>
        <p className="aside">
          DATA
          <br />
          DRIVES
          <br />
          PERSPECTIVE
        </p>
      </header>
      <PageTabs items={TABS} active={tab} onSelect={setTab} />
      <section role="tabpanel" id={`panel-${tab}`} aria-label={tab}>
        {tab === "INDICES" ? <TapeTable rows={indexRows} nameHeader="INDEX" kind="index" /> : null}
        {tab === "HEATMAP" ? (
          <>
            <div className="heatmap-head">
              <p className="kicker">MARKET HEATMAP</p>
              <Link className="kicker" to="/sectors">
                VIEW ALL SECTORS →
              </Link>
            </div>
            <Heatmap sectors={state.sectors} columns={5} />
          </>
        ) : null}
        {tab === "SECTORS" ? (
          <>
            <TapeTable rows={sectorRows} nameHeader="SECTOR" kind="sector" />
            <Heatmap sectors={state.sectors} columns={5} />
          </>
        ) : null}
        {tab === "COMMODITIES" ? (
          <TapeTable rows={commodityRows} nameHeader="CONTRACT" kind="commodity" />
        ) : null}
        {tab === "CURRENCIES" ? <TapeTable rows={fxRows} nameHeader="PAIR" kind="fx" /> : null}
      </section>
      {tab === "INDICES" ? (
        <>
          <div className="heatmap-head">
            <p className="kicker">MARKET HEATMAP</p>
            <Link className="kicker" to="/sectors">
              VIEW ALL SECTORS →
            </Link>
          </div>
          <Heatmap sectors={state.sectors} columns={5} />
        </>
      ) : null}
      <SiteFoot />
    </>
  );
}
