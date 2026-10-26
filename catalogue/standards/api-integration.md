# API / Integration Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.9; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-11 (temporary source reference) |
| Version | 0.1.1 |
| Purpose | APIs, DTOs, events, mapping, retries and idempotency |
| Completion | Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Approval | Publication | Implementation | Verification | Mapping state |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DRAFT-API-R01 | Register every API operation with owner, method, route, input/output DTO, permissions, version and side effects. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R02 | Own reusable envelopes in shared contracts and domain payloads in their domain; define producer/consumer compatibility. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R03 | Define required/optional/null fields, types, length/range limits, enums and unknown-field behaviour; preserve identifier strings. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R04 | Use distinct request, query, response and decision contracts where semantics differ; server-owned fields cannot be trusted from requests. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R05 | Document status semantics per endpoint: successful reads/creates/accepted jobs/no-content, validation, unauthenticated, forbidden/not-found, conflicts, size/rate limits and safe server failures. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R06 | Return stable error_code, safe message, optional field errors and correlation/request reference; never include sensitive raw values. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R07 | Validate transport/schema at ingress, business policy in domain services and integrity in DB constraints; reject unknown executable behaviour. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R08 | Authenticate and authorise every read/write at action, company scope, record and field levels; scopes derive from trusted server identity. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R09 | Require explicit record/draft/config versions for conflicting edits and decisions; return deterministic conflict responses. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R10 | Define idempotency key/reference scope, payload binding, committed-result replay and retention for commands; reused keys with different content conflict. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R11 | Bound collection requests, specify stable ordering and cursor/filter compatibility, and separate loaded counts from total counts. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R12 | Document allowed transitions and operation-specific approvers; distinguish direct commands from pending proposals. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R13 | Imports/configuration previews are non-mutating; submit pins source, mapping and config versions; changed sources require reviewed revalidation. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R14 | Specify row identity, per-row errors, limits and whole/partial acceptance policy; classify local assumptions separately from approved business policy. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R15 | Document accepted formats, content validation, size/dimension bounds, authenticated storage, scan state and download policy. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R16 | Use approved server-side credentials and source authority; fetching a user-pasted URL is not authorisation. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R17 | Define safe retry classes, timeout/backoff limits, event identity and consumer deduplication; persist delivery intent before asynchronous work. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R18 | Keep wire schema/API version separate from code/document versions; breaking changes require consumer impact, transition and retirement evidence. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R19 | Maintain an authoritative machine-readable contract or approved equivalent and generate examples/documentation from pinned schemas; do not assume annotations alone are complete. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| DRAFT-API-R20 | Record implementation/build/integration evidence for each operation, including unavailable sources and stub responses; code presence alone is not end-to-end delivery. | 0.1.1 | Pending | See source; not independently reconciled | Not independently reconciled | Not independently reconciled | Initial detailed draft; Pending |
| API-PATH-01 | Use /api/v1/<resource> as the default API path; cos is not required in the path. Use /api/cos/v1/<resource> only when a shared host requires product separation. This supplements NAM-FRZ-R11 without changing frozen Naming 0.2.0. Existing routes remain unchanged until an explicitly reviewed compatibility migration. | 0.1.0 | Approved by user; not published | See source; not independently reconciled | Governance definition recorded; application changes not performed | Not independently reconciled | Approved decision supplement; Approved by user; not published |
| VIRTUAL-MART-01 | All reports, dashboards and their file/Google Sheet outputs read database-backed authorized virtual marts through the reporting service. System/domain tables remain authoritative; no parallel editable reporting master. Field selection and filters use governed datasets; enforce entity, subscription, group/field/record access. Physical view schema/grain/ownership and performance plans remain design work. | 0.1.0 | User-selected direction; authorized recording; not published | See source; not independently reconciled | Design only; reporting views/service not deployed | Not independently reconciled | User-authorized direction; User-selected direction; authorized recording; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| API / Integration Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |
| API / Integration Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
