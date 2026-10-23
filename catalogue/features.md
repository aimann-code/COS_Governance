# Features

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Transitional domain inventory, shared requirements and proposed employee/vendor/aggregator/source registration; ownership/BRD pending where stated. These references are discussion inventory keys; they do not allocate new architecture components.

| Feature | Ref | Owner | Requirement state |
| --- | --- | --- | --- |
| [Employee Registration](features/employee-registration.md) | emp_reg | HRMS / Employee Management | draft requirement inventory |
| [Employee Details](features/employee-details.md) | EMP_Dtl | HRMS / Employee Management | draft requirement inventory |
| [Employee Update](features/employee-update.md) | EMP_Update | HRMS / Employee Management | source requirement; reconcile implementation evidence |
| [Form Configuration](features/form-configuration.md) | Form_Config | Shared ownership pending | source requirement |
| [Shared Registration](features/shared-registration.md) | Reg_Shared | Shared ownership pending | user direction; detailed design pending |
| [Bulk Upload](features/bulk-upload.md) | Reg_Bulk | Shared/domain mapping pending | required capability; implementation gap |
| [Google Sheets Sync](features/google-sheets-sync.md) | Sheet_Sync | Integration/shared ownership pending | required capability; implementation gap |
| [Change History](features/change-history.md) | Change_Hist | Shared/domain mapping pending | user direction |
| [Payroll](features/payroll.md) | Payroll | HRMS / Payroll Management | Proposed module scope; see HRMS-MAP-01 |
| [Aggregator Master](features/aggregator-master.md) | Agg_Master | Placement pending | planned scope |
| [Vendor Master](features/vendor-master.md) | Vnd_Master | Placement pending | planned scope |
| [Ingredient Master](features/ingredient-master.md) | Ing_Master | Placement pending | planned scope |
| [Brand Registration](features/brand-registration.md) | Brand_Reg | Placement pending | planned scope |
| [Location Registration](features/location-registration.md) | Loc_Reg | Placement pending | planned scope |
| [Employment Lifecycle](features/employment-lifecycle.md) | FEAT-HRMS-DRAFT-1 | HRMS / Employee Management | Proposed architecture inventory; not an approved complete BRD |
| [Organization Assignment](features/organization-assignment.md) | FEAT-HRMS-DRAFT-2 | HRMS / Employee Management | Proposed architecture inventory; not an approved complete BRD |
| [Employee Documents](features/employee-documents.md) | FEAT-HRMS-DRAFT-3 | HRMS / Employee Management | Proposed architecture inventory; not an approved complete BRD |
| [Shift Configuration](features/shift-configuration.md) | FEAT-HRMS-DRAFT-4 | HRMS / Shift & Roster Management | Proposed architecture inventory; not an approved complete BRD |
| [Roster Planning](features/roster-planning.md) | FEAT-HRMS-DRAFT-5 | HRMS / Shift & Roster Management | Proposed architecture inventory; not an approved complete BRD |
| [Roster Assignment](features/roster-assignment.md) | FEAT-HRMS-DRAFT-6 | HRMS / Shift & Roster Management | Proposed architecture inventory; not an approved complete BRD |
| [Roster Changes](features/roster-changes.md) | FEAT-HRMS-DRAFT-7 | HRMS / Shift & Roster Management | Proposed architecture inventory; not an approved complete BRD |
| [Attendance Import](features/attendance-import.md) | FEAT-HRMS-DRAFT-8 | HRMS / Attendance Management | Proposed architecture inventory; not an approved complete BRD |
| [Attendance Processing](features/attendance-processing.md) | FEAT-HRMS-DRAFT-9 | HRMS / Attendance Management | Proposed architecture inventory; not an approved complete BRD |
| [Attendance Corrections](features/attendance-corrections.md) | FEAT-HRMS-DRAFT-10 | HRMS / Attendance Management | Proposed architecture inventory; not an approved complete BRD |
| [Attendance Exceptions](features/attendance-exceptions.md) | FEAT-HRMS-DRAFT-11 | HRMS / Attendance Management | Proposed architecture inventory; not an approved complete BRD |
| [Overtime Calculation](features/overtime-calculation.md) | FEAT-HRMS-DRAFT-12 | HRMS / Attendance Management | Proposed architecture inventory; not an approved complete BRD |
| [Leave Configuration](features/leave-configuration.md) | FEAT-HRMS-DRAFT-13 | HRMS / Leave Management | Proposed architecture inventory; not an approved complete BRD |
| [Leave Balances](features/leave-balances.md) | FEAT-HRMS-DRAFT-14 | HRMS / Leave Management | Proposed architecture inventory; not an approved complete BRD |
| [Leave Requests](features/leave-requests.md) | FEAT-HRMS-DRAFT-15 | HRMS / Leave Management | Proposed architecture inventory; not an approved complete BRD |
| [Leave Processing](features/leave-processing.md) | FEAT-HRMS-DRAFT-16 | HRMS / Leave Management | Proposed architecture inventory; not an approved complete BRD |
| [Salary Structure](features/salary-structure.md) | FEAT-HRMS-DRAFT-17 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Payroll Groups](features/payroll-groups.md) | FEAT-HRMS-DRAFT-18 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Variable Pay Inputs](features/variable-pay-inputs.md) | FEAT-HRMS-DRAFT-19 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Loans & Advances](features/loans-advances.md) | FEAT-HRMS-DRAFT-20 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Reimbursements](features/reimbursements.md) | FEAT-HRMS-DRAFT-21 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Payroll Processing](features/payroll-processing.md) | FEAT-HRMS-DRAFT-22 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Payroll Review & Finalization](features/payroll-review-finalization.md) | FEAT-HRMS-DRAFT-23 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Payment Reconciliation](features/payment-reconciliation.md) | FEAT-HRMS-DRAFT-24 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Statutory Processing](features/statutory-processing.md) | FEAT-HRMS-DRAFT-25 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Final Settlement](features/final-settlement.md) | FEAT-HRMS-DRAFT-26 | HRMS / Payroll Management | Proposed architecture inventory; not an approved complete BRD |
| [Configurable uniqueness](features/configurable-uniqueness.md) | FEAT-COMMON-DRAFT-1 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Entity field and form control](features/entity-field-and-form-control.md) | FEAT-COMMON-DRAFT-2 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Access groups](features/access-groups.md) | FEAT-COMMON-DRAFT-3 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Entity subscriptions](features/entity-subscriptions.md) | FEAT-COMMON-DRAFT-4 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Preferences and defaults](features/preferences-and-defaults.md) | FEAT-COMMON-DRAFT-5 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Bulk upload and templates](features/bulk-upload-and-templates.md) | FEAT-COMMON-DRAFT-6 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Google Sheet input and output](features/google-sheet-input-and-output.md) | FEAT-COMMON-DRAFT-7 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Email extraction](features/email-extraction.md) | FEAT-COMMON-DRAFT-8 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Reports and dashboards](features/reports-and-dashboards.md) | FEAT-COMMON-DRAFT-9 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Search at every level](features/search-at-every-level.md) | FEAT-COMMON-DRAFT-10 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Configurable errors and source traceability](features/configurable-errors-and-source-traceability.md) | FEAT-COMMON-DRAFT-11 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Shared architecture and history](features/shared-architecture-and-history.md) | FEAT-COMMON-DRAFT-12 | Shared cross-suite capability; exact architectural placement pending | Recorded requirements/design directions; implementation not verified |
| [Vendor Registration](features/vendor-registration.md) | vnd_reg | Architectural placement pending | User-authorized proposed registration boundary; not implemented |
| [Aggregator Registration](features/aggregator-registration.md) | agg_reg | Architectural placement pending | User-authorized proposed registration boundary; not implemented |
| [Source Registration](features/source-registration.md) | source_reg | Architectural placement pending | User-authorized proposed registration boundary; not implemented |
