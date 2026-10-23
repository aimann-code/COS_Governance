# Google Sheet input and output

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.6; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-7 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-SHEET. |
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
| COMMON-SHEET-01 | Configure authorized spreadsheet, tab, range, headers, source-to-system mapping, key and permitted create/update mode for input synchronization. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-02 | System remains authoritative. Source values do not bypass validation or become the owner of fields. Define source ingestion, duplicate processing and conflict behaviour explicitly. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-03 | Export report data to an existing spreadsheet/tab/range or explicitly create a new spreadsheet/tab. No destination is chosen silently. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-04 | Before exporting, support selected columns, filters, sorting and record scope; show destination, selected fields, filters and affected record count. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-05 | Every export requires explicit Append or Clear old data and write confirmation, even when preferences prefill a choice. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-06 | Append retains existing rows and adds selected records; show detected duplicate-key conflicts. Clear-and-write previews the exact tab/range to clear and requires explicit confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-07 | Never silently clear an entire spreadsheet. Export only authorized fields/records. Saved preferences and one-event selections follow confirmation rules. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
