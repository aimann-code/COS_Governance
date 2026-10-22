# Bulk upload and templates

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.3; naming 0.2.1; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-6 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-IMPORT. |
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
| COMMON-IMPORT-01 | Provide bulk create/update through Excel, CSV, PDF and Google Sheet input; support reusable per-component/entity mappings and configuration. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-02 | Excel/CSV processing supports source sheet/header selection, CSV delimiters and value formats, mapping, preview, validation and row-level results. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-03 | PDF processing supports extraction profile, filename/page/table-or-record traceability and review of uncertain extraction. Do not treat uncertain values as confirmed input. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-04 | Download entity/component-specific Excel/CSV templates for bulk update, with configured fields, required unique-key fields and mapping information. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-05 | Suggest close matching system fields for source headers in uploads and sync. Show suggestions; confirm ambiguous mappings. Field-header suggestions never automatically choose a target business record. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-06 | Enforce current access, complete unique keys, duplicate checks and validation at execution for every input channel. Record import/sync run ID and row outcomes. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-07 | Provide a one-event GUI path for the same operation without silently overwriting saved profiles. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
