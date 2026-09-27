# Krunal Dhote Portfolio

A production-ready engineering portfolio for Krunal Dhote, positioned for Backend Software Engineer opportunities. The site presents verified professional experience, employer project contributions, technical expertise, and contact information in a recruiter-friendly format.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 plus a custom responsive design system
- `next/image` and `next/font` for optimized media and typography
- CSS-based motion with reduced-motion support

## Local development

Use a current Node.js LTS release (Node.js 20.9 or later is required by Next.js 16).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production validation:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Content and assets

- Portfolio content, projects, skills, experience, and contact links: `lib/portfolio.ts`
- Homepage composition: `app/page.tsx`
- Global visual system and responsive styles: `app/globals.css`
- Reusable UI components: `components/`
- Resume and portrait: `public/`
- SEO metadata: `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`
- Opt-in AI project workflow: `.ai/WORKFLOW.md`

Update structured content in `lib/portfolio.ts` rather than editing repeated markup. Replace the files in `public/` while retaining their filenames if the resume or portrait changes.

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the final canonical URL. Vercel's production URL is used automatically when the variable is not set in a Vercel deployment.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Deploy to Vercel

1. Push the repository to a Git provider supported by Vercel.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected **Next.js** framework preset and default build settings.
4. Optionally add `NEXT_PUBLIC_SITE_URL` with the final custom domain.
5. Select **Deploy**.
6. After connecting a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy so canonical metadata, the sitemap, and Open Graph URLs use that domain.

No database, server configuration, authentication, or external CMS is required.
