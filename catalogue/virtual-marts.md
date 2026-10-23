# Virtual reporting marts

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Proposed reporting mart catalogue; no SQL views implemented

Domain DB > governed virtual mart > authorized report service > dashboard/download/Google Sheet

| Mart | Proposed view | Grain | Inputs | Notes |
| --- | --- | --- | --- | --- |
| emp_directory | vw_emp_directory | One employee at defined current/as-of employment/assignment scope | emp.emp, emp.employment, emp.employment_period, emp.emp_assignment | Choose as-of rules and one-to-many aggregation before joins to prevent duplicate employee counts. |
| vnd_directory | vw_vnd_directory | One vendor per entity | vnd.vnd | Full vendor schema and permitted reporting fields pending working sheets. |
| agg_directory | vw_agg_directory | One aggregator per entity | agg.agg | Sources linked separately; aggregate or drill to sources without multiplying business rows. |
| payroll_results | vw_payroll_results | One finalized employee payroll result per employment/pay period/run version; final grain pending payroll design | Pending domain schema | Payroll input schema/calculations pending; read approved immutable domain results, not mutable working values. |
| reconciliation | vw_reconciliation | Explicit reconciliation item/match-group grain pending Finance design | Pending domain schema | Unmatched/matched/difference sources and joins pending; no Finance data imported by this guide. |

## Rules

- All reporting paths use registered virtual mart definitions; no alternative editable master.
- Enforce entity/subscription/group/field/record permissions including aggregate leakage checks.
- Register explicit grain, joins, approved measures, fields/operators and version.
- User filtering/columns are structured allowed selections; no arbitrary SQL or table names.
- Virtual views read domain tables. Index/query tuning follows workload; materialization requires a separate explicit decision.

[Canonical mart design](../architecture/virtual-marts.yaml) · [Developer guide](developer-guide.md)
