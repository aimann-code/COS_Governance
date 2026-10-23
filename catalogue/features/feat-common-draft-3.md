# Access groups

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-3 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-ACCESS. |
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
| COMMON-ACCESS-01 | Entity owner has full access within its own entity and subscription; no cross-entity or COS administration rights follow automatically. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-02 | Entity administrator receives administration permissions through an admin access group. Create access groups and assign one or more groups to users. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-03 | Group permission selection supports Suite, Engine, Module, Component and Field, with read/write permissions. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-04 | Check all hierarchy levels, field access, entity boundaries and record scope in both frontend and backend. Labels do not reveal protected fields or metadata. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-05 | Apply the same effective permissions to APIs, search, dashboards, reports, downloads, imports, mappings, email extraction and Google Sheet input/output. Frontend hiding alone is insufficient. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-06 | Subscription entitlement and access-group permission must both permit an operation. Saved preferences, defaults and one-event overrides cannot expand access. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-07 | Parent-to-child inheritance, access to future children and multi-group conflict precedence remain explicit pending decisions; do not silently choose union, inheritance or deny precedence. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
