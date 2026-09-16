import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIndex } from "../engine/market.js";

export function Search({ onClose }) {
  const [q, setQ] = useState("");
  const input = useRef(null);
  const navigate = useNavigate();
  const results = useMemo(() => searchIndex(q), [q]);

  useEffect(() => {
    input.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div
        className="search-box"
        role="dialog"
        aria-modal="true"
        aria-label="Search MARKET/01"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Query"
          placeholder="> SEARCH MARKET/01_"
        />
        {results.map((r, i) => (
          <button
            key={`${r.type}-${r.title}`}
            className="search-hit"
            type="button"
            onClick={() => {
              navigate(r.to);
              onClose();
            }}
          >
            <span className="search-hit-meta">
              {String(i + 1).padStart(2, "0")} / {r.type}
            </span>
            <span className="search-hit-title">{r.title}</span>
          </button>
        ))}
        {q && results.length === 0 ? (
          <p className="pad data">NO SIGNAL MATCHES “{q}”</p>
        ) : null}
      </div>
    </div>
  );
}
