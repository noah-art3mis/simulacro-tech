# Ten possible Simulacros

Ten full, interactive landing-page redesigns created with `gpt-6-astra` at low reasoning. This collection explores art direction for the owner to choose and combine; it is not a production release.

The gallery is `public/worlds/index.html`. Serve it locally with `uv run --no-project python -m http.server 4397 --directory public/worlds`, then open http://localhost:4397/.

| Direction | Visual premise                 | Interaction                            |
| --------- | ------------------------------ | -------------------------------------- |
| 01        | Event horizon                  | Bend the gravitational field           |
| 02        | Human signal                   | Abstract the point-cloud portrait      |
| 03        | Language engine                | Turn a word sculpture into a world     |
| 04        | Impossible object              | Reshape a rotating architectural knot  |
| 05        | Synthetic garden               | Change branching and regrow the system |
| 06        | The double                     | Separate and reverse the reflection    |
| 07        | Signal / noise                 | Resolve or scramble the raster field   |
| 08        | Counterform                    | Twist the sculptural letterform        |
| 09        | Dream protocol                 | Reshape the contour landscape          |
| 10        | Many possible worlds           | Select project planets and orbit speed |

Each page is independent, uses local assets, and respects reduced-motion preferences. Project descriptions derive from the existing Simulacro site. The generative artwork illustrates ideas; it is not a live AI model or product screenshot. English-only copy is exploratory. Existing EN/PT/ES production pages are outside this change.

`DESIGN.md` owns the brief and visual decisions. `scripts/build-worlds-preview.mjs` copies the gallery into the shared preview workflow's requested output directory. Browser captures and smoke logs live in ignored `var/`. Archivo is self-hosted with its OFL licence in the assets directory.

The task branch is `design/ten-worlds`, retained in `~/worktrees/simulacro-ten-worlds` for design iteration. No production deployment or merge is part of this exploration.

## Visual review

Inspected: all ten complete pages at desktop and phone widths, every desktop visual button and slider, all four project selectors, and representative reduced-motion states. All ten gallery thumbnails load. Inline scripts parse and browser smoke reported no page errors.

Findings: fixed phone overflow in Language engine, crowded controls in Event horizon, low headline legibility in The double, and faint portrait detail in Human signal. Replaced a layout-affecting project hover with a transform. Kept intentional art cropping, saturated palettes, monumental type and decorative motion to meet the showpiece brief.

Unverified: exhaustive keyboard and assistive-technology use, every tablet/short-screen layout, measured contrast in every state, failed-script/network fallbacks, and production CI. These remain experimental candidates for owner comparison.
