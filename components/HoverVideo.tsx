'use client';

import { useRef } from 'react';

export function HoverVideo({ src, poster, label, meta }: { src: string; poster: string; label: string; meta: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <article className="video-card"
      onMouseEnter={() => ref.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = ref.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
      }}>
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" />
      <div className="video-card-meta"><span>{label}</span><span>{meta}</span></div>
    </article>
  );
}
