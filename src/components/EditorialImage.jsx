export function EditorialImage({
  src = "/images/bse.jpg",
  alt = "",
  className = "",
  fit = "cover",
  position = "center",
}) {
  return (
    <figure className={`editorial ${className}`}>
      <img src={src} alt={alt} style={{ objectFit: fit, objectPosition: position }} />
      <span className="editorial-grain" aria-hidden="true" />
    </figure>
  );
}
