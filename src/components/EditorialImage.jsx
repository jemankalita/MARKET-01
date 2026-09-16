export function EditorialImage({
  src = "/images/bse.jpg",
  alt = "",
  summary,
  className = "",
  fit = "cover",
  position = "center",
}) {
  return (
    <figure className={`editorial ${className}`.trim()}>
      <img src={src} alt={alt} style={{ objectFit: fit, objectPosition: position }} />
      <span className="editorial-grain" aria-hidden="true" />
      {summary ? <figcaption className="editorial-summary">{summary}</figcaption> : null}
    </figure>
  );
}
