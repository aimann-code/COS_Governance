# Reports and dashboards

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-9 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-REPORT. |
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
| COMMON-REPORT-01 | Make reports configurable through shared reporting services over authorized datasets; do not expose unrestricted database columns. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-02 | Users can add/remove/reorder permitted columns, set supported column filters/date ranges, sorting, grouping and approved calculations. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-03 | Save multiple named report/dashboard views, selected widgets and layout as confirmed preferences. Sharing is limited to permitted users/groups. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-04 | Support Excel, CSV and PDF downloads with selected columns, filters, sorting and record scope. Apply the same field/record access as interactive views. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-05 | Support filtered report output to existing or explicitly new Google Sheet destinations using the mandatory append/clear confirmation process. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-06 | Official controlled outputs retain required definitions while allowing permitted presentation changes. Personal preferences do not alter approved payroll meanings. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-07 | Shared favorites/shortcuts open permitted components; employee self-service is a role-based workspace, not a duplicate business module. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-08 | All reporting reads database-backed virtual marts through the reporting service; canonical governing rule VIRTUAL-MART-01 in standards/standards.yaml. Google Sheets is an output, not reporting authority. | User-selected requirement; implementation pending |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
