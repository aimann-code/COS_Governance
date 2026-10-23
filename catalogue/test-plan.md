# Full flow test plan

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

All cases below are planned. No application tests are executed by generating this document. Governance CI checks source integrity and reproducible documentation only.

| ID | Scenario | Expected result |
| --- | --- | --- |
| T01 | Create valid employee with configured fields | Record, key claim, history and event committed |
| T02 | Activate key with one field/missing values/duplicates | Blocked; affected field/record references shown |
| T03 | Missing/invalid/zero/one/multiple key match across every source | Correct distinct outcome; no ambiguous update |
| T04 | Concurrent duplicate create | One committed target; deterministic conflict for other request |
| T05 | Change key values using old key | Atomic key/record/history replacement or complete rollback |
| T06 | Stale row/config/preview | Reject or re-preview; no overwrite |
| T07 | Read-only/hidden fields/direct API bypass attempts | Same policy enforced on GUI and backend |
| T08 | Cross-entity or unsubscribed engine access | Rejected without protected metadata leakage |
| T09 | Preference declined, apply-once, confirmed save | Only confirmed preference persists |
| T10 | Excel/CSV headers, ambiguous suggestions and invalid row | Confirmed mapping and traceable row outcomes |
| T11 | PDF/email extraction and duplicate source | Uncertain data reviewed; duplicate ingestion prevented |
| T12 | Google Sheet input with missing key/conflicting mapping | No unauthorized or ambiguous writes |
| T13 | Append/clear output; destination changed after preview | Only confirmed scope written; stale confirmation rejected |
| T14 | Virtual mart filters/columns and Excel/CSV/PDF/Sheet outputs | Consistent authorized data; no direct-table reporting bypass |
| T15 | Search protected metadata/fields/data | Only permitted subscribed results |
| T16 | Configured error template and source context | Accurate missing-field/no-match distinction and masked provenance |
| T17 | Transaction failure and outbox retry | No partial domain commit; no repeated business effect |
| T18 | Migration rehearsal | Counts, business IDs, relationships, decrypted meaning/history reconciled |

## Evidence per executed case

| Evidence | Required content |
| --- | --- |
| Context | Design/application commit, environment, actor/group and subscription |
| Input | Authorized synthetic fixture and source position; no secrets/live data in repo |
| Action | API/UI request, config/key/template version and confirmation |
| Expected/actual | Assertion, observed outcome, timing and failure/defect reference |
| Database | Committed or rolled-back records, claims/history and outbox consistency |
| Outputs | Authorized report/Sheet rows, filters, destination and confirmed write mode |

Unit + PostgreSQL integration + API + browser tests are required as applicable. Pending business policies must be resolved before corresponding production acceptance.
