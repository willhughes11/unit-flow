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

## Current Build Order
1. Auth + org model
2. Properties/units/contacts CRUD
3. Ticket workflow + timeline
4. AI triage + reply drafts
5. Reminders + document generation
6. Billing + onboarding + launch pages
