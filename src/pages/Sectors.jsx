import { Heatmap } from "../components/Heatmap.jsx";
import { SiteFoot } from "./Home.jsx";
import { useMarket } from "../context/MarketProvider.jsx";

export function Sectors() {
  const { state } = useMarket();
  return (
    <>
      <header className="page-head">
        <h1 className="display">SECTORS</h1>
        <p className="aside">
          HEAT IS A SIGNAL.
          <br />
          NOT A DECORATION.
        </p>
      </header>
      <p className="pad" style={{ maxWidth: "62ch" }}>
        Sector cells update from the same engine as indices and companies. Colour intensity tracks
        magnitude. The arrow is mandatory. Red is reserved for negative movement.
      </p>
      <Heatmap sectors={state.sectors} />
      <SiteFoot />
    </>
  );
}
