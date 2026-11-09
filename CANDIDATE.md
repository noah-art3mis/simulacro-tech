# Knot candidate

Branch: `design/knot`. Saved from exploration commit `4541ea5`. This branch opens its selected candidate at the normal homepage route `/`.

The visual owner is `public/worlds/next/04/index.html`. The Astro entry at `src/pages/index.astro` renders that trusted repository-owned HTML and resolves its assets to `/worlds/assets/`. Edit the owner rather than duplicating its HTML. The full comparison archive remains under `/worlds/index.html`.

Run `npm ci` once, then `npm run dev -- --host 0.0.0.0`. This is a local design candidate, not a production deployment. The other site routes retain the existing implementation while homepage design is being chosen.
