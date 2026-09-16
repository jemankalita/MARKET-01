import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { istStamp } from "../engine/format.js";
import {
  applyEvent,
  createMarketState,
  pickEvent,
  tickMarket,
} from "../engine/market.js";

const MarketContext = createContext(null);

export function MarketProvider({ children }) {
  const [state, setState] = useState(() => createMarketState());
  const [searchOpen, setSearchOpen] = useState(false);
  const [trace, setTrace] = useState(null);
  const liveRef = useRef(false);

  useEffect(() => {
    liveRef.current = state.live;
  }, [state.live]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!liveRef.current) {
        setState((s) => ({ ...s, clock: istStamp() }));
        return;
      }
      setState((s) => {
        let next = tickMarket(s);
        if (Math.random() < 0.18) {
          next = applyEvent(next, pickEvent().id);
        }
        return next;
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  const value = useMemo(
    () => ({
      state,
      searchOpen,
      setSearchOpen,
      trace,
      setTrace,
      toggleLive: () => setState((s) => ({ ...s, live: !s.live })),
      fireEvent: (id) => setState((s) => applyEvent(s, id)),
      openTrace: (event) => setTrace(event),
    }),
    [state, searchOpen, trace],
  );

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used within MarketProvider");
  return ctx;
}
