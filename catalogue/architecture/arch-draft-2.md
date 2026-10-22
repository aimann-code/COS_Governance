# HRMS

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.2; naming 0.2.0; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Type | Engine |
| Shortcode | HRMS |
| Source reference | ARCH-DRAFT-2 (temporary) |
| Hierarchy | Enterprise Management → HRMS |
| Responsibility | User-selected HRMS engine under Enterprise Management; historical HR Engine is the same source lineage, not a second engine. |
| Design/registration state | HRMS name explicitly confirmed; proposed five-module design; publication pending |
| Source design | [Historical design reference](https://docs.google.com/document/d/1ALDYB1ZNpx3kKGfJmae-PFg01zs7YU3FDA1qRgNzl4o) |

## Children

| Object | Type | Status |
| --- | --- | --- |
| [Employee Management](../architecture/arch-draft-3.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Shift & Roster Management](../architecture/arch-draft-12.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Attendance Management](../architecture/arch-draft-17.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Leave Management](../architecture/arch-draft-23.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Payroll Management](../architecture/arch-draft-28.md) | Module | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |

## Proposed module and component map

User authorized recording proposed five-module mapping; no blanket BRD approval or implementation claim

| Module | Components |
| --- | --- |
| [Employee Management](../architecture/arch-draft-3.md) | [Employee Registration](../architecture/arch-draft-4.md); [Employee Details](../architecture/arch-draft-5.md); [Employment Lifecycle](../architecture/arch-draft-9.md); [Organization Assignment](../architecture/arch-draft-10.md); [Employee Documents](../architecture/arch-draft-11.md) |
| [Shift & Roster Management](../architecture/arch-draft-12.md) | [Shift Configuration](../architecture/arch-draft-13.md); [Roster Planning](../architecture/arch-draft-14.md); [Roster Assignment](../architecture/arch-draft-15.md); [Roster Changes](../architecture/arch-draft-16.md) |
| [Attendance Management](../architecture/arch-draft-17.md) | [Attendance Import](../architecture/arch-draft-18.md); [Attendance Processing](../architecture/arch-draft-19.md); [Attendance Corrections](../architecture/arch-draft-20.md); [Attendance Exceptions](../architecture/arch-draft-21.md); [Overtime Calculation](../architecture/arch-draft-22.md) |
| [Leave Management](../architecture/arch-draft-23.md) | [Leave Configuration](../architecture/arch-draft-24.md); [Leave Balances](../architecture/arch-draft-25.md); [Leave Requests](../architecture/arch-draft-26.md); [Leave Processing](../architecture/arch-draft-27.md) |
| [Payroll Management](../architecture/arch-draft-28.md) | [Salary Structure](../architecture/arch-draft-29.md); [Payroll Groups](../architecture/arch-draft-30.md); [Variable Pay Inputs](../architecture/arch-draft-31.md); [Loans & Advances](../architecture/arch-draft-32.md); [Reimbursements](../architecture/arch-draft-33.md); [Payroll Processing](../architecture/arch-draft-34.md); [Payroll Review & Finalization](../architecture/arch-draft-35.md); [Payment Reconciliation](../architecture/arch-draft-36.md); [Statutory Processing](../architecture/arch-draft-37.md); [Final Settlement](../architecture/arch-draft-38.md) |

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
- New module/component shortcodes and permanent identities remain unallocated; preserve EMP_MGT as proposed and EMP_Reg as retained.

[Source and approval evidence](../../discussions/hrms-mapping-23-Oct-2026.md). HRMS scope only; full 9-suite/47-engine architecture from the attachment is not imported by this update

## Features

| Feature | Status | Open |
| --- | --- | --- |
| [Employee Registration](../features/emp-reg.md) | draft requirement inventory | Business uniqueness and manual/auto ID differences remain to reconcile with source design |
| [Employee Details](../features/emp-dtl.md) | draft requirement inventory | Field-level policies and source contracts |
| [Employee Update](../features/emp-update.md) | source requirement; reconcile implementation evidence | Domain-specific workflow must not be replaced by universal administrator approval |
| [Payroll](../features/payroll.md) | Proposed module scope; see HRMS-MAP-01 | Detailed calculations, rules and implementation verification remain pending. |
| [Employment Lifecycle](../features/feat-hrms-draft-1.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Organization Assignment](../features/feat-hrms-draft-2.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Employee Documents](../features/feat-hrms-draft-3.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Shift Configuration](../features/feat-hrms-draft-4.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Planning](../features/feat-hrms-draft-5.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Assignment](../features/feat-hrms-draft-6.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Roster Changes](../features/feat-hrms-draft-7.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Import](../features/feat-hrms-draft-8.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Processing](../features/feat-hrms-draft-9.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Corrections](../features/feat-hrms-draft-10.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Attendance Exceptions](../features/feat-hrms-draft-11.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Overtime Calculation](../features/feat-hrms-draft-12.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Configuration](../features/feat-hrms-draft-13.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Balances](../features/feat-hrms-draft-14.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Requests](../features/feat-hrms-draft-15.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Leave Processing](../features/feat-hrms-draft-16.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Salary Structure](../features/feat-hrms-draft-17.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Groups](../features/feat-hrms-draft-18.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Variable Pay Inputs](../features/feat-hrms-draft-19.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Loans & Advances](../features/feat-hrms-draft-20.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Reimbursements](../features/feat-hrms-draft-21.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Processing](../features/feat-hrms-draft-22.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payroll Review & Finalization](../features/feat-hrms-draft-23.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Payment Reconciliation](../features/feat-hrms-draft-24.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Statutory Processing](../features/feat-hrms-draft-25.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Final Settlement](../features/feat-hrms-draft-26.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |

## Implementation and ownership

| Artifact | Owning architecture object | Implementation evidence | Dataset authority |
| --- | --- | --- | --- |
| [emp-onboarding-service](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) | Employee Management | Source exists at pinned commit; frozen-name alignment not applied | Employee domain; exact governed dataset identity reconciliation pending |
| [emp-onboarding-contracts](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) | Employee Management | Source exists; contract naming/authority strategy pending | Transport contract; no operational dataset ownership |
| [emp-physical-schema](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) | Employee Management | Existing migration source; no migration performed | Physical people schema at pinned commit; emp naming target pending migration |

## Applicable standards

[Standards catalogue](../standards.md) · [Frozen naming](../naming.md). Exact object-level applicability and approved exceptions require reconciliation; this page does not silently apply every rule.

## Design availability

[Required design structure](../design.md). The linked historical design is not a regenerated, fully reconciled current component specification. Current source flags and open decisions remain visible. Registration ID/uniqueness conflicts remain pending where recorded.

## Verification

Catalogue generation verifies references and links only. Application test execution and production readiness are not inferred from source mappings.
