# Implementation and ownership

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Pinned application baseline: [aimann-code/EMPRegister / b2b156c](https://github.com/aimann-code/EMPRegister/tree/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba). The following is a partial reviewed mapping, not an exhaustive code inventory.

| Artifact | Owner | Features | State | Data authority |
| --- | --- | --- | --- | --- |
| [emp-onboarding-service](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingService.java) | Employee Management | emp_reg, EMP_Update | Source exists at pinned commit; frozen-name alignment not applied | Employee domain; exact governed dataset identity reconciliation pending |
| [emp-onboarding-contracts](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/java/com/cos/hrms/onboarding/OnboardingContracts.java) | Employee Management | emp_reg, EMP_Dtl, EMP_Update | Source exists; contract naming/authority strategy pending | Transport contract; no operational dataset ownership |
| [emp-physical-schema](https://github.com/aimann-code/EMPRegister/blob/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba/apps/api/src/main/resources/db/migration/V4__employee_onboarding.sql) | Employee Management | emp_reg, EMP_Update, Change_Hist | Existing migration source; no migration performed | Physical people schema at pinned commit; emp naming target pending migration |
| Not implemented / location unresolved | Unresolved | Reg_Shared | Planned shared capability; owner placement unresolved | Domain-specific masters retain their own authoritative writers |
| [draft-composite-key-core](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/shared/reg/UniqueKeyRule.java) | Unresolved | FEAT-COMMON-DRAFT-1 | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed | Pure reusable matching code; no dataset writer |
| [draft-emp-key-service](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) | Employee Management | emp_reg, EMP_Update, FEAT-COMMON-DRAFT-1 | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed | Scoped configuration and employee key claims; existing people records remain domain authority |

[Maintained ownership links](../architecture/ownership.yaml)
