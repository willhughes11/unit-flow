# UnitFlow V2 PRD

## Scope
V2 expands V1 from a single workflow engine into a repeatable operations system for small PM teams.

Timeline target:
- 60 to 90 days after V1 paid beta

## V2 Goals
- Increase retention through daily-use workflows.
- Reduce manual follow-up effort by at least 40%.
- Improve team collaboration with role-based operations.
- Introduce light reporting and vendor accountability.

## V2 Outcome Statement
From:
- "Track and close maintenance issues."

To:
- "Run recurring rental operations with fewer dropped tasks and faster resolution."

## V2 Features

### 1) Two-Way Communication Hub (Email + SMS)
- Unified thread view per ticket
- Inbound SMS mapped to ticket/unit
- Message status: queued, sent, delivered, failed
- Snippets + template insertion

### 2) Automation Rules Engine
- Trigger-based rules:
  - `ticket_created`
  - `status_changed`
  - `reminder_overdue`
  - `no_vendor_response_24h`
- Actions:
  - send message
  - create reminder
  - assign vendor
  - escalate priority

### 3) Vendor Portal Lite
- Vendor magic-link access
- View assigned jobs and required details
- Update status and ETA
- Upload completion photos

### 4) Inspections + Recurring Tasks
- Property/unit inspection templates
- Recurring schedules (monthly/quarterly/annual)
- Failed item conversion to ticket

### 5) Rent Reminder Workflow (Light)
- Scheduled reminders before/after due date
- Track sent reminders and acknowledgments
- Optional late-fee message templates

### 6) Reporting (Ops-first)
- Median response time
- Median time-to-close
- Overdue ticket aging
- Vendor responsiveness leaderboard

## Non-Goals (V2)
- Full rent ledger/accounting
- Full lease lifecycle platform
- Tenant screening
- Native mobile app
- Deep ERP integrations

## UX Additions
- `/dashboard/inbox` (cross-ticket communications)
- `/dashboard/automations` (rule builder + logs)
- `/dashboard/inspections` (schedules + checklists)
- `/dashboard/vendors/[id]/portal-preview`
- `/dashboard/reports` (ops analytics)

## Data Model Additions (Delta from V1)
- `communication_threads`
- `communication_messages`
- `automation_rules`
- `automation_runs`
- `inspection_templates`
- `inspection_runs`
- `inspection_items`
- `vendor_job_updates`

## API Additions (Delta from V1)
- `POST /api/messages/inbound/twilio`
- `GET /api/inbox`
- `POST /api/automations`
- `PATCH /api/automations/:id`
- `GET /api/automations/runs`
- `POST /api/inspections/templates`
- `POST /api/inspections/runs`
- `POST /api/vendors/:id/magic-link`
- `POST /api/vendor-portal/jobs/:id/update`
- `GET /api/reports/ops-summary`

## Success Metrics
- 30-day logo retention > V1 baseline by +15%
- Median ticket close time improves by 20%
- Overdue reminders reduced by 30%
- At least 50% of active orgs enable >= 1 automation rule

## Delivery Plan
1. Communication hub + inbound SMS
2. Rules engine + execution logs
3. Vendor portal lite
4. Inspections + recurring tasks
5. Reporting and performance polish

