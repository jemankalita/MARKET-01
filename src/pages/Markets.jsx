import { Link } from "react-router-dom";
import { Heatmap } from "../components/Heatmap.jsx";
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

export function Markets() {
  const { state } = useMarket();
  const rows = CORE.map((id) => state.indices[id]);

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
      <PageTabs items={TABS} active="INDICES" />
      <div className="block-major markets-table">
        <table className="table">
          <thead>
            <tr>
              <th>INDEX</th>
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
              <tr key={r.id}>
                <td>{r.name}</td>
                <td className="figure">{r.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
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
      <div className="heatmap-head">
        <p className="kicker">MARKET HEATMAP</p>
        <Link className="kicker" to="/sectors">
          VIEW ALL SECTORS →
        </Link>
      </div>
      <Heatmap sectors={state.sectors} columns={5} />
      <SiteFoot />
    </>
  );
}
