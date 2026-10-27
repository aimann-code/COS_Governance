# Tool Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.9; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-17 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Permitted tools and controlled configuration |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Approval | Publication | Implementation | Verification | Mapping state |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | See source; not independently reconciled | Repository policy recorded; no actual skill migration/installation/activation or backup automation | Not independently reconciled | User-selected scoped standard; User-selected storage standard; authorized recording; not published |
| AI-CREATE-CONFIRM-01 | Before creating any stored artifact or external resource, first show its proposed content or concrete scope, name, location and purpose, together with pending approvals and exclusions. Ask for confirmation and wait for an explicit affirmative instruction covering that scope before creation. This applies to files, documents, branches, repositories, registers, schemas, tables, code and skills, including reversible creations. An instruction authorizing an already-previewed specific update is valid confirmation for that update and its necessary commits/generated derivatives; do not repeatedly ask for the same confirmed scope. Questions, suggestions, silence and unrelated approvals do not authorize creation. Scope changes require a new preview and confirmation. Read-only inspection and in-chat previews can proceed. Do not create, rename, delete or merge unrelated resources, change permissions or publish/deploy under this confirmation. | 0.1.0 | Approved explicit user instruction | This rule is in the review branch; main integration pending | Repository instruction and generated standard recorded; no automatic lock or runtime permission enforcement installed | Source/reference and catalogue checks only | Explicitly approved AI creation-confirmation policy; Approved user instruction; main integration pending |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Tool Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
