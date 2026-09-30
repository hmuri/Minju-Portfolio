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
- `/` — Home (intro · work index · contact)
- `/work/monov` — MONOV (overview + FOUR DECISIONS · feature tabs · gallery)
- `/work/commercial` — Commercial (OFF BEAUTY · M.E.N.D. · EASYCHECK)
- `/work/film-stage` — Film & Stage (filmography · 천국 · THE SUN · 백화/윤슬)

## Components
- `Nav` — fixed 60px nav, active link purple, MENU toggle under 560px
- `SiteEffects` — scroll reveal for `[data-reveal]` + click-to-zoom lightbox for images
- `Tile` — gallery tile (`next/image` fill). No `src` = placeholder tile waiting for an image
- `CaseBlock` / `AsideItem` / `Spec` / `Tbd` — the case layout: gallery | aside (문제 · 결정 · 역할 …) + spec list
- `NumRow` — numbered rows (FOUR DECISIONS, WHAT I DELIVERED)
- `MonovFeatures` — MONOV overview right column + feature tabs (client state)
- `AutoVideo`, `YouTube`, `NextLink`, `ContactFooter`

Design tokens live at the top of `app/globals.css` (paper / ink / purple / body / muted only). Radius 0, no shadows, no page-transition animation.

## Still to fill
- Empty tiles (placeholders): MONOV recordings, input/result pairs, BEFORE/AFTER, 9:16 videos, fashion/living/poster outputs · OFF BEAUTY AI frames · M.E.N.D. frame · EASYCHECK frames/storyboard/on-set · 천국 stills ×4 · THE SUN performance/rehearsal · 백화 poster/stills · 윤슬 stills
- Purple `[ ]` text (`Tbd`): MONOV team size · OFF BEAUTY 재구성에서 바꾼 것 · M.E.N.D. USE · EASYCHECK MEDIA · 천국 상영 이력 · THE SUN 연출 노트 · 백화 MovieBloc link
- MONOV gallery tiles 1, 2, 5 load from `storage.googleapis.com/monov-prod-public-cache/...`. Download them into `public/assets/monov/outputs/` and update `app/work/monov/page.tsx` before deploying.
