import { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
import { Search } from "./components/Search.jsx";
import { EventTrace } from "./components/EventTrace.jsx";
import { EventLog } from "./components/EventLog.jsx";
import { Home } from "./pages/Home.jsx";
import { Markets } from "./pages/Markets.jsx";
import { Company } from "./pages/Company.jsx";
import { News } from "./pages/News.jsx";
import { Article } from "./pages/Article.jsx";
import { Global } from "./pages/Global.jsx";
import { Sectors } from "./pages/Sectors.jsx";
import { useMarket } from "./context/MarketProvider.jsx";

function PageFrame({ children }) {
  const location = useLocation();
  const reduced = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  return (
    <main
      key={location.pathname}
      className={reduced ? "page" : "page page-enter"}
      id="main"
    >
      {children}
    </main>
  );
}

export default function App() {
  const { searchOpen, setSearchOpen } = useMarket();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  return (
    <div className="app-sheet">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav onSearch={() => setSearchOpen(true)} />
      <PageFrame>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/company/:slug" element={<Company />} />
          <Route path="/company" element={<Navigate to="/company/reliance" replace />} />
          <Route path="/news" element={<News />} />
          <Route path="/analysis" element={<Article />} />
          <Route path="/global" element={<Global />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageFrame>
      <EventLog />
      {searchOpen ? <Search onClose={() => setSearchOpen(false)} /> : null}
      <EventTrace />
    </div>
  );
}