# Shared architecture and history

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-12 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-REUSE. |
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
| COMMON-REUSE-01 | Reuse services, functions, APIs/DTO infrastructure, frontend controls, validation, approvals, document metadata, audit, imports, sync, reporting and search across suites/modules/components. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-02 | Domain-specific semantics, authoritative writers, rules and persistence remain owned by the relevant domain. Reuse does not imply one universal employee/vendor/aggregator table. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-03 | Keep approval, implementation, verification and publication statuses separate. No shared engine/module placement is silently allocated. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-04 | Configuration and preferences are logical database-backed designs; detailed APIs, DTOs, migrations, physical table names and acceptance tests remain to be designed. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
