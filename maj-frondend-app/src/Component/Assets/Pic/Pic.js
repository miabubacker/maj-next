/** Renders an <img> when `src` exists, otherwise a gradient placeholder block. */
export default function Pic({ src, alt = '', className = '', placeholderClass = '' }) {
  if (src) return <img src={src} alt={alt} className={className} loading="lazy" />;
  return (
    <div
      className={`ph ${placeholderClass} ${className}`}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
    />
  );
}
