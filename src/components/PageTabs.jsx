export function PageTabs({ items, active, onSelect }) {
  return (
    <div className="page-tabs" role="tablist">
      {items.map((item) => {
        const selected = item === active;
        const id = `tab-${item.replace(/\s+/g, "-")}`;
        const panel = `panel-${item.replace(/\s+/g, "-")}`;
        const className = selected ? "page-tab on" : "page-tab";
        if (onSelect) {
          return (
            <button
              key={item}
              type="button"
              id={id}
              className={className}
              role="tab"
              aria-selected={selected}
              aria-controls={panel}
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          );
        }
        return (
          <span key={item} id={id} className={className} role="tab" aria-selected={selected}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
