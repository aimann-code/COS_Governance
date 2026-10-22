# Architecture Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.3; naming 0.2.1; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-2 (temporary source reference) |
| Version | 0.1.1 |
| Purpose | Hierarchy, ownership, boundaries and dependencies |
| Completion | Initial detailed draft: 16 rules, examples and validation checks; approval/compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-ARC-R01 | Register suite, engine, module and component identities, display names, parent references and responsibilities before treating a placement as a baseline. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R02 | Keep business architecture objects distinct from technical modules, services, controllers, repositories and deployment projects. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R03 | Assign one accountable owner object to each service, API, DTO, function, table, screen and generated output; record consumers separately. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R04 | Place reusable capabilities behind contracts; shared infrastructure must not import employee-specific DTOs, tables or business rules. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R05 | Record producer/consumer contracts and allowed dependency directions; detect cycles and avoid direct cross-domain database writes. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R06 | Keep identity, permission, money, approval, uniqueness and transaction invariants in reviewed domain code and DB constraints. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R07 | Record actual deployment/application structure separately from target structure; one feature-organised monolith does not establish microservices or verified Modulith boundaries. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R08 | Declare one authoritative writer/source for each dataset and phase; define conflict and cutover policy before synchronisation. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R09 | Record material architecture choices with problem, options, decision, authority, impact, status and supersedes references. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R10 | Separate current implementation, approved target, proposals and historical baselines; reconcile code/document drift explicitly. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R11 | Specify worker ownership, execution conditions, transactions, retry behaviour and failure recovery for asynchronous work. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R12 | Frontend routes and controls describe navigation; server-side API/domain ownership governs data changes. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R13 | Maintain explicit keys and contracts for cross-object relationships; similar field names do not establish a relationship. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R14 | Generate block diagrams, ER diagrams and screen maps from pinned registered definitions and approved layout profiles; label mockups versus captures. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R15 | Assess consumers, migrations, permissions, documents and rollout/rollback before changing boundaries or contracts. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-ARC-R16 | Record unresolved owners, prefixes, policies, technologies and production dependencies; authoring a design does not implement them. | 0.1.1 | Pending | Initial detailed draft; Pending |
| S-D20 | Obtain explicit permission to write; content approval alone is insufficient. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D27 | Retain superseded decisions with replacement references and reasons. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D28 | Track approval, targets, implementation, verification and publication separately. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D29 | Retain source references and adopted, superseded and unresolved status. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D33 | Test Dataset means latest 10 actual records by identified date/timestamp, or all if fewer. Ask when latest cannot be determined. Never substitute invented examples. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D52 | Separate internal chat/project UUIDs from provider-assigned IDs. Unknown provider IDs remain blank; preserve verified links and record any unavailable-ID limitation. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D60 | Retain all 20 selected standards. Complete and review detailed rules separately from category selection. | 0.1.0 | Approved catalogue direction | Current user direction; Approved catalogue direction |
| S-D62 | Use registered architecture, DB, screens, relationships, narrative, examples and assets as source; do not fabricate live datasets or screenshots. | 0.1.0 | Approved direction; renderer pending | Current user direction; Approved direction; implementation pending |
| S-D64 | Record one owner object per technical artefact and resolve its ancestry; register source files, exports, service/API/DTO/function links and implementation state. | 0.1.0 | Approved direction; exact owners partly pending | Current user direction; Approved direction; exact mapping pending |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Architecture Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |
| Architecture Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
