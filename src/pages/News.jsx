import { Link } from "react-router-dom";
import { EditorialImage } from "../components/EditorialImage.jsx";
import { PageTabs } from "../components/PageTabs.jsx";
import { SiteFoot } from "./Home.jsx";
import { ARTICLES } from "../engine/seed.js";

const TABS = ["TOP STORIES", "INDIA", "GLOBAL", "BUSINESS", "TECH", "OPINION"];
const LATEST = [
  { t: "09:44", text: "Fed officials signal patience on rates." },
  { t: "09:31", text: "Banking volume surge detected." },
  { t: "09:18", text: "Reliance announces energy capex." },
  { t: "08:54", text: "Tech stocks regain momentum after selling." },
  { t: "08:41", text: "RBI keeps policy unchanged." },
  { t: "08:22", text: "Gold prices retreat from record highs." },
];

export function News() {
  const items = ARTICLES.filter((a) => a.kind === "NEWS").slice(0, 3);

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
      <PageTabs items={TABS} active="TOP STORIES" />
      <div className="news-row">
        <div>
          {items.map((a) => (
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
                <EditorialImage src={a.image} alt="" className="news-thumb" />
              ) : null}
            </Link>
          ))}
        </div>
        <aside className="latest">
          <p className="pad kicker">LATEST</p>
          {LATEST.map((row, i) => (
            <p key={row.t} className="latest-row">
              <span className="meta">{row.t}</span>
              <span>{row.text}</span>
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
