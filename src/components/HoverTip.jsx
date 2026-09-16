export function HoverTip({ summary, children, className = "" }) {
  if (!summary) return children;
  return (
    <span className={`hover-tip ${className}`.trim()}>
      {children}
      <span className="hover-tip-card" role="tooltip">
        {summary}
      </span>
    </span>
  );
}
