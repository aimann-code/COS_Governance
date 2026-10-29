# Requirement traceability

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

Draft traceability links describe intended coverage, not implementation evidence.

| Requirement | Profile/rule and data contract | Component/workflow | Test evidence |
|---|---|---|---|
| Authorized intake and originals | source-policy.yaml; source_file/run | Intake/Registration | Preservation and access tests planned |
| Complete extraction | Report/Table Profiles; raw records/values | Resolution/Extraction | Coverage/orientation/error tests planned |
| Standard facts | Field/master mappings; typed facts | Standardization | Identity/conversion/overlap tests planned |
| Calculations | calculation-rules.md; calculation_result | Business Calculation | Approved fixtures pending |
| Reconciliation | reconciliation.md; match/allocation | Reconciliation | Split/combined/ambiguity cases planned |
| GST/TDS | tax-and-accounting.md; tax_component | Tax Working | Effective treatment and fixtures pending |
| Accounting preparation/posting | Accounting profiles; documents/batches/attempts | Preparation/Connector | Balance, retry and readback tests planned |
| Reports | Controlled views/output profiles | Report Generator | Grain/coverage/permission tests planned |
| Audit/security/recovery | Versioned approvals/audit/run ledger | Cross-cutting services | Access/replay/recovery tests planned |

Each implemented item must extend this chain to the exact API/screen, test execution and code/commit evidence. None of those implementation links is supplied by this documentation-only update.

References: [requirements](../requirements/common-requirements.md), [developer guide](../guides/developer-guide.md), [acceptance plan](../testing/acceptance-tests.md), [open decisions](decision-query-tracker.md).
