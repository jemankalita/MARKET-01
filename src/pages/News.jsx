import { useState } from "react";
import { Link } from "react-router-dom";
import { EditorialImage } from "../components/EditorialImage.jsx";
import { HoverTip } from "../components/HoverTip.jsx";
import { PageTabs } from "../components/PageTabs.jsx";
import { SiteFoot } from "./Home.jsx";
import { ARTICLES } from "../engine/seed.js";

const TABS = ["TOP STORIES", "INDIA", "GLOBAL", "BUSINESS", "TECH", "OPINION"];

const DESK = {
  "TOP STORIES": null,
  INDIA: ["INDIA"],
  GLOBAL: ["GLOBAL"],
  BUSINESS: ["BUSINESS", "ENERGY"],
  TECH: ["TECH"],
  OPINION: ["OPINION"],
};

const LATEST = [
  { t: "09:44", text: "Fed officials signal patience on rates.", summary: "A shallower path still prices in, but no cut is locked." },
  { t: "09:31", text: "Banking volume surge detected.", summary: "Private-bank names are leading the India bid on volume, not just print." },
  { t: "09:18", text: "Reliance announces energy capex.", summary: "Green hydrogen and solar manufacturing take a larger slice of the book." },
  { t: "08:54", text: "Tech stocks regain momentum after selling.", summary: "AI demand is back on the bid after the last washout." },
  { t: "08:41", text: "RBI keeps policy unchanged.", summary: "Hold, watch the next print — the credit book is still expanding." },
  { t: "08:22", text: "Gold prices retreat from record highs.", summary: "A firmer dollar is taking the edge off the bullion bid." },
];

function storiesFor(tab) {
  const news = ARTICLES.filter((a) => a.kind === "NEWS");
  const kickers = DESK[tab];
  if (!kickers) return news.slice(0, 4);
  return news.filter((a) => kickers.includes(a.kicker));
}

function summaryFor(article) {
  return article.summary || article.lede;
}

export function News() {
  const [tab, setTab] = useState("TOP STORIES");
  const items = storiesFor(tab);

  return (
    <>
      <header className="page-head">
        <h1 className="display">NEWS</h1>
        <p className="aside">
          THE STORIES
          <br />
          BEHIND THE NUMBERS.
        </p>
      </header>
      <PageTabs items={TABS} active={tab} onSelect={setTab} />
      <div className="news-row" role="tabpanel" id={`panel-${tab.replace(/\s+/g, "-")}`} aria-label={tab}>
        <div>
          {items.length === 0 ? (
            <p className="pad">No stories on this desk in the demo book yet.</p>
          ) : (
            items.map((a) => (
              <Link key={a.id} className="news-story" to={a.to}>
                <span className="data story-index">{a.id}</span>
                <div className="news-copy">
                  <h2>{a.title}</h2>
                  <p>{a.lede}</p>
                  <span className="meta">
                    {a.time} / {a.read}
                  </span>
                </div>
                {a.image ? (
                  <EditorialImage src={a.image} alt="" className="news-thumb" summary={summaryFor(a)} />
                ) : null}
                <span className="news-hover-summary">{summaryFor(a)}</span>
              </Link>
            ))
          )}
        </div>
        <aside className="latest">
          <p className="pad kicker">LATEST</p>
          {LATEST.map((row) => (
            <p key={row.t} className="latest-row">
              <span className="meta">{row.t}</span>
              <HoverTip summary={row.summary}>
                <span>{row.text}</span>
              </HoverTip>
            </p>
          ))}
          <Link className="cta latest-cta" to="/analysis">
            VIEW ALL NEWS
          </Link>
        </aside>
      </div>
      <SiteFoot />
    </>
  );
}
