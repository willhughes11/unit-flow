# UnitFlow V1 Screen Spec

## Navigation
Top-level nav:
- Dashboard
- Properties
- Units
- Tickets
- Documents
- Contacts
- Templates
- Billing
- Settings

## Marketing
`/`
- Headline: stop managing rental ops through random texts and memory
- Primary CTA: Start free
- Secondary CTA: Book demo

`/pricing`
- Plans tied to unit count
- Trial details
- Setup fee option

## Auth
`/sign-in`
- Email/password + magic link (optional)

`/sign-up`
- Organization creation
- Initial admin user

## Onboarding
`/onboarding`
- Organization info
- Unit count estimate
- Add first property and unit
- Select default templates

## App Screens
`/dashboard`
- KPI cards: open tickets, overdue reminders, waiting on vendor, waiting on tenant
- Lists: urgent tickets, recent activity, due reminders

`/properties`
- Table: name, unit count, open tickets, last activity
- Search and filter

`/properties/[id]`
- Property profile
- Unit list
- Open tickets by unit
- Property documents

`/units`
- Table: unit, tenant, open tickets, status, last activity
- Filter by property

`/units/[id]`
- Unit profile
- Current tenant details
- Open and closed tickets
- Full timeline
- Quick actions: create ticket, generate notice, add note

`/tickets`
- Kanban columns:
  - new
  - waiting_on_manager
  - waiting_on_tenant
  - waiting_on_vendor
  - scheduled
  - in_progress
  - completed
  - closed

`/tickets/[id]`
- Header: title, category, priority, status
- Sections:
  - summary
  - message history
  - internal notes
  - timeline events
  - reminder schedule
- Actions:
  - draft tenant reply
  - draft vendor message
  - assign vendor
  - change status
  - generate notice
  - close ticket

`/documents`
- Generated documents table
- Filter by type, property, unit, ticket
- Send or download

`/contacts`
- Tenants tab
- Vendors tab

`/templates`
- Tenant message templates
- Vendor message templates
- Notice templates
- Template variable reference

`/billing`
- Current plan and limits
- Payment method
- Invoices
- Upgrade/downgrade

`/settings`
- Organization profile
- Team members and roles
- Notification defaults
- Communication defaults

## Public Intake
`/intake/[orgSlug]`
- Fields:
  - unit
  - issue type
  - description
  - urgency
  - access availability
  - photos
- Creates intake submission and ticket

