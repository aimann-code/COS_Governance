# Data Standard

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.3; naming 0.2.1; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Reference | STD-DRAFT-3 (temporary source reference) |
| Version | 0.1.1 |
| Purpose | Datatypes, keys, relationships, validation and lineage |
| Completion | Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending |
| Canonical source | [Standards definitions](../../standards/standards.yaml) |

## Rules

| Reference | Rule | Version | Recorded approval | Mapping state |
| --- | --- | --- | --- | --- |
| DRAFT-DAT-R01 | Define each entity/field's meaning, owner, grain, scope and authority before physical schema publication. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R02 | Retain immutable UUID identity and approved readable alternate identity for independently registered records; final prefixes and association-row policy require explicit approval. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R03 | Keep provider/account-qualified external identities and aliases separate from canonical record identity; preserve original values. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R04 | Define explicit FK/unique constraints and relationship cardinality; use mapping tables for many-to-many relations and avoid comma-separated references. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R05 | Maintain reusable field meaning and table-specific type/key/required usage separately; same-named columns may have different meanings. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R06 | Preserve identifiers as text, monetary values as bounded exact decimals, booleans as booleans and dates/timestamps as typed values; specify wire representation separately. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R07 | Define missing, null, blank, zero and default semantics explicitly; defaults are versioned policy, not silent assumptions. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R08 | Use DATE for dates and timezone-aware timestamps for events where appropriate; display DD-MMM-YYYY without replacing typed data. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R09 | Enforce required, format, range, reference and uniqueness rules at suitable application/DB layers; classify unapproved normalisation as pending. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R10 | Store approved field definitions/config versions and validated responses with explicit ownership; distinguish typed value rows from encrypted aggregate profiles in architecture. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R11 | Pin approved immutable config versions to requests/drafts and preserve historical interpretation; changes follow an approved transition policy. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R12 | Classify, encrypt and mask protected values; define searchable fingerprints separately and avoid submitting masked display text as source data. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R13 | Specify atomic write sets, optimistic versions, allocation locks and uniqueness; deterministic replay must not produce duplicate business records. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R14 | Retain append-only history, actor/time/source/run references and supersession where required; do not confuse serial numbers with identity. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R15 | Separate incomplete drafts, submitted immutable proposals, accepted masters and generated reporting views. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R16 | Use forward migrations, counts/keys/value reconciliation and reviewed ownership mapping; no automatic legacy identity linking or destructive deduplication. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R17 | Register source, mapping/version, snapshot/hash, row identity and create/update/conflict/deletion policy before execution. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R18 | Maintain one accepted master authority; derive marts/views with defined grain and scope and avoid count multiplication from repeated details. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R19 | Define approved retention, deletion, backup, encryption-key pairing and restore verification; mandatory history must not disappear through cascade deletion. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DRAFT-DAT-R20 | Reject or flag unknown/duplicate/conflicting definitions, label illustrative versus actual datasets, and retain exceptions for review rather than invent values. | 0.1.1 | Pending | Initial detailed draft; Pending |
| DATE-TIME-01 | Use DD-MMM-YYYY for user-readable dates, for example 23-Oct-2026. Use hh-mm-ss AM/PM for user-readable time, for example 02-05-09 PM. This display convention does not replace typed dates/timestamps or redefine API wire formats. | 0.1.0 | Approved by user; not published | Approved decision supplement; Approved by user; not published |
| S-D38 | Use DD-MMM-YYYY for user-readable date displays and the date portion of timestamps, for example 20-Oct-2026. Preserve typed date/timestamp values; apply display formatting rather than replacing underlying values with text. This instruction specifies the date format only; time-of-day format and same-day backup filename uniqueness remain unresolved. Existing files are not renamed and historical records are not rewritten by this registration. Current disposition: Historical wording retained. DATE-TIME-01 and BACKUP-TIME-01 resolve display time and backup timestamp; only same-second backup collisions remain pending. | 0.1.0 | Approved | Proposed mapping; Approved |
| S-D39 | Retain both a UUID and a readable prefixed ID for registered records. Any later removal requires dependency review and an approved migration. | 0.1.0 | Approved | Proposed mapping; Approved |
| S-D40 | Proposed schema uses immutable UUID primary keys and UUID foreign keys. Readable IDs are unique alternate keys; relationships are stored explicitly rather than inferred from ID text. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D42 | Preserve existing SYS_EMP_ID and source-provided IDs. Link external identities through source/account-qualified mappings; keep mapping identity separate from the employee or transaction identity. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D43 | Configure UUID defaults, readable-ID allocation, keys, constraints and audit behaviour explicitly. Database enforcement does not replace maintaining approved business definitions and ownership. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D46 | Use shared UUID identities, explicit foreign keys within a database and approved APIs/events across services. Many-to-many relationships use mapping tables; no comma-separated foreign-key lists. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D53 | Proposed catalogues cover tables, fields, table-field usage, keys, key fields, relationships, prefixes, allocations, aliases, projects and platform mappings. Register implementation status separately from design intent. | 0.1.0 | Pending | Proposed mapping; Pending |
| S-D55 | Apply DD-MMM-YYYY to user-visible dates, per D38. Time-of-day representation and backup filename collision handling remain unresolved; do not silently freeze a new time convention. Current disposition: Historical wording retained. DATE-TIME-01 and BACKUP-TIME-01 resolve display time and backup timestamp; only same-second backup collisions remain pending. | 0.1.0 | Approved | Proposed mapping; Approved |
| S-D57 | Database catalogue describes implemented technical structure; approved design registers describe business meaning, intended schema and ownership. Reconcile deviations instead of manually maintaining duplicate technical schemas. | 0.1.0 | Pending | Proposed mapping; Pending |

## Applicability and exceptions

| Standard_Name | Target_Ref | Rule_Ref | Condition | Exception_Ref | Approval_Status |
| --- | --- | --- | --- | --- | --- |
| Data Standard | COS framework / HRMS draft |  | Resolve by object, role, environment and operation |  | Pending detailed applicability |
| Data Standard | COS projects adopting this draft |  | Apply only after approval or explicit draft selection; language/environment/project policy conditions remain binding |  | Pending |

Approved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)
