# UnitFlow V1 API + 30-Day Roadmap

## API Design Principles
- Keep endpoints organization-scoped.
- Default to server-side validation (zod or equivalent).
- Require authenticated org membership for all app routes.
- Log every state mutation to `ticket_events`.

## Core Endpoints
Base: `/api`

### Properties
- `GET /properties`
- `POST /properties`
- `GET /properties/:id`
- `PATCH /properties/:id`

### Units
- `GET /units`
- `POST /units`
- `GET /units/:id`
- `PATCH /units/:id`

### Contacts
- `GET /tenants`
- `POST /tenants`
- `PATCH /tenants/:id`
- `GET /vendors`
- `POST /vendors`
- `PATCH /vendors/:id`

### Tickets
- `GET /tickets`
  - Query params: `status`, `priority`, `propertyId`, `unitId`, `q`
- `POST /tickets`
- `GET /tickets/:id`
- `PATCH /tickets/:id`
- `POST /tickets/:id/messages`
- `POST /tickets/:id/events`

### Intake
- `POST /intake/:orgSlug`
  - Public endpoint with bot protection and rate limit

### AI
- `POST /ai/categorize-ticket`
- `POST /ai/draft-tenant-reply`
- `POST /ai/draft-vendor-message`
- `POST /ai/summarize-ticket`
- `POST /ai/generate-document`

### Documents/Templates
- `GET /documents`
- `POST /documents/generate`
- `GET /documents/:id`
- `GET /templates`
- `POST /templates`
- `PATCH /templates/:id`

### Reminders
- `GET /reminders`
- `POST /reminders`
- `PATCH /reminders/:id`
- `POST /jobs/process-reminders`
  - Protected worker endpoint (cron/queue trigger)

### Billing
- `POST /billing/create-checkout-session`
- `POST /billing/customer-portal`
- `POST /webhooks/stripe`

## Example Request/Response Shapes
`POST /api/tickets`
```json
{
  "propertyId": "uuid",
  "unitId": "uuid",
  "tenantId": "uuid",
  "title": "Kitchen sink leak",
  "description": "Water under sink since last night",
  "source": "intake_form"
}
```

```json
{
  "id": "uuid",
  "status": "new",
  "category": "plumbing",
  "priority": "high",
  "aiSummary": "Tenant reports active sink leak and possible cabinet damage.",
  "suggestedNextStep": "Acknowledge and dispatch plumbing vendor."
}
```

## 30-Day Build Roadmap
Assumes one focused builder, with manual onboarding for first customers.

### Week 1: Foundation
- Set up Next.js app structure and shared layout
- Add auth, organization, and role model
- Build properties, units, tenants, vendors CRUD
- Implement basic dashboard shell

Exit criteria:
- User can sign in, create org, add properties and units

### Week 2: Ticket Engine
- Build tickets list/board/detail
- Add status transitions and event logging
- Add ticket messages and internal notes
- Implement unit timeline from ticket events

Exit criteria:
- Full issue tracking workflow works without AI

### Week 3: AI + Reminders
- Add categorize-ticket AI action
- Add reply drafting for tenant and vendor
- Build reminders table, UI, and due list
- Add email sending (Resend)

Exit criteria:
- User can triage ticket faster and automate follow-up reminders

### Week 4: Documents + Billing + Launch
- Build template manager
- Add document generation and storage
- Integrate Stripe checkout and subscription gates
- Build landing + pricing pages
- Onboard 3-5 design partners manually

Exit criteria:
- Paid beta-ready with one clear workflow

## Launch Checklist
- Trial + paid plan configured
- First 5 templates available by default
- Intake form publicly shareable
- Demo data mode for sales calls
- Basic analytics events:
  - ticket_created
  - ai_draft_generated
  - reminder_sent
  - document_generated
  - trial_started
  - subscription_started

