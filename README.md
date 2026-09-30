# Minju-Portfolio

Portfolio site of Minju Choi — Creative Technologist · AI · Content · Film.
Built with Next.js 15 (App Router) + React 19 + TypeScript. Current version: **v4 (final)** — rebuilt from `design_handoff_portfolio_final`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages
- `/` — Home (name · credits · work index · contact)
- `/work/monov` — MONOV (credits · INPUT → PRODUCT SHOT · UGC · IMAGE → VIDEO · WORKSPACE · EDIT · gallery)
- `/work/commercial` — Commercial (OFF BEAUTY · M.E.N.D. · EASYCHECK)
- `/work/film-stage` — Film & Stage (filmography · 천국 · THE SUN · 백화 · 윤슬)

Writing rule: show the work first; text only as credits (ROLE / FORMAT / MODELS …) and short tags. No problem/decision/role paragraphs.

## Components
- `Nav` — fixed 60px nav, active link purple, MENU toggle under 560px
- `SiteEffects` — click-to-zoom lightbox for images (no scroll/entrance animation)
- `Tile` — gallery tile (`next/image` fill), optional `caption`. No `src` = placeholder tile waiting for an image
- `Project` / `Credits` / `Step` — title + credit list + work; MONOV step header with tags
- `AutoVideo`, `YouTube`, `NextLink`, `ContactFooter`

Design tokens live at the top of `app/globals.css` (paper / ink / purple / body / muted only). Radius 0, no shadows, no animation.

## Still to fill
- Empty tiles (placeholders): MONOV input/output pairs, UGC results, generated videos, fashion/living/poster outputs · OFF BEAUTY AI frames · M.E.N.D. frame · EASYCHECK storyboard/on-set · THE SUN performance/rehearsal · 백화 poster/stills · 윤슬 stills
- MONOV gallery tiles 1, 2, 5 load from `storage.googleapis.com/monov-prod-public-cache/...`. Download them into `public/assets/monov/outputs/` and update `app/work/monov/page.tsx` before deploying.
