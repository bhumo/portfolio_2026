# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server (frontend only)
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
vercel dev         # Full local dev — frontend + Vercel serverless functions together
```

No linter or test suite is configured.

## Architecture

### Rendering pipeline

`main.jsx` → `App.jsx` → `SmoothScroll` (Lenis) wraps all sections. Sections render in order: Hero, About, Skills, Experience, Projects, Education, Footer. There is no router — the site is a single scroll page with anchor links (`#about`, `#projects`, `#career`, `#contact`).

### Content / data layer

`src/constants/index.js` is the single source of truth for all portfolio content: `siteConfig` (name, headline, email), `navLinks`, `socialLinks`, `heroBadges`, `services`, `technologies`, `experiences`, `testimonials`, `projects`, and `blogPosts`. Edit here to update any displayed text or data — no changes to components needed for content updates.

### Section HOC

`src/hoc/SectionWrapper.jsx` exports `StarWrapper(Component, idName)` — wraps a component in a `motion.section` with `staggerContainer` variants, `whileInView`, and a hash-span anchor. Most non-Hero sections use this HOC.

### Animation model

Two systems run in parallel:
- **Framer Motion** — all UI animations. `src/utils/motion.js` exports reusable variants (`textVariant`, `fadeIn`, `zoomIn`, `slideIn`, `staggerContainer`). Most section components use `whileInView` with these presets.
- **Three.js via React Three Fiber** — 3D canvas components live in `src/components/canvas/`. Each exports a `*Canvas` wrapper that sets up its own `<Canvas>` with camera, lighting, and `Suspense`/`Loader`.

### Fixed UI layer

`HUD.jsx` is a `position:fixed` overlay (`zIndex:1000`, `pointerEvents:none`) spanning the full viewport. Interactive children opt back in with `pointerEvents:auto`. It is defined but not currently mounted in `App.jsx` — mount it inside `<SmoothScroll>` to re-enable. The HUD contains: top-left status label, bottom-left resume download button, bottom-right social icon cluster (GitHub, LinkedIn, email).

### Styling conventions

- CSS custom properties for theme values (`--bg-base: #050505`, `--accent: #ff4d00`, etc.) defined in `src/index.css`.
- Tailwind extended with custom colors (`cream`, `ink`, `muted`) and fonts (`Instrument Serif`, `DM Sans`) in `tailwind.config.cjs`.
- `src/styles.js` exports a `styles` object with Tailwind class strings for common patterns (`padding`, `heroHeadText`, `sectionHeadText`, etc.) — import this instead of repeating class strings.
- `.vercel-glass` utility class in `src/styles.css` provides the glassmorphic card style used across components.
- Fluid typography uses `clamp()` — the main heading class `.text-massive` is `clamp(4rem, 15vw, 18rem)`.
- Bento grid in Skills section uses `.asym-bento` (12-col) with `.bento-full` and `.bento-half` children, defined in `src/index.css`.

### Resume asset

The PDF is in `public/` and accessed via `resumeUrl` from `src/utils/site.js`, which prepends `import.meta.env.BASE_URL` for correct path resolution across environments.

### Deployment

Deployed on Vercel. `base: '/'` in `vite.config.js` is required — do not change it to a subdirectory path or assets will 404. The `api/` directory is auto-detected by Vercel as serverless functions (currently empty).
