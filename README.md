# Minju-Portfolio

Portfolio site of Minju Choi — AI · Content · Film.
Built with Next.js 15 (App Router) + React 19 + TypeScript.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Structure

```
app/
  layout.tsx            root layout + Nav
  page.tsx              Home (Hero → Selected Work → About)
  globals.css           global styles (purple / black / warm white)
  work/
    monov/page.tsx      01 · MONOV — Building AI content workflows
    commercial/page.tsx 02 · Commercial — Ideas that left the screen
    film-stage/page.tsx 03 · Film & Stage — Stories made with people
components/
  Nav.tsx               fixed nav (mix-blend difference)
  ProjectPanel.tsx      full-screen project panel on Home
  Reveal.tsx            scroll-reveal (IntersectionObserver)
  HoverVideo.tsx        hover-to-play video card
public/assets/          project images & video
```

See `SITE_SPEC.md` for positioning, visual language and IA.

## Before deploy

- Add the final resume as `public/resume.pdf` (linked from the nav).
