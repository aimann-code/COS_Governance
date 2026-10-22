# Security Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.2; naming 0.2.0; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-12 (temporary source reference) |
| Version | 0.1.1 |
| Purpose | Authentication, secure implementation and audit controls |
| Completion | Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-SEC-R01 | Resolve principal, roles and company scope from authenticated trusted server context; reject client-controlled authority. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R02 | Define permissions by operation and role, with default denial and explicit scope; UI role labels do not grant access. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R03 | Use an explicit server-controlled account-to-employee link; a directory viewer or matching name is not proof of employee ownership. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R04 | Scope every relevant lookup/mutation and document/reference to the authorised company and record; enforce composite relationships where needed. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R05 | Enforce independent read/write/print/export field policy server-side; configuration cannot grant itself permissions. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R06 | Use current operation-specific approvers and configured separation of duties; never trust approval flags or historical policy after an explicit superseding decision. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R07 | Signup creates pending access without assigning privileged roles; only the approved authority can verify, link and activate. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R08 | Store password hashes through reviewed password tooling; keep generated/bootstrap secrets outside source/product forms and restrict recovery paths. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R09 | For browser sessions use appropriately configured HttpOnly/SameSite/Secure cookies, CSRF protection and explicit allowed origins; production bearer profiles require separate reviewed controls. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R10 | Apply bounded login/signup/upload/query controls and record whether limits survive restarts or span instances; do not label in-memory local limits as production controls. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R11 | Encrypt protected identifiers, documents and snapshots with authenticated context and managed key references; keep fingerprint/idempotency keys separate. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R12 | Use keyed protected canonical fingerprints for low-entropy identity matching; define normalization/scope/version and rotation transitions. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R13 | Use approved secret delivery and least-privilege access, rotation, revocation and recovery; never regenerate keys against encrypted data without a transition. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R14 | Define approved TLS, origin, internal endpoint and egress rules before deployment; loopback development is not a production network policy. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R15 | Validate content, dimensions and format, sanitize and scan according to environment policy, restrict content access, and distinguish local validation from scanning. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R16 | Record actor/action/target/time/outcome and relevant references with protected access; redact secrets and full identity data from general logs. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R17 | Separate runtime/migration/administration access where deployed, minimise grants and protect append-only evidence; local broad privileges remain a disclosed limitation. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R18 | Recheck current authority for background execution and source access; unconfigured production principal lookup or critical scanner fails closed. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R19 | Classify sensitive fields and enforce approved retention, export, deletion and recovery policies; no invented legal retention period. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-SEC-R20 | Review security controls with negative, concurrency and environment-specific tests; separate local verification from deployment approval. | 0.1.1 | Pending | Initial detailed draft; Pending |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Security Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |
| Security Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
