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

## Current polish and overview

The homepage now links to a matching static About page, with the existing translated biography/history and the LinkedIn, GitHub, CV, Essays and Philosophy links. Its owners are `src/components/AboutPage.astro`, `src/layouts/AboutLayout.astro` and `src/styles/site/about-reading.css`; all three About locales use them. Footer copyright/rights/llms and build captions are no longer displayed. The llms.txt and Markdown endpoints remain available.

Homepage interaction feedback uses shared short CSS timing, native focus/press states and SVG arrows, with coarse-pointer and reduced-motion handling. LexGPT and Glasshouse have revised custom symbols; Adapta and Molcajete are unchanged. Hero and window copy remain unchanged.

The hero’s “See the big picture” toggle morphs the existing canvas points into People, Language, Research and Systems, then stops drawing. Return restores the camera and prior pause state; reduced motion switches immediately. Labels are HTML and the button exposes its pressed state. Default scene geometry remains pinned by the existing fixtures. The background now has a 1600×900 pixel-area ceiling, superseding QHD, with softer large-screen edges as the deliberate performance tradeoff. Focused checks live in `checks/network-overview.js`, `checks/network-overview-layout.js`, `checks/network-renderer.mjs` and the About navigation/keyboard checks. Design iteration and user review remain open.

Latest steering: the finished homepage is shared across `/`, `/pt/` and `/es/` through `NetworkHome.astro` and `render-network-home.ts`, with translated messages in `ui.ts` and language choices after the email. “See the big picture” now appears only in the second network window. It reveals 109 nodes in four observable, unlabelled topologies with sparse bridges, not named point clouds. The canvas is reused inside that window, the overview settles without further drawing, and return restores the window text and previous network pause state. Wait for the overview region's `aria-busy="false"` and canvas `data-view="overview"` before taking the preview capture. Earlier hero-overview and visible-label instructions are superseded.

Latest overview revision supersedes the four synthetic topologies: the second-window button now reveals the same 6,420-node, 7,464-edge network through a curved 1.2-second camera pullback. The braided paths and neighborhood connections retain their original coordinates and relationships. Overview dots use 24 batched colour/opacity paths, and the settled view does no idle drawing. Return and reduced-motion behavior remain intact. One fixed bottom-right motion control replaces both section controls, as explicitly requested by the owner. Desktop and phone captures are in ignored `var/astra-real-overview-desktop.png` and `var/astra-real-overview-mobile.png`.
