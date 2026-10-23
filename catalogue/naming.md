# Naming and shortcodes

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Frozen Naming Standard **0.2.3**, source decision **NAM-DOC-01**. COS prefixes are selective. Current preserved tokens: sys_emp_id, emp_reg. Existing application names have not been migrated.

| Reference | Rule | Status |
| --- | --- | --- |
| NAM-FRZ-R01 | Use the frozen Code_Shortcode catalogue for code terms. Abbreviations are controlled; do not independently introduce alternatives. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R02 | Use COS where it identifies the framework/project or governed document and com.cos namespaces. Do not require COS on every internal class, method, file, DTO, route or database object. Shared names omit emp; domain-specific names include the applicable shortcode. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R03 | Classes and React component symbols use PascalCase; Java public-class filenames match exactly. Repository classes use the Repo suffix. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R04 | Custom Java/TypeScript methods use camelCase with clear action/object meaning; they no longer require COS_ACTION_OBJECT. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R05 | Use PascalCase purpose/direction plus DTO suffix for transport types; shared envelopes omit a domain token and domain payloads include one. Internal commands remain distinct from transport DTOs. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R06 | Use kebab-case role-based TypeScript utility filenames and kebab-case React component filenames without a mandatory cos- prefix. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R07 | Use lower_snake_case schema, table and column identifiers. Employee-domain schema is emp rather than people. Scope/ownership still determines whether a table belongs in that schema. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R08 | Use UPPER_SNAKE_CASE constants/controlled codes except explicitly preserved lowercase sys_emp_id and registration component codes governed by profiles.registration. Use full readable frontend/document labels; omit architecture-level suffix words from frontend navigation. | User-approved amendment to frozen naming; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R09 | Within a namespace a shortcode has one meaning. reg means registration; use Register for a governed catalogue where needed. Do not use res for both response and resource. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R10 | Preserve the explicitly approved lowercase identifiers sys_emp_id and emp_reg. Master names have no RPT suffix. Preserve legacy spelling through explicit compatibility mappings; do not silently rename external headers or values. | User-approved amendment to frozen naming; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R11 | Use resource-oriented URLs and clear unique camelCase operation IDs without a mandatory COS prefix. Preserve required framework/tool/third-party names and explicitly map exceptions. | Frozen by user; source baseline integrated into main; implementation migration separate |
| NAM-FRZ-R12 | Frozen naming changes require an explicit decision and impact mapping. Existing code, database columns, API properties/routes, encryption contexts and references are migrated only through reviewed compatibility handling; this freeze does not perform those changes. | Frozen by user; source baseline integrated into main; implementation migration separate |

## Controlled terms

| Term | Short Code | Meaning | Example |
| --- | --- | --- | --- |
| Employee | emp | Employee | EmpRegService |
| Registration | reg | Registration | RegService |
| Repository | repo | Repository | EmpRepo |
| Aggregator | agg | Aggregator | AggRegHandler |
| Vendor | vnd | Vendor | VndRepo |
| Ingredient | ing | Ingredient | IngMaster |
| Brand | brand | Brand | BrandRegHandler |
| Location | loc | Location | LocRepo |
| Organization | org | Organization | OrgConfig |
| Department | dept | Department | DeptMaster |
| Configuration | config | Configuration | RegConfigService |
| Definition | def | Definition | FieldDef |
| Request | req | Request | RegReqDTO |
| Response | res | Response | RegResDTO |
| Document | doc | Document | EmpDocService |
| Reference | ref | Reference | source_ref |
| Identifier | id | Identifier | emp_id |
| Version | ver | Version | config_ver |
| History | hist | History | EmpHistRepo |
| Transaction | txn | Transaction | TxnService |
| Mapping | map | Mapping | FieldMap |
| Synchronization | sync | Synchronization | SheetSyncService |
| Validation | validation | Validation | RegValidationService |
| Approval | approval | Approval | ApprovalService |
| Permission | perm | Permission | FieldPerm |
| Parameter | param | Parameter | ReportParam |
| Attribute | attr | Attribute | FieldAttr |
| Quantity | qty | Quantity | qty |
| Amount | amt | Amount | total_amt |
| Number | num | Number | invoice_num |
| Sequence | seq | Sequence | emp_id_seq |
| Temporary | temp | Temporary | temp_ref |
| Service | service | service | service |
| Controller | controller | controller | controller |
| Handler | handler | handler | handler |
| Field | field | field | field |
| Value | value | value | value |
| Master | master | master | master |
| Report | report | report | report |
| Status | status | status | status |
| Type | type | type | type |
| Name | name | name | name |
| Code | code | code | code |
| Key | key | key | key |
| Role | role | role | role |
| Group | group | group | group |
| Audit | audit | audit | audit |
| Event | event | event | event |
| Draft | draft | draft | draft |
| Bulk | bulk | bulk | bulk |
| Api | api | api | api |
| Dto | dto | dto | dto |
| Source | source | External data source; distinct from vendor and aggregator business identity | SourceRegService |

[Maintained naming source](../standards/naming.yaml)

## Current scoped supplements

The approved API-PATH-01 decision specifies the default API base path. It supplements the frozen resource-oriented URL rule; it does not rename existing routes. See [API / Integration Standard](standards/api-integration.md) and [URL Standard](standards/url.md). Backup timestamps and readable date/time are separately scoped in the standards catalogue.

## Scoped naming profiles

| Domain | Component code | Meaning |
| --- | --- | --- |
| Employee | emp_reg | Employee business identity |
| Vendor | vnd_reg | Supplier or service-provider identity |
| Aggregator | agg_reg | Aggregator business-platform identity |
| Source | source_reg | Data source/connection configuration, linked to applicable domain identity |

Registration pattern: <domain>_reg. Registration component codes only; does not lowercase every existing controlled code

Virtual view pattern: vw_<domain>_<purpose>. Proposed database virtual reporting views; exact schema, grain and ownership registered in design

## Repository documentation filenames

| Control | Rule |
| --- | --- |
| status | User-authorized documentation supplement; application naming unchanged |
| canonical_file_rule | Repository documentation/definition filenames use readable kebab-case. Preserve framework/tool filenames such as README.md, AGENTS.md, SKILL.md and existing required config names. |
| page_rule | Use stable descriptive File_Slug for generated architecture, standard and feature pages. IDs, versions, status and owners belong in content. Do not rename on each stage/version transition. |
| examples | catalogue/architecture/hrms.md; catalogue/architecture/emp-reg.md; catalogue/standards/ai-analytics.md |
| compatibility | Generate old-path pointer pages and a path map. New links use descriptive paths. Historical source snapshots remain unchanged. |
| backup | Export/backup artifacts use separately approved backup timestamp rules; same-second collision handling pending. |
| limits | No new project name, application class/API/DB rename or permanent identity allocation. |

[Old-to-new paths](path-map.md)
