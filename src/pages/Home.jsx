import { Link } from "react-router-dom";
import { EditorialImage } from "../components/EditorialImage.jsx";
import { Heatmap } from "../components/Heatmap.jsx";
import { Move, Spark, SignalBar } from "../components/Move.jsx";
import { useMarket } from "../context/MarketProvider.jsx";
import { ARTICLES } from "../engine/seed.js";
import { HOME_HEAT, HOME_HEAT_COLUMNS } from "../engine/homeHeat.js";

export { HOME_HEAT };

const STRIP = ["NIFTY", "SENSEX", "BANKNIFTY", "NASDAQ", "BTC"];

export function Home() {
  const { state } = useMarket();
  const story = ARTICLES.find((a) => a.kind === "NEWS");
  const heat = Object.fromEntries(HOME_HEAT.map((id) => [id, state.sectors[id]]));

  return (
    <>
      <p className="pad kicker home-kicker">REAL DATA. REAL CONTEXT.</p>
      <section className="hero block-hero">
        <div className="hero-copy">
          <h1 className="display">
            THE
            <br />
            MARKET
            <br />
            <span className="sleeps">NEVER</span>
            <br />
            <span className="sleeps">SLEEPS.</span>
          </h1>
          <p className="hero-sub">MARKETS MOVE. PEOPLE BUILD TOMORROW.</p>
          <Link className="kicker" to="/markets">
            EXPLORE →
          </Link>
        </div>
        <div className="hero-media">
          <EditorialImage src="/images/bse.jpg" alt="Bombay Stock Exchange, Mumbai" />
          <p className="media-cap kicker">BSE · MUMBAI · EST. 1875</p>
          <p className="media-quote display">
            MARKETS
            <br />
            PEOPLE
            <br />
            CAPITAL
            <br />
            PROGRESS.
          </p>
        </div>
      </section>

      <section className="indices-strip" aria-label="Key indices">
        {STRIP.map((id) => {
          const row = state.indices[id];
          return (
            <Link key={id} to="/markets" className="idx">
              <span className="kicker">{row.name}</span>
              <Move value={row.change} withPrice={row.price} />
              <Spark history={row.history} negative={row.change < 0} width={240} height={80} stretch />
            </Link>
          );
        })}
      </section>

      <section className="home-triptych">
        <Link className="panel story-lead" to={story.to}>
          <p className="kicker">
            <span className="story-num">01</span> TOP STORY
            <span className="story-desk"> · {story.kicker} · {story.desk}</span>
          </p>
          <h2 className="display panel-title">{story.title}</h2>
          <p className="story-lede">{story.lede}</p>
          {story.body?.map((para) => (
            <p key={para.slice(0, 24)} className="story-body">
              {para}
            </p>
          ))}
          <p className="kicker story-related">
            SIGNAL · {story.related?.join(" · ")}
          </p>
          <p className="meta story-meta">
            <span>{story.byline}</span>
            <span>
              {" "}
              · {story.time} IST · {story.read}
            </span>
          </p>
          <span className="kicker story-more">CONTINUE READING →</span>
        </Link>
        <div className="panel heat-board hair-left hair-right">
          <div className="kicker pad">
            <span className="story-num">02</span> MARKET HEATMAP
          </div>
          <Heatmap sectors={heat} columns={HOME_HEAT_COLUMNS} compact />
          <Link className="pad kicker" to="/sectors">
            VIEW FULL HEATMAP →
          </Link>
        </div>
        <div className="panel signal-board">
          <p className="kicker pad">
            <span className="story-num">03</span> SIGNALS
          </p>
          <ul className="signals">
            <SignalBar label="MOMENTUM" value={state.signals.momentum} />
            <SignalBar label="VOLUME" value={state.signals.volume} />
            <SignalBar label="VOLATILITY" value={state.signals.volatility} />
            <SignalBar label="NEWS ACTIVITY" value={state.signals.news} />
          </ul>
        </div>
      </section>
      <SiteFoot />
    </>
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
