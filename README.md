# Bhumika Gupta — Portfolio

Personal portfolio for **Bhumika Gupta**, Backend Software & AI Engineer. Built with React, Three.js, and Framer Motion with a dark glassmorphic design.

**Live:** [portfolio-2026-eight-ivory.vercel.app](https://portfolio-2026-eight-ivory.vercel.app)

---

## Sections

| Section | What it shows |
|---|---|
| **Hero** | Full-screen intro with name, title badge, resume download, and social links |
| **About** | Engineering philosophy with metric highlights (50K+ transactions, 300ms latency target) |
| **Skills** | Bento-grid layout covering backend, distributed systems, and AI/ML stack |
| **Experience** | Scroll-animated career timeline — Softtechers, Changing The Present, WebCraft, Freshworks |
| **Projects** | Sticky stacked cards — AI Engine (LangGraph/PGVector), Aurora Sub-Lattice (Kafka/Spring Boot), NextStep Protocol (OIDC/Node) |
| **Contact** | Magnetic "CONNECT" button with mailto link and background marquee |



---

## Tech Stack

| Category | Libraries / Tools |
|---|---|
| Framework | React 18, Vite 4 |
| 3D | Three.js 0.149, @react-three/fiber 8, @react-three/drei 9 |
| Animation | Framer Motion 9 |
| Scroll | @studio-freight/lenis 1 (smooth scroll physics) |
| Styling | Tailwind CSS 3, CSS custom properties |
| Deployment | Vercel |

---

## Features

- **WebGL hero** — full-viewport 3D desktop PC model with lights and orbital controls
- **Scroll-linked animations** — parallax text, sticky project cards, animated experience timeline progress bar
- **Smooth scroll** — Lenis physics engine (1.8s liquid easing)
- **HUD overlay** — fixed resume export and social links inspired by cockpit UI
- **Glassmorphism** — backdrop-filter blur with orange accent (`#ff4d00`) throughout
- **Custom cursor** — spring-physics circle with mix-blend-mode difference
- **Responsive** — fluid `clamp()` typography, Tailwind breakpoints down to 450px

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/bhumo/portfolio_2026.git
cd portfolio_2026
npm install
```

### Run without the chatbot

```bash
npm run dev
```

Opens at `http://localhost:5173`. The AI chatbot button will appear but `/api/chat` calls will 404.

### Run with the chatbot (full stack)

Requires [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm install -g vercel
vercel link   # one-time project setup
vercel dev    # starts frontend + serverless API together
```

Opens at `http://localhost:3000`.

**Environment variable required:**

```bash
# .env.local
GEMINI_API_KEY=your_key_here
```

Get a free key at [aistudio.google.com](https://aistudio.google.com) → **Get API Key**.

---

## Project Structure

```
portfolio_2026/
├── api/
│   └── chat.js              # Vercel serverless function — Gemini AI chatbot
├── public/
│   ├── avatar.glb           # 3D avatar model (15MB)
│   ├── desktop_pc/          # 3D desktop PC model (GLTF)
│   ├── planet/              # 3D planet model (GLTF)
│   └── bhumika_gupta_resume_march16_Final.pdf
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Avatar.jsx   # Avatar 3D canvas
│   │   │   ├── Ball.jsx     # Floating icon balls (tech icons)
│   │   │   ├── Computers.jsx# Desktop PC 3D canvas (hero)
│   │   │   ├── Earth.jsx    # Earth 3D canvas
│   │   │   └── Stars.jsx    # 5000-point star field background
│   │   ├── About.jsx
│   │   ├── ChatBot.jsx      # AI chatbot floating UI
│   │   ├── CustomCursor.jsx # Spring-physics cursor
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx       # Contact + magnetic button
│   │   ├── Hero.jsx
│   │   ├── HUD.jsx          # Fixed cockpit overlay
│   │   ├── Loader.jsx       # Canvas loading progress
│   │   ├── Navbar.jsx       # Glassmorphic top nav pill
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── SmoothScroll.jsx # Lenis wrapper
│   ├── constants/index.js   # Site data
│   ├── hoc/SectionWrapper.jsx
│   ├── utils/
│   │   ├── motion.js        # Framer Motion animation presets
│   │   └── site.js          # resumeUrl utility
│   ├── index.css            # CSS variables, typography, bento grid
│   ├── styles.css           # Glassmorphism, marquee, vercel-glass utilities
│   └── App.jsx
├── .env.example
├── vite.config.js           # base: '/portfolio_2026/' for GitHub Pages
└── package.json
```

---

## Deployment

### GitHub Pages

```bash
npm run deploy
```

Builds to `dist/` and pushes to the `gh-pages` branch. Site base path is `/portfolio_2026/`.

### Vercel

```bash
vercel --prod
```

Add `GEMINI_API_KEY` in **Vercel Dashboard → Settings → Environment Variables** for the chatbot to work in production.

---

## Contact

**Bhumika Gupta**
Atlanta, GA · bhumi.gupta89us@gmail.com
[linkedin.com/in/bhumo](https://linkedin.com/in/bhumo) · [github.com/bhumo](https://github.com/bhumo)
