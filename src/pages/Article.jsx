import { SiteFoot } from "./Home.jsx";

export function Article() {
  return (
    <>
      <p className="pad demo-flag">MARKET/01 / ANALYSIS · 16 SEP 2026 · 06 MIN READ</p>
      <section className="article-hero">
        <div className="pad-l hair-right">
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 96px)", margin: 0 }}>
            THE NEXT
            <br />
            MARKET
            <br />
            <span className="sleeps">CYCLE?</span>
          </h1>
          <p style={{ maxWidth: "36ch" }}>
            As global markets signal recovery, investors ask — is this the beginning of a new era?
          </p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="duotone city" />
          <div className="red-slash" />
        </div>
      </section>
      <div className="article-body">
        <aside className="pull hair-right">
          THE NUMBERS TELL ONE STORY.
          <br />
          THE MARKET TELLS ANOTHER.
        </aside>
        <article className="article-copy hair-right">
          <p>
            Most terminals still split the day into three windows: a tape, a headline feed, and a
            chart that pretends those two are unrelated. MARKET/01 is built on the opposite claim.
            A rate comment is not a story sitting beside a candle. It is a signal that should
            rearrange volume, sector heat, and the companies inside that heat.
          </p>
          <p>
            From falling inflation prints to resilient earnings, the demonstration tape in this
            system is internally consistent on purpose. Banking volume does not rise in isolation.
            When the event log fires <em>BANKING VOLUME SURGE DETECTED</em>, the heatmap, the
            private-bank quotes, and NIFTY move together. That coupling is the product.
          </p>
          <p>
            The cycle question is therefore not whether a number is green. It is whether the next
            print confirms the last event, contradicts it, or opens a new chain: event → news →
            volume → price → sector → company. Read the chain. Do not collect the cards.
          </p>
          <p className="demo-flag">All figures on this page are fictional demonstration data.</p>
        </article>
        <aside className="pad kicker">
          HIGHER
          <br />
          IDEAS.
          <br />
          BIGGER
          <br />
          POSSIBILITIES.
        </aside>
      </div>
      <SiteFoot />
    </>
  );
}
