'use client';

/**
 * Local edit mode only (rendered under `next dev`). Sits on top of a Tile:
 * click or drop a file to replace that slot's image.
 */
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import './edit.css';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/gif,image/avif,video/mp4,video/webm,video/quicktime';

function parseRatio(r?: string) {
  if (!r) return null;
  const [a, b] = r.split('/').map(Number);
  return b ? a / b : a || null;
}

async function fileRatio(file: File): Promise<number | null> {
  if (!file.type.startsWith('image/')) return null;
  try {
    const bmp = await createImageBitmap(file);
    const r = bmp.width / bmp.height;
    bmp.close();
    return r;
  } catch {
    return null;
  }
}

function fmt(r: number) {
  return r >= 1 ? `${r.toFixed(2)} : 1` : `1 : ${(1 / r).toFixed(2)}`;
}

export function EditSlot({ slot, src, label, ratio }: { slot: string; src: string; label: string; ratio?: string }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);
  const [note, setNote] = useState<{ text: string; tone: 'ok' | 'warn' | 'err' } | null>(null);

  const flash = (text: string, tone: 'ok' | 'warn' | 'err', ms = 5000) => {
    setNote({ text, tone });
    window.setTimeout(() => setNote(n => (n?.text === text ? null : n)), ms);
  };

  async function upload(file: File) {
    setBusy(true);
    setNote(null);
    try {
      const target = parseRatio(ratio);
      const actual = await fileRatio(file);
      const fd = new FormData();
      fd.append('slot', slot);
      fd.append('file', file);
      const res = await fetch('/api/dev/images', { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `업로드 실패 (${res.status})`);
      router.refresh();
      if (target && actual && Math.abs(actual / target - 1) > 0.12) {
        flash(`사진 ${fmt(actual)} · 칸 ${ratio} → 가장자리가 잘려 보여요`, 'warn', 8000);
      } else {
        flash(data.resized ? '교체 완료 · 큰 사진이라 줄여서 저장' : '교체 완료', 'ok');
      }
    } catch (e) {
      flash(e instanceof Error ? e.message : '업로드 실패', 'err', 8000);
    } finally {
      setBusy(false);
    }
  }

  async function clear(e: React.MouseEvent) {
    e.stopPropagation();
    setBusy(true);
    try {
      const res = await fetch(`/api/dev/images?slot=${encodeURIComponent(slot)}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('비우기 실패');
      router.refresh();
      flash('비웠어요', 'ok');
    } catch (err) {
      flash(err instanceof Error ? err.message : '비우기 실패', 'err');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className={['edit-slot', over ? 'is-over' : '', busy ? 'is-busy' : ''].filter(Boolean).join(' ')}
      data-empty={src ? undefined : ''}
      role="button"
      tabIndex={0}
      aria-label={`${label} 이미지 교체`}
      onClick={() => !busy && input.current?.click()}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.current?.click(); } }}
      onDragEnter={e => { e.preventDefault(); setOver(true); }}
      onDragOver={e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }}
      onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOver(false); }}
      onDrop={e => {
        e.preventDefault();
        e.stopPropagation();
        setOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f) upload(f);
      }}
    >
      <span className="edit-chip">{slot}{ratio ? ` · ${ratio}` : ''}</span>
      <span className="edit-cta">{busy ? '올리는 중…' : src ? '클릭 / 드롭해서 교체' : '클릭 / 드롭해서 추가'}</span>
      {src && !busy && (
        <button type="button" className="edit-clear" onClick={clear}>비우기</button>
      )}
      {note && <span className={`edit-note ${note.tone}`}>{note.text}</span>}
      <input
        ref={input}
        type="file"
        accept={ACCEPT}
        hidden
        onClick={e => e.stopPropagation()}
        onChange={e => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (f) upload(f);
        }}
      />
    </div>
  );
}
