# Employee Registration

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | emp_reg |
| Owner | HRMS / Employee Management |
| Requirement/design state | draft requirement inventory |
| Behaviour | HR direct registration; current implementation has drafts and direct registration |
| Architecture responsibility | Configured employee creation, manual/auto ID behaviour, duplicate validation and custom fields; preserve sys_emp_id. Existing implementation must be improved, reconciled and tested. |
| Open decisions/gaps | Business uniqueness and manual/auto ID differences remain to reconcile with source design |
| Acceptance criteria | must be completed and reviewed before implementation |

## Architecture links

- [HRMS](../architecture/hrms.md)
- [Employee Management](../architecture/employee-management.md)
- [Employee Registration](../architecture/emp-reg.md)

## Implementation evidence

| Source | Architecture owner | State |
| --- | --- | --- |
| [emp-onboarding-service](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) | Employee Management | Source exists at pinned commit; frozen-name alignment not applied |
| [emp-onboarding-contracts](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) | Employee Management | Source exists; contract naming/authority strategy pending |
| [emp-physical-schema](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) | Employee Management | Existing migration source; no migration performed |
| [draft-emp-key-service](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) | Employee Management | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed |

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
