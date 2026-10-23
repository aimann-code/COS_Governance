# Documentation Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.6; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-19 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Structure, generation profiles, source references and lifecycle |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| S-D05 | Each logical file has permanent _dft and _pub files with stable IDs. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D08 | Maintain internal version and status. Versions appear in backups, not permanent filenames. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D10 | Back up existing documents before logical content updates; initial creation has no previous version. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D59 | Maintain editable design and standards in the selected central workbook. Generated documents reference pinned source records; review edits become proposed register changes. | 0.1.0 | Approved direction; detailed implementation pending | Current user direction; Approved direction |
| S-D61 | Generate all or selected standards using versioned profiles, applicable rules and approved exceptions; disclose draft versions and unresolved conflicts. | 0.1.0 | Approved direction; generator pending | Current user direction; Approved direction; implementation pending |
| S-D65 | Separate mockups, actual screenshots and diagrams; retain embedded source IDs, standalone asset IDs, source versions and generation manifests without assuming extraction occurred. | 0.1.0 | Pending proposal | Proposed; Pending |
| DATE-TIME-01 | Use DD-MMM-YYYY for user-readable dates, for example 23-Oct-2026. Use hh-mm-ss AM/PM for user-readable time, for example 02-05-09 PM. This display convention does not replace typed dates/timestamps or redefine API wire formats. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| BACKUP-TIME-01 | Use DD-MMM-YYYY_IST_HH_MM_SS for the timestamp portion of backup filenames. HH is 24-hour time; calculate it in Asia/Kolkata (IST), for example 23-Oct-2026_IST_14_05_09. Retain the existing approved base filename, _bck, version and storage/lifecycle conventions. Same-second collision handling remains pending. This decision does not rename historical backups or create a backup schedule. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| GITHUB-SOURCE-01 | Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change. | 0.1.0 | User-selected storage standard; authorized recording; not published | User-selected scoped standard; User-selected storage standard; authorized recording; not published |
| NAM-DOC-01 | Apply the documentation profile in standards/naming.yaml: descriptive stable kebab-case paths, in-content version/status/IDs, framework filename exceptions and generated compatibility path mappings. No unrelated code/API/DB renames. | 0.1.0 | User-authorized recording; publication requires reviewed integration | User-authorized scoped supplement; User-authorized recording; publication separate |
| WORKFLOW-01 | Apply standards/workflow.yaml. Stage is Draft/Review/Published; lifecycle is Requirements, Design & Architecture, Development, Testing, Deployment, Operations. Track edit owner and immutable published baseline. Developers cannot consume a current Draft; active developer baselines change only through approved change requests. Technical enforcement and board configuration remain pending. | 0.1.0 | User-authorized recording; publication requires reviewed integration | User-authorized scoped supplement; User-authorized recording; publication separate |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Documentation Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
