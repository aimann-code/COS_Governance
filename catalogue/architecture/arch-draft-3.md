# Employee Management

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Type | Module |
| Shortcode | EMP_MGT |
| Source reference | ARCH-DRAFT-3 (temporary) |
| Hierarchy | Enterprise Management → HRMS → Employee Management |
| Responsibility | Employee identity, profile and employment lifecycle |
| Design/registration state | Proposed architecture; user authorized GitHub recording; detailed design/implementation not approved |
| Source design | [Historical design reference](https://docs.google.com/document/d/1ALDYB1ZNpx3kKGfJmae-PFg01zs7YU3FDA1qRgNzl4o) |

## Children

| Object | Type | Status |
| --- | --- | --- |
| [Employee Registration](../architecture/arch-draft-4.md) | Component | Proposed component boundary; requirements/implementation verification pending |
| [Employee Details](../architecture/arch-draft-5.md) | Component | Proposed component boundary; requirements/implementation verification pending |
| [Employment Lifecycle](../architecture/arch-draft-9.md) | Component | Proposed component boundary; requirements/implementation verification pending |
| [Organization Assignment](../architecture/arch-draft-10.md) | Component | Proposed component boundary; requirements/implementation verification pending |
| [Employee Documents](../architecture/arch-draft-11.md) | Component | Proposed component boundary; requirements/implementation verification pending |

## Features

| Feature | Status | Open |
| --- | --- | --- |
| [Employee Registration](../features/emp-reg.md) | draft requirement inventory | Business uniqueness and manual/auto ID differences remain to reconcile with source design |
| [Employee Details](../features/emp-dtl.md) | draft requirement inventory | Field-level policies and source contracts |
| [Employee Update](../features/emp-update.md) | source requirement; reconcile implementation evidence | Domain-specific workflow must not be replaced by universal administrator approval |
| [Employment Lifecycle](../features/feat-hrms-draft-1.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Organization Assignment](../features/feat-hrms-draft-2.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |
| [Employee Documents](../features/feat-hrms-draft-3.md) | Proposed architecture inventory; not an approved complete BRD | Detailed rules, permissions, inputs/outputs and acceptance criteria must be gathered and reviewed. |

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
