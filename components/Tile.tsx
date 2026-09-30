import Image from 'next/image';

type TileProps = {
  /** Image path. Leave empty for slots the owner still has to fill. */
  src?: string;
  /** Alt text, and the placeholder caption when there is no image. */
  label: string;
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

export function Tile({ src, label, ratio, span, rows2, mobileRatio, contain, sizes = '(max-width: 900px) 100vw, 50vw', priority, className = '' }: TileProps) {
  const cls = [
    'tile',
    span ? `span-${span}` : '',
    rows2 ? 'rows-2' : '',
    contain ? 'contain' : '',
    className
  ].filter(Boolean).join(' ');
  const style: React.CSSProperties & Record<string, string | undefined> = {
    aspectRatio: ratio,
    gridColumn: span ? `span ${span}` : undefined,
    gridRow: rows2 ? 'span 2' : undefined,
    '--ar-m': mobileRatio
  };
  return (
    <div className={cls} style={style}>
      {src ? (
        <Image src={src} alt={label} fill sizes={sizes} priority={priority} data-zoom={src} />
      ) : (
        <div className="tile-empty" aria-label={`${label} (이미지 준비 중)`}>{label}</div>
      )}
    </div>
  );
}
