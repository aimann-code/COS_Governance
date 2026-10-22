# Email extraction

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.4; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-8 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-EMAIL. |
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
| COMMON-EMAIL-01 | Configure authorized mailbox/source, sender, subject and relevant message headers. Email headers and attachment column headers are separate mapping concepts. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-02 | Select email body and/or attachments; configure extraction profile for body, Excel, CSV or PDF and map results to the target component. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-03 | Track message and attachment references to avoid duplicate processing. Reuse shared import validation, access, unique matching and row-result handling. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-04 | Choose preview/review or an explicitly configured automatic processing mode; no mailbox, recurring job or automatic processing is activated by this design. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
