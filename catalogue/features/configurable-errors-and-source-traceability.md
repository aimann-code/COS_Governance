# Configurable errors and source traceability

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-11 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-ERROR. |
| Architecture responsibility | Not mapped |
| Open decisions/gaps | Detailed design, APIs, migrations and acceptance verification pending; see canonical group and pending decisions. |
| Acceptance criteria | Derived review checklist provided; executable acceptance tests pending |

## Architecture links

Placement is unresolved; no hierarchy invented.

## Implementation evidence

No linked implementation mapping in this partial inventory. Detailed code extraction remains future work.

## Common requirements

| Ref | Requirement | Status |
| --- | --- | --- |
| COMMON-ERROR-01 | Entity administrators configure message templates with permitted placeholders; retain stable machine-readable error codes and internal diagnostics. Template changes cannot turn failure into success or suppress required gates. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-02 | Missing key inputs identify the exact missing fields; missing source columns identify unmapped required key fields. Complete key with no match lists the key fields used, not fictitious missing values. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-03 | Include available record type and permitted record ID (such as sys_emp_id), run/request ID, affected field and source reference. Do not invent missing record IDs. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-04 | For Excel/CSV include filename, source sheet where applicable, row and source column. For Google Sheets include spreadsheet, tab, row/cell and a permitted source link when available. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-05 | For PDF include filename, page and extracted table/record reference. For email include message reference, permitted subject and attachment. For GUI/API include form/request reference and affected field. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-06 | Support placeholders such as record_type, missing_fields, key_fields and row_number. Mask sensitive values and do not disclose protected record existence/details through errors. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-07 | Show users what failed, where it failed and how to locate it. Examples are illustrative, not live record data. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
