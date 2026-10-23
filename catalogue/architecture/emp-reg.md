# Employee Registration

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Type | Component |
| Short Code | emp_reg |
| Source reference | ARCH-DRAFT-4 (temporary) |
| Hierarchy | CulinaOS Platform → Enterprise Management → HRMS → Employee Management → Employee Registration |
| Responsibility | Configured employee creation, manual/auto ID behaviour, duplicate validation and custom fields; preserve sys_emp_id. Existing implementation must be improved, reconciled and tested. |
| Design/registration state | Proposed component boundary; requirements/implementation verification pending |
| Source design | [Historical design reference](https://docs.google.com/document/d/1ALDYB1ZNpx3kKGfJmae-PFg01zs7YU3FDA1qRgNzl4o) |

| Coverage property | Value |
| --- | --- |
| Source name | Proposed detailed object |
| Aliases | None recorded |
| Stable parent reference | ARCH-DRAFT-3 |
| Inventory | Proposed |
| Design | Proposed component boundary; requirements/implementation verification pending |
| Implementation | Existing implementation baseline linked; required improvements and tests not verified by this update |

## Children

No child definition recorded in this imported scope.

## Features

| Feature | Status | Open |
| --- | --- | --- |
| [Employee Registration](../features/employee-registration.md) | draft requirement inventory | Business uniqueness and manual/auto ID differences remain to reconcile with source design |

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
