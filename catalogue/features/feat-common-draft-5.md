# Preferences and defaults

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-5 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-PREF. |
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
| COMMON-PREF-01 | Store preferences in the database for forms, configuration selections, mappings, imports, Google Sheet connections, reports, dashboards and favorites. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-02 | Always ask for explicit confirmation before saving or changing preferences. Configuration changes require their permitted administrator action and confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-03 | Offer a one-event option without replacing saved settings. Store the execution's resolved configuration versions and temporary selections for traceability. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-04 | Apply COS rules, then entity configuration, then permitted user preferences, then one-event selections. Later layers may customize only within earlier policy/security limits. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-05 | Support entity defaults, permitted personal defaults and one-event choices. Defaults may cover navigation; record lists/status/department/role/group/location; report columns/filters/dates/sort/group; dashboard views/widgets; upload mode/mapping/key; Google Sheet references/range/headers; download format/scope; form defaults/dependencies. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-06 | Show only applicable filters. Distinguish All permitted records, No selection and Blank value. Prefill does not imply permission or final write confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-07 | Offer to save selected Google Sheet references and settings only after confirmation. Never store credentials in ordinary preference records. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
