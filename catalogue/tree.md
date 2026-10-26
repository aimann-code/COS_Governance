# COS relational tree

> Generated relational navigation; edit maintained definitions, not this view. Governance 0.3.9.
> Existing relationships only. A linked item is not automatically approved, implemented or deployed.

[COS Catalogue](README.md) · [Architecture](architecture.md) · [Approval review](approval-review.md)

This tree joins architecture, feature references, implementation mappings, schemas/tables/fields, standards, naming and maintained-file ownership. Repeated links point to the same canonical definition; they are not duplicate editable records. Cross-suite applicability, missing owners and unresolved links remain visible.

| Branch | Coverage | Open detail |
| --- | --- | --- |
| Architecture | 1 platform, 9 suites, 47 engines; 5 HRMS modules and 28 components | Other detailed module/component designs remain pending |
| Features | 55 entries | Only explicit architecture_ref links appear under architecture nodes |
| Implementation | 6 evidence mappings | Planned mappings are labelled; code inventory is partial |
| Data | 8 proposed schemas, 42 proposed tables | Physical deployment and exact architecture ownership not inferred |
| Standards | 23 standards | Applicability remains individually scoped/pending |
| Naming | 53 controlled terms | Missing shortcodes are not automatically allocated |
| Skills | Repository skill policy/index | No actual SKILL.md installation/implementation recorded |

<details open>
<summary>Architecture ownership tree</summary>

- [CulinaOS Platform](architecture/culinaos-platform.md) — Platform; **Short Code:** `COS`
  - [Enterprise Management](architecture/enterprise-management.md) — Suite; **Short Code:** `COS-EMS`
    - [HRMS](architecture/hrms.md) — Engine; **Short Code:** `HRMS`
      - [Employee Management](architecture/employee-management.md) — Module; **Short Code:** `EMP_MGT`
        - Linked implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) — Source exists at pinned commit; frozen-name alignment not applied
        - Linked implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) — Source exists; contract naming/authority strategy pending
        - Linked implementation evidence: [apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) — Existing migration source; no migration performed
        - Linked implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) — Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed
        - [Employee Registration](architecture/emp-reg.md) — Component; **Short Code:** `emp_reg`
          - Feature: [Employee Registration](features/employee-registration.md) — draft requirement inventory
        - [Employee Details](architecture/employee-details.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Employee Details](features/employee-details.md) — draft requirement inventory
          - Feature: [Employee Update](features/employee-update.md) — source requirement; reconcile implementation evidence
        - [Employment Lifecycle](architecture/employment-lifecycle.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Employment Lifecycle](features/employment-lifecycle.md) — Proposed architecture inventory; not an approved complete BRD
        - [Organization Assignment](architecture/organization-assignment.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Organization Assignment](features/organization-assignment.md) — Proposed architecture inventory; not an approved complete BRD
        - [Employee Documents](architecture/employee-documents.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Employee Documents](features/employee-documents.md) — Proposed architecture inventory; not an approved complete BRD
      - [Shift & Roster Management](architecture/shift-roster-management.md) — Module; **Short Code:** `Unassigned`
        - [Shift Configuration](architecture/shift-configuration.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Shift Configuration](features/shift-configuration.md) — Proposed architecture inventory; not an approved complete BRD
        - [Roster Planning](architecture/roster-planning.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Roster Planning](features/roster-planning.md) — Proposed architecture inventory; not an approved complete BRD
        - [Roster Assignment](architecture/roster-assignment.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Roster Assignment](features/roster-assignment.md) — Proposed architecture inventory; not an approved complete BRD
        - [Roster Changes](architecture/roster-changes.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Roster Changes](features/roster-changes.md) — Proposed architecture inventory; not an approved complete BRD
      - [Attendance Management](architecture/attendance-management.md) — Module; **Short Code:** `Unassigned`
        - [Attendance Import](architecture/attendance-import.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Attendance Import](features/attendance-import.md) — Proposed architecture inventory; not an approved complete BRD
        - [Attendance Processing](architecture/attendance-processing.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Attendance Processing](features/attendance-processing.md) — Proposed architecture inventory; not an approved complete BRD
        - [Attendance Corrections](architecture/attendance-corrections.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Attendance Corrections](features/attendance-corrections.md) — Proposed architecture inventory; not an approved complete BRD
        - [Attendance Exceptions](architecture/attendance-exceptions.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Attendance Exceptions](features/attendance-exceptions.md) — Proposed architecture inventory; not an approved complete BRD
        - [Overtime Calculation](architecture/overtime-calculation.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Overtime Calculation](features/overtime-calculation.md) — Proposed architecture inventory; not an approved complete BRD
      - [Leave Management](architecture/leave-management.md) — Module; **Short Code:** `Unassigned`
        - [Leave Configuration](architecture/leave-configuration.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Leave Configuration](features/leave-configuration.md) — Proposed architecture inventory; not an approved complete BRD
        - [Leave Balances](architecture/leave-balances.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Leave Balances](features/leave-balances.md) — Proposed architecture inventory; not an approved complete BRD
        - [Leave Requests](architecture/leave-requests.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Leave Requests](features/leave-requests.md) — Proposed architecture inventory; not an approved complete BRD
        - [Leave Processing](architecture/leave-processing.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Leave Processing](features/leave-processing.md) — Proposed architecture inventory; not an approved complete BRD
      - [Payroll Management](architecture/payroll-management.md) — Module; **Short Code:** `Unassigned`
        - Feature: [Payroll](features/payroll.md) — Proposed module scope; see HRMS-MAP-01
        - [Salary Structure](architecture/salary-structure.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Salary Structure](features/salary-structure.md) — Proposed architecture inventory; not an approved complete BRD
        - [Payroll Groups](architecture/payroll-groups.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Payroll Groups](features/payroll-groups.md) — Proposed architecture inventory; not an approved complete BRD
        - [Variable Pay Inputs](architecture/variable-pay-inputs.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Variable Pay Inputs](features/variable-pay-inputs.md) — Proposed architecture inventory; not an approved complete BRD
        - [Loans & Advances](architecture/loans-advances.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Loans & Advances](features/loans-advances.md) — Proposed architecture inventory; not an approved complete BRD
        - [Reimbursements](architecture/reimbursements.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Reimbursements](features/reimbursements.md) — Proposed architecture inventory; not an approved complete BRD
        - [Payroll Processing](architecture/payroll-processing.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Payroll Processing](features/payroll-processing.md) — Proposed architecture inventory; not an approved complete BRD
        - [Payroll Review & Finalization](architecture/payroll-review-finalization.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Payroll Review & Finalization](features/payroll-review-finalization.md) — Proposed architecture inventory; not an approved complete BRD
        - [Payment Reconciliation](architecture/payment-reconciliation.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Payment Reconciliation](features/payment-reconciliation.md) — Proposed architecture inventory; not an approved complete BRD
        - [Statutory Processing](architecture/statutory-processing.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Statutory Processing](features/statutory-processing.md) — Proposed architecture inventory; not an approved complete BRD
        - [Final Settlement](architecture/final-settlement.md) — Component; **Short Code:** `Unassigned`
          - Feature: [Final Settlement](features/final-settlement.md) — Proposed architecture inventory; not an approved complete BRD
    - [Finance Engine](architecture/finance-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Quality Assurance Engine](architecture/quality-assurance-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Asset & Maintenance Engine](architecture/asset-maintenance-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Compliance & Audit Engine](architecture/compliance-audit-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Franchise Management Engine](architecture/franchise-management-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Platform Governance](architecture/platform-governance.md) — Suite; **Short Code:** `COS-PGS`
    - [Governance Engine](architecture/governance-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Security Engine](architecture/security-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Configuration Engine](architecture/configuration-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Platform Administration Engine](architecture/platform-administration-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Common Data](architecture/common-data.md) — Suite; **Short Code:** `COS-CDS`
    - [Master Data Engine](architecture/master-data-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Data Set Engine](architecture/data-set-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Reference Data Engine](architecture/reference-data-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Data Governance Engine](architecture/data-governance-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Product & Commercial](architecture/product-commercial.md) — Suite; **Short Code:** `COS-PCS`
    - [Menu Engine](architecture/menu-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Recipe Engine](architecture/recipe-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Packaging Engine](architecture/packaging-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Pricing Engine](architecture/pricing-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Supply & Operations](architecture/supply-operations.md) — Suite; **Short Code:** `COS-SOS`
    - [Procurement Engine](architecture/procurement-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Inventory Engine](architecture/inventory-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Production Engine](architecture/production-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Kitchen Operations Engine](architecture/kitchen-operations-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Sales & Customer](architecture/sales-customer.md) — Suite; **Short Code:** `COS-SCS`
    - [Sales Engine](architecture/sales-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Customer Experience Engine](architecture/customer-experience-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Marketing Engine](architecture/marketing-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Delivery & Logistics Engine](architecture/delivery-logistics-engine.md) — Engine; **Short Code:** `Unassigned`
  - [AI & Analytics](architecture/ai-analytics.md) — Suite; **Short Code:** `COS-AAS`
    - [BI & Reporting Engine](architecture/bi-reporting-engine.md) — Engine; **Short Code:** `Unassigned`
    - [KPI & Dashboards Engine](architecture/kpi-dashboards-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Forecasting Engine](architecture/forecasting-engine.md) — Engine; **Short Code:** `Unassigned`
    - [AI Assistant Engine](architecture/ai-assistant-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Recommendations Engine](architecture/recommendations-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Decision Support Engine](architecture/decision-support-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Integration](architecture/integration.md) — Suite; **Short Code:** `COS-INT`
    - [API Management Engine](architecture/api-management-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Internal Engine Integration Engine](architecture/internal-engine-integration-engine.md) — Engine; **Short Code:** `Unassigned`
    - [External System Integration Engine](architecture/external-system-integration-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Event Integration Engine](architecture/event-integration-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Data Integration Engine](architecture/data-integration-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Integration Monitoring Engine](architecture/integration-monitoring-engine.md) — Engine; **Short Code:** `Unassigned`
  - [Technology & Platform Services](architecture/technology-platform-services.md) — Suite; **Short Code:** `COS-TPS`
    - [Application Services Engine](architecture/application-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Database Services Engine](architecture/database-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Identity & Access Engine](architecture/identity-access-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Notification Services Engine](architecture/notification-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [File & Document Services Engine](architecture/file-document-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Search Services Engine](architecture/search-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [AI/ML Services Engine](architecture/ai-ml-services-engine.md) — Engine; **Short Code:** `Unassigned`
    - [Logging & Monitoring Engine](architecture/logging-monitoring-engine.md) — Engine; **Short Code:** `Unassigned`
    - [DevOps / Infrastructure Engine](architecture/devops-infrastructure-engine.md) — Engine; **Short Code:** `Unassigned`

</details>

<details>
<summary>Shared capabilities — placement pending</summary>

- [Shared Request Processing](architecture/shared-request-processing.md) — Exact registered engine/module pending
- [Shared Security and Approval](architecture/shared-security-and-approval.md) — Exact registered engine/module pending
- [Shared Integration](architecture/shared-integration.md) — Exact registered engine/module pending

</details>

<details>
<summary>Features and their recorded relationships</summary>

- [Employee Registration](features/employee-registration.md) — reference `emp_reg`
  - Architecture link: [Employee Registration](architecture/emp-reg.md)
  - State: draft requirement inventory
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) — Source exists at pinned commit; frozen-name alignment not applied
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) — Source exists; contract naming/authority strategy pending
  - Implementation evidence: [apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) — Existing migration source; no migration performed
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) — Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed
- [Employee Details](features/employee-details.md) — reference `EMP_Dtl`
  - Architecture link: [Employee Details](architecture/employee-details.md)
  - State: draft requirement inventory
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) — Source exists; contract naming/authority strategy pending
- [Employee Update](features/employee-update.md) — reference `EMP_Update`
  - Architecture link: [Employee Details](architecture/employee-details.md)
  - State: source requirement; reconcile implementation evidence
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) — Source exists at pinned commit; frozen-name alignment not applied
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) — Source exists; contract naming/authority strategy pending
  - Implementation evidence: [apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) — Existing migration source; no migration performed
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) — Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed
- [Form Configuration](features/form-configuration.md) — reference `Form_Config`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared ownership pending
  - State: source requirement

- [Shared Registration](features/shared-registration.md) — reference `Reg_Shared`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared ownership pending
  - State: user direction; detailed design pending
  - Implementation evidence: Source location not mapped — Planned shared capability; owner placement unresolved
- [Bulk Upload](features/bulk-upload.md) — reference `Reg_Bulk`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared/domain mapping pending
  - State: required capability; implementation gap

- [Google Sheets Sync](features/google-sheets-sync.md) — reference `Sheet_Sync`
  - Architecture link: Not explicitly mapped; recorded owner text: Integration/shared ownership pending
  - State: required capability; implementation gap

- [Change History](features/change-history.md) — reference `Change_Hist`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared/domain mapping pending
  - State: user direction
  - Implementation evidence: [apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) — Existing migration source; no migration performed
- [Payroll](features/payroll.md) — reference `Payroll`
  - Architecture link: [Payroll Management](architecture/payroll-management.md)
  - State: Proposed module scope; see HRMS-MAP-01

- [Aggregator Master](features/aggregator-master.md) — reference `Agg_Master`
  - Architecture link: Not explicitly mapped; recorded owner text: Placement pending
  - State: planned scope

- [Vendor Master](features/vendor-master.md) — reference `Vnd_Master`
  - Architecture link: Not explicitly mapped; recorded owner text: Placement pending
  - State: planned scope

- [Ingredient Master](features/ingredient-master.md) — reference `Ing_Master`
  - Architecture link: Not explicitly mapped; recorded owner text: Placement pending
  - State: planned scope

- [Brand Registration](features/brand-registration.md) — reference `Brand_Reg`
  - Architecture link: Not explicitly mapped; recorded owner text: Placement pending
  - State: planned scope

- [Location Registration](features/location-registration.md) — reference `Loc_Reg`
  - Architecture link: Not explicitly mapped; recorded owner text: Placement pending
  - State: planned scope

- [Employment Lifecycle](features/employment-lifecycle.md) — reference `FEAT-HRMS-DRAFT-1`
  - Architecture link: [Employment Lifecycle](architecture/employment-lifecycle.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Organization Assignment](features/organization-assignment.md) — reference `FEAT-HRMS-DRAFT-2`
  - Architecture link: [Organization Assignment](architecture/organization-assignment.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Employee Documents](features/employee-documents.md) — reference `FEAT-HRMS-DRAFT-3`
  - Architecture link: [Employee Documents](architecture/employee-documents.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Shift Configuration](features/shift-configuration.md) — reference `FEAT-HRMS-DRAFT-4`
  - Architecture link: [Shift Configuration](architecture/shift-configuration.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Roster Planning](features/roster-planning.md) — reference `FEAT-HRMS-DRAFT-5`
  - Architecture link: [Roster Planning](architecture/roster-planning.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Roster Assignment](features/roster-assignment.md) — reference `FEAT-HRMS-DRAFT-6`
  - Architecture link: [Roster Assignment](architecture/roster-assignment.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Roster Changes](features/roster-changes.md) — reference `FEAT-HRMS-DRAFT-7`
  - Architecture link: [Roster Changes](architecture/roster-changes.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Attendance Import](features/attendance-import.md) — reference `FEAT-HRMS-DRAFT-8`
  - Architecture link: [Attendance Import](architecture/attendance-import.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Attendance Processing](features/attendance-processing.md) — reference `FEAT-HRMS-DRAFT-9`
  - Architecture link: [Attendance Processing](architecture/attendance-processing.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Attendance Corrections](features/attendance-corrections.md) — reference `FEAT-HRMS-DRAFT-10`
  - Architecture link: [Attendance Corrections](architecture/attendance-corrections.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Attendance Exceptions](features/attendance-exceptions.md) — reference `FEAT-HRMS-DRAFT-11`
  - Architecture link: [Attendance Exceptions](architecture/attendance-exceptions.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Overtime Calculation](features/overtime-calculation.md) — reference `FEAT-HRMS-DRAFT-12`
  - Architecture link: [Overtime Calculation](architecture/overtime-calculation.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Leave Configuration](features/leave-configuration.md) — reference `FEAT-HRMS-DRAFT-13`
  - Architecture link: [Leave Configuration](architecture/leave-configuration.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Leave Balances](features/leave-balances.md) — reference `FEAT-HRMS-DRAFT-14`
  - Architecture link: [Leave Balances](architecture/leave-balances.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Leave Requests](features/leave-requests.md) — reference `FEAT-HRMS-DRAFT-15`
  - Architecture link: [Leave Requests](architecture/leave-requests.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Leave Processing](features/leave-processing.md) — reference `FEAT-HRMS-DRAFT-16`
  - Architecture link: [Leave Processing](architecture/leave-processing.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Salary Structure](features/salary-structure.md) — reference `FEAT-HRMS-DRAFT-17`
  - Architecture link: [Salary Structure](architecture/salary-structure.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Payroll Groups](features/payroll-groups.md) — reference `FEAT-HRMS-DRAFT-18`
  - Architecture link: [Payroll Groups](architecture/payroll-groups.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Variable Pay Inputs](features/variable-pay-inputs.md) — reference `FEAT-HRMS-DRAFT-19`
  - Architecture link: [Variable Pay Inputs](architecture/variable-pay-inputs.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Loans & Advances](features/loans-advances.md) — reference `FEAT-HRMS-DRAFT-20`
  - Architecture link: [Loans & Advances](architecture/loans-advances.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Reimbursements](features/reimbursements.md) — reference `FEAT-HRMS-DRAFT-21`
  - Architecture link: [Reimbursements](architecture/reimbursements.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Payroll Processing](features/payroll-processing.md) — reference `FEAT-HRMS-DRAFT-22`
  - Architecture link: [Payroll Processing](architecture/payroll-processing.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Payroll Review & Finalization](features/payroll-review-finalization.md) — reference `FEAT-HRMS-DRAFT-23`
  - Architecture link: [Payroll Review & Finalization](architecture/payroll-review-finalization.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Payment Reconciliation](features/payment-reconciliation.md) — reference `FEAT-HRMS-DRAFT-24`
  - Architecture link: [Payment Reconciliation](architecture/payment-reconciliation.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Statutory Processing](features/statutory-processing.md) — reference `FEAT-HRMS-DRAFT-25`
  - Architecture link: [Statutory Processing](architecture/statutory-processing.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Final Settlement](features/final-settlement.md) — reference `FEAT-HRMS-DRAFT-26`
  - Architecture link: [Final Settlement](architecture/final-settlement.md)
  - State: Proposed architecture inventory; not an approved complete BRD

- [Configurable uniqueness](features/configurable-uniqueness.md) — reference `FEAT-COMMON-DRAFT-1`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified
  - Implementation evidence: [apps/api/src/main/java/com/cos/shared/reg/UniqueKeyRule.java](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/shared/reg/UniqueKeyRule.java) — Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed
  - Implementation evidence: [apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) — Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed
- [Entity field and form control](features/entity-field-and-form-control.md) — reference `FEAT-COMMON-DRAFT-2`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Access groups](features/access-groups.md) — reference `FEAT-COMMON-DRAFT-3`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Entity subscriptions](features/entity-subscriptions.md) — reference `FEAT-COMMON-DRAFT-4`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Preferences and defaults](features/preferences-and-defaults.md) — reference `FEAT-COMMON-DRAFT-5`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Bulk upload and templates](features/bulk-upload-and-templates.md) — reference `FEAT-COMMON-DRAFT-6`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Google Sheet input and output](features/google-sheet-input-and-output.md) — reference `FEAT-COMMON-DRAFT-7`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Email extraction](features/email-extraction.md) — reference `FEAT-COMMON-DRAFT-8`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Reports and dashboards](features/reports-and-dashboards.md) — reference `FEAT-COMMON-DRAFT-9`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Search at every level](features/search-at-every-level.md) — reference `FEAT-COMMON-DRAFT-10`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Configurable errors and source traceability](features/configurable-errors-and-source-traceability.md) — reference `FEAT-COMMON-DRAFT-11`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Shared architecture and history](features/shared-architecture-and-history.md) — reference `FEAT-COMMON-DRAFT-12`
  - Architecture link: Not explicitly mapped; recorded owner text: Shared cross-suite capability; exact architectural placement pending
  - State: Recorded requirements/design directions; implementation not verified

- [Vendor Registration](features/vendor-registration.md) — reference `vnd_reg`
  - Architecture link: Not explicitly mapped; recorded owner text: Architectural placement pending
  - State: User-authorized proposed registration boundary; not implemented

- [Aggregator Registration](features/aggregator-registration.md) — reference `agg_reg`
  - Architecture link: Not explicitly mapped; recorded owner text: Architectural placement pending
  - State: User-authorized proposed registration boundary; not implemented

- [Source Registration](features/source-registration.md) — reference `source_reg`
  - Architecture link: Not explicitly mapped; recorded owner text: Architectural placement pending
  - State: User-authorized proposed registration boundary; not implemented


</details>

<details>
<summary>Data tree — schema → table → field</summary>

- **agg** — proposed logical schema
  - [agg.agg](tables/agg-agg.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `name` — text
    - `status` — text
- **audit** — proposed logical schema
  - [audit.change_event](tables/audit-change-event.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `event_type` — text
    - `target_type` — text
    - `target_ref` — text
    - `request_ref` — text
    - `change_encrypted` — protected text
- **auth** — proposed logical schema
  - [auth.access_group](tables/auth-access-group.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `name` — text
    - `status` — text
    - `admin_capabilities` — jsonb
  - [auth.group_perm](tables/auth-group-perm.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `group_id` — uuid; FK
    - `object_ref` — uuid
    - `field_ref` — uuid
    - `can_read` — boolean
    - `can_write` — boolean
  - [auth.user_group](tables/auth-user-group.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `user_ref` — text
    - `group_id` — uuid; FK
    - `valid_from` — timestamptz
    - `valid_to` — timestamptz
- **config** — proposed logical schema
  - [config.field_def](tables/config-field-def.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `object_ref` — uuid
    - `field_code` — text
    - `data_type` — text
    - `definition_ver` — integer
    - `sensitivity` — text
  - [config.entity_field](tables/config-entity-field.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `field_ref` — uuid
    - `component_ref` — uuid
    - `config_ver` — integer
    - `enabled` — boolean
    - `label` — text
    - `required` — boolean
    - `read_only` — boolean
    - `validation_spec` — jsonb
  - [config.form_field](tables/config-form-field.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `form_ref` — uuid
    - `field_ref` — uuid
    - `order_num` — integer
    - `parent_field_ref` — uuid
    - `dependency_spec` — jsonb
  - [config.unique_rule](tables/config-unique-rule.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `object_ref` — uuid
    - `rule_name` — text
    - `config_ver` — integer
    - `status` — text
    - `is_default` — boolean
    - `outcome` — text
  - [config.unique_rule_field](tables/config-unique-rule-field.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `rule_id` — uuid; FK
    - `field_ref` — uuid
    - `order_num` — integer
    - `normalization_spec` — jsonb
  - [config.unique_claim](tables/config-unique-claim.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `rule_id` — uuid; FK
    - `rule_ver` — integer
    - `record_type` — text
    - `record_id` — uuid
    - `key_token` — protected token
  - [config.entitlement](tables/config-entitlement.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `object_ref` — uuid
    - `status` — text
    - `valid_from` — timestamptz
    - `valid_to` — timestamptz
  - [config.preference](tables/config-preference.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `user_ref` — text
    - `preference_type` — text
    - `object_ref` — uuid
    - `settings` — jsonb
    - `config_ver` — integer
    - `confirmation_ref` — uuid
  - [config.confirmation](tables/config-confirmation.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `user_ref` — text
    - `action` — text
    - `payload_digest` — text
    - `confirmed_at` — timestamptz
    - `expires_at` — timestamptz
  - [config.error_template](tables/config-error-template.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `error_code` — text
    - `template_ver` — integer
    - `locale` — text
    - `template_text` — text
    - `allowed_placeholders` — jsonb
- **emp** — proposed logical schema
  - [emp.emp](tables/emp-emp.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `sys_emp_id` — text; Business ID
    - `name` — text
    - `father_name` — text
    - `dob` — date
    - `nationality_ref` — uuid; Reference
  - [emp.emp_identity](tables/emp-emp-identity.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `identity_type_ref` — uuid; Reference
    - `number_encrypted` — protected text
    - `match_token` — protected token
    - `verification_status` — text
    - `valid_from` — date
    - `valid_to` — date
  - [emp.emp_contact](tables/emp-emp-contact.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `contact_type` — text
    - `value_encrypted` — protected text
    - `is_primary` — boolean
    - `verification_status` — text
  - [emp.emp_address](tables/emp-emp-address.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `address_type` — text
    - `line_1_encrypted` — protected text
    - `line_2_encrypted` — protected text
    - `city` — text
    - `region` — text
    - `country_ref` — uuid
    - `postal_code` — text
    - `valid_from` — date
    - `valid_to` — date
  - [emp.employment](tables/emp-employment.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `org_ref` — uuid; Reference
    - `employment_type_ref` — uuid; Reference
    - `status` — text
  - [emp.employment_period](tables/emp-employment-period.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `employment_id` — uuid; FK
    - `joining_date` — date
    - `ended_on` — date
    - `exit_reason` — text
  - [emp.emp_assignment](tables/emp-emp-assignment.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `employment_id` — uuid; FK
    - `assignment_type` — text
    - `master_ref` — uuid; Reference
    - `valid_from` — date
    - `valid_to` — date
  - [emp.emp_id_map](tables/emp-emp-id-map.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `source_ref` — uuid; Reference
    - `external_id` — text
    - `valid_from` — date
    - `valid_to` — date
  - [emp.emp_doc](tables/emp-emp-doc.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `document_ref` — uuid; Reference
    - `document_type_ref` — uuid
    - `verification_status` — text
  - [emp.emp_bank](tables/emp-emp-bank.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `account_number_encrypted` — protected text
    - `holder_name_encrypted` — protected text
    - `bank_code` — text
    - `verification_status` — text
    - `valid_from` — date
    - `valid_to` — date
  - [emp.emp_field_value](tables/emp-emp-field-value.md) — Proposed logical table and indicative fields; not deployed
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `emp_id` — uuid; FK
    - `field_ref` — uuid; Reference
    - `field_def_ver` — integer
    - `value_type` — text
    - `value_encrypted` — protected text
- **integration** — proposed logical schema
  - [integration.source](tables/integration-source.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `name` — text
    - `source_type` — text
    - `connection_ref` — text
    - `linked_object_type` — text
    - `linked_record_id` — uuid
    - `profile_ref` — uuid
    - `status` — text
  - [integration.source_profile](tables/integration-source-profile.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `source_id` — uuid; FK
    - `profile_ver` — integer
    - `format` — text
    - `parser_spec` — jsonb
    - `mapping_ref` — uuid
    - `template_ref` — uuid
  - [integration.mapping](tables/integration-mapping.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `component_ref` — uuid
    - `profile_ver` — integer
    - `source_profile_ref` — uuid
    - `status` — text
    - `confirmation_ref` — uuid
  - [integration.mapping_field](tables/integration-mapping-field.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `mapping_id` — uuid; FK
    - `source_field` — text
    - `target_field_ref` — uuid
    - `transform_spec` — jsonb
    - `match_method` — text
    - `confirmed` — boolean
  - [integration.import_job](tables/integration-import-job.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `source_ref` — uuid
    - `template_ver` — integer
    - `mapping_ver` — integer
    - `config_ver` — integer
    - `mode` — text
    - `status` — text
    - `file_ref` — text
    - `idempotency_key` — text
  - [integration.import_row](tables/integration-import-row.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `job_id` — uuid; FK
    - `source_position` — jsonb
    - `payload_encrypted` — protected text
    - `status` — text
    - `target_record_id` — uuid
  - [integration.processing_error](tables/integration-processing-error.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `job_ref` — uuid
    - `row_ref` — uuid
    - `request_ref` — text
    - `error_code` — text
    - `field_refs` — jsonb
    - `source_context` — jsonb
    - `message_template_ver` — integer
  - [integration.sheet_profile](tables/integration-sheet-profile.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `source_ref` — uuid
    - `spreadsheet_ref` — text
    - `tab_ref` — text
    - `range_spec` — text
    - `direction` — text
    - `mapping_ref` — uuid
    - `preference_ref` — uuid
  - [integration.sync_run](tables/integration-sync-run.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `profile_id` — uuid; FK
    - `confirmation_ref` — uuid
    - `write_mode` — text
    - `filter_spec` — jsonb
    - `status` — text
    - `checkpoint` — jsonb
    - `idempotency_key` — text
  - [integration.email_profile](tables/integration-email-profile.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `source_ref` — uuid
    - `sender_filter` — jsonb
    - `subject_filter` — jsonb
    - `header_filter` — jsonb
    - `content_selection` — text
    - `extraction_profile_ref` — uuid
  - [integration.processed_source](tables/integration-processed-source.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `source_ref` — uuid
    - `message_ref` — text
    - `attachment_ref` — text
    - `source_digest` — text
    - `job_ref` — uuid
  - [integration.outbox](tables/integration-outbox.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `event_type` — text
    - `record_ref` — uuid
    - `record_ver` — integer
    - `payload_ref` — text
    - `delivery_status` — text
    - `attempt_num` — integer
- **report** — proposed logical schema
  - [report.mart_def](tables/report-mart-def.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `code` — text
    - `view_ref` — text
    - `grain` — text
    - `allowed_fields` — jsonb
    - `definition_ver` — integer
  - [report.report_def](tables/report-report-def.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `mart_id` — uuid; FK
    - `name` — text
    - `definition_ver` — integer
    - `controlled_output` — boolean
    - `allowed_filters` — jsonb
  - [report.saved_view](tables/report-saved-view.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `user_ref` — text
    - `report_ref` — uuid
    - `view_name` — text
    - `columns` — jsonb
    - `filters` — jsonb
    - `sort_group` — jsonb
    - `layout` — jsonb
    - `confirmation_ref` — uuid
- **vnd** — proposed logical schema
  - [vnd.vnd](tables/vnd-vnd.md) — Proposed logical table; ownership/schema/types and DDL require review
    - `id` — uuid; PK
    - `scope_id` — text; Scoped reference
    - `row_ver` — integer
    - `created_at` — timestamptz
    - `created_by` — text
    - `updated_at` — timestamptz
    - `updated_by` — text
    - `name` — text
    - `status` — text

Table nesting is derived from qualified names; it does not invent service ownership or deployed foreign keys. See [table formats](table-formats.md) and [Employee logical design](employee-data-design.md).

</details>

<details>
<summary>Standards and applicability</summary>

- [Naming Standard](standards/naming.md) — 12 base rules; 53 controlled terms; approved scoped naming and readable documentation profiles; live migration pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [Architecture Standard](standards/architecture.md) — Initial detailed draft: 16 rules, examples and validation checks; approval/compliance pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [Data Standard](standards/data.md) — Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [Master Data Standard](standards/master-data.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Suite & Engine Standard](standards/suite-engine.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Module Standard](standards/module.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Component Standard](standards/component.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Parameter Standard](standards/parameter.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Versioning Standard](standards/versioning.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Development Standard](standards/development.md) — Initial detailed draft: 16 rules, examples and validation checks; approval/compliance pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [API / Integration Standard](standards/api-integration.md) — Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [Security Standard](standards/security.md) — Initial detailed draft: 20 rules, examples and validation checks; approval/compliance pending
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
  - Recorded target: COS projects adopting this draft; Pending
- [AI / Analytics Standard](standards/ai-analytics.md) — Creation-confirmation rule approved; earlier AI/output rules retain their individual statuses and pending reviews
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [QA Standard](standards/qa.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Operations Standard](standards/operations.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Workspace Standard](standards/workspace.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Tool Standard](standards/tool.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Technology Stack Standard](standards/technology-stack.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Documentation Standard](standards/documentation.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Confidentiality / Access Standard](standards/confidentiality-access.md) — Partial / requires rule review
  - Recorded target: COS framework / HRMS draft; Pending detailed applicability
- [Frontend Standard](standards/frontend.md) — Initial detailed draft prepared; approval and repository compliance pending
  - Recorded target: COS projects adopting this draft; Pending
- [Backend Standard](standards/backend.md) — Initial detailed draft prepared; approval and repository compliance pending
  - Recorded target: COS projects adopting this draft; Pending
- [URL Standard](standards/url.md) — Initial detailed draft prepared; approval and repository compliance pending
  - Recorded target: COS projects adopting this draft; Pending

</details>

<details>
<summary>Naming and controlled terms</summary>

- [Naming Standard](naming.md) — version 0.2.3
  - Employee → `emp`
  - Registration → `reg`
  - Repository → `repo`
  - Aggregator → `agg`
  - Vendor → `vnd`
  - Ingredient → `ing`
  - Brand → `brand`
  - Location → `loc`
  - Organization → `org`
  - Department → `dept`
  - Configuration → `config`
  - Definition → `def`
  - Request → `req`
  - Response → `res`
  - Document → `doc`
  - Reference → `ref`
  - Identifier → `id`
  - Version → `ver`
  - History → `hist`
  - Transaction → `txn`
  - Mapping → `map`
  - Synchronization → `sync`
  - Validation → `validation`
  - Approval → `approval`
  - Permission → `perm`
  - Parameter → `param`
  - Attribute → `attr`
  - Quantity → `qty`
  - Amount → `amt`
  - Number → `num`
  - Sequence → `seq`
  - Temporary → `temp`
  - Service → `service`
  - Controller → `controller`
  - Handler → `handler`
  - Field → `field`
  - Value → `value`
  - Master → `master`
  - Report → `report`
  - Status → `status`
  - Type → `type`
  - Name → `name`
  - Code → `code`
  - Key → `key`
  - Role → `role`
  - Group → `group`
  - Audit → `audit`
  - Event → `event`
  - Draft → `draft`
  - Bulk → `bulk`
  - Api → `api`
  - Dto → `dto`
  - Source → `source`

</details>

<details>
<summary>Maintained files by owning source group</summary>

- **standards**
  - [standards/standards.yaml](../standards/standards.yaml)
  - [standards/naming.yaml](../standards/naming.yaml)
  - [standards/baseline.yaml](../standards/baseline.yaml)
  - [standards/workflow.yaml](../standards/workflow.yaml)
- **architecture**
  - [architecture/objects.yaml](../architecture/objects.yaml)
  - [architecture/emp-data-design.yaml](../architecture/emp-data-design.yaml)
  - [architecture/developer-guide.yaml](../architecture/developer-guide.yaml)
  - [architecture/shared-data-design.yaml](../architecture/shared-data-design.yaml)
  - [architecture/virtual-marts.yaml](../architecture/virtual-marts.yaml)
  - [architecture/source-inventory.yaml](../architecture/source-inventory.yaml)
- **features**
  - [features/features.yaml](../features/features.yaml)
  - [features/common.yaml](../features/common.yaml)
- **decisions**
  - [decisions/decisions.yaml](../decisions/decisions.yaml)
  - [decisions/approval-review.yaml](../decisions/approval-review.yaml)
- **templates**
  - [templates/design.yaml](../templates/design.yaml)
  - [templates/upload-profiles.yaml](../templates/upload-profiles.yaml)
- **ownership**
  - [architecture/ownership.yaml](../architecture/ownership.yaml)

- [Generated catalogue](README.md) — derivative, not another editable authority
- [Filename compatibility map](path-map.md)

</details>

<details>
<summary>Skills</summary>

- [Shared skills index](../skills/README.md) — policy only; no actual skill registered by this work
- [Skill storage standard](repository-storage.md)
- App-specific skills belong in their owning repository; no unverified skills or links are invented.

</details>

## Missing relationships and allocations

- 77 suite/engine/module/component shortcodes remain unassigned.
- Features without an explicit architecture_ref remain in the feature branch with their recorded owner text.
- Schema/table ownership is not automatically assigned to a component by name similarity.
- Field-to-master/value-set, exact standard applicability, skill usage and full code/API/DTO relationships require further source mapping.
- The schema → table → field branch shows logical definitions, not deployed DDL.

[Canonical architecture](../architecture/objects.yaml) · [Feature definitions](../features/features.yaml) · [Implementation mappings](../architecture/ownership.yaml) · [Source-of-truth map](../architecture/source-map.yaml)
