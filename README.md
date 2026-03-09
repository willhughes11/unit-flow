# UnitFlow

UnitFlow is a landlord operations assistant focused on one painful workflow:
- maintenance intake
- notice generation
- follow-up automation

This repo currently contains:
- Next.js app scaffold
- V1 planning docs (PRD, UX, schema, API, roadmap)

## Docs
- [V1 PRD](docs/unitflow-prd-v1.md)
- [V2 PRD](docs/unitflow-prd-v2.md)
- [V3 Draft Spec](docs/unitflow-prd-v3-draft.md)
- [Screen Spec](docs/unitflow-screen-spec.md)
- [Schema SQL](docs/unitflow-schema.sql)
- [API + 30-Day Roadmap](docs/unitflow-api-roadmap.md)
- [Supabase Migration](supabase/migrations/20260308152500_unitflow_v1.sql)

## Local Development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Auth (Clerk)
This app is configured to use Clerk for auth flow.

Required environment variables:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

Optional (already wired in):
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`

Routes:
- Sign in: `/sign-in`
- Sign up: `/sign-up`
- Protected areas: `/dashboard/*`, `/onboarding`, and most `/api/*` routes
- Public API exceptions: `/api/intake/*` and `/api/webhooks/stripe`

## Current Build Order
1. Auth + org model
2. Properties/units/contacts CRUD
3. Ticket workflow + timeline
4. AI triage + reply drafts
5. Reminders + document generation
6. Billing + onboarding + launch pages
