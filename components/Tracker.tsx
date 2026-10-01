'use client';

/**
 * Visitor tracking: Google Analytics 4 + Microsoft Clarity (IDs in lib/analytics.config.ts).
 *
 * Tracking links:  https://<site>/?from=gscaltex   → every visit from that link is tagged "gscaltex"
 *                  (GA4: user property visitor_from · Clarity: filter by custom tag "from").
 * Exclude yourself: open the site once with ?me  (undo with ?me=0). Stored in this browser only.
 *
 * Events sent: tagged_visit, section_view, image_zoom, video_play, video_sound_on, contact_click, outbound_click.
 * Never runs on localhost or under `next dev`.
 */
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ANALYTICS } from '@/lib/analytics.config';

type Params = Record<string, string | number | undefined>;
type W = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  __mcTrack?: boolean;
};

const OPT_OUT = 'mc-no-track';
const FROM_FIRST = 'mc-from';
const FROM_LAST = 'mc-from-last';

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch {} },
  del(k: string) { try { localStorage.removeItem(k); } catch {} }
};

function enabled() {
  const w = window as W;
  return !!w.__mcTrack;
}

export function track(name: string, params: Params = {}) {
  if (typeof window === 'undefined' || !enabled()) return;
  const w = window as W;
  const p = { page: location.pathname, ...params };
  w.gtag?.('event', name, p);
  w.clarity?.('event', name);
}

function addScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadGA(id: string, from: string | null) {
  const w = window as W;
  w.dataLayer = w.dataLayer || [];
  // gtag must push the real `arguments` object
  // eslint-disable-next-line prefer-rest-params
  w.gtag = function gtag() { w.dataLayer!.push(arguments); };
  w.gtag('js', new Date());
  w.gtag('config', id, from ? { user_properties: { visitor_from: from } } : {});
  addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function loadClarity(id: string) {
  const w = window as W & { clarity?: { q?: unknown[] } };
  // Same stub as Clarity's official snippet: queue calls until the script arrives
  w.clarity = w.clarity || function clarity() {
    const c = w.clarity as unknown as { q?: unknown[] };
    // eslint-disable-next-line prefer-rest-params
    (c.q = c.q || []).push(arguments);
  };
  addScript(`https://www.clarity.ms/tag/${encodeURIComponent(id)}`);
}

function cleanFrom(v: string) {
  return v.trim().toLowerCase().replace(/[^0-9a-z가-힣_-]/g, '').slice(0, 40);
}

/** Read and strip ?from= / ?me from the address bar. */
function readParams() {
  const url = new URL(location.href);
  let changed = false;

  if (url.searchParams.has('me')) {
    if (url.searchParams.get('me') === '0') store.del(OPT_OUT);
    else store.set(OPT_OUT, '1');
    url.searchParams.delete('me');
    changed = true;
  }

  let from: string | null = null;
  const raw = url.searchParams.get('from');
  if (raw !== null) {
    from = cleanFrom(raw) || null;
    url.searchParams.delete('from');
    changed = true;
  }

  if (changed) history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  return from;
}

function sectionName(el: Element) {
  const h = el.querySelector('.project-title, .step-label, h2, h1');
  return (h?.textContent || el.id || '').replace(/\s+/g, ' ').trim().slice(0, 60);
}

export function Tracker() {
  const pathname = usePathname();

  // Boot once
  useEffect(() => {
    const w = window as W;
    const fromParam = readParams();
    const local = /^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname);
    if (process.env.NODE_ENV !== 'production' || local) return;
    if (store.get(OPT_OUT)) return;
    const { gaId, clarityId } = ANALYTICS;
    if (!gaId && !clarityId) return;

    if (fromParam) {
      if (!store.get(FROM_FIRST)) store.set(FROM_FIRST, fromParam);
      store.set(FROM_LAST, fromParam);
    }
    const from = fromParam || store.get(FROM_LAST);

    w.__mcTrack = true;
    if (gaId) loadGA(gaId, from);
    if (clarityId) loadClarity(clarityId);
    if (from) {
      w.clarity?.('set', 'from', from);
      const first = store.get(FROM_FIRST);
      if (first && first !== from) w.clarity?.('set', 'from_first', first);
    }
    if (fromParam) track('tagged_visit', { from: fromParam });

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const img = t?.closest?.('img[data-zoom]') as HTMLImageElement | null;
      if (img) { track('image_zoom', { item: img.alt }); return; }
      const a = t?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      if (a.href.startsWith('mailto:')) track('contact_click', { item: a.href.slice(7) });
      else if (a.host && a.host !== location.host) track('outbound_click', { url: a.href });
    };
    const videoName = (v: HTMLVideoElement) => v.getAttribute('aria-label') || v.currentSrc;
    const onPlay = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      if (v.tagName !== 'VIDEO') return;
      // Autoplaying videos start on their own; only count plays after that first one.
      if (v.hasAttribute('data-auto') && !v.dataset.autoSeen) { v.dataset.autoSeen = '1'; return; }
      track('video_play', { item: videoName(v) });
    };
    const onVolume = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      if (v.tagName !== 'VIDEO' || v.muted || v.dataset.soundSeen) return;
      v.dataset.soundSeen = '1';
      track('video_sound_on', { item: videoName(v) });
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('play', onPlay, true);
    document.addEventListener('volumechange', onVolume, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('play', onPlay, true);
      document.removeEventListener('volumechange', onVolume, true);
    };
  }, []);

  // Which projects / steps people actually reach, once per page view
  useEffect(() => {
    if (!enabled()) return;
    const seen = new Set<string>();
    const io = new IntersectionObserver(entries => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const name = sectionName(en.target);
        io.unobserve(en.target);
        if (!name || seen.has(name)) continue;
        seen.add(name);
        track('section_view', { section: name });
      }
    }, { threshold: 0.35 });
    const id = window.setTimeout(() => {
      document.querySelectorAll('main .project, main .step, main .work').forEach(el => io.observe(el));
    }, 300);
    return () => { window.clearTimeout(id); io.disconnect(); };
  }, [pathname]);

  return null;
}
