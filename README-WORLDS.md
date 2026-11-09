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

## Round two: further inside

The owner selected 02, 04 and 07, asked for larger forms and more motion, and singled out the feeling of a curved camera journey inside a three-dimensional embedding space. Three new candidates now live under `public/worlds/next/`, with the root gallery featuring them and retaining the original ten in an expandable section.

- `next/02/index.html`: Human signal, with a monumental point-cloud portrait and a curved camera journey into the network.
- `next/04/index.html`: a three-component Borromean sculpture, with a camera moving through its gaps and around crossings.
- `next/07/index.html`: connected point clusters and braided strands, explored from within along a winding camera route.

These pages bring back the original “Technology that serves people” headline, ethics tagline, three service areas, four projects, disciplines, biography and contact. The point spaces are illustrative, rather than real model embeddings. Construction reference for the knot: [Paul Bourke’s Borromean rings](https://paulbourke.net/geometry/borromean/).

Motion inspection covers entered and overview states, pointer steering, paused canvas pixels, ordinary scrolling and reduced-motion static views. Independent review confirmed those behaviours and original content coverage. The phone control overlap in 02 and faded active contact link in 07 were corrected. Long camera cycles, physical-phone performance and a full accessibility audit remain unverified. Final production CI waits for the owner’s design choice.

The motion pass also exposed heavy Canvas drawing in 02 and 04. Batched point/edge paths, cached shading and reduced mesh detail made both scenes smoother while retaining their scale and camera paths. Main-agent spot measurements after optimization were approximately 17 ms per frame for 02 and 33 ms for 04 at 1440×1000 in this browser; these are local samples, not device-wide performance guarantees.
