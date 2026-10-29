# Developer guide

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

Start with [requirements](../requirements/common-requirements.md), [architecture](../architecture/engine-design.md), [profiles](../profiles/report-profiles.md), [data contracts](../data-design/data-model.md) and [open decisions](../tracking/decision-query-tracker.md). No published coding baseline or selected technology is established by saving these Draft documents.

Every component implementation specification must include purpose, inputs, output contracts, configuration versions, permissions, validation, error classes, retry/idempotency behaviour, tests and completion evidence.

For Table Extraction: input is a registered source plus resolved Report/Table Profile versions; output is raw records, coordinates, coverage and exceptions. Required tables must be detected or excepted. Preserve failure evidence and distinguish source/configuration problems from software defects. Versioned reruns must not duplicate accepted facts.

| Milestone | Deliverable | Completion gate |
|---|---|---|
| 1 | Scope, profiles, field definitions and grains | Reviewed contracts and fixtures with expected results |
| 2 | Intake, private storage, registration | Originals preserved; duplicate/revision controls demonstrated |
| 3 | One complete extraction vertical slice | Every source item extracted, classified or explicitly excepted |
| 4 | Second layout plus standardization/facts | Configuration reuse, identity, counts, values and lineage demonstrated |
| 5 | Calculations and reconciliation | Approved examples and exception/partial-allocation cases pass |
| 6 | GST/TDS and accounting preparation | Reviewed treatment, exact mappings and balanced preview |
| 7 | Integration, reports and operations | Authorized access, safe retries, monitoring and recovery demonstrated |

API names are pending; required capabilities are register/select source, validate profile, start/retrieve run, review mapping, resolve exception, reconcile, prepare accounting, export/submit and generate report. Long work returns a durable run reference.

Minimum screens: connections/intake; profiles; mappings; run/coverage monitor; exceptions; reconciliation; GST/TDS; accounting preview/results; reports/audit. User errors state the correction needed; technical diagnostics use restricted access.

Maintain separate dimensions: definition Draft/Review/Published; run Queued/Running/Completed/Completed with exceptions/Failed/Cancelled; validation Pass/Review/Fail; reconciliation Unmatched/Partially matched/Matched/Disputed; approval Draft/Under review/Approved/Rejected; submission as defined in the integration contract. Values require governed-master alignment before implementation.

Check permissions on the server, not only in the UI. Use credential references, never secrets in profiles. Review must capture actor, exact version, decision and timestamp.

Keep a durable processing ledger; record retry attempts; isolate incomplete staging; commit accepted batches atomically; version corrections. Monitor missing files, stalled runs, unresolved exceptions and connector failures. Define recovery for database, configuration and original files independently.

Technical stack, physical schema, API endpoints, deployment, secrets infrastructure, scheduler and recovery targets remain pending. Code completion, deployment and operational acceptance are separate milestones.
