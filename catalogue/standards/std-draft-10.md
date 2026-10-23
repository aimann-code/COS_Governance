# Development Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-10 (temporary source reference) |
| Version | 0.1.1 |
| Purpose | Coding, source layout, review and tests |
| Completion | Initial detailed draft: 16 rules, examples and validation checks; approval/compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-COD-R01 | Use an approved language/framework profile for formatting, file structure, imports, type checks and exceptions; preserve framework-required names. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R02 | Use the registered COS_ACTION_OBJECT convention for custom callable symbols unless a documented framework constraint requires another name. | 0.1.1 | Superseded in naming scope by D67 | Historical mapping; D67 controls revised naming; Superseded in naming scope |
| DRAFT-COD-R03 | Keep functions focused on a coherent operation and isolate domain rules from transport, rendering and persistence plumbing. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R04 | Define inputs, outputs, nullable values and side effects; avoid implicit coercion of identifiers and dates. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R05 | Read approved versioned business configuration; credentials and environment endpoints come from appropriate runtime configuration. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R06 | Validate untrusted inputs at boundaries and enforce domain invariants again where writes occur. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R07 | Use parameterised database access and bounded queries; avoid string-concatenated SQL, raw user-selected tables or function paths. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R08 | Make business mutations, history, audit and required outbox entries atomic; document external side effects separately. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R09 | Use stable safe error codes and actionable messages; do not swallow failures or expose secrets, SQL or raw sensitive payloads. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R10 | Define replay-safe mutation semantics; retry only classified safe failures and preserve payload/idempotency identity. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R11 | Keep dependencies declared and pinned through manifests/lockfiles; review changes and avoid unnecessary coupling. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R12 | Keep secrets and real sensitive fixtures out of source, tests, logs and build artefacts; use synthetic examples. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R13 | Test business outcomes, permissions, conflicts, concurrency and recovery at suitable layers; avoid tests that merely mirror implementation details. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R14 | Run relevant formatting, lint, type, build and test checks for the change; record actual outcomes and limitations. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R15 | Review behavioural changes and add forward migrations instead of editing applied database migrations. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-COD-R16 | Link source files and verification to registered rules/decisions; distinguish planned names from files that exist. | 0.1.1 | Pending | Initial detailed draft; Pending |
| S-D63 | Custom callable symbols use COS_ACTION_OBJECT; classes/DTOs/services use COS + PascalCase; code files use cos-<scope>-<purpose>.<role>.<extension>; shared services omit EMP. Preserve framework-required names and existing business IDs. | 0.1.0 | Superseded in symbol/file naming by D67; retained business IDs remain | Historical mapping; D67 controls revised naming; Superseded in naming scope |
| GITHUB-CONFIRM-01 | Before any future GitHub update, show the proposed content and summary and ask: Update Git Hub - Yes/No. Perform the specified update only after an affirmative user instruction. Authorization covers the necessary commits, generated catalogue refresh and verification for that described update; it does not authorize unrelated edits, merging or publication. Read-only GitHub checks need no update approval. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | User-selected scoped standard; User-selected storage standard; authorized recording; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Development Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |
| Development Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
