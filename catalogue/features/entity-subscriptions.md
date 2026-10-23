# Entity subscriptions

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-4 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-SUBSCRIPTION. |
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
| COMMON-SUBSCRIPTION-01 | An entity may subscribe to one engine, multiple engines or multiple suites. Store entitlements and effective dates in the database. | Recorded requirement/design direction; implementation not verified |
| COMMON-SUBSCRIPTION-02 | Restrict architecture selection, navigation and data operations to subscribed capabilities, intersected with access permissions. | Recorded requirement/design direction; implementation not verified |
| COMMON-SUBSCRIPTION-03 | Subscription scope is entity-specific; group administration cannot grant an unsubscribed capability. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
