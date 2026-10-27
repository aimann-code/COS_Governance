# Configurable uniqueness

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.9; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)

| Property | Value |
| --- | --- |
| Feature ref | FEAT-COMMON-DRAFT-1 |
| Owner | Shared cross-suite capability; exact architectural placement pending |
| Requirement/design state | Recorded requirements/design directions; implementation not verified |
| Behaviour | Canonical requirements are in features/common.yaml, group COMMON-UNIQUE. |
| Architecture responsibility | Not mapped |
| Open decisions/gaps | Detailed design, APIs, migrations and acceptance verification pending; see canonical group and pending decisions. |
| Acceptance criteria | Derived review checklist provided; executable acceptance tests pending |

## Architecture links

Placement is unresolved; no hierarchy invented.

## Implementation evidence

| Source | Architecture owner | State |
| --- | --- | --- |
| [draft-composite-key-core](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/shared/reg/UniqueKeyRule.java) | Unresolved | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed |
| [draft-emp-key-service](https://github.com/aimann-code/EMPRegister/blob/e6c51155564652547314575955eb8203538af438/apps/api/src/main/java/com/cos/hrms/onboarding/EmpUniqueKeyService.java) | Employee Management | Generated source in draft PR; 18 pure-core tests and syntax checks passed, full Spring/PostgreSQL tests pending; not merged or deployed |

## Common requirements

| Ref | Requirement | Status |
| --- | --- | --- |
| COMMON-UNIQUE-01 | Entity administrators configure uniqueness for employee, vendor, aggregator and user business profiles. COS controls entity-registration uniqueness. Login authentication identity remains distinct from business-profile matching. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-02 | Employee candidate fields include Name, Father's Name, DOB, Number, email, PAN, Aadhaar and national identity. Do not freeze one combination in code. The meaning of Number remains pending. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-03 | Every active unique key contains at least two selected fields. All selected values are mandatory for the operation. Treat the combination as one match; separate matches to different records do not identify one record. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-04 | Configure record type, entity scope, normalization, blank handling, duplicate detection outcome, default key, approved alternative keys and effective version. No literal field combination is selected as the default by this requirement; the entity administrator must choose it. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-05 | All update sources require the configured complete key and exactly one matching record. Do not fall back to name-only, source row number or close-record matching. Zero matches block update; creation requires explicit permitted create mode. Multiple matches block update for review. Duplicate create outcomes may be configurable, but update matching cannot bypass these gates. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-06 | With one selected field show Select at least one more field and disable activation. With two or more preview matching behaviour. Selected optional fields become mandatory where that key applies; explain this. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-07 | Warn on mutable or commonly shared key fields. Mask sensitive values and use protected comparison data. Audit authorized changes. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-08 | Before activation, scan existing records for missing/invalid selected values and duplicates. Show access-permitted affected counts/details; block activation until conflicts are resolved. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-09 | Changing an active key creates a version, previews affected forms/mappings/APIs/sync profiles, requires confirmation, and retains previous configuration/history. Safely handle simultaneous updates and stale record versions. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-10 | Changing key values requires the existing key plus proposed values, duplicate validation and confirmation. Keep immutable internal record IDs unchanged. | Recorded requirement/design direction; implementation not verified |
| COMMON-UNIQUE-11 | Show row outcomes Matched, Not found, Missing key, Multiple matches or Invalid key. Missing values/columns and complete-key-no-match are distinct errors; never invent a missing field when all key inputs are present. | Recorded requirement/design direction; implementation not verified |

[All common requirements](../common-requirements.md)

## Design and standards

[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)

Missing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.
