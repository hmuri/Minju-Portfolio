'use client';

import { useEffect, useRef } from 'react';

/** Autoplay / muted / loop video that stays paused when reduced motion is on. */
export function AutoVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause();
    else v.play().catch(() => {});
  }, []);
  return <video ref={ref} src={src} aria-label={label} muted loop playsInline controls preload="metadata" />;
}
