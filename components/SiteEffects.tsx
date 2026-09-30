'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/** Click-to-zoom lightbox for images. */
export function SiteEffects() {
  const pathname = usePathname();
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement | null)?.closest?.('img[data-zoom]') as HTMLImageElement | null;
      if (!img) return;
      e.preventDefault();
      setZoom(img.dataset.zoom || img.currentSrc || img.src);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoom(null); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => { setZoom(null); }, [pathname]);

  if (!zoom) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="이미지 크게 보기" onClick={() => setZoom(null)}>
      <img src={zoom} alt="" />
      <div className="hint">ESC · CLICK TO CLOSE</div>
    </div>
  );
}
