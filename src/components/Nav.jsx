import { NavLink } from "react-router-dom";
import { useMarket } from "../context/MarketProvider.jsx";

const LINKS = [
  { to: "/markets", label: "Markets" },
  { to: "/news", label: "News" },
  { to: "/analysis", label: "Analysis" },
  { to: "/sectors", label: "Sectors" },
  { to: "/global", label: "Global" },
];

export function Nav({ onSearch }) {
  const { state, toggleLive } = useMarket();

  return (
    <header className="nav">
      <NavLink className="brand" to="/" end>
        MARKET/01
      </NavLink>
      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to}>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <button className="nav-search" type="button" onClick={onSearch} aria-label="Search MARKET/01">
        <SearchMark />
        <span className="data">/</span>
      </button>
      <div className="nav-meta">
        <span>{state.clock.date}</span>
        <span>{state.clock.time} IST</span>
        <button type="button" onClick={toggleLive} aria-pressed={state.live}>
          <span className={state.live ? "live-dot on" : "live-dot"} /> {state.live ? "LIVE" : "LIVE"}
        </button>
      </div>
    </header>
  );
}

function SearchMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10 L14 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
