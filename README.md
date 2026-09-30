# Minju-Portfolio

Portfolio site of Minju Choi — Creative Technologist · AI · Content · Film.
Built with Next.js 15 (App Router) + React 19 + TypeScript. Current version: **v3**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages
- `/` — Home
- `/work/monov` — MONOV
- `/work/commercial` — Commercial
- `/work/film-stage` — Film & Stage

## Components
- `Nav` — fixed nav
- `ProjectPanel` — full-screen project panel on Home
- `Reveal` — scroll reveal
- `HoverVideo` — hover-to-play video card
- `MonovModes` — MONOV Product / UGC / Video mode switcher
- `OffBeautyStory` — scroll-driven Concept → Production → Format → Live sequence
- `OohReveal` — OFF BEAUTY delivery master vs. live OOH view
- `app/template.tsx` — route-entry purple wipe

See `SITE_SPEC.md` and `V2_CHANGELOG.md` / `V3_CHANGELOG.md` for design direction and history.

## Notes
- MONOV Selected Outputs currently use public MONOV storage URLs. Before final deployment, copy the selected images into `public/assets/monov/` so the portfolio doesn't depend on mutable production asset URLs.
- Add a real resume file before restoring a Resume item to the navigation.
