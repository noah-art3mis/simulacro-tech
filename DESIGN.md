# Simulacro: ten worlds

## Context

Experimental redesign collection requested by the owner, not a production replacement. Audience: prospective AI/data consultancy clients, collaborators, and people exploring what AI-assisted web design can do. Public landing pages, desktop spectacle with deliberate mobile adaptations. Ambition: extremely bold, fancy, explosive, fitting the brand; visual exploration takes priority over production correctness. English only in this exploration.

## Brand

Simulacro builds AI, NLP, research, and data systems with psychology, philosophy, and human consequences in mind. The original `public/worlds/assets/simulacro.png` artwork is the identity anchor: examine it and reinterpret its motifs. Real projects: LexGPT (legal research workbench), Molcajete (focus-group transcription and analysis), Adapta (Mexican Spanish fine-tuning and evaluation), Glasshouse (journalistic fact-checking). Founder Gustavo Costa, psychologist turned data scientist. Contact: contact@simulacro.tech. Do not invent clients, testimonials, metrics, or shipped AI capabilities.

## Surface and authority

Ten independently art-directed full landing pages under `public/worlds/01/` through `10/`, with a comparison index at `public/worlds/index.html`. Existing production pages remain separate. Each page owns its own `:root` palette, type, spacing, motion, and breakpoints in its inline stylesheet; these are alternatives, not ten themes of one template. Shared assets live in `public/worlds/assets/`. No new runtime dependencies. Self-hosted Archivo variable font is supplied, with OFL licence. Native CSS/Canvas/JS for original generative art and interactions. Visually ambitious native graphics are explicitly appropriate here.

## Direction

Public pages may use substantial decorative motion to embody perception, representation, language, and AI. Preserve readable text, normal scrolling, content visible before JS, keyboard focus, and prefers-reduced-motion. Avoid stock SaaS cards, generic gradient blobs, tiny lab metadata as filler, fake dashboard screenshots, and ten identical hero compositions. Art must be central, complex, and site-specific. Dramatic colour, huge typography, spatial layering, kinetic compositions, and original generative artwork are encouraged. Use a single strong accent within each direction; some worlds may explore alternatives to the existing amber. This collection proposes those brand choices for owner review.

## Page contract

Each `NN/index.html` must work via any HTTP static server, with inline scripts/styles and relative asset URLs `../assets/...`. Include viewport, lang=en, title, theme-color, one h1, useful real project links, and mailto contact. A quiet fixed or top nav link `../` labeled All directions returns to the gallery. No external font/CDN/network requests. Minimum three substantive sections beyond the hero: work, approach/capabilities, contact; 2–4 desktop viewports overall. At least one meaningful interactive visual control per direction with obvious affordance and keyboard support; name illustrative/generative art honestly. Avoid auto-playing sound. Reduced motion freezes continuous visual loops and removes transforms. Do not write fake AI chat interfaces.

## Verification

Use playwright-cli to render desktop and phone, inspect screenshots and exercise interactive controls. This is a visual exploration, so smoke/golden checks replace TDD of artwork. No final production CI before owner design selection. Read-only simulacro-ui review must inspect the rendered pages. Preview delivered using show-me workflow. No deployment or merge is authorized by this brief.
