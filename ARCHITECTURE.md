# COS Architecture Explorer

Draft navigation based on `architecture/objects.yaml`; no new hierarchy objects are inferred.

[Home](README.md) · [Architecture index](catalogue/architecture.md) · [Relational tree](catalogue/tree.md) · [Metadata design](architecture/metadata-driven-component-standard.yaml)

**Inventory:** 1 platform, 9 suites, 47 engines, 5 proposed HRMS modules and 28 proposed HRMS components.

## Complete clickable hierarchy

- **[CulinaOS Platform](catalogue/architecture/culinaos-platform.md)** — Platform
  - **[Enterprise Management](catalogue/architecture/enterprise-management.md)** — Suite
    - **[HRMS](catalogue/architecture/hrms.md)** — Engine
      - **[Employee Management](catalogue/architecture/employee-management.md)** — Module
        - [Employee Registration](catalogue/architecture/emp-reg.md) — Component
        - [Employee Details](catalogue/architecture/employee-details.md) — Component
        - [Employment Lifecycle](catalogue/architecture/employment-lifecycle.md) — Component
        - [Organization Assignment](catalogue/architecture/organization-assignment.md) — Component
        - [Employee Documents](catalogue/architecture/employee-documents.md) — Component
      - **[Shift & Roster Management](catalogue/architecture/shift-roster-management.md)** — Module
        - [Shift Configuration](catalogue/architecture/shift-configuration.md) — Component
        - [Roster Planning](catalogue/architecture/roster-planning.md) — Component
        - [Roster Assignment](catalogue/architecture/roster-assignment.md) — Component
        - [Roster Changes](catalogue/architecture/roster-changes.md) — Component
      - **[Attendance Management](catalogue/architecture/attendance-management.md)** — Module
        - [Attendance Import](catalogue/architecture/attendance-import.md) — Component
        - [Attendance Processing](catalogue/architecture/attendance-processing.md) — Component
        - [Attendance Corrections](catalogue/architecture/attendance-corrections.md) — Component
        - [Attendance Exceptions](catalogue/architecture/attendance-exceptions.md) — Component
        - [Overtime Calculation](catalogue/architecture/overtime-calculation.md) — Component
      - **[Leave Management](catalogue/architecture/leave-management.md)** — Module
        - [Leave Configuration](catalogue/architecture/leave-configuration.md) — Component
        - [Leave Balances](catalogue/architecture/leave-balances.md) — Component
        - [Leave Requests](catalogue/architecture/leave-requests.md) — Component
        - [Leave Processing](catalogue/architecture/leave-processing.md) — Component
      - **[Payroll Management](catalogue/architecture/payroll-management.md)** — Module
        - [Salary Structure](catalogue/architecture/salary-structure.md) — Component
        - [Payroll Groups](catalogue/architecture/payroll-groups.md) — Component
        - [Variable Pay Inputs](catalogue/architecture/variable-pay-inputs.md) — Component
        - [Loans & Advances](catalogue/architecture/loans-advances.md) — Component
        - [Reimbursements](catalogue/architecture/reimbursements.md) — Component
        - [Payroll Processing](catalogue/architecture/payroll-processing.md) — Component
        - [Payroll Review & Finalization](catalogue/architecture/payroll-review-finalization.md) — Component
        - [Payment Reconciliation](catalogue/architecture/payment-reconciliation.md) — Component
        - [Statutory Processing](catalogue/architecture/statutory-processing.md) — Component
        - [Final Settlement](catalogue/architecture/final-settlement.md) — Component
    - **[Finance Engine](catalogue/architecture/finance-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Quality Assurance Engine](catalogue/architecture/quality-assurance-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Asset & Maintenance Engine](catalogue/architecture/asset-maintenance-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Compliance & Audit Engine](catalogue/architecture/compliance-audit-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Franchise Management Engine](catalogue/architecture/franchise-management-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Platform Governance](catalogue/architecture/platform-governance.md)** — Suite
    - **[Governance Engine](catalogue/architecture/governance-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Security Engine](catalogue/architecture/security-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Configuration Engine](catalogue/architecture/configuration-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Platform Administration Engine](catalogue/architecture/platform-administration-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Common Data](catalogue/architecture/common-data.md)** — Suite
    - **[Master Data Engine](catalogue/architecture/master-data-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Data Set Engine](catalogue/architecture/data-set-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Reference Data Engine](catalogue/architecture/reference-data-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Data Governance Engine](catalogue/architecture/data-governance-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Product & Commercial](catalogue/architecture/product-commercial.md)** — Suite
    - **[Menu Engine](catalogue/architecture/menu-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Recipe Engine](catalogue/architecture/recipe-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Packaging Engine](catalogue/architecture/packaging-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Pricing Engine](catalogue/architecture/pricing-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Supply & Operations](catalogue/architecture/supply-operations.md)** — Suite
    - **[Procurement Engine](catalogue/architecture/procurement-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Inventory Engine](catalogue/architecture/inventory-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Production Engine](catalogue/architecture/production-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Kitchen Operations Engine](catalogue/architecture/kitchen-operations-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Sales & Customer](catalogue/architecture/sales-customer.md)** — Suite
    - **[Sales Engine](catalogue/architecture/sales-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Customer Experience Engine](catalogue/architecture/customer-experience-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Marketing Engine](catalogue/architecture/marketing-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Delivery & Logistics Engine](catalogue/architecture/delivery-logistics-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[AI & Analytics](catalogue/architecture/ai-analytics.md)** — Suite
    - **[BI & Reporting Engine](catalogue/architecture/bi-reporting-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[KPI & Dashboards Engine](catalogue/architecture/kpi-dashboards-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Forecasting Engine](catalogue/architecture/forecasting-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[AI Assistant Engine](catalogue/architecture/ai-assistant-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Recommendations Engine](catalogue/architecture/recommendations-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Decision Support Engine](catalogue/architecture/decision-support-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Integration](catalogue/architecture/integration.md)** — Suite
    - **[API Management Engine](catalogue/architecture/api-management-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Internal Engine Integration Engine](catalogue/architecture/internal-engine-integration-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[External System Integration Engine](catalogue/architecture/external-system-integration-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Event Integration Engine](catalogue/architecture/event-integration-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Data Integration Engine](catalogue/architecture/data-integration-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Integration Monitoring Engine](catalogue/architecture/integration-monitoring-engine.md)** — Engine
      - *Modules and components: Pending design*
  - **[Technology & Platform Services](catalogue/architecture/technology-platform-services.md)** — Suite
    - **[Application Services Engine](catalogue/architecture/application-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Database Services Engine](catalogue/architecture/database-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Identity & Access Engine](catalogue/architecture/identity-access-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Notification Services Engine](catalogue/architecture/notification-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[File & Document Services Engine](catalogue/architecture/file-document-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Search Services Engine](catalogue/architecture/search-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[AI/ML Services Engine](catalogue/architecture/ai-ml-services-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[Logging & Monitoring Engine](catalogue/architecture/logging-monitoring-engine.md)** — Engine
      - *Modules and components: Pending design*
    - **[DevOps / Infrastructure Engine](catalogue/architecture/devops-infrastructure-engine.md)** — Engine
      - *Modules and components: Pending design*

## Connected design navigation

| Area | Linked artifact | Status |
| --- | --- | --- |
| Source hierarchy | [Architecture objects](architecture/objects.yaml) | Maintained definition |
| Full generated navigation | [Relational tree](catalogue/tree.md) | Generated view |
| Shared metadata services | [Metadata-driven standard](architecture/metadata-driven-component-standard.yaml) | Draft |
| Shared database | [Shared data design](architecture/shared-data-design.yaml) | Logical proposal |
| UML / database / file hierarchy / developer matrix | [Design template](templates/design.yaml) | Draft |
| Developer guide | [Developer guide](architecture/developer-guide.yaml) | Draft |
| Employee data | [Employee data design](architecture/emp-data-design.yaml) | Logical proposal |
| Implementation evidence | [Implementation catalogue](catalogue/implementation.md) | Partial |

## Maintenance and limitations

- Authoritative architecture changes belong in `architecture/objects.yaml`, not generated catalogue files.
- Catalogue pages must be regenerated and checked after source changes.
- The architecture explorer links existing records only. No missing modules, components or shortcodes are invented.
- Approval, implementation, verification and publication remain separate.
