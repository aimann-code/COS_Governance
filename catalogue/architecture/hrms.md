# HRMS

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.9; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Type | Engine |
| Short Code | HRMS |
| Source reference | ARCH-DRAFT-2 (temporary) |
| Hierarchy | CulinaOS Platform → Enterprise Management → HRMS |
| Responsibility | User-selected HRMS engine under Enterprise Management; historical HR Engine is the same source lineage, not a second engine. |
| Design/registration state | HRMS name explicitly confirmed; proposed five-module design; publication pending |
| Source design | [Historical design reference](https://docs.google.com/document/d/1ALDYB1ZNpx3kKGfJmae-PFg01zs7YU3FDA1qRgNzl4o) |

| Coverage property | Value |
| --- | --- |
| Source name | HR Engine |
| Aliases | HR Engine |
| Stable parent reference | ARCH-DRAFT-1 |
| Inventory | Imported |
| Design | Proposed HRMS design; detailed approval pending |
| Implementation | Not assessed by inventory import |

## Children

| Object | Type | Status |
| --- | --- | --- |
| [Employee Management](../architecture/employee-management.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Shift & Roster Management](../architecture/shift-roster-management.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Attendance Management](../architecture/attendance-management.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Leave Management](../architecture/leave-management.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Payroll Management](../architecture/payroll-management.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |

## Proposed module and component map

User authorized recording proposed five-module mapping; no blanket BRD approval or implementation claim

| Module | Components |
| --- | --- |
| [Employee Management](../architecture/employee-management.md) | [Employee Registration](../architecture/emp-reg.md); [Employee Details](../architecture/employee-details.md); [Employment Lifecycle](../architecture/employment-lifecycle.md); [Organization Assignment](../architecture/organization-assignment.md); [Employee Documents](../architecture/employee-documents.md) |
| [Shift & Roster Management](../architecture/shift-roster-management.md) | [Shift Configuration](../architecture/shift-configuration.md); [Roster Planning](../architecture/roster-planning.md); [Roster Assignment](../architecture/roster-assignment.md); [Roster Changes](../architecture/roster-changes.md) |
| [Attendance Management](../architecture/attendance-management.md) | [Attendance Import](../architecture/attendance-import.md); [Attendance Processing](../architecture/attendance-processing.md); [Attendance Corrections](../architecture/attendance-corrections.md); [Attendance Exceptions](../architecture/attendance-exceptions.md); [Overtime Calculation](../architecture/overtime-calculation.md) |
| [Leave Management](../architecture/leave-management.md) | [Leave Configuration](../architecture/leave-configuration.md); [Leave Balances](../architecture/leave-balances.md); [Leave Requests](../architecture/leave-requests.md); [Leave Processing](../architecture/leave-processing.md) |
| [Payroll Management](../architecture/payroll-management.md) | [Salary Structure](../architecture/salary-structure.md); [Payroll Groups](../architecture/payroll-groups.md); [Variable Pay Inputs](../architecture/variable-pay-inputs.md); [Loans & Advances](../architecture/loans-advances.md); [Reimbursements](../architecture/reimbursements.md); [Payroll Processing](../architecture/payroll-processing.md); [Payroll Review & Finalization](../architecture/payroll-review-finalization.md); [Payment Reconciliation](../architecture/payment-reconciliation.md); [Statutory Processing](../architecture/statutory-processing.md); [Final Settlement](../architecture/final-settlement.md) |

## Shared capabilities

| Capability | Treatment |
| --- | --- |
| Submit, validate, fetch and search | Reusable services; domain-specific validation and permissions. |
| Approvals and request processing | Shared workflow capability; HRMS owns request types, rules and approvers. Exact COS placement remains pending. |
| Custom fields and form configuration | Shared configuration; component-owned permitted fields and business meaning. |
| Configuration, field and data history | Shared audit mechanism; records linked to owning HRMS component. |
| Bulk Upload and Google Sheet Sync | Common input tools with component-specific mapping, validation and reconciliation. |
| Employee self-service | Role-based frontend workspace exposing permitted employee, leave, attendance and payroll actions. |
| Reports and dashboards | Views over module-owned data using common reporting services. |
| Favorites and shortcuts | Shared dashboard navigation. |
| Device and external-system connectivity | Reusable integration infrastructure; HRMS owns attendance/payroll mapping rules. |

## Module data flows

| From | To | Information |
| --- | --- | --- |
| Employee Management | All other HRMS modules | Employee identity, employment status and assignments |
| Shift & Roster Management | Attendance Management | Expected shifts and scheduled working hours |
| Leave Management | Attendance Management | Approved leave and leave treatment |
| Attendance Management | Payroll Management | Approved attendance, payable days and overtime hours |
| Leave Management | Payroll Management | Payroll-relevant leave results |
| Employee Management | Payroll Management | Joining, exit and salary eligibility information |

## Pending decisions and verification

- Contractor classification belongs in Employee Management; contractor invoices/payments require Payroll-versus-Finance ownership review.
- Detailed leave policy, statutory processing and final settlement requirements remain pending.
- Automatic roster reassignment rules and exact shared service ownership remain pending.
- Component-by-component current code gap review and acceptance testing remain pending.
- New module/component shortcodes and permanent identities remain unallocated; preserve EMP_MGT as proposed and emp_reg as retained.

[Source and approval evidence](../../discussions/hrms-mapping-23-Oct-2026.md). Five HRMS modules and 28 components remain proposals; the surrounding source inventory now includes all 9 suites and 47 engines.

## Features

| Feature | Status | Open |
| --- | --- | --- |
| [Employee Registration](../features/employee-registration.md) | draft requirement inventory | Business uniqueness and manual/auto ID differences remain to reconcile with source design |
| [Employee Details](../features/employee-details.md) | draft requirement inventory | Field-level policies and source contracts |
| [Employee Update](../features/employee-update.md) | source requirement; reconcile implementation evidence | Domain-specific workflow must not be replaced by universal administrator approval |
| [Payroll](../features/payroll.md) | Proposed module scope; see HRMS-MAP-01 | Detailed calculations, rules and implementation verification remain pending. |
| [Employment Lifecycle](../features/employment-lifecycle.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Organization Assignment](../features/organization-assignment.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Employee Documents](../features/employee-documents.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Shift Configuration](../features/shift-configuration.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Planning](../features/roster-planning.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Assignment](../features/roster-assignment.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Changes](../features/roster-changes.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Import](../features/attendance-import.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Processing](../features/attendance-processing.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Corrections](../features/attendance-corrections.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Exceptions](../features/attendance-exceptions.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Overtime Calculation](../features/overtime-calculation.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Configuration](../features/leave-configuration.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Balances](../features/leave-balances.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Requests](../features/leave-requests.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Processing](../features/leave-processing.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Salary Structure](../features/salary-structure.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Groups](../features/payroll-groups.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Variable Pay Inputs](../features/variable-pay-inputs.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Loans & Advances](../features/loans-advances.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Reimbursements](../features/reimbursements.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Processing](../features/payroll-processing.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Review & Finalization](../features/payroll-review-finalization.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payment Reconciliation](../features/payment-reconciliation.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Statutory Processing](../features/statutory-processing.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Final Settlement](../features/final-settlement.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |

## Implementation and ownership

| Artifact | Owning architecture object | Implementation evidence | Dataset authority |
| --- | --- | --- | --- |
| [emp-onboarding-service](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) | Employee Management | Source exists at pinned commit; frozen-name alignment not applied | Employee domain; exact governed dataset identity reconciliation pending |
| [emp-onboarding-contracts](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) | Employee Management | Source exists; contract naming/authority strategy pending | Transport contract; no operational dataset ownership |
| [emp-physical-schema](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) | Employee Management | Existing migration source; no migration performed | Physical people schema at pinned commit; emp naming target pending migration |
| [draft-emp-key-service](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) | Employee Management | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed | Scoped configuration and employee key claims; existing people records remain domain authority |

## Applicable standards

[Standards catalogue](../standards.md) · [Frozen naming](../naming.md). Exact object-level applicability and approved exceptions require reconciliation; this page does not silently apply every rule.

## Design availability

[Required design structure](../design.md). The linked historical design is not a regenerated, fully reconciled current component specification. Current source flags and open decisions remain visible. Registration ID/uniqueness conflicts remain pending where recorded.

## Verification

Catalogue generation verifies references and links only. Application test execution and production readiness are not inferred from source mappings.
