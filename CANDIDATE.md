# Network candidate

Branch: `design/network`. Saved from exploration commit `4541ea5`. This branch opens its selected candidate at the normal homepage route `/`.

The visual owner is `public/worlds/next/07/index.html`. The Astro entry at `src/pages/index.astro` renders that trusted repository-owned HTML and resolves its assets to `/worlds/assets/`. Edit the owner rather than duplicating its HTML. The full comparison archive remains under `/worlds/index.html`.

Run `npm ci` once, then `npm run dev -- --host 0.0.0.0`. This is a local design candidate, not a production deployment. The other site routes retain the existing implementation while homepage design is being chosen.

## Current direction

Use the living network to express relationships, language and interpretation. Let the reading voice express attention and judgment: Crimson Pro headings, Space Grotesk body, sentence case, measured scale and useful project descriptions. Keep the graph, winding camera, pointer steering and Pause/Resume control intact; the owner removed the entry gate and steering caption. Site navigation serves prospective clients through Work, Approach and Contact. No generated images.

The focused mobile-navigation regression can run against an already-open local homepage:

```bash
playwright-cli -s=network-check open --browser=chrome http://localhost:4477/
playwright-cli -s=network-check run-code --filename=checks/network-navigation.js
playwright-cli -s=network-check close
```

It reproduces and pins the mobile Contact-link omission found during review. This is a focused browser check, not the final production CI gate.

## Human signal copy variant

This branch, `design/network-human-copy`, preserves the selected network design at `3fbc60b` and changes only its hero/window framing to the original direction 02 copy in `public/worlds/02/index.html`. Hero: “Keep the human in the loop.”, AI and data consultancy / Clinical attention / Computational depth, Meet the work. Window: “Behind every dataset, there are people. We build accordingly.” plus “A representation is always a choice. So is the system behind it.” Window type adapts to the longer text. Palette, renderer, camera speed and halved pointer steering are unchanged.

This variant includes the same optimized renderer as design/network: reusable projection storage and batched edges, preserving density, geometry, camera speed and halved pointer steering. See DESIGN.md for measured performance and its limits.

Latest window: “Research, language and data.” with the concrete list of transcription, document search, model evaluation and claim-checking services. The owner rejected the earlier dataset/representation wording. The full-window gradient is removed; text retains solid charcoal backing. Hero remains the02 copy.

The current comparison now includes the full Astro site, preserving original Projects/About and localized routes. Homepage projects link to local detail anchors; All projects opens the original project page. The navbar reads simulacro.tech and wraps on narrow phones. Use scripts/build-full-site-preview.mjs for a frozen full-site preview; the earlier focused builder is for the standalone homepage comparison.

4K follow-up: the network background now has a2560×1440 pixel-area ceiling, preserving aspect ratio. This reduces raster work on large/high-DPI windows; page text remains native resolution. See DESIGN.md for the reproduced Zen failure and measurement limits.

Window description now reads: “Built with transparency, accountability and human impact in mind.”
