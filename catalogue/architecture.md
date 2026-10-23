# Architecture

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Parent references are resolved from the imported architecture records. These local draft references are not permanent COS IDs. Empty shared placement remains unresolved.

| Object | Type | Code | Parent | Status |
| --- | --- | --- | --- | --- |
| [Enterprise Management](architecture/arch-draft-1.md) | Suite | COS-EMS | Root / placement unresolved | Established reference; registration IDs pending |
| [HRMS](architecture/arch-draft-2.md) | Engine | HRMS | Enterprise Management | HRMS name explicitly confirmed; proposed five-module design; publication pending |
| [Employee Management](architecture/arch-draft-3.md) | Module | EMP_MGT | HRMS | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Employee Registration](architecture/arch-draft-4.md) | Component | emp_reg | Employee Management | Proposed component boundary; requirements/implementation verification pending |
| [Employee Details](architecture/arch-draft-5.md) | Component | Unassigned | Employee Management | Proposed component boundary; requirements/implementation verification pending |
| [Shared Request Processing](architecture/arch-draft-6.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |
| [Shared Security and Approval](architecture/arch-draft-7.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |
| [Shared Integration](architecture/arch-draft-8.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |
| [Employment Lifecycle](architecture/arch-draft-9.md) | Component | Unassigned | Employee Management | Proposed component boundary; requirements/implementation verification pending |
| [Organization Assignment](architecture/arch-draft-10.md) | Component | Unassigned | Employee Management | Proposed component boundary; requirements/implementation verification pending |
| [Employee Documents](architecture/arch-draft-11.md) | Component | Unassigned | Employee Management | Proposed component boundary; requirements/implementation verification pending |
| [Shift & Roster Management](architecture/arch-draft-12.md) | Module | Unassigned | HRMS | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Shift Configuration](architecture/arch-draft-13.md) | Component | Unassigned | Shift & Roster Management | Proposed component boundary; requirements/implementation verification pending |
| [Roster Planning](architecture/arch-draft-14.md) | Component | Unassigned | Shift & Roster Management | Proposed component boundary; requirements/implementation verification pending |
| [Roster Assignment](architecture/arch-draft-15.md) | Component | Unassigned | Shift & Roster Management | Proposed component boundary; requirements/implementation verification pending |
| [Roster Changes](architecture/arch-draft-16.md) | Component | Unassigned | Shift & Roster Management | Proposed component boundary; requirements/implementation verification pending |
| [Attendance Management](architecture/arch-draft-17.md) | Module | Unassigned | HRMS | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Attendance Import](architecture/arch-draft-18.md) | Component | Unassigned | Attendance Management | Proposed component boundary; requirements/implementation verification pending |
| [Attendance Processing](architecture/arch-draft-19.md) | Component | Unassigned | Attendance Management | Proposed component boundary; requirements/implementation verification pending |
| [Attendance Corrections](architecture/arch-draft-20.md) | Component | Unassigned | Attendance Management | Proposed component boundary; requirements/implementation verification pending |
| [Attendance Exceptions](architecture/arch-draft-21.md) | Component | Unassigned | Attendance Management | Proposed component boundary; requirements/implementation verification pending |
| [Overtime Calculation](architecture/arch-draft-22.md) | Component | Unassigned | Attendance Management | Proposed component boundary; requirements/implementation verification pending |
| [Leave Management](architecture/arch-draft-23.md) | Module | Unassigned | HRMS | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Leave Configuration](architecture/arch-draft-24.md) | Component | Unassigned | Leave Management | Proposed component boundary; requirements/implementation verification pending |
| [Leave Balances](architecture/arch-draft-25.md) | Component | Unassigned | Leave Management | Proposed component boundary; requirements/implementation verification pending |
| [Leave Requests](architecture/arch-draft-26.md) | Component | Unassigned | Leave Management | Proposed component boundary; requirements/implementation verification pending |
| [Leave Processing](architecture/arch-draft-27.md) | Component | Unassigned | Leave Management | Proposed component boundary; requirements/implementation verification pending |
| [Payroll Management](architecture/arch-draft-28.md) | Module | Unassigned | HRMS | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| [Salary Structure](architecture/arch-draft-29.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Payroll Groups](architecture/arch-draft-30.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Variable Pay Inputs](architecture/arch-draft-31.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Loans & Advances](architecture/arch-draft-32.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Reimbursements](architecture/arch-draft-33.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Payroll Processing](architecture/arch-draft-34.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Payroll Review & Finalization](architecture/arch-draft-35.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Payment Reconciliation](architecture/arch-draft-36.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Statutory Processing](architecture/arch-draft-37.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |
| [Final Settlement](architecture/arch-draft-38.md) | Component | Unassigned | Payroll Management | Proposed component boundary; requirements/implementation verification pending |

[Architecture definitions](../architecture/objects.yaml)
