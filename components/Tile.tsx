import Image from 'next/image';

type TileProps = {
  /** Image path. Leave empty for slots the owner still has to fill. */
  src?: string;
  /** Alt text, and the placeholder text when there is no image. */
  label: string;
  /** Small caption under the tile, e.g. "INPUT". */
  caption?: string;
  captionAccent?: boolean;
  /** CSS aspect-ratio, e.g. "16/9". Omit for tiles that span two rows. */
  ratio?: string;
  span?: 2 | 3 | 4 | 6;
  rows2?: boolean;
  /** Aspect ratio used on phones for a two-row tile. */
  mobileRatio?: string;
  contain?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Tile({ src, label, caption, captionAccent, ratio, span, rows2, mobileRatio, contain, sizes = '(max-width: 900px) 100vw, 50vw', priority, className = '' }: TileProps) {
  const place: React.CSSProperties = {
    gridColumn: span ? `span ${span}` : undefined,
    gridRow: rows2 ? 'span 2' : undefined
  };
  const spanCls = [span ? `span-${span}` : '', rows2 ? 'rows-2' : ''].filter(Boolean).join(' ');
  const inner = (
    <div
      className={['tile', contain ? 'contain' : '', caption ? '' : spanCls, caption ? '' : className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio, ...(caption ? {} : place), ...({ '--ar-m': mobileRatio } as React.CSSProperties) }}
    >
      {src ? (
        <Image src={src} alt={label} fill sizes={sizes} priority={priority} data-zoom={src} />
      ) : (
        <div className="tile-empty" aria-label={`${label} (이미지 준비 중)`}>{label}</div>
      )}
    </div>
  );
  if (!caption) return inner;
  return (
    <figure className={['captioned', spanCls, className].filter(Boolean).join(' ')} style={place}>
      {inner}
      <figcaption className={`tile-caption${captionAccent ? ' accent' : ''}`}>{caption}</figcaption>
    </figure>
  );
}
