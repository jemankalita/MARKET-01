import { useMarket } from "../context/MarketProvider.jsx";

export function EventLog() {
  const { state, openTrace, streamOpen, closeStream } = useMarket();
  if (!streamOpen) return null;

  return (
    <aside className="event-log" aria-label="Data stream">
      <div className="event-log-head">
        <p className="kicker">
          {state.live ? "DATA STREAM · LIVE" : "EVENT LOG"} · DEMO
        </p>
        <button type="button" className="event-log-close" onClick={closeStream} aria-label="Hide data stream">
          HIDE
        </button>
      </div>
      {state.events.length === 0 ? (
        <p className="event-log-empty">No events yet. Keep LIVE on to fill the tape.</p>
      ) : (
        state.events.map((ev) => (
          <button key={ev.seq} type="button" onClick={() => openTrace(ev)}>
            {ev.time}
            <br />
            &gt; {ev.label}
          </button>
        ))
      )}
    </aside>
  );
}

export function EventTrace() {
  const { trace, setTrace } = useMarket();
  if (!trace) return null;

  return (
    <div className="overlay" onClick={() => setTrace(null)} role="presentation">
      <div
        className="trace-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trace-title"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="kicker">EVENT / {String(trace.seq).padStart(3, "0")}</p>
        <h2 id="trace-title" className="display" style={{ fontSize: 40, margin: "8px 0 16px" }}>
          {trace.label}
        </h2>
        <p className="kicker">IMPACT</p>
        <div className="trace-impacts">
          {trace.impacts.map((i) => (
            <div key={`${i.group}-${i.key}`}>
              {i.key.padEnd ? i.key : i.key}{" "}
              <span className={i.delta < 0 ? "tone-neg" : ""}>
                {i.delta > 0 ? "↗" : i.delta < 0 ? "↘" : "—"} {i.delta > 0 ? "+" : ""}
                {i.delta.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
        <p className="kicker">RELATED SIGNALS</p>
        <p className="data">
          {String(trace.related.news).padStart(2, "0")} NEWS STORIES
          <br />
          {String(trace.related.companies).padStart(2, "0")} COMPANIES
          <br />
          {String(trace.related.sectors).padStart(2, "0")} SECTOR
        </p>
        <button className="cta" type="button" style={{ marginTop: 16 }} onClick={() => setTrace(null)}>
          Close trace
        </button>
      </div>
    </div>
  );
}
