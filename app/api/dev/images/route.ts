/**
 * Local-only image swap API used by edit mode (npm run edit).
 * Saves the uploaded file into public/assets/<page>/ and points the slot in
 * content/images.json at it. Returns 404 outside `next dev`, so it does nothing
 * on the deployed site.
 */
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, 'content', 'images.json');
const PUBLIC = path.join(ROOT, 'public');
const TRASH = path.join(ROOT, '.replaced');
const MAX_EDGE = 2800;

const IMAGE_EXT: Record<string, string> = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/avif': 'avif'
};
const VIDEO_EXT: Record<string, string> = {
  'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov', 'video/x-m4v': 'm4v'
};

const isDev = () => process.env.NODE_ENV === 'development';
const notFound = () => new NextResponse('Not found', { status: 404 });

async function readManifest(): Promise<Record<string, string>> {
  return JSON.parse(await fs.readFile(MANIFEST, 'utf8'));
}

async function writeManifest(m: Record<string, string>) {
  // Keep a blank line between page groups so the file stays easy to read by hand.
  const keys = Object.keys(m);
  const lines = keys.map((k, i) => {
    const prev = keys[i - 1];
    const gap = prev && prev.split('/')[0] !== k.split('/')[0] ? '\n' : '';
    return `${gap}  ${JSON.stringify(k)}: ${JSON.stringify(m[k])}`;
  });
  await fs.writeFile(MANIFEST, `{\n${lines.join(',\n')}\n}\n`);
}

/** Move a file we no longer use to .replaced/ (git-ignored) unless another slot still points at it. */
async function retire(oldSrc: string, manifest: Record<string, string>) {
  if (!oldSrc.startsWith('/assets/')) return;
  if (Object.values(manifest).includes(oldSrc)) return;
  const from = path.join(PUBLIC, oldSrc);
  const to = path.join(TRASH, oldSrc);
  try {
    await fs.mkdir(path.dirname(to), { recursive: true });
    await fs.rename(from, to);
  } catch {
    /* already gone */
  }
}

function slotFileBase(slot: string) {
  const [page, ...rest] = slot.split('/');
  const name = rest.join('-').replace(/[^a-z0-9-]/gi, '-') || 'image';
  return { dir: page.replace(/[^a-z0-9-]/gi, '-'), name };
}

export async function GET() {
  if (!isDev()) return notFound();
  return NextResponse.json(await readManifest());
}

export async function POST(req: Request) {
  if (!isDev()) return notFound();

  const form = await req.formData();
  const slot = String(form.get('slot') || '');
  const file = form.get('file');
  const manifest = await readManifest();

  if (!(slot in manifest)) return NextResponse.json({ error: `없는 슬롯: ${slot}` }, { status: 400 });
  if (!(file instanceof File)) return NextResponse.json({ error: '파일이 없어요' }, { status: 400 });

  const type = file.type || '';
  const ext = IMAGE_EXT[type] || VIDEO_EXT[type];
  if (!ext) {
    const hint = /heic|heif/i.test(type + file.name) ? ' HEIC는 JPG로 내보낸 뒤 올려주세요.' : '';
    return NextResponse.json({ error: `지원하지 않는 형식 (${type || file.name}).${hint}` }, { status: 415 });
  }

  let buf: Buffer = Buffer.from(await file.arrayBuffer());
  let resized = false;

  // Shrink very large photos so the repo and the deploy stay light. Skips GIF / video.
  if (IMAGE_EXT[type] && ext !== 'gif') {
    try {
      const sharp = (await import('sharp')).default;
      const img = sharp(buf, { failOn: 'none' }).rotate();
      const meta = await img.metadata();
      if ((meta.width || 0) > MAX_EDGE || (meta.height || 0) > MAX_EDGE) {
        let pipeline = img.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });
        if (ext === 'jpg') pipeline = pipeline.jpeg({ quality: 88, mozjpeg: true });
        else if (ext === 'png') pipeline = pipeline.png({ compressionLevel: 9 });
        else if (ext === 'webp') pipeline = pipeline.webp({ quality: 88 });
        buf = await pipeline.toBuffer();
        resized = true;
      }
    } catch {
      /* sharp not available: keep the original file */
    }
  }

  const { dir, name } = slotFileBase(slot);
  const fileName = `${name}-${Date.now().toString(36)}.${ext}`;
  const rel = `/assets/${dir}/${fileName}`;
  await fs.mkdir(path.join(PUBLIC, 'assets', dir), { recursive: true });
  await fs.writeFile(path.join(PUBLIC, rel), buf);

  const old = manifest[slot];
  manifest[slot] = rel;
  await writeManifest(manifest);
  if (old) await retire(old, manifest);

  return NextResponse.json({ slot, src: rel, bytes: buf.length, resized });
}

/** Empty a slot (back to the placeholder). */
export async function DELETE(req: Request) {
  if (!isDev()) return notFound();
  const slot = new URL(req.url).searchParams.get('slot') || '';
  const manifest = await readManifest();
  if (!(slot in manifest)) return NextResponse.json({ error: `없는 슬롯: ${slot}` }, { status: 400 });
  const old = manifest[slot];
  manifest[slot] = '';
  await writeManifest(manifest);
  if (old) await retire(old, manifest);
  return NextResponse.json({ slot, src: '' });
}
