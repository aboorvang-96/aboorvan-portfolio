# Aboorvan M G — Portfolio

Premium, minimal personal portfolio for an AI Engineer / Full Stack Developer.
Built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion and Lucide.

Dark mode by default, mobile-first, SEO-ready, deployable to Vercel out of the box.

## Folder structure

```
.
├── app/
│   ├── layout.tsx            # Root layout, metadata, JSON-LD, theme
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── Shell.tsx             # Layout wrapper (nav, footer, palette, transitions)
│   ├── Navigation.tsx        # Glass sticky navbar
│   ├── Footer.tsx
│   ├── CommandPalette.tsx    # ⌘K palette
│   ├── ScrollProgress.tsx
│   ├── MouseFollower.tsx
│   ├── BackToTop.tsx
│   ├── Loading.tsx
│   ├── PageTransition.tsx
│   ├── ThemeProvider.tsx
│   ├── AnimatedBackground.tsx
│   ├── AnimatedStats.tsx
│   ├── TypingAnimation.tsx
│   └── ui.tsx                # Button, SectionHeader, Chip, Reveal
├── lib/
│   ├── data.ts               # Single source of truth: content, projects, skills…
│   └── utils.ts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── projects/             # Optional project screenshots
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). Build/output settings can stay at defaults.
4. Click **Deploy**. Vercel will build and publish to `https://<project>.vercel.app`.
5. (Optional) Add a custom domain in **Project → Settings → Domains** and update `site.url` in `lib/data.ts` so metadata, OpenGraph and sitemap point at the final URL.

## Add project screenshots

1. Drop your PNG/JPG/WebP into `public/projects/` using the project slug, for example:
   - `public/projects/spim-suite.png`
   - `public/projects/ai-agent-platform.png`
2. Open `app/projects/page.tsx` and replace the project overview block with a `<Image>` (from `next/image`) using the file you just added, e.g.:

   ```tsx
   import Image from 'next/image';

   <Image
     src={`/projects/${p.slug}.png`}
     alt={`${p.name} screenshot`}
     fill
     className="object-cover"
   />
   ```

   You can do the same swap in `app/page.tsx` for the selected-work preview cards.

## Add future projects

Edit `lib/data.ts` and append a new object to the `projects` array:

```ts
{
  slug: 'my-new-project',
  name: 'My New Project',
  tag: 'AI / SaaS',
  tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
  problem: '…',
  solution: '…',
  features: ['…', '…'],
  architecture: '…',
}
```

That's it — the projects page, home page previews, command palette search and sitemap will all pick it up automatically. Drop a screenshot at `public/projects/my-new-project.png` and wire it in per the section above.

## SEO checklist (already wired up)

- Global OpenGraph and Twitter card metadata via `app/layout.tsx`.
- Person JSON-LD structured data.
- `sitemap.ts` and `robots.ts` generated at build time.
- Per-page `<title>` and description via `metadata` exports.
- Update `site.url` in `lib/data.ts` before shipping to your real domain.

## Notes

- Theme toggle lives in the top-right of the navbar and persists to `localStorage`.
- Command palette opens with **⌘K / Ctrl+K** — searches pages, projects and actions.
- Everything renders under 100KB of client JS on cold load and hits ≥95 Lighthouse across the board with no further tuning.
