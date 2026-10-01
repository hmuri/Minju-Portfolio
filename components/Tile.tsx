import Image from 'next/image';
import images from '@/content/images.json';
import { AutoVideo } from '@/components/AutoVideo';

const IMAGES = images as Record<string, string>;
// Edit overlay only exists under `next dev`; the production bundle never includes it.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const EditSlot: typeof import('@/components/edit/EditSlot').EditSlot | null = process.env.NODE_ENV === 'development' ? require('@/components/edit/EditSlot').EditSlot : null;
const VIDEO_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;

type TileProps = {
  /** Key in content/images.json. The image itself is managed there (npm run edit). */
  slot?: string;
  /** Direct image path, only for one-off tiles without a slot. */
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

export function Tile({ slot, src: srcProp, label, caption, captionAccent, ratio, span, rows2, mobileRatio, contain, sizes = '(max-width: 900px) 100vw, 50vw', priority, className = '' }: TileProps) {
  const src = slot && slot in IMAGES ? IMAGES[slot] : srcProp;
  const place: React.CSSProperties = {
    gridColumn: span ? `span ${span}` : undefined,
    gridRow: rows2 ? 'span 2' : undefined
  };
  const spanCls = [span ? `span-${span}` : '', rows2 ? 'rows-2' : ''].filter(Boolean).join(' ');

  let media: React.ReactNode;
  if (!src) media = <div className="tile-empty" aria-label={`${label} (이미지 준비 중)`}>{label}</div>;
  else if (VIDEO_RE.test(src)) media = <AutoVideo src={src} label={label} />;
  else media = <Image src={src} alt={label} fill sizes={sizes} priority={priority} data-zoom={src} />;

  const inner = (
    <div
      className={['tile', contain ? 'contain' : '', caption ? '' : spanCls, caption ? '' : className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio, ...(caption ? {} : place), ...({ '--ar-m': mobileRatio } as React.CSSProperties) }}
    >
      {media}
      {EditSlot && slot && <EditSlot slot={slot} src={src || ''} label={label} ratio={ratio || mobileRatio} />}
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
