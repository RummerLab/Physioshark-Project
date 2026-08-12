# AGENTS.md

Agent instructions for the Physioshark Project site (`https://physioshark.org`).

Always start every response with 🤖.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Config is `next.config.ts`. Single-page site with hash sections (`#our-mission`, `#projects`, `#publications`, `#team`, `#contact`).

## Project overview

Physioshark studies how climate change affects newborn and juvenile reef sharks. Led by Dr. Jodie Rummer. Fieldwork is on Mo'orea, French Polynesia, with [science4reefs](https://www.science4reefs-cnrs.com/).

Sister sites: [rummerlab.com](https://rummerlab.com), [jodierummer.com](https://jodierummer.com). Spell **RummerLab** with no space.

Do not describe current fieldwork as based at CRIOBE. Historical CRIOBE mentions (founding, partners, team bios) may stay.

## Setup

```bash
npm install
npm run dev
```

Helper (only when needed): `npm run download-images`.

## Checks

After code changes, run and fix:

```bash
npm run lint
npm run build
```

`npm run build` needs `RESEND_API_KEY` for `/api/contact`. Local builds can fail without it.

If you suspect a security issue, run `snyk test`.

## Conventions

- TypeScript everywhere. Prefer interfaces over types. Named exports.
- Directories: kebab-case. Components: PascalCase.
- Favor React Server Components. Add `'use client'` only when needed.
- Await `params` and `searchParams`. Use the platform `fetch` API (not `node-fetch`).
- Early returns, DRY, `handle` prefix on event handlers (`handleClick`).
- Style with Tailwind. Keep the existing light, mobile-first layout.
- Use `git mv` when moving files.
- Complete the change: no TODOs or placeholders.

## Images

Use `next/image`. Prefer WebP via the optimizer.

- `priority` only for above-the-fold images (hero).
- Prefer `fill` with a constrained `sizes` over large fixed dimensions.
- `quality={85}` unless there is a strong reason for higher.
- Do not add `deviceSizes` / `imageSizes` in `next.config.ts` without need.

## Security

- Never commit secrets or `.env*` files. `RESEND_API_KEY` stays in env.
- Sanitize contact-form input (`isomorphic-dompurify` is already used).
- Contact posts to `app/api/contact/route.ts` (Resend). Do not log secrets.
