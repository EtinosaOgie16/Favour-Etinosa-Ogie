# Favour Etinosa Ogie — Portfolio

Editorial-style portfolio site for Favour Etinosa Ogie, a freelance B2B SaaS
content writer. Built with Next.js (App Router), Tailwind CSS, and Framer
Motion, with a blog powered live by Hashnode's GraphQL API.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** for styling (design tokens in `app/globals.css`)
- **Framer Motion** for the interactive "Favour Framework" process panel
- **Hashnode GraphQL API** (`https://gql.hashnode.com`) as a headless CMS for
  the blog

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything on the site is driven by small, typed data files so it's
easy to update without touching component code:

| What | File |
| --- | --- |
| Name, email, nav links, socials | `lib/site-config.ts` |
| Marquee offers banner | `lib/data/offers.ts` |
| "Sound Familiar?" audience cards | `lib/data/audience.ts` |
| "What I Do" service cards | `lib/data/services.ts` |
| Writing samples (home + `/work`) | `lib/data/samples.ts` |
| "Favour Framework" process steps | `lib/data/process.ts` |
| Testimonials | `lib/data/testimonials.ts` |
| Fit-check lists | `lib/data/fit-check.ts` |
| Pricing tiers | `lib/data/pricing.ts` |
| FAQ questions/answers | `lib/data/faq.ts` |

Section components live in `components/sections/`, one file per homepage
section, in the order they appear on `app/page.tsx`. Other pages
(`/about`, `/work`, `/services`, `/contact`, `/blog`) live under `app/`.

Placeholder images (hero portrait, profile photo, testimonial avatars) are
simple SVGs in `public/placeholders/` and `public/testimonials/` — swap them
for real photos by replacing the files (keep the same filenames) or updating
the `src` paths in the relevant components/data files.

## Hashnode blog integration

The blog (`/blog`, `/blog/[slug]`, and the homepage's "From the Blog"
section) fetches live posts from Hashnode's public GraphQL API via
`lib/hashnode.ts`. It's already pointed at the `favourogie.hashnode.dev`
publication by default.

To point it at a different publication, set an environment variable:

```bash
# .env.local
HASHNODE_PUBLICATION_HOST=your-publication-host.hashnode.dev
```

(Also add this in your Vercel project's Environment Variables when deploying.
See `.env.example`.)

If the publication has zero posts, or the Hashnode API is unreachable, the
blog sections degrade gracefully and show "New posts coming soon" instead of
erroring.

## Deploying to Vercel

1. Push this repo to GitHub (already set up if you're reading this from the
   repo).
2. In [Vercel](https://vercel.com/new), import the GitHub repository —
   Next.js is auto-detected, no extra config needed.
3. Add the `HASHNODE_PUBLICATION_HOST` environment variable if you want to
   override the default publication.
4. Deploy. Every push to the main branch will auto-deploy; pull requests get
   preview deployments.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Homepage — assembles all sections in order
  about/, work/,
  services/, contact/  Stub pages
  blog/, blog/[slug]/  Live Hashnode-powered blog
components/
  nav.tsx, footer.tsx  Global chrome
  sections/            One component per homepage section
  ui/                  Shared primitives (buttons, eyebrow labels, etc.)
lib/
  hashnode.ts          Hashnode GraphQL client
  site-config.ts       Site-wide constants (name, email, nav, socials)
  data/                Editable content for each section
```
