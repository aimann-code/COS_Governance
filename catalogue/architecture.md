# Architecture

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.0; naming 0.2.0; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Parent references are resolved from the imported architecture records. These local draft references are not permanent COS IDs. Empty shared placement remains unresolved.

| Object | Type | Code | Parent | Status |
| --- | --- | --- | --- | --- |
| [Enterprise Management](architecture/arch-draft-1.md) | Suite | COS-EMS | Root / placement unresolved | Established reference; registration IDs pending |
| [HRMS](architecture/arch-draft-2.md) | Engine | HRMS | Enterprise Management | Selected display; architecture publication pending |
| [Employee Management](architecture/arch-draft-3.md) | Module | EMP_MGT | HRMS | Proposed code |
| [Employee Registration](architecture/arch-draft-4.md) | Component | EMP_Reg | Employee Management | User requirement |
| [Employee Details](architecture/arch-draft-5.md) | Component | Unassigned | Employee Management | Proposed component boundary |
| [Shared Request Processing](architecture/arch-draft-6.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |
| [Shared Security and Approval](architecture/arch-draft-7.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |
| [Shared Integration](architecture/arch-draft-8.md) | Shared capability | Unassigned | Root / placement unresolved | Exact registered engine/module pending |

[Architecture definitions](../architecture/objects.yaml)
