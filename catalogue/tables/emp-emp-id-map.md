# emp.emp_id_map table format

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

Proposed logical table and indicative fields; not deployed

External system IDs

| Column | Proposed type | Required | Key/reference | Validation/meaning | Upload |
| --- | --- | --- | --- | --- | --- |
| id | uuid | Yes | PK | Immutable internal ID; server assigned | No |
| scope_id | text | Yes | Scoped reference | Authenticated entity context; map existing meta.scope before migration | No |
| row_ver | integer | Yes |  | Positive optimistic-lock version | No |
| created_at | timestamptz | Yes |  | Server time | No |
| created_by | text | Yes |  | Authenticated actor/system reference | No |
| updated_at | timestamptz | Yes |  | Server time | No |
| updated_by | text | Yes |  | Authenticated actor/system reference | No |
| emp_id | uuid | Yes | FK | Same-scope reference to emp.emp | Via authorized business-key lookup |
| source_ref | uuid | Yes | Reference | Registered source/system | Configured |
| external_id | text | Yes |  | Preserve source spelling | Configured |
| valid_from | date | Optional |  |  | Configured |
| valid_to | date | Optional |  |  | Configured |

## Constraints and indexes

- UNIQUE(scope_id,id) for composite same-scope foreign keys, in addition to immutable primary ID.
- Same-scope FK checks for employee-owned relationships; external master type/scope validation.
- Current configured keys enforced through versioned claims and transaction-safe duplicate protection.
- Business identifier uniqueness scope and physical encrypted types remain pending design decisions.
- Entity scope and referenced master constraints reviewed before DDL
- Scoped lookup by parent reference where present
- Business lookup indexes selected after working-sheet field/key review

Component-level business DTO/template only; no direct upload of PK, scope, audit or encrypted/token columns.

[Canonical specification](../../architecture/emp-data-design.yaml) · [All table formats](../table-formats.md) · [Developer guide](../developer-guide.md)
