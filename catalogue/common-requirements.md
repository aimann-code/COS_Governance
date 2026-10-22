# Shared requirements across suites and modules

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.3; naming 0.2.1; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Recorded cross-suite requirements and design directions; not implemented or published

All subscribed suites, engines, modules and components, subject to domain applicability

## Configurable uniqueness

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-UNIQUE-01 | Entity administrators configure uniqueness for employee, vendor, aggregator and user business profiles. COS controls entity-registration uniqueness. Login authentication identity remains distinct from business-profile matching. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-02 | Employee candidate fields include Name, Father's Name, DOB, Number, email, PAN, Aadhaar and national identity. Do not freeze one combination in code. The meaning of Number remains pending. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-03 | Every active unique key contains at least two selected fields. All selected values are mandatory for the operation. Treat the combination as one match; separate matches to different records do not identify one record. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-04 | Configure record type, entity scope, normalization, blank handling, duplicate detection outcome, default key, approved alternative keys and effective version. No literal field combination is selected as the default by this requirement; the entity administrator must choose it. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-05 | All update sources require the configured complete key and exactly one matching record. Do not fall back to name-only, source row number or close-record matching. Zero matches block update; creation requires explicit permitted create mode. Multiple matches block update for review. Duplicate create outcomes may be configurable, but update matching cannot bypass these gates. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-06 | With one selected field show Select at least one more field and disable activation. With two or more preview matching behaviour. Selected optional fields become mandatory where that key applies; explain this. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-07 | Warn on mutable or commonly shared key fields. Mask sensitive values and use protected comparison data. Audit authorized changes. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-08 | Before activation, scan existing records for missing/invalid selected values and duplicates. Show access-permitted affected counts/details; block activation until conflicts are resolved. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-09 | Changing an active key creates a version, previews affected forms/mappings/APIs/sync profiles, requires confirmation, and retains previous configuration/history. Safely handle simultaneous updates and stale record versions. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-10 | Changing key values requires the existing key plus proposed values, duplicate validation and confirmation. Keep immutable internal record IDs unchanged. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-11 | Show row outcomes Matched, Not found, Missing key, Multiple matches or Invalid key. Missing values/columns and complete-key-no-match are distinct errors; never invent a missing field when all key inputs are present. | Recorded requirement/design direction; implementation not verified |

## Entity field and form control

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-FIELD-01 | Entity administrator configuration supports Entity, Suite, Engine, Module, Component and Field selection across all subscribed capabilities. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-02 | Configure field availability, labels/descriptions, order/grouping, required/optional state, defaults, read-only state, formats/ranges, allowed values and dependent fields. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-03 | Configure form layout, parent-field filtering, permitted field selection and component-specific validation. Preserve field business meaning separately from physical schema. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-04 | System owns all fields and authoritative data. Google Sheets is an input/output interface whose changes pass system validation, source matching and access checks. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-05 | Distinguish platform-managed identity/security/relationship controls. Label changes do not silently rename database keys. Disabling a field must not silently destroy existing data. | Recorded requirement/design direction; implementation not verified |
| COMMON-FIELD-06 | Maintain separate configuration, field-definition and data-value history, including actor, time, scope, source and effective version. | Recorded requirement/design direction; implementation not verified |

## Access groups

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-ACCESS-01 | Entity owner has full access within its own entity and subscription; no cross-entity or COS administration rights follow automatically. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-02 | Entity administrator receives administration permissions through an admin access group. Create access groups and assign one or more groups to users. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-03 | Group permission selection supports Suite, Engine, Module, Component and Field, with read/write permissions. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-04 | Check all hierarchy levels, field access, entity boundaries and record scope in both frontend and backend. Labels do not reveal protected fields or metadata. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-05 | Apply the same effective permissions to APIs, search, dashboards, reports, downloads, imports, mappings, email extraction and Google Sheet input/output. Frontend hiding alone is insufficient. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-06 | Subscription entitlement and access-group permission must both permit an operation. Saved preferences, defaults and one-event overrides cannot expand access. | Recorded requirement/design direction; implementation not verified |
| COMMON-ACCESS-07 | Parent-to-child inheritance, access to future children and multi-group conflict precedence remain explicit pending decisions; do not silently choose union, inheritance or deny precedence. | Recorded requirement/design direction; implementation not verified |

## Entity subscriptions

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-SUBSCRIPTION-01 | An entity may subscribe to one engine, multiple engines or multiple suites. Store entitlements and effective dates in the database. | Recorded requirement/design direction; implementation not verified |
| COMMON-SUBSCRIPTION-02 | Restrict architecture selection, navigation and data operations to subscribed capabilities, intersected with access permissions. | Recorded requirement/design direction; implementation not verified |
| COMMON-SUBSCRIPTION-03 | Subscription scope is entity-specific; group administration cannot grant an unsubscribed capability. | Recorded requirement/design direction; implementation not verified |

## Preferences and defaults

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-PREF-01 | Store preferences in the database for forms, configuration selections, mappings, imports, Google Sheet connections, reports, dashboards and favorites. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-02 | Always ask for explicit confirmation before saving or changing preferences. Configuration changes require their permitted administrator action and confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-03 | Offer a one-event option without replacing saved settings. Store the execution's resolved configuration versions and temporary selections for traceability. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-04 | Apply COS rules, then entity configuration, then permitted user preferences, then one-event selections. Later layers may customize only within earlier policy/security limits. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-05 | Support entity defaults, permitted personal defaults and one-event choices. Defaults may cover navigation; record lists/status/department/role/group/location; report columns/filters/dates/sort/group; dashboard views/widgets; upload mode/mapping/key; Google Sheet references/range/headers; download format/scope; form defaults/dependencies. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-06 | Show only applicable filters. Distinguish All permitted records, No selection and Blank value. Prefill does not imply permission or final write confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-PREF-07 | Offer to save selected Google Sheet references and settings only after confirmation. Never store credentials in ordinary preference records. | Recorded requirement/design direction; implementation not verified |

## Bulk upload and templates

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-IMPORT-01 | Provide bulk create/update through Excel, CSV, PDF and Google Sheet input; support reusable per-component/entity mappings and configuration. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-02 | Excel/CSV processing supports source sheet/header selection, CSV delimiters and value formats, mapping, preview, validation and row-level results. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-03 | PDF processing supports extraction profile, filename/page/table-or-record traceability and review of uncertain extraction. Do not treat uncertain values as confirmed input. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-04 | Download entity/component-specific Excel/CSV templates for bulk update, with configured fields, required unique-key fields and mapping information. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-05 | Suggest close matching system fields for source headers in uploads and sync. Show suggestions; confirm ambiguous mappings. Field-header suggestions never automatically choose a target business record. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-06 | Enforce current access, complete unique keys, duplicate checks and validation at execution for every input channel. Record import/sync run ID and row outcomes. | Recorded requirement/design direction; implementation not verified |
| COMMON-IMPORT-07 | Provide a one-event GUI path for the same operation without silently overwriting saved profiles. | Recorded requirement/design direction; implementation not verified |

## Google Sheet input and output

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-SHEET-01 | Configure authorized spreadsheet, tab, range, headers, source-to-system mapping, key and permitted create/update mode for input synchronization. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-02 | System remains authoritative. Source values do not bypass validation or become the owner of fields. Define source ingestion, duplicate processing and conflict behaviour explicitly. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-03 | Export report data to an existing spreadsheet/tab/range or explicitly create a new spreadsheet/tab. No destination is chosen silently. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-04 | Before exporting, support selected columns, filters, sorting and record scope; show destination, selected fields, filters and affected record count. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-05 | Every export requires explicit Append or Clear old data and write confirmation, even when preferences prefill a choice. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-06 | Append retains existing rows and adds selected records; show detected duplicate-key conflicts. Clear-and-write previews the exact tab/range to clear and requires explicit confirmation. | Recorded requirement/design direction; implementation not verified |
| COMMON-SHEET-07 | Never silently clear an entire spreadsheet. Export only authorized fields/records. Saved preferences and one-event selections follow confirmation rules. | Recorded requirement/design direction; implementation not verified |

## Email extraction

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-EMAIL-01 | Configure authorized mailbox/source, sender, subject and relevant message headers. Email headers and attachment column headers are separate mapping concepts. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-02 | Select email body and/or attachments; configure extraction profile for body, Excel, CSV or PDF and map results to the target component. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-03 | Track message and attachment references to avoid duplicate processing. Reuse shared import validation, access, unique matching and row-result handling. | Recorded requirement/design direction; implementation not verified |
| COMMON-EMAIL-04 | Choose preview/review or an explicitly configured automatic processing mode; no mailbox, recurring job or automatic processing is activated by this design. | Recorded requirement/design direction; implementation not verified |

## Reports and dashboards

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-REPORT-01 | Make reports configurable through shared reporting services over authorized datasets; do not expose unrestricted database columns. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-02 | Users can add/remove/reorder permitted columns, set supported column filters/date ranges, sorting, grouping and approved calculations. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-03 | Save multiple named report/dashboard views, selected widgets and layout as confirmed preferences. Sharing is limited to permitted users/groups. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-04 | Support Excel, CSV and PDF downloads with selected columns, filters, sorting and record scope. Apply the same field/record access as interactive views. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-05 | Support filtered report output to existing or explicitly new Google Sheet destinations using the mandatory append/clear confirmation process. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-06 | Official controlled outputs retain required definitions while allowing permitted presentation changes. Personal preferences do not alter approved payroll meanings. | Recorded requirement/design direction; implementation not verified |
| COMMON-REPORT-07 | Shared favorites/shortcuts open permitted components; employee self-service is a role-based workspace, not a duplicate business module. | Recorded requirement/design direction; implementation not verified |

## Search at every level

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-SEARCH-01 | Search suites, engines, modules, components, field names/labels/definitions, permitted data/values, reports, dashboards and saved views. | Recorded requirement/design direction; implementation not verified |
| COMMON-SEARCH-02 | Support global permitted search or selected hierarchy/object/dataset scope; include search and filtering in dashboard views. | Recorded requirement/design direction; implementation not verified |
| COMMON-SEARCH-03 | Show result type and hierarchy to distinguish similar names. Return only subscribed, authorized objects, fields, metadata and records. | Recorded requirement/design direction; implementation not verified |
| COMMON-SEARCH-04 | Search/filter defaults and saved selections must not widen access. Detailed ranking, indexing and performance strategy remain design work. | Recorded requirement/design direction; implementation not verified |

## Configurable errors and source traceability

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-ERROR-01 | Entity administrators configure message templates with permitted placeholders; retain stable machine-readable error codes and internal diagnostics. Template changes cannot turn failure into success or suppress required gates. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-02 | Missing key inputs identify the exact missing fields; missing source columns identify unmapped required key fields. Complete key with no match lists the key fields used, not fictitious missing values. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-03 | Include available record type and permitted record ID (such as sys_emp_id), run/request ID, affected field and source reference. Do not invent missing record IDs. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-04 | For Excel/CSV include filename, source sheet where applicable, row and source column. For Google Sheets include spreadsheet, tab, row/cell and a permitted source link when available. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-05 | For PDF include filename, page and extracted table/record reference. For email include message reference, permitted subject and attachment. For GUI/API include form/request reference and affected field. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-06 | Support placeholders such as record_type, missing_fields, key_fields and row_number. Mask sensitive values and do not disclose protected record existence/details through errors. | Recorded requirement/design direction; implementation not verified |
| COMMON-ERROR-07 | Show users what failed, where it failed and how to locate it. Examples are illustrative, not live record data. | Recorded requirement/design direction; implementation not verified |

## Shared architecture and history

| Reference | Requirement | State |
| --- | --- | --- |
| COMMON-REUSE-01 | Reuse services, functions, APIs/DTO infrastructure, frontend controls, validation, approvals, document metadata, audit, imports, sync, reporting and search across suites/modules/components. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-02 | Domain-specific semantics, authoritative writers, rules and persistence remain owned by the relevant domain. Reuse does not imply one universal employee/vendor/aggregator table. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-03 | Keep approval, implementation, verification and publication statuses separate. No shared engine/module placement is silently allocated. | Recorded requirement/design direction; implementation not verified |
| COMMON-REUSE-04 | Configuration and preferences are logical database-backed designs; detailed APIs, DTOs, migrations, physical table names and acceptance tests remain to be designed. | Recorded requirement/design direction; implementation not verified |

## Pending decisions

- Meaning of Number in employee candidate key fields
- Actual default uniqueness combinations per entity and record type
- Permission inheritance, future-child policy and multi-group conflicts
- Exact shared capability architectural placement
- Detailed source-conflict, automated extraction, PDF review and sync execution policies

[Canonical requirements](../features/common.yaml) · [Approval and source evidence](../discussions/common-requirements-23-Oct-2026.md)
