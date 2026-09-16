import { EditorialImage } from "../components/EditorialImage.jsx";
import { SiteFoot } from "./Home.jsx";

const TAKES = [
  "Inflation is cooling without a hard stop in demand.",
  "Credit and banking ledgers are carrying the tape.",
  "Tech and energy are the two confirmation sectors to watch.",
  "One missed print can still reverse the chain.",
];

export function Article() {
  return (
    <>
      <p className="pad kicker">NEWS / GLOBAL /</p>
      <section className="article-hero">
        <div className="pad-l hair-right">
          <h1 className="display article-display">
            THE NEXT
            <br />
            MARKET
            <br />
            <span className="sleeps">CYCLE?</span>
          </h1>
          <p className="article-lede">
            As global markets signal recovery, investors ask — is this the beginning of a new era?
          </p>
          <p className="meta">MARKET/01 RESEARCH · 16 SEP 2026 · 06 MIN READ</p>
        </div>
        <div className="hero-media">
          <EditorialImage src="/images/bse.jpg" alt="Financial district towers" position="center top" />
        </div>
      </section>
      <div className="article-body">
        <aside className="pull hair-right">
          THE NUMBERS
          <br />
          TELL ONE STORY.
          <br />
          THE MARKET
          <br />
          TELLS ANOTHER.
        </aside>
        <article className="article-copy hair-right">
          <p>
            From falling inflation to resilient corporate earnings, the global economy is showing
            signs of a structural shift. That risks remain — and history reminds us that markets are
            never linear.
          </p>
          <p>
            Most terminals still split the day into three windows: a tape, a headline feed, and a
            chart that pretends those two are unrelated. MARKET/01 is built on the opposite claim.
            A rate comment is not a story sitting beside a candle. It is a signal that should
            rearrange volume, sector heat, and the companies inside that heat.
          </p>
          <p>
            When the event log fires BANKING VOLUME SURGE DETECTED, the heatmap, the private-bank
            quotes, and NIFTY move together. That coupling is the product. Read the chain. Do not
            collect the cards.
          </p>
        </article>
        <aside className="takes">
          <p className="kicker">HIGHER IDEAS. BIGGER POSSIBILITIES.</p>
          <p className="kicker" style={{ marginTop: 24 }}>
            KEY TAKEAWAYS
          </p>
          <ol>
            {TAKES.map((t, i) => (
              <li key={t}>
                <span className="data">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <SiteFoot />
    </>
  );
}
