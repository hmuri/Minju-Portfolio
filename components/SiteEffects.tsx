'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scroll reveal for [data-reveal] + a click-to-zoom lightbox for images. */
export function SiteEffects() {
  const pathname = usePathname();
  const [zoom, setZoom] = useState<string | null>(null);

  // Scroll reveal: elements already on screen at load are never hidden.
  useEffect(() => {
    if (reduced()) return;
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove('reveal-pending');
        io.unobserve(e.target);
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    const scan = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        if (el.dataset.revealed) return;
        el.dataset.revealed = '1';
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        el.classList.add('reveal-pending');
        requestAnimationFrame(() => el.classList.add('reveal-anim'));
        io.observe(el);
      });
    };
    scan();
    // Pick up sections that mount later (e.g. MONOV tab panels).
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);

  // Lightbox: click any filled image.
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
