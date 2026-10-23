# Architecture

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.6; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Complete source coverage: **1 platform, 9 suites and 47 engines** from COS v1.1.0. Detailed modules/components remain HRMS proposals. Parent_Ref resolves stable local references; these are not permanent COS IDs. Shared capability placement remains unresolved. Missing detail does not mean an engine is absent.

| Object | Type | Code | Parent | Inventory | Design | Implementation |
| --- | --- | --- | --- | --- | --- | --- |
| [Enterprise Management](architecture/enterprise-management.md) | Suite | COS-EMS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [HRMS](architecture/hrms.md) | Engine | HRMS | Enterprise Management | Imported | Proposed HRMS design; detailed approval pending | Not assessed by inventory import |
| [Employee Management](architecture/employee-management.md) | Module | EMP_MGT | HRMS | Proposed | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved | Not assessed by inventory import |
| [Employee Registration](architecture/emp-reg.md) | Component | emp_reg | Employee Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Existing implementation baseline linked; required improvements and tests not verified by this update |
| [Employee Details](architecture/employee-details.md) | Component | Unassigned | Employee Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Shared Request Processing](architecture/shared-request-processing.md) | Shared capability | Unassigned | Placement unresolved | Placement pending | Exact registered engine/module pending | Not assessed by inventory import |
| [Shared Security and Approval](architecture/shared-security-and-approval.md) | Shared capability | Unassigned | Placement unresolved | Placement pending | Exact registered engine/module pending | Not assessed by inventory import |
| [Shared Integration](architecture/shared-integration.md) | Shared capability | Unassigned | Placement unresolved | Placement pending | Exact registered engine/module pending | Not assessed by inventory import |
| [Employment Lifecycle](architecture/employment-lifecycle.md) | Component | Unassigned | Employee Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Organization Assignment](architecture/organization-assignment.md) | Component | Unassigned | Employee Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Employee Documents](architecture/employee-documents.md) | Component | Unassigned | Employee Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Shift & Roster Management](architecture/shift-roster-management.md) | Module | Unassigned | HRMS | Proposed | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved | Not assessed by inventory import |
| [Shift Configuration](architecture/shift-configuration.md) | Component | Unassigned | Shift & Roster Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Roster Planning](architecture/roster-planning.md) | Component | Unassigned | Shift & Roster Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Roster Assignment](architecture/roster-assignment.md) | Component | Unassigned | Shift & Roster Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Roster Changes](architecture/roster-changes.md) | Component | Unassigned | Shift & Roster Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Attendance Management](architecture/attendance-management.md) | Module | Unassigned | HRMS | Proposed | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved | Not assessed by inventory import |
| [Attendance Import](architecture/attendance-import.md) | Component | Unassigned | Attendance Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Attendance Processing](architecture/attendance-processing.md) | Component | Unassigned | Attendance Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Attendance Corrections](architecture/attendance-corrections.md) | Component | Unassigned | Attendance Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Attendance Exceptions](architecture/attendance-exceptions.md) | Component | Unassigned | Attendance Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Overtime Calculation](architecture/overtime-calculation.md) | Component | Unassigned | Attendance Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Leave Management](architecture/leave-management.md) | Module | Unassigned | HRMS | Proposed | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved | Not assessed by inventory import |
| [Leave Configuration](architecture/leave-configuration.md) | Component | Unassigned | Leave Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Leave Balances](architecture/leave-balances.md) | Component | Unassigned | Leave Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Leave Requests](architecture/leave-requests.md) | Component | Unassigned | Leave Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Leave Processing](architecture/leave-processing.md) | Component | Unassigned | Leave Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Payroll Management](architecture/payroll-management.md) | Module | Unassigned | HRMS | Proposed | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved | Not assessed by inventory import |
| [Salary Structure](architecture/salary-structure.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Payroll Groups](architecture/payroll-groups.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Variable Pay Inputs](architecture/variable-pay-inputs.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Loans & Advances](architecture/loans-advances.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Reimbursements](architecture/reimbursements.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Payroll Processing](architecture/payroll-processing.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Payroll Review & Finalization](architecture/payroll-review-finalization.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Payment Reconciliation](architecture/payment-reconciliation.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Statutory Processing](architecture/statutory-processing.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [Final Settlement](architecture/final-settlement.md) | Component | Unassigned | Payroll Management | Proposed | Proposed component boundary; requirements/implementation verification pending | Not assessed by this architecture update |
| [CulinaOS Platform](architecture/culinaos-platform.md) | Platform | COS | Root | Imported | Detailed design pending | Not assessed by inventory import |
| [Platform Governance](architecture/platform-governance.md) | Suite | COS-PGS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Governance Engine](architecture/governance-engine.md) | Engine | Unassigned | Platform Governance | Imported | Detailed design pending | Not assessed by inventory import |
| [Security Engine](architecture/security-engine.md) | Engine | Unassigned | Platform Governance | Imported | Detailed design pending | Not assessed by inventory import |
| [Configuration Engine](architecture/configuration-engine.md) | Engine | Unassigned | Platform Governance | Imported | Detailed design pending | Not assessed by inventory import |
| [Platform Administration Engine](architecture/platform-administration-engine.md) | Engine | Unassigned | Platform Governance | Imported | Detailed design pending | Not assessed by inventory import |
| [Common Data](architecture/common-data.md) | Suite | COS-CDS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Master Data Engine](architecture/master-data-engine.md) | Engine | Unassigned | Common Data | Imported | Detailed design pending | Not assessed by inventory import |
| [Data Set Engine](architecture/data-set-engine.md) | Engine | Unassigned | Common Data | Imported | Detailed design pending | Not assessed by inventory import |
| [Reference Data Engine](architecture/reference-data-engine.md) | Engine | Unassigned | Common Data | Imported | Detailed design pending | Not assessed by inventory import |
| [Data Governance Engine](architecture/data-governance-engine.md) | Engine | Unassigned | Common Data | Imported | Detailed design pending | Not assessed by inventory import |
| [Product & Commercial](architecture/product-commercial.md) | Suite | COS-PCS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Menu Engine](architecture/menu-engine.md) | Engine | Unassigned | Product & Commercial | Imported | Detailed design pending | Not assessed by inventory import |
| [Recipe Engine](architecture/recipe-engine.md) | Engine | Unassigned | Product & Commercial | Imported | Detailed design pending | Not assessed by inventory import |
| [Packaging Engine](architecture/packaging-engine.md) | Engine | Unassigned | Product & Commercial | Imported | Detailed design pending | Not assessed by inventory import |
| [Pricing Engine](architecture/pricing-engine.md) | Engine | Unassigned | Product & Commercial | Imported | Detailed design pending | Not assessed by inventory import |
| [Supply & Operations](architecture/supply-operations.md) | Suite | COS-SOS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Procurement Engine](architecture/procurement-engine.md) | Engine | Unassigned | Supply & Operations | Imported | Detailed design pending | Not assessed by inventory import |
| [Inventory Engine](architecture/inventory-engine.md) | Engine | Unassigned | Supply & Operations | Imported | Detailed design pending | Not assessed by inventory import |
| [Production Engine](architecture/production-engine.md) | Engine | Unassigned | Supply & Operations | Imported | Detailed design pending | Not assessed by inventory import |
| [Kitchen Operations Engine](architecture/kitchen-operations-engine.md) | Engine | Unassigned | Supply & Operations | Imported | Detailed design pending | Not assessed by inventory import |
| [Sales & Customer](architecture/sales-customer.md) | Suite | COS-SCS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Sales Engine](architecture/sales-engine.md) | Engine | Unassigned | Sales & Customer | Imported | Detailed design pending | Not assessed by inventory import |
| [Customer Experience Engine](architecture/customer-experience-engine.md) | Engine | Unassigned | Sales & Customer | Imported | Detailed design pending | Not assessed by inventory import |
| [Marketing Engine](architecture/marketing-engine.md) | Engine | Unassigned | Sales & Customer | Imported | Detailed design pending | Not assessed by inventory import |
| [Delivery & Logistics Engine](architecture/delivery-logistics-engine.md) | Engine | Unassigned | Sales & Customer | Imported | Detailed design pending | Not assessed by inventory import |
| [Finance Engine](architecture/finance-engine.md) | Engine | Unassigned | Enterprise Management | Imported | Detailed design pending | Not assessed by inventory import |
| [Quality Assurance Engine](architecture/quality-assurance-engine.md) | Engine | Unassigned | Enterprise Management | Imported | Detailed design pending | Not assessed by inventory import |
| [Asset & Maintenance Engine](architecture/asset-maintenance-engine.md) | Engine | Unassigned | Enterprise Management | Imported | Detailed design pending | Not assessed by inventory import |
| [Compliance & Audit Engine](architecture/compliance-audit-engine.md) | Engine | Unassigned | Enterprise Management | Imported | Detailed design pending | Not assessed by inventory import |
| [Franchise Management Engine](architecture/franchise-management-engine.md) | Engine | Unassigned | Enterprise Management | Imported | Detailed design pending | Not assessed by inventory import |
| [AI & Analytics](architecture/ai-analytics.md) | Suite | COS-AAS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [BI & Reporting Engine](architecture/bi-reporting-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [KPI & Dashboards Engine](architecture/kpi-dashboards-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [Forecasting Engine](architecture/forecasting-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [AI Assistant Engine](architecture/ai-assistant-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [Recommendations Engine](architecture/recommendations-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [Decision Support Engine](architecture/decision-support-engine.md) | Engine | Unassigned | AI & Analytics | Imported | Detailed design pending | Not assessed by inventory import |
| [Integration](architecture/integration.md) | Suite | COS-INT | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [API Management Engine](architecture/api-management-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [Internal Engine Integration Engine](architecture/internal-engine-integration-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [External System Integration Engine](architecture/external-system-integration-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [Event Integration Engine](architecture/event-integration-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [Data Integration Engine](architecture/data-integration-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [Integration Monitoring Engine](architecture/integration-monitoring-engine.md) | Engine | Unassigned | Integration | Imported | Detailed design pending | Not assessed by inventory import |
| [Technology & Platform Services](architecture/technology-platform-services.md) | Suite | COS-TPS | CulinaOS Platform | Imported | Detailed design pending | Not assessed by inventory import |
| [Application Services Engine](architecture/application-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [Database Services Engine](architecture/database-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [Identity & Access Engine](architecture/identity-access-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [Notification Services Engine](architecture/notification-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [File & Document Services Engine](architecture/file-document-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [Search Services Engine](architecture/search-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [AI/ML Services Engine](architecture/ai-ml-services-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [Logging & Monitoring Engine](architecture/logging-monitoring-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |
| [DevOps / Infrastructure Engine](architecture/devops-infrastructure-engine.md) | Engine | Unassigned | Technology & Platform Services | Imported | Detailed design pending | Not assessed by inventory import |

[Architecture definitions](../architecture/objects.yaml) · [Preserved source inventory](../architecture/source-inventory.yaml) · [Workflow](workflow.md)
