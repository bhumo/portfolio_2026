# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server (frontend only, /api/chat returns 404)
vercel dev         # Full local dev — frontend + Vercel serverless functions together
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
```

No linter or test suite is configured.

## Architecture

### Rendering pipeline

`main.jsx` → `App.jsx` → `SmoothScroll` (Lenis) wraps all sections. Sections render in order: Hero, About, Skills, Experience, Projects, Footer, ChatBot. There is no router — the site is a single scroll page with anchor links (`#skills`, `#experience`, `#projects`).

### Animation model

Two systems run in parallel:
- **Framer Motion** — all UI animations. `src/utils/motion.js` exports reusable variants (`textVariant`, `fadeIn`, `zoomIn`, `slideIn`, `staggerContainer`). Most section components use `whileInView` with these presets.
- **Three.js via React Three Fiber** — 3D canvas components live in `src/components/canvas/`. Each exports a `*Canvas` wrapper that sets up its own `<Canvas>` with camera, lighting, and `Suspense`/`Loader`.

### Fixed UI layer

`HUD.jsx` is a `position:fixed` overlay (`zIndex:1000`, `pointerEvents:none`) spanning the full viewport. Interactive children opt back in with `pointerEvents:auto`. The HUD social icon cluster sits at `bottom:40px, right:40px`.

### Styling conventions

- CSS custom properties for theme values (`--bg-base: #050505`, `--accent: #ff4d00`, etc.) defined in `src/index.css`.
- Tailwind extended with custom colors (`cream`, `ink`, `muted`) and fonts (`Instrument Serif`, `DM Sans`) in `tailwind.config.cjs`.
- `.vercel-glass` utility class in `src/styles.css` provides the glassmorphic card style used across components.
- Fluid typography uses `clamp()` — the main heading class `.text-massive` is `clamp(4rem, 15vw, 18rem)`.
- Bento grid in Skills section uses `.asym-bento` (12-col) with `.bento-full` and `.bento-half` children, defined in `src/index.css`.

### Resume asset

The PDF is in `public/` and accessed via `resumeUrl` from `src/utils/site.js`, which prepends `import.meta.env.BASE_URL` for correct path resolution across environments.

### Deployment

Deployed on Vercel. `base: '/'` in `vite.config.js` is required — do not change it to a subdirectory path or assets will 404. The `api/` directory is auto-detected by Vercel as serverless functions.
