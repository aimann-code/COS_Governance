# Operations Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.4; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-15 (temporary source reference) |
| Version | 0.1.0 |
| Purpose | Deployment, monitoring, backup, recovery and incidents |
| Completion | Partial / requires rule review |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| BACKUP-TIME-01 | Use DD-MMM-YYYY_IST_HH_MM_SS for the timestamp portion of backup filenames. HH is 24-hour time; calculate it in Asia/Kolkata (IST), for example 23-Oct-2026_IST_14_05_09. Retain the existing approved base filename, _bck, version and storage/lifecycle conventions. Same-second collision handling remains pending. This decision does not rename historical backups or create a backup schedule. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| S-D06 | Use _bck consistently. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D07 | Use <filename>_bck_v<version>_<YYYYMMDD_HHMMSS>; timezone Asia/Kolkata. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D09 | Published backups preserve previous approved versions; separate _arch copies are unnecessary. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D10 | Back up existing documents before logical content updates; initial creation has no previous version. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D11 | Back up structural, material logic, bulk or destructive changes and reprocessing. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D12 | No full backup for routine appends; retain unique IDs, timestamps and source/run references. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D13 | Log record ID, old/new values, actor and timestamp; back up bulk/destructive edits. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D14 | Back up draft and publication; apply approved changes inside the existing published file. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D15 | Preserve latest live data during publishing and existing tab IDs where possible. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D54 | Moving files without content/structural change requires no backup. All future backup copies go to approved shared-drive folder 03_Backup: https://drive.google.com/drive/folders/1dQ_2t8ibU30HBx7x1gilqZA_JfRPbjpN. Six existing backup copies were relocated there; working drafts remain in Draft_V5. | 0.1.0 | Approved | Proposed mapping; Approved |
| S-D55 | Apply DD-MMM-YYYY to user-visible dates, per D38. Time-of-day representation and backup filename collision handling remain unresolved; do not silently freeze a new time convention. Current disposition: Historical wording retained. DATE-TIME-01 and BACKUP-TIME-01 resolve display time and backup timestamp; only same-second backup collisions remain pending. | 0.1.0 | Approved | Proposed mapping; Approved |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Operations Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
