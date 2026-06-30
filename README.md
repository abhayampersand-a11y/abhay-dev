# Abhay Desai — Portfolio (Next.js)

The portfolio site converted from the static `folio-tailwind` HTML template to a
modern **Next.js 15 App Router** app with **TypeScript** and **Tailwind CSS**.

## Run it

```bash
cd folio-next
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build),
`npm run lint`.

## Structure

```
app/
  layout.tsx              # fonts, metadata, theme, shared Navbar/Footer
  globals.css             # all custom styles (gradients, reveal, prose, etc.)
  page.tsx                # home (hero, services, work, about, reviews, blog, contact)
  projects/page.tsx       # filterable projects grid
  projects/[slug]/page.tsx# case-study pages (generateStaticParams)
  blog/page.tsx           # blog index (featured + grid)
  blog/[slug]/page.tsx    # article pages (generateStaticParams)
components/
  ThemeProvider.tsx       # dark mode (default dark) + no-flash init script
  Navbar.tsx              # scroll state, mobile menu, theme toggle, active link
  Footer.tsx
  RevealInit.tsx          # scroll-reveal IntersectionObserver
  ScrollProgress.tsx      # reading progress bar (articles / case studies)
  ProjectsFilter.tsx      # client-side category filter
lib/
  projects.ts             # 7 projects + full case-study data (typed)
  posts.ts                # blog posts + article bodies (typed)
```

## What changed from the static template

- The repeated nav/footer are now shared components instead of copied into 5 files.
- Alpine.js interactivity → React hooks (theme, scroll, reveal, filter).
- `case-study.html?project=slug` → real routes at `/projects/[slug]`.
- Each blog card now opens its own article at `/blog/[slug]`.
- `<img>` → `next/image` (Unsplash is allowed in `next.config.mjs`).
- SEO/OG tags → the Next.js Metadata API.
- Tailwind runs through PostCSS at build time (no CDN runtime flash).

The original `.html` files are left untouched in the parent folder as reference.

> Note: the contact form is presentation-only (as in the original). Wire it to an
> API route or a form service (e.g. Formspree) to actually send messages.
