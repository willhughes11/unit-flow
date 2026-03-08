# UnitFlow V1 PRD

## Product
UnitFlow is a landlord operations assistant for small landlords and small property managers.

V1 wedge:
- Maintenance intake
- Notice generation
- Follow-up automation

Core promise:
- Track tenant issues by unit
- Draft communications quickly
- Prevent dropped follow-ups

## Target Users
- DIY landlords (2-30 units)
- Small PM teams (20-150 units)

## Problem
Users are managing operations across text messages, email threads, PDFs, and memory. This causes:
- Lost maintenance requests
- Slow tenant response times
- Untracked vendor coordination
- Manual notice creation
- Missing unit-level history

## Goals (V1)
- Move issue handling into a single workflow.
- Cut response time from hours to minutes.
- Reduce overdue follow-ups.
- Create a complete audit timeline per unit.
- Convert first paying customers with manual onboarding.

## Non-Goals (V1)
- Full accounting
- Full lease lifecycle management
- Tenant screening
- Native mobile app
- Deep third-party integrations
- Full PM platform replacement

## Roles
- Admin: full access, billing, templates, team settings
- Manager: issue workflows, notices, vendor assignment
- Staff (read-only plus notes): view and comment

## Core Workflows
1. Intake -> Ticket
- Tenant submits public form or manager enters request.
- System creates ticket and logs initial event.
- AI suggests category, priority, and next step.
- Manager sends tenant acknowledgment.

2. Vendor Coordination
- Manager assigns vendor.
- System drafts outreach.
- Status changes to `waiting_on_vendor`.
- Reminder triggers if vendor does not respond.

3. Notice Generation
- Manager picks notice template and unit.
- System merges variables and generates output.
- Manager reviews, sends, or downloads PDF.
- Action is logged to unit and ticket timeline.

4. Closeout
- Manager marks issue complete.
- System drafts completion message.
- Ticket closes when confirmation is complete.

## Functional Requirements
- Org, user, and role management
- Property, unit, tenant, vendor CRUD
- Ticket CRUD with status board
- Ticket timeline and event log
- Reminder scheduling and due list
- Template library and variable merge
- Generated document storage and history
- AI assist:
  - issue categorization
  - tenant reply draft
  - vendor outreach draft
  - ticket summary
- Billing with Stripe plans by unit count

## UX Requirements
- One primary action per screen
- Ticket detail always shows:
  - current status
  - next step
  - latest outbound message
  - next reminder
- Unit detail always shows:
  - open issues
  - recent timeline
  - quick actions
- Ship default templates so users can get value without setup

## Metrics
Activation:
- Time to first ticket < 15 minutes
- Time to first sent template message < 20 minutes

Value:
- Median first-response time
- Overdue reminder count per organization
- Ticket close rate within 7 days

Business:
- Trial to paid conversion
- 30-day retention
- MRR by plan

## Risks and Mitigations
- Scope creep into full PM suite
  - Mitigation: enforce V1 non-goals
- Legal sensitivity of notices
  - Mitigation: editable templates and legal disclaimer
- Over-reliance on AI output
  - Mitigation: human review required before send
- Weak onboarding
  - Mitigation: done-for-you setup for first customers

## Launch Plan
Phase 1 (internal alpha):
- Core CRUD + ticket workflow + timeline

Phase 2 (design partners):
- AI drafts + reminders + notice templates

Phase 3 (paid beta):
- Stripe billing + onboarding + landing page

