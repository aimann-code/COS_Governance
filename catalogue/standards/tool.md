# Tool Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.6; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-17 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Permitted tools and controlled configuration |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | User-selected scoped standard; User-selected storage standard; authorized recording; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Tool Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
