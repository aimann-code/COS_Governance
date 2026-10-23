# Proposed database table formats

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Logical data dictionary only. Types, schema placement, constraints and indexes need physical review. Protected text/token labels are not executable PostgreSQL types. Vendor/aggregator tables are scaffolds pending working-sheet gathering. Direct DB-table uploads are not supported; component templates use authorized business fields.

| Table | Purpose | State |
| --- | --- | --- |
| [emp.emp](tables/emp-emp.md) | Stable employee identity | Proposed logical table and indicative fields; not deployed |
| [emp.emp_identity](tables/emp-emp-identity.md) | National identity details | Proposed logical table and indicative fields; not deployed |
| [emp.emp_contact](tables/emp-emp-contact.md) | Contact details | Proposed logical table and indicative fields; not deployed |
| [emp.emp_address](tables/emp-emp-address.md) | Addresses | Proposed logical table and indicative fields; not deployed |
| [emp.employment](tables/emp-employment.md) | Employment relationship | Proposed logical table and indicative fields; not deployed |
| [emp.employment_period](tables/emp-employment-period.md) | Joining, exit and rejoining | Proposed logical table and indicative fields; not deployed |
| [emp.emp_assignment](tables/emp-emp-assignment.md) | Department, role, group and location assignments | Proposed logical table and indicative fields; not deployed |
| [emp.emp_id_map](tables/emp-emp-id-map.md) | External system IDs | Proposed logical table and indicative fields; not deployed |
| [emp.emp_doc](tables/emp-emp-doc.md) | Employee links to shared document storage | Proposed logical table and indicative fields; not deployed |
| [emp.emp_bank](tables/emp-emp-bank.md) | Payment account details | Proposed logical table and indicative fields; not deployed |
| [emp.emp_field_value](tables/emp-emp-field-value.md) | Configured custom field responses | Proposed logical table and indicative fields; not deployed |
| [config.field_def](tables/config-field-def.md) | Registered field meaning/type | Proposed logical table; ownership/schema/types and DDL require review |
| [config.entity_field](tables/config-entity-field.md) | Entity field policy | Proposed logical table; ownership/schema/types and DDL require review |
| [config.form_field](tables/config-form-field.md) | Form layout and dependency mapping | Proposed logical table; ownership/schema/types and DDL require review |
| [config.unique_rule](tables/config-unique-rule.md) | Versioned composite uniqueness | Proposed logical table; ownership/schema/types and DDL require review |
| [config.unique_rule_field](tables/config-unique-rule-field.md) | Selected composite-key fields | Proposed logical table; ownership/schema/types and DDL require review |
| [config.unique_claim](tables/config-unique-claim.md) | Protected key-to-record association | Proposed logical table; ownership/schema/types and DDL require review |
| [auth.access_group](tables/auth-access-group.md) | Entity group permissions | Proposed logical table; ownership/schema/types and DDL require review |
| [auth.group_perm](tables/auth-group-perm.md) | Hierarchy/field read-write grants | Proposed logical table; ownership/schema/types and DDL require review |
| [auth.user_group](tables/auth-user-group.md) | Effective group assignments | Proposed logical table; ownership/schema/types and DDL require review |
| [config.entitlement](tables/config-entitlement.md) | Subscribed suite/engine scope | Proposed logical table; ownership/schema/types and DDL require review |
| [config.preference](tables/config-preference.md) | Confirmed user/entity selections | Proposed logical table; ownership/schema/types and DDL require review |
| [config.confirmation](tables/config-confirmation.md) | Bind confirmation to reviewed action | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.source](tables/integration-source.md) | External data source registration | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.source_profile](tables/integration-source-profile.md) | Parsing and extraction configuration | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.mapping](tables/integration-mapping.md) | Confirmed mapping profile | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.mapping_field](tables/integration-mapping-field.md) | Source-to-system field mapping | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.import_job](tables/integration-import-job.md) | Bulk input execution | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.import_row](tables/integration-import-row.md) | Raw/staged row with origin | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.processing_error](tables/integration-processing-error.md) | Traceable configurable error | Proposed logical table; ownership/schema/types and DDL require review |
| [config.error_template](tables/config-error-template.md) | Configurable user-facing errors | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.sheet_profile](tables/integration-sheet-profile.md) | Google Sheet input/output selections | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.sync_run](tables/integration-sync-run.md) | Confirmed Google Sheet execution | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.email_profile](tables/integration-email-profile.md) | Message/attachment extraction rules | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.processed_source](tables/integration-processed-source.md) | Duplicate source ingestion guard | Proposed logical table; ownership/schema/types and DDL require review |
| [report.mart_def](tables/report-mart-def.md) | Virtual mart registration | Proposed logical table; ownership/schema/types and DDL require review |
| [report.report_def](tables/report-report-def.md) | Report dataset and output contract | Proposed logical table; ownership/schema/types and DDL require review |
| [report.saved_view](tables/report-saved-view.md) | Confirmed report/dashboard preferences | Proposed logical table; ownership/schema/types and DDL require review |
| [audit.change_event](tables/audit-change-event.md) | Configuration/field/data/audit events | Proposed logical table; ownership/schema/types and DDL require review |
| [integration.outbox](tables/integration-outbox.md) | Committed domain events | Proposed logical table; ownership/schema/types and DDL require review |
| [vnd.vnd](tables/vnd-vnd.md) | Vendor identity scaffold | Proposed logical table; ownership/schema/types and DDL require review |
| [agg.agg](tables/agg-agg.md) | Aggregator identity scaffold | Proposed logical table; ownership/schema/types and DDL require review |

[Upload template and storage design](upload-templates.md) · [Employee ER diagram](employee-data-design.md)
