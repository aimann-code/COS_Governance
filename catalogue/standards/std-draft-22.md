# Backend Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.2; naming 0.2.0; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-22 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Server layering, domain authorization, transactions, metadata, workers, outbox, migrations and implementation evidence |
| Completion | Initial detailed draft prepared; approval and repository compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-BE-R01 | Organise packages by registered capability and layer; record actual owner and shared/domain boundaries. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R02 | Controllers map HTTP, bind/validate transport and invoke services; do not own database transactions or business decision rules. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R03 | Services enforce domain invariants and operation-specific authorization, coordinate transactions and return explicit results. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R04 | Repositories own parameterised SQL, explicit scopes, mappings and bounded access; avoid hidden network or business approval side effects. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R05 | Keep transport DTOs distinct from domain models and persistence records; validate unknown fields, nulls and types explicitly. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R06 | Commit accepted mutations, history, audit and required outbox atomically; roll back on failure and report a safe final state. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R07 | Implement the approved operation-specific authority matrix; do not force registration, employee updates and configuration through one assumed approver. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R08 | Define stable request/draft identity, payload matching, result replay and conflict responses for mutations. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R09 | Use explicit version checks and appropriate DB locking/uniqueness; avoid MAX(id)+1 and stale overwrites. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R10 | Allow configuration to select reviewed fields/types/validators and policies; reject executable code, arbitrary SQL and unknown mappings. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R11 | Pin immutable configuration for drafts/requests and revalidate according to an approved changed-config policy. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R12 | Claim eligible work once, recheck authority and state, classify failures, and expose retry/recovery; default unconfigured production execution closed. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R13 | Persist delivery intent in transaction and implement delivery/deduplication separately; distinguish storage from delivered external effects. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R14 | Bound payload sizes, rows, files, query pages, timeouts and repeated groups through approved config; document per-scope serialization limits. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R15 | Use stable sanitized errors, correlation/run references and measurable state transitions; redact request secrets and documents. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R16 | Use forward versioned migrations and explicitly retire/redirect old API paths; keep legacy data until reviewed migration/disposition. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R17 | Keep secrets, scopes, principal lookup and external source ownership server-controlled; do not accept actor/approver identities from clients. | 0.1.0 | Pending | Initial detailed draft; Pending |
| DRAFT-BE-R18 | Separate source presence, passing local tests, deployed service and production readiness; record environment-specific evidence. | 0.1.0 | Pending | Initial detailed draft; Pending |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Backend Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
