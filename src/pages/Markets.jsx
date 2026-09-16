import { Link } from "react-router-dom";
import { Heatmap } from "../components/Heatmap.jsx";
import { Move, Spark } from "../components/Move.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";

export function Markets() {
  const { state } = useMarket();
  const rows = Object.values(state.indices);
  const companies = Object.values(state.companies).sort((a, b) => b.change - a.change);

  return (
    <>
      <header className="page-head">
        <h1 className="display">MARKETS</h1>
        <p className="aside">
          GLOBAL. REAL-TIME.
          <br />
          UNFILTERED.
          <br />
          <span className="demo-flag">SIMULATED MARKET</span>
        </p>
      </header>
      <div className="split">
        <div className="hair-right">
          <div className="pad kicker">INDICES</div>
          <div className="block-major" style={{ margin: 16 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>INDEX</th>
                  <th>VALUE</th>
                  <th>CHANGE</th>
                  <th>CHART</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td>{r.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                    <td>
                      <Move value={r.change} />
                    </td>
                    <td>
                      <Spark history={r.history} negative={r.change < 0} />
                    </td>
                    <td className="hint">VIEW CHART →</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside>
          <div className="sentiment">
            <p className="kicker">MARKET SENTIMENT</p>
            <strong className="display">{state.sentiment}%</strong>
            <p className="display" style={{ fontSize: 32, margin: "8px 0" }}>
              {state.sentiment >= 55 ? "BULLISH" : state.sentiment <= 45 ? "BEARISH" : "MIXED"}
            </p>
            <p className="kicker">BASED ON PRICE ACTION, VOLUME AND NEWS FLOW.</p>
          </div>
          <p className="pad kicker">TOP MOVERS (NIFTY 50)</p>
          <ol className="movers">
            {companies.map((c, i) => (
              <li key={c.id}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <Link to={`/company/${c.slug}`}>{c.ticker}</Link>
                <Move value={c.change} />
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <div className="pad kicker">MARKET HEATMAP</div>
      <Heatmap sectors={state.sectors} />
      <SiteFoot />
    </>
  );
}
