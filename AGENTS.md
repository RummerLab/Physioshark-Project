# AGENTS.md

Instructions for coding agents working on the Physioshark Project site (`https://physioshark.org`).

Always start every response with 🤖.

This is a Next.js 16 (App Router) + React 19 TypeScript site with Tailwind CSS. Prefer clear, maintainable, accessible solutions.

## Project overview

Single-page site for the Physioshark Project, led by Dr. Jodie Rummer. Fieldwork is based on Mo'orea, French Polynesia, in collaboration with [science4reefs](https://www.science4reefs-cnrs.com/). The project studies how climate change affects newborn and juvenile reef sharks.

Related sites: [rummerlab.com](https://rummerlab.com), [jodierummer.com](https://jodierummer.com).

Do not describe current fieldwork as based at CRIOBE. Historical CRIOBE collaboration (founding, partners, team bios) may remain.

## Setup commands

```bash
npm install
npm run dev
```

## Testing instructions

Run these after any code changes, and fix failures before finishing:

```bash
npm run lint
npm run build
```

`npm run build` requires `RESEND_API_KEY` for `/api/contact`. Local builds without that env var can fail while collecting page data.

Image helper: `npm run download-images`.

## Code style

- Write concise, readable TypeScript. Prefer interfaces over types. Avoid enums; use const maps. Use `satisfies` when validating object shapes.
- Functional, declarative patterns. DRY. Early returns.
- Structure components as: exports, subcomponents, helpers, types.
- Descriptive names with auxiliary verbs (`isLoading`, `hasError`).
- Prefix event handlers with `handle` (`handleClick`, `handleSubmit`).
- Directories: lowercase with dashes (`components/auth-wizard`).
- Favor named exports.

## React and Next.js

- Favor React Server Components. Minimize `'use client'`.
- Use error boundaries and `Suspense`.
- Use `useActionState` (not deprecated `useFormState`).
- Use enhanced `useFormStatus` (`data`, `method`, `action`) when handling forms.
- Minimize client-side state; prefer URL state (`nuqs`) when needed.
- Await runtime APIs:

```ts
const cookieStore = await cookies()
const headersList = await headers()
const { isEnabled } = await draftMode()
const params = await props.params
const searchParams = await props.searchParams
```

- Fetch is not cached by default. Use `cache: 'force-cache'` when caching is intended.
- Contact form posts to `app/api/contact/route.ts` (Resend). Do not log secrets.

## UI, a11y, and performance

- Tailwind, mobile-first. Consistent spacing. Responsive across breakpoints.
- Semantic HTML, ARIA, keyboard navigation, meaningful `alt` text, WCAG 2.1.
- Optimize images (WebP, sizing, lazy loading). Use `next/font`. Monitor Core Web Vitals.

## Security

- Sanitize user inputs (contact form uses DOMPurify).
- Never commit secrets. `RESEND_API_KEY` belongs in env, not source.
- Follow security best practices and keep ESLint passing.
