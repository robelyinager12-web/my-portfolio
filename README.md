# Robel Yinager — Portfolio

A full-stack developer portfolio built with **Next.js 14**, **TypeScript**,
**Three.js** (via React Three Fiber), **Framer Motion**, and **Tailwind CSS**.

Live at: [robelyinager.dev](https://robelyinager.dev) ← update this once deployed

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D / WebGL | Three.js + React Three Fiber |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk, Inter, JetBrains Mono |
| Deployment | Vercel |

---

## Getting started locally

**Requirements:** Node.js 18 or higher

```bash
# 1. Clone the repo
git clone https://github.com/robelyinager12-web/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Building for production

```bash
npm run build
npm start
```

---

## Folder structure ---

## Customizing content

Almost everything you will ever want to change lives in `src/data/`.
Open the relevant file and replace the placeholder values:

| File | What to update |
|---|---|
| `site.ts` | Your name, email, GitHub username, social links, stats |
| `projects.ts` | Project titles, descriptions, tags, live and repo URLs |
| `experience.ts` | Employer names, dates, role highlights |
| `education.ts` | Degrees and certifications you actually hold |
| `testimonials.ts` | Real quotes from real people |
| `blog.ts` | Links to articles you have published |
| `services.ts` | Service descriptions |

---

## Dark / light mode

The site defaults to dark mode. A toggle button in the navbar switches
between the dark cyberpunk palette (`#050816` navy + neon cyan/violet/pink)
and the light professional palette (`#F8F8F4` cream + indigo/violet/cyan).
The choice persists across visits via `localStorage`.

---

## Three.js background

`src/components/three/WireframeBackground.tsx` renders five wireframe
shapes (icosahedron, torus, octahedron, dodecahedron) that rotate slowly
and parallax with the mouse. Colors switch automatically with the theme.
Fully disabled for visitors with `prefers-reduced-motion` turned on.

---

## Contact form

`src/components/sections/Contact.tsx` posts to `/api/contact`.
The route currently logs submissions — wire up a real provider
(Resend, Nodemailer, SendGrid) where the `TODO` comment is in
`src/app/api/contact/route.ts`.

Copy `.env.local.example` to `.env.local` and fill in your keys:

```bash
cp .env.local.example .env.local
```

---

## Deploying to Vercel

The fastest path to production:

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New → Project**
4. Select this repository
5. Leave all settings at their defaults — Vercel detects Next.js automatically
6. Click **Deploy**

Your site will be live at a `*.vercel.app` URL within about 60 seconds.
Connect a custom domain in Vercel's dashboard under **Settings → Domains**.

---

## Adding your resume

Place your resume PDF at `public/resume.pdf` — the "Download Resume"
button in the Hero links there automatically.

---

## License

MIT — use this however you like.