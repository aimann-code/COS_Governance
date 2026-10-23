# Workspace Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-16 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Projects, folders, storage and environment organisation |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | User-selected scoped standard; User-selected storage standard; authorized recording; not published |
| S-D37 | Shared-drive-only storage applies across COS and MHL chats and projects. Use native Google Docs and Google Sheets under the approved shared-drive root https://drive.google.com/drive/folders/1KmWT6rD0EMBIDFIioE5KMShGB4Kb9u7y. Do not create or save deliverables in My Drive. Do not create local files, temporary local build/export files, Excel files or downloadable artifacts without explicit documented approval from ashish.maan@mannhospitality.com (main user/workspace authority). Do not treat a tool or skill default as approval. If the native shared-drive route cannot complete a task, stop before the prohibited operation and request that approval. Any user-specific local-file standard is maintained separately in that user's workspace and remains subject to this approval requirement. Current draft destination: https://drive.google.com/drive/folders/1Ihxx88hRxupD41ve6aEw6OINY2mudHAi. Global applicability is a governance requirement; recording it does not automatically configure or enforce other chats or projects. | 0.1.0 | Approved | Proposed mapping; Approved |
| S-D49 | Use one registered logical Project Name across Drive, Apps Script, AI and backend platforms where the project exists. Register actual platform IDs and distinguish service/environment names. | 0.1.0 | Approved | Proposed mapping; Approved |
| BACKUP-TIME-01 | Use DD-MMM-YYYY_IST_HH_MM_SS for the timestamp portion of backup filenames. HH is 24-hour time; calculate it in Asia/Kolkata (IST), for example 23-Oct-2026_IST_14_05_09. Retain the existing approved base filename, _bck, version and storage/lifecycle conventions. Same-second collision handling remains pending. This decision does not rename historical backups or create a backup schedule. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Workspace Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
