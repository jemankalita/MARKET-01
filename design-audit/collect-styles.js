(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      sel,
      tag: el.tagName,
      className: String(el.className),
      text: (el.innerText || "").slice(0, 90).replace(/\n/g, " | "),
      fontFamily: cs.fontFamily,
      fontWeight: cs.fontWeight,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      textTransform: cs.textTransform,
      color: cs.color,
      background: cs.backgroundColor,
      borderTop: cs.borderTop,
      borderRight: cs.borderRight,
      borderBottom: cs.borderBottom,
      borderLeft: cs.borderLeft,
      borderRadius: cs.borderRadius,
      boxShadow: cs.boxShadow,
      padding: cs.padding,
      margin: cs.margin,
      gap: cs.gap,
      outline: cs.outline,
      width: Math.round(r.width),
      height: Math.round(r.height),
      x: Math.round(r.x),
      y: Math.round(r.y),
    };
  };

  const colorSet = new Map();
  const radii = [];
  const shadows = [];
  const borderWeights = new Map();
  const fonts = new Set();
  const typeMap = new Map();
  const spacingSet = new Set();

  const addColor = (value, where) => {
    if (!value || value === "rgba(0, 0, 0, 0)" || value === "transparent" || value === "none") return;
    if (!colorSet.has(value)) colorSet.set(value, new Set());
    colorSet.get(value).add(where);
  };

  document.querySelectorAll("body *").forEach((el) => {
    const cs = getComputedStyle(el);
    const cls = (el.className && typeof el.className === "string" ? el.className.split(" ")[0] : el.tagName) || el.tagName;
    addColor(cs.color, "text:" + cls);
    addColor(cs.backgroundColor, "bg:" + cls);
    addColor(cs.borderTopColor, "border:" + cls);
    addColor(cs.outlineColor, "outline:" + cls);
    fonts.add(cs.fontFamily);
    const typeKey = [cs.fontFamily.split(",")[0].replace(/"/g, ""), cs.fontWeight, cs.fontSize, cs.lineHeight, cs.letterSpacing, cs.textTransform].join(" | ");
    if (!typeMap.has(typeKey)) typeMap.set(typeKey, cls);
    ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "marginTop", "gap"].forEach((p) => {
      const v = cs[p];
      if (v && v !== "0px" && v !== "normal") spacingSet.add(p + ":" + v);
    });
    if (cs.borderRadius && cs.borderRadius !== "0px") {
      radii.push({ el: el.tagName + "." + cls, radius: cs.borderRadius, w: el.offsetWidth, h: el.offsetHeight });
    }
    if (cs.boxShadow && cs.boxShadow !== "none") {
      shadows.push({ el: "." + cls, shadow: cs.boxShadow });
    }
    ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"].forEach((p) => {
      const w = cs[p];
      if (w && w !== "0px") borderWeights.set(w, (borderWeights.get(w) || 0) + 1);
    });
  });

  document.querySelectorAll("svg [fill], svg [stroke], [fill], [stroke]").forEach((el) => {
    addColor(el.getAttribute("fill") || "", "svg-fill");
    addColor(el.getAttribute("stroke") || "", "svg-stroke");
  });

  const selectors = [
    ".brand",
    ".nav",
    ".nav-links a",
    ".nav-search",
    ".nav-meta",
    ".nav-live",
    ".live-dot",
    ".home-kicker",
    ".hero",
    ".hero-copy h1",
    ".sleeps",
    ".hero-sub",
    ".cta",
    ".media-cap",
    ".media-quote",
    ".indices-strip a",
    ".figure",
    ".move-chg",
    ".panel-title",
    ".story-lede",
    ".story-body",
    ".kicker",
    ".heatmap",
    ".heat-cell",
    ".bar",
    ".bar-fill",
    ".event-log",
    ".footer-note",
    ".page",
    ".page-head h1",
    ".page-tab",
    ".page-tab.on",
    ".table",
    ".table th",
    ".table td",
    ".company-name",
    ".quote-num",
    ".quote-move",
    ".metric span",
    ".metric .figure",
    ".chart-label",
    ".news-story h2",
    ".news-item h2",
    ".article-display",
    ".article-copy",
    ".article-lede",
    ".pull",
    ".global-title",
    ".global-tag",
    ".index-board-head",
    ".index-row",
    ".index-price",
    ".clock-num",
    ".clock-tz",
    ".city-card",
    ".session-desk",
    ".search-box",
    ".search-box input",
    ".trace-box",
    ".live-pill .live-dot",
    ".sentiment strong",
    ".demo-flag",
    ".latest-row",
    ".takes li",
  ];

  const heat = [...document.querySelectorAll(".heat-cell")].map((el) => ({
    bg: getComputedStyle(el).backgroundColor,
    color: getComputedStyle(el).color,
    text: el.innerText.replace(/\n/g, " | ").slice(0, 48),
  }));

  const colors = {};
  for (const [k, v] of colorSet) colors[k] = [...v].slice(0, 8);

  return {
    href: location.href,
    inner: { w: innerWidth, h: innerHeight, dpr: devicePixelRatio },
    scroll: { w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight },
    samples: Object.fromEntries(selectors.map((s) => [s, pick(s)])),
    colors,
    radii: radii.slice(0, 40),
    shadows,
    borderWeights: Object.fromEntries(borderWeights),
    fonts: [...fonts],
    typeSamples: [...typeMap.entries()].slice(0, 80),
    spacing: [...spacingSet].sort(),
    heat,
  };
})()
