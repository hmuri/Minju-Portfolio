'use client';

/**
 * Local edit mode switch (only rendered under `next dev`).
 * Button bottom-right, or press E. When on, every image slot shows a drop zone.
 */
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './edit.css';

const KEY = 'mc-edit-mode';

export function EditBar() {
  const pathname = usePathname();
  const [on, setOn] = useState(false);
  const [counts, setCounts] = useState({ total: 0, empty: 0 });

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch {}
    setOn(stored === null ? process.env.NEXT_PUBLIC_EDIT === '1' : stored === '1');
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-edit', on);
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch {}
  }, [on]);

  // Keyboard toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, [contenteditable]')) return;
      if (e.key === 'e' || e.key === 'E' || e.key === 'ㄷ') setOn(v => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // A file dropped outside a slot should not make the browser open it.
  useEffect(() => {
    if (!on) return;
    const stop = (e: DragEvent) => e.preventDefault();
    window.addEventListener('dragover', stop);
    window.addEventListener('drop', stop);
    return () => { window.removeEventListener('dragover', stop); window.removeEventListener('drop', stop); };
  }, [on]);

  // Count slots on this page
  useEffect(() => {
    const count = () => {
      const all = document.querySelectorAll('.edit-slot');
      const empty = document.querySelectorAll('.edit-slot[data-empty]');
      setCounts({ total: all.length, empty: empty.length });
    };
    count();
    const mo = new MutationObserver(count);
    mo.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['data-empty'] });
    return () => mo.disconnect();
  }, [pathname]);

  return (
    <div className="edit-bar" data-on={on ? '' : undefined}>
      {on && <span className="edit-bar-info">이 페이지 {counts.total}칸 · 빈 칸 {counts.empty}</span>}
      <button type="button" onClick={() => setOn(v => !v)} title="E 키로도 켜고 끌 수 있어요">
        {on ? 'EDIT ON' : 'EDIT'}
      </button>
    </div>
  );
}
