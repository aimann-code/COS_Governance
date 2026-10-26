# Frontend Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-21 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Screens, layout, navigation, forms, accessibility, responsiveness, state and typed API boundaries |
| Completion | Initial detailed draft prepared; approval and repository compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Approval | Publication | Implementation | Verification | Mapping state |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DRAFT-FE-R01 | Register each screen, owner, route, fields, controls, actions, state and permissions; labels resolve from the approved catalogue. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R02 | Use a consistent shell, navigation, spacing and component vocabulary across a feature; separate presentation from orchestration. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R03 | Use validated resource routes, history and deep links; preserve intended authorised destinations across sign-in. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R04 | Distinguish checking, authenticated, confirmed unauthenticated and connection failure; server credentials remain authoritative. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R05 | Use typed API adapters and canonical DTO mapping; keep network orchestration outside reusable presentational controls. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R06 | Show only relevant actions for the user's role and workflow; backend checks remain mandatory. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R07 | Render approved additional field definitions, order and required state from a pinned config; fixed business invariants remain explicit. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R08 | Provide labels, required indicators, help and field-level errors; preserve input on validation failure. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R09 | Render ID controls according to the approved mode/profile; never silently convert between manual and generated identity policies. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R10 | Separate unsaved state, persisted draft and submitted snapshot; show save state, resumability and exit warnings accurately. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R11 | Carry record/config versions and prevent stale network responses replacing newer state; resolve conflicting writes explicitly. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R12 | Define accessible loading, empty, error, partial and completed states; do not invent successful outcomes or counts. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R13 | Provide semantic controls, keyboard operation, focus management, accessible names and announced errors; combine automated and manual checks. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R14 | Keep actions, navigation and tables usable on narrow/short screens; contain horizontal scrolling and avoid clipped controls. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R15 | Preview mapped rows/files before mutation, show errors and policy limits, and distinguish configured integrations from unavailable ones. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R16 | Mask restricted values, avoid sensitive URLs/browser persistence, and require explicit authorisation for printing/exporting. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R17 | Use DD-MMM-YYYY for user-readable dates while retaining typed values and wire formats; format money and timezone deliberately. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-FE-R18 | Label design previews, demo mode and running-app screenshots accurately; test current connected flows separately from historical demo tests. | 0.1.0 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DATE-TIME-01 | Use DD-MMM-YYYY for user-readable dates, for example 23-Oct-2026. Use hh-mm-ss AM/PM for user-readable time, for example 02-05-09 PM. This display convention does not replace typed dates/timestamps or redefine API wire formats. | 0.1.0 | Approved by user; not published | See source; not independently reconciled | Governance definition recorded; application changes not performed | Not independently reconciled | Approved decision supplement; Approved by user; not published |
| VIRTUAL-MART-01 | All reports, dashboards and their file/Google Sheet outputs read database-backed authorized virtual marts through the reporting service. System/domain tables remain authoritative; no parallel editable reporting master. Field selection and filters use governed datasets; enforce entity, subscription, group/field/record access. Physical view schema/grain/ownership and performance plans remain design work. | 0.1.0 | User-selected direction; authorized recording; not published | See source; not independently reconciled | Design only; reporting views/service not deployed | Not independently reconciled | User-authorized direction; User-selected direction; authorized recording; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Frontend Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
