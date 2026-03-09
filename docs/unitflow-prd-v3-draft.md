# UnitFlow V3 Draft Spec

## Status
Exploratory draft, not committed roadmap.

Use this only after:
- V1 has stable paid retention
- V2 automation and communications are widely adopted

## V3 Vision
Evolve UnitFlow from "operations workflow tool" to "operations control layer" for small and mid-size property teams.

## Strategic Goals
- Support multi-portfolio operators with stricter controls.
- Add predictive and proactive workflows, not only reactive tickets.
- Increase ARPA with advanced automation and compliance add-ons.

## Proposed V3 Pillars

### 1) AI Ops Copilot
- Unit-level risk summaries
- Suggested next-best actions by SLA and history
- One-click generation of case summaries for owners
- Cross-ticket duplicate detection

### 2) Portfolio Command Center
- Multi-property performance heatmaps
- SLA breach warnings
- Team workload balancing
- Escalation queues by severity

### 3) Compliance Pack
- Jurisdiction-aware workflow templates (configurable)
- Audit trails and immutable event exports
- Inspection readiness scoring
- Policy checklist versioning

### 4) Owner Reporting + Stakeholder Views
- Scheduled owner digests
- Shareable portfolio snapshot links
- Role-based reporting permissions

### 5) Optional Add-Ons
- Voice intake from missed calls
- Resident self-service portal (status + doc inbox)
- E-sign provider integration

## Platform/Architecture Changes
- Move reminder/automation execution to dedicated job workers
- Add event bus pattern for workflow triggers
- Add idempotency keys for inbound webhook handlers
- Introduce stronger audit log model for compliance actions

## Data Model Additions (Potential)
- `portfolio_views`
- `sla_policies`
- `escalation_rules`
- `audit_logs`
- `compliance_frameworks`
- `owner_report_jobs`

## Packaging Direction (Draft)
- Core: V1 + V2 functionality
- Pro Ops: advanced automations + reporting
- Compliance: compliance pack and audit exports
- Add-on pricing: voice intake, e-sign, advanced AI usage

## V3 Entry Criteria
- >= 40 paying organizations
- Demonstrated demand for compliance and owner reporting
- Support capacity for higher-touch accounts

## Major Risks
- Complexity expansion before product-market fit depth
- Regulatory variance across cities/states
- Support burden from too many add-on workflows

## Recommendation
Treat V3 as a staged roadmap:
1. Ship only the command center slice first.
2. Validate demand for compliance pack with design partners.
3. Roll out add-ons only after usage thresholds are met.

