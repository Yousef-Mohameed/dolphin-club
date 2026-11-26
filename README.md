# Aqua Wave Swimming Club | أكوا ويف

Neon-cyan swimming club site. React 19 + Vite + TypeScript + Tailwind CSS 4 + i18next (Arabic RTL / English LTR).

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/ (also writes dist/404.html for SPA hosting)
npm run preview  # preview the production build
```

## What is inside (phases)

- **Restyle:** deep navy (#041A2E → #0A2540) + neon cyan (#1FE0FF), glowing headings/cards, pill buttons, Cairo (AR) + Poppins (EN), layered animated wave SVGs, scroll reveal, count-up stats, glass navbar, card lift/glow/sweep, button ripples, `prefers-reduced-motion` support.
- **Phase 1:** floating WhatsApp button (`src/components/WhatsAppFloat.tsx`), free-trial booking modal with validation + success animation (`TrialModal.tsx`), swimmer quiz (`Quiz.tsx`), lightweight media (all videos < 100 KB) and lazy video loading.
- **Phase 2:** hero video/photo orb - swap `public/media/hero.mp4` and `hero-poster.png` (`Hero.tsx`), pointer ripple canvas (`RippleLayer.tsx`), stopwatch records section (`Records.tsx`), light/dark toggle (`ThemeToggle.tsx`), water-sound toggle, off by default (`SoundToggle.tsx`, `public/media/water.mp3`).
- **Phase 3:** champions timeline + Swimmer of the Month (`Champions.tsx`, `src/data/champions.ts`), a page per coach (`src/pages/CoachDetailPage.tsx`, `src/data/coaches.ts`), honor board with year filter (`HonorBoard.tsx`, `src/data/honors.ts`), reels-style muted-autoplay video gallery with lightbox (`ReelsGallery.tsx`, `Lightbox.tsx`), video testimonials (same components, `/gallery` + home).
- **Phase 4:** plan calculator (`PlanCalculator.tsx`), live schedule widget + full schedule page fed from `public/data/schedule.json` (`ScheduleWidget.tsx`, `SchedulePage.tsx`), monthly 10 km challenge with points + badges in localStorage (`Challenges.tsx`), events page with live countdown + WhatsApp registration (`EventsPage.tsx`, `src/data/events.ts`).
- **Phase 5:** bilingual blog with 3 starter posts (`src/data/posts.ts`, `BlogPage.tsx`, `PostPage.tsx`), SEO meta/Open Graph/JSON-LD per page (`src/lib/seo.ts`), `public/sitemap.xml`, `public/robots.txt`, and PWA: `public/manifest.webmanifest`, `public/sw.js`, installable + offline cache.

## Replace the placeholders

- **Club WhatsApp number / address / hours:** `src/config.ts` (one place, used by every form and button).
- **Hero media:** `public/media/hero.mp4` + `hero-poster.png` (square works best, it shows in a circle).
- **Gallery/testimonial videos:** `public/media/reel1-4.mp4` (vertical 9:13 style).
- **Water sound:** `public/media/water.mp3`.
- **Content:** coaches, champions, honors, events, posts in `src/data/*.ts`; weekly sessions in `public/data/schedule.json`; prices in `src/pages/MembershipPage.tsx`.
- **Translations:** `src/i18n/en.json` and `src/i18n/ar.json`.

## Notes

- Forms do not store anything (static site): trial booking, coach booking and event registration all open WhatsApp (`wa.me`) with a pre-filled message.
- Old routes keep working: `/courses` → `/programs`, `/trainers` → `/coaches`, `/pricing` → `/membership`.
- Challenge points live in the visitor's browser (localStorage), no backend needed.
