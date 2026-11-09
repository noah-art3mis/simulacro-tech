# Current Simulacro candidate

Branch: `design/network-human-copy`. The selected site includes Home, Projects and About in English, Portuguese and Spanish. It remains a local design candidate; it has not been merged or deployed.

## Source owners

- Homepage visual template and Canvas renderer: `public/worlds/next/07/index.html`.
- Homepage composition/localization: `src/components/NetworkHome.astro`, `src/lib/render-network-home.ts`, `src/i18n/ui.ts`.
- Single shared sticky navbar: `src/components/Navigation.astro`; Home, Work, About, Contact and EN/PT/ES page-preserving language choices.
- Static secondary-page shell: `src/layouts/ReadingLayout.astro`, `src/styles/site/reading-shell.css`.
- About: `AboutPage.astro`, `about-reading.css`; original biography, education, experience and five profile links.
- Projects: `ProjectsPage.astro`, `projects-reading.css`; nine original WorkVisual illustrations and original project content.

Home starts inside the moving field. The centered rectangular button appears only in the second network window. It reveals the same 6,420 nodes and 7,464 connections through a curved camera pullback. Drag, wheel/pinch zoom, keyboard controls and reset remain available. The overview has no annotation lines, labels or cards. The overview slowly rotates through the existing frame loop, capped at 30 draws per second; Pause, reduced motion and hidden tabs stop automatic movement. It preserves pause/reduced-motion behaviour and uses one canvas with a 1.44M-pixel budget.

Keep the exact approved English hero/window copy, complete EN/PT/ES translations, custom homepage project symbols, amber emphasized project terms, centered mobile founder artwork and fixed bottom-right motion control. Language choices appear only in the navbar. No hero Meet the work CTA, visible copyright/llms/build metadata, fake replacement graphs, generated images or animated/pill-shaped big-picture button.

Build/open the full site with `scripts/build-full-site-preview.mjs`; it adapts directory URLs only in the frozen preview and reuses the shared verification shell for secondary pages. Production routes keep normal directory URLs. Relevant manual checks live under `checks/`: network-renderer, network-copy, network-explore, network-overview-guides, network-overview-spin, network-copy-return, shared-navigation, network-translations, network-overview, network-fixed-control, sticky-navigation, About navigation/keyboard and site navigation. See DESIGN.md for evidence and limits.

Latest scroll treatment: clean section surfaces, with the network behind them. Scrolling changes actual camera depth for near/far parallax; it does not overlay art on copy or alter section padding. The existing light Approach section remains. Reduced motion disables this effect, and overview remains independent of page scrolling. Returning window copy uses a staged reveal without changing the section height. `checks/network-parallax.js` pins these behaviours.
