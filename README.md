# ControlRoom

Executive-grade control center for users, projects, tasks, billing, and reports. Built with Next.js App Router, TailwindCSS, shadcn/ui, React Query, and a production-like mock API powered by MSW + IndexedDB.

## 👨‍💻 Author

**Amirhossein Shasti**

- 🌐 Website: [amirshasti.ir](https://amirshasti.ir)
- 🐙 GitHub: [@mramirparsa](https://github.com/mramirparsa)
- 📱 Telegram: [@mramirparsa](https://t.me/mramirparsa)
- 📸 Instagram: [@\_\_Amirhossein1999](https://instagram.com/__Amirhossein1999)

## Features

- App Router + TypeScript + TailwindCSS (shadcn/ui)
- Auth flows (login, register, forgot/reset), RBAC-aware routes
- Users, projects, tasks (kanban + list), billing, reports, and settings
- MSW + IndexedDB for realistic API behavior and persistence
- React Query data layer, React Hook Form + Zod validation
- Recharts dashboards and CSV export for invoices

## Routes

- Public: /login, /register, /forgot-password, /reset-password
- Protected: /dashboard, /users, /users/new, /users/[id]
- Protected: /projects, /projects/new, /projects/[id], /projects/[id]/tasks
- Protected: /tasks, /billing, /billing/invoices, /billing/invoices/[id]
- Protected: /reports, /settings, /settings/profile, /settings/security, /settings/organization
- Status: /403, /404, /500

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Demo credentials

- **Email:** mr.amirr.1998@gmail.com
- **Password:** Password123!

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run test
npm run test:watch
npm run test:e2e
npm run test:e2e:ui
```

## Tests

- Unit/integration: Jest + React Testing Library
- E2E: Playwright (Chromium)

If Playwright browsers are missing, run:

```bash
npx playwright install
```

## Mock data and seeding

- Users are generated with Faker and stored in IndexedDB.
- Passwords default to Password123! unless changed through reset flow.
- Data persists across reloads (clear site data to reset).

## Notes

- The mock API is enforced by MSW handlers in the browser.
- RBAC is enforced in handlers for users, projects, tasks, and invoices.

## Mock API

The app uses MSW handlers and IndexedDB to simulate backend behavior in the browser. Data persists across reloads.

## Tech stack

- Next.js 16 (App Router)
- React 19, TypeScript
- TailwindCSS v4 + shadcn/ui
- React Query, Zustand
- React Hook Form + Zod
- MSW + IndexedDB (idb-keyval)
- Recharts, Sonner

## License

MIT © [Amirhossein Shasti](https://github.com/mramirparsa)
