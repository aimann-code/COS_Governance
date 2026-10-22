# Employee Management logical database design

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.4; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Proposed logical Employee Management data design; no DDL or migration performed

| Property | Value |
| --- | --- |
| Target schema | emp |
| Current schema | people at pinned implementation baseline; reviewed migration pending |
| Common controls | [Shared requirements](common-requirements.md) |

## Principles

- Stable internal IDs for relationships; sys_emp_id is the business identifier.
- Employee Master is a generated view/report with no RPT suffix, not a duplicate editable master.
- Active entity-admin uniqueness configuration supersedes the older fixed employee identity combination; minimum two selected fields.
- Physical database constraints should enforce applicable configured uniqueness and concurrent-write safety; detailed implementation remains pending.
- Salary, attendance and leave remain in owning modules; application identity/access records remain shared.
- Typed custom responses reference field-definition versions. Protect identity/bank values and sensitive history.

| Proposed table | Purpose | Indicative fields | Status |
| --- | --- | --- | --- |
| emp.emp | Stable employee identity | sys_emp_id; name; father_name; dob; nationality_ref | Proposed logical table and indicative fields; not deployed |
| emp.emp_identity | National identity details | emp_id; identity_type_ref; number_encrypted; match_token; verification_status; valid_from; valid_to | Proposed logical table and indicative fields; not deployed |
| emp.emp_contact | Contact details | emp_id; contact_type; value_encrypted; is_primary; verification_status | Proposed logical table and indicative fields; not deployed |
| emp.emp_address | Addresses | emp_id; address_type; line_1_encrypted; line_2_encrypted; city; region; country_ref; postal_code; valid_from; valid_to | Proposed logical table and indicative fields; not deployed |
| emp.employment | Employment relationship | emp_id; org_ref; employment_type_ref; status | Proposed logical table and indicative fields; not deployed |
| emp.employment_period | Joining, exit and rejoining | employment_id; joining_date; ended_on; exit_reason | Proposed logical table and indicative fields; not deployed |
| emp.emp_assignment | Department, role, group and location assignments | employment_id; assignment_type; master_ref; valid_from; valid_to | Proposed logical table and indicative fields; not deployed |
| emp.emp_id_map | External system IDs | emp_id; source_ref; external_id; valid_from; valid_to | Proposed logical table and indicative fields; not deployed |
| emp.emp_doc | Employee links to shared document storage | emp_id; document_ref; document_type_ref; verification_status | Proposed logical table and indicative fields; not deployed |
| emp.emp_bank | Payment account details | emp_id; account_number_encrypted; holder_name_encrypted; bank_code; verification_status; valid_from; valid_to | Proposed logical table and indicative fields; not deployed |
| emp.emp_field_value | Configured custom field responses | emp_id; field_ref; field_def_ver; value_type; value_encrypted | Proposed logical table and indicative fields; not deployed |

## Relationships

```mermaid
erDiagram
    EMP ||--o{ EMP_IDENTITY : has
    EMP ||--o{ EMP_CONTACT : has
    EMP ||--o{ EMP_ADDRESS : has
    EMP ||--o{ EMPLOYMENT : has
    EMPLOYMENT ||--o{ EMPLOYMENT_PERIOD : has
    EMPLOYMENT ||--o{ EMP_ASSIGNMENT : has
    EMP ||--o{ EMP_ID_MAP : has
    EMP ||--o{ EMP_DOC : has
    EMP ||--o{ EMP_BANK : has
    EMP ||--o{ EMP_FIELD_VALUE : has
```

## Shared logical records

- Field definition and entity field configuration
- Versioned uniqueness rules and key fields
- Form configuration
- Access group, hierarchy/field permission and user-group assignment
- Entity subscription/entitlement
- Source-to-field mapping and suggested match decisions
- Import/export/sync execution and row outcomes
- Google Sheet authorized connection/profile
- Email extraction profile and processed-source references
- Report definition, dataset, dashboard and saved views
- User preferences and confirmation history
- Configuration/field/data/audit history
- Requests and approval decisions
- Shared document metadata and integration events

## Pending design work

- Logical table names and fields need physical schema review.
- Scope of sys_emp_id and internal identity versus organization/tenant needs confirmation.
- Migration from existing encrypted profile aggregates must preserve data, history and encryption compatibility.
- Detailed DB APIs, DTOs, types, indexes and acceptance tests remain pending.

[Canonical logical design](../architecture/emp-data-design.yaml) · [Evidence](../discussions/common-requirements-23-Oct-2026.md)
