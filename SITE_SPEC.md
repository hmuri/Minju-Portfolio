# MINJU CHOI Portfolio — v2 Site Spec

## Positioning
**I BUILD WAYS TO CREATE.**

The site is structured as three connected bodies of work rather than a decorated resume:
1. **MONOV — Building AI content workflows**
2. **Commercial — Ideas that left the screen**
3. **Film & Stage — Stories made with people**

The through-line is: content production → technology → repeatable creative systems.

## Visual language
- Core palette: deep purple / black / warm white.
- Typography: oversized sans-serif, hard alignment, poster-like spacing.
- No gradients, decorative 3D, mouse-follow cursor, fake grain or tiny-serif “studio” styling.
- Film frames stay square and cinematic.
- MONOV keeps denser digital layouts and UI screenshots.
- Project sections change background tone as distinct scenes rather than one long white page.

## v2 interaction pass
- Purple route-entry wipe on page changes.
- Homepage hero uses three independently aligned oversized lines: `I BUILD / WAYS TO / CREATE.`
- Homepage project panels use subtle image scale, moving project index and arrow response.
- MONOV video cards autoplay on hover and reset on leave.
- MONOV Studio chapter remains sticky on desktop.
- OFF BEAUTY now uses a custom scroll story: the left-side chapter changes activate a sticky visual on the right.
- The Sun is now a full-bleed stage hero with overlaid credits.
- Motion is disabled when `prefers-reduced-motion` is enabled.

## IA
### Home
Hero → Selected Work → MONOV → Commercial → Film & Stage → About

### MONOV
Hero → One Photo / Many Outputs → Studio → Model & Workflow → “Generation isn’t always the answer” → Selected Outputs

### Commercial
Hero → OFF BEAUTY scroll story → The M.E.N.D. BioSimulator → EasyCheck

### Film & Stage
Hero → 그곳에는 천국이 있습니까 → The Sun → Selected Film Credits

## v2 changes
### Home
- Reworked hero typography to feel closer to the OFF BEAUTY treatment reference: direct, large, graphic, non-decorative.
- Tightened project-image crops and added restrained hover interaction.
- Removed the broken Resume navigation item until a real resume file is supplied.

### MONOV
- Replaced the UI-heavy Selected Outputs ending with an editorial grid of individual public MONOV generations.
- Kept the actual service UI where it demonstrates workflow rather than using it as decoration.
- Refined hover video cards and typography hierarchy.

### Commercial / OFF BEAUTY
- Rebuilt the case as `CONCEPT → PRODUCTION → FORMAT → LIVE`.
- Desktop: text chapters scroll while the visual stays sticky and crossfades between treatment, film and OOH evidence.
- Mobile: chapters become a normal vertical sequence with their own media.

### Film & Stage
- The Sun curtain image is treated as a full-bleed stage scene instead of a side-by-side card.
- Existing film stills retain cinematic crops and no rounded cards.

## Still useful later
- Exact OFF BEAUTY outdoor-display delivery dimensions.
- 6–10 hand-picked MONOV outputs if you want to replace the current public gallery selection with your personal favorites.
- EasyCheck BTS / treatment.
- Correct MovieBloc URL for 백화.
- Resume PDF for the nav.
- The Sun source code is **not needed for this visual pass**. It becomes useful only if there is a specific interaction, archived copy block or media asset from that site that should be migrated rather than rebuilt.
