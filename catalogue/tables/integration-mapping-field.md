# integration.mapping_field table format

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

Proposed logical table; ownership/schema/types and DDL require review

Source-to-system field mapping

| Column | Proposed type | Required | Key/reference | Validation/meaning | Upload |
| --- | --- | --- | --- | --- | --- |
| id | uuid | Yes | PK | Immutable internal ID; server assigned | No |
| scope_id | text | Yes | Scoped reference | Authenticated entity context; map existing meta.scope before migration | No |
| row_ver | integer | Yes |  | Positive optimistic-lock version | No |
| created_at | timestamptz | Yes |  | Server time | No |
| created_by | text | Yes |  | Authenticated actor/system reference | No |
| updated_at | timestamptz | Yes |  | Server time | No |
| updated_by | text | Yes |  | Authenticated actor/system reference | No |
| mapping_id | uuid | Yes | FK | Same-scope reference to integration.mapping | Via authorized business-key lookup |
| source_field | text | Yes |  |  | Configured |
| target_field_ref | uuid | Yes |  |  | Configured |
| transform_spec | jsonb | Optional |  |  | Configured |
| match_method | text | Optional |  |  | Configured |
| confirmed | boolean | Yes |  |  | Configured |

## Constraints and indexes

- UNIQUE(scope_id,id) for composite same-scope foreign keys, in addition to immutable primary ID.
- Same-scope FK checks for employee-owned relationships; external master type/scope validation.
- Current configured keys enforced through versioned claims and transaction-safe duplicate protection.
- Business identifier uniqueness scope and physical encrypted types remain pending design decisions.

Only authorized component DTO/template operations; PK/scope/audit/token columns are system-managed.

[Canonical specification](../../architecture/shared-data-design.yaml) · [All table formats](../table-formats.md) · [Developer guide](../developer-guide.md)
