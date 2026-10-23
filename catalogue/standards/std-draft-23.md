# URL Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-23 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Frontend/API paths, resource identities, methods, nesting, queries, redirects, versioning and origin policy |
| Completion | Initial detailed draft prepared; approval and repository compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-URL-R01 | Register frontend and API routes with owner, purpose, allowed methods/roles, parameters and version; do not assume URL equals permission. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R02 | Use readable frontend routes and a versioned COS API namespace; keep wire endpoints separate from screen paths. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R03 | Use lower-case kebab-case resource segments and stable plural collection names; preserve explicit singleton endpoints where justified. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R04 | Use stable authorised resource identifiers in paths; prohibit names, national IDs, bank details, tokens and credentials. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R05 | Nest resources only where ownership/context is meaningful; avoid copying the full suite/engine/module hierarchy into every route. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R06 | Use bounded validated query parameters for search, filters, cursors and sort; define defaults and reject unsupported parameters where appropriate. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R07 | GET reads must not mutate business state; use registered mutation methods and avoid action semantics hidden in GET URLs. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R08 | Use action subpaths only for genuine domain transitions that cannot be represented clearly as ordinary resource edits. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R09 | Choose and test a canonical slash/case policy per application; route aliases must preserve intended auth and method behaviour. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R10 | Allow only validated internal return destinations; preserve authorised deep links and distinguish redirects from permission grants. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R11 | Handle unknown routes and unauthorised resources consistently without exposing restricted existence or data. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R12 | Validate identifier formats, encode user query values and decode exactly once; never trust path text as a database identifier. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R13 | Version breaking API changes explicitly and record route deprecation/retirement; frontend redirects need a compatibility plan. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R14 | Keep browser API origin/proxy, server upstream and allowed origins configured; never expose server secrets through public URL config. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R15 | Ensure supported frontend deep links, browser history, refresh and signed-in landing paths resolve consistently. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-URL-R16 | Keep environment/service hostnames separate from logical resource identity and standard names; document base URLs without freezing local hosts as production. | 0.1.0 | Pending | Initial detailed draft; Pending |
| API-PATH-01 | Use /api/v1/<resource> as the default API path; cos is not required in the path. Use /api/cos/v1/<resource> only when a shared host requires product separation. This supplements NAM-FRZ-R11 without changing frozen Naming 0.2.0. Existing routes remain unchanged until an explicitly reviewed compatibility migration. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| URL Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
