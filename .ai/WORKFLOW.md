# Portfolio AI Workflow

## Activation

Use this workflow only when the user explicitly references `.ai/WORKFLOW.md` and asks the AI to work on the portfolio. Referencing this file authorizes implementation guidance only; it does not authorize any version-control action.

## Project context

- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, and custom CSS.
- Main page: `app/page.tsx`.
- Shared UI: `components/`.
- Portfolio content and contact links: `lib/portfolio.ts`.
- Site styling and responsive behavior: `app/globals.css`.
- Static resume and profile photo: `public/`.
- Validation commands: `npm run lint`, `npm run typecheck`, and `npm run build`.

## Content rules

- Treat the resume and user-provided updates as factual sources.
- Do not invent metrics, employers, dates, project ownership, links, or confidential technical details.
- Keep Backend Software Engineer as the primary positioning.
- Keep employer work clearly attributed when that context is confirmed.

## Explicit version-control commands

Never create a branch, commit, push, remote, or pull request unless the user explicitly requests that exact operation in the current message.

When an operation is explicitly requested:

1. Inspect `git status` and preserve unrelated or pre-existing changes.
2. Create a branch only when the user explicitly asks to create a branch. Use `feat/<short-task-name>`.
3. Commit only when the user explicitly says `commit`; include only requested, validated changes.
4. Push only when the user explicitly says `push`.
5. Create a pull request only when the user explicitly says `create PR` or `raise PR`.
6. Do not merge a pull request, force-push, rewrite history, or change repository permissions.

If a remote, GitHub authentication, or pull-request capability is unavailable, explain the blocker after completing the safe local work. Do not expose credentials or request them in chat.
