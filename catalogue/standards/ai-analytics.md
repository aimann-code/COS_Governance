# AI / Analytics Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.6; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-13 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | AI Chat/output, analytical definitions and evaluation |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| GITHUB-CONFIRM-01 | Before any future GitHub update, show the proposed content and summary and ask: Update Git Hub - Yes/No. Perform the specified update only after an affirmative user instruction. Authorization covers the necessary commits, generated catalogue refresh and verification for that described update; it does not authorize unrelated edits, merging or publication. Read-only GitHub checks need no update approval. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| CHAT-SOURCE-01 | Apply standards/workflow.yaml branch read/write protocol: explicitly resolve repository/branch/commit; read source inventory and relevant definitions; refresh before writing, reconcile concurrent work and confirm each described update. Main is the integrated entry point, but artifact readiness and exact approved baselines control development. No automatic chat sync or implicit merge. | 0.1.0 | User-authorized recording; publication requires reviewed integration | Direct category |
| S-D17 | AI Standard is the umbrella containing AI Chat Standard. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D18 | Show summary and relevant examples before generating or updating files. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D19 | Display content, dataset, status, update, new-file and backup controls. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D21 | Add Content first and default; Summary, Full, Example, Suggestion and None. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D22 | Show Dataset: Table Header/Test Dataset/Full Dataset/None. Status: Draft/Approved. Update File, Generate New File and Backup: Yes/No. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D23 | AI Chat display column; separate provider, chat ID/link and optional project name/ID/link; unknown values blank. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D24 | Scope and Entity follow design responsibility; project membership does not establish authority. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D25 | One active primary design chat per object; retain supporting and historical links. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D26 | Any chat may propose changes; shared approved decisions establish authority. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D32 | Show all controls together with All files or individual file selection. Retain separate per-file selections where needed. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D34 | After Submit Selection, display selected files tab headers or document section headings and requested dataset views. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D35 | Show Content Add Content; Show Dataset None; Content Status Draft; Update File No; Generate New File No; Backup Yes when updating otherwise disabled No. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D36 | None clears other options in its row. For one target Update and New are mutually exclusive. Submit previews intent; explicit generation permission is required. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D46 | Use shared UUID identities, explicit foreign keys within a database and approved APIs/events across services. Many-to-many relationships use mapping tables; no comma-separated foreign-key lists. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D50 | Maintain one active primary design chat per object. Proposed rollout creates suite, engine, module and component chats progressively as design starts, retaining parent references and superseded mappings. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D51 | Register planned chat name and object mapping first; configure/create the AI project and chat; record the actual provider chat/project IDs and links; verify mapping before activation. | 0.1.0 | Approved | Proposed mapping; Approved |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | User-selected scoped standard; User-selected storage standard; authorized recording; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| AI / Analytics Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
