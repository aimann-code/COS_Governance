# Entity field and form control

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-2 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-FIELD. |
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
| COMMON-FIELD-01 | Entity administrator configuration supports Entity, Suite, Engine, Module, Component and Field selection across all subscribed capabilities. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-02 | Configure field availability, labels/descriptions, order/grouping, required/optional state, defaults, read-only state, formats/ranges, allowed values and dependent fields. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-03 | Configure form layout, parent-field filtering, permitted field selection and component-specific validation. Preserve field business meaning separately from physical schema. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-04 | System owns all fields and authoritative data. Google Sheets is an input/output interface whose changes pass system validation, source matching and access checks. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-05 | Distinguish platform-managed identity/security/relationship controls. Label changes do not silently rename database keys. Disabling a field must not silently destroy existing data. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-06 | Maintain separate configuration, field-definition and data-value history, including actor, time, scope, source and effective version. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
