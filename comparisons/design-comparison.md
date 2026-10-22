# Design comparison
Source roles are user-directed. Historical wording is preserved in migration/source-docs.json.

| Concern | Ashish design/standards | Ritesh implementation at b2b156c | Reconciliation |
|---|---|---|---|
| Authority | COS reusable governance and business intent | Implemented behaviour | Preserve separate intent/evidence roles |
| Technology | Next.js plus proposed TypeScript/NestJS backend | Next.js, Java 21/Spring Boot, PostgreSQL | Use implementation baseline; language naming aligned explicitly |
| Structure | Registered architecture and shared/domain contracts | Feature/layer organization; onboarding capability | Do not infer architecture engines from packages |
| Identity inputs | Manual/Auto and requested composite uniqueness | New workflow automatically allocates code; different required inputs | Explicit pending reconciliation |
| Approval | Earlier universal admin path | HR direct registration/edits; employee proposal → HR; config → admin | Preserve latest accepted workflow |
| Profile storage | Typed configurable response rows in proposed schema | Encrypted aggregate profile plus drafts/history | Document actual design; no silent physical replacement |
| Employee schema | Earlier core tables | people schema in V4 | User selects emp; forward migration pending |
| Naming | Earlier mandatory COS token/file prefixes | Mixed COS-prefixed and plain onboarding names | Apply frozen 0.2.0 through separate rename work |
| Bulk/sync | Required GUI/actions | Expanded bulk and live Sheets incomplete | Keep gaps visible |
| Backup | Central 03_Backup and native storage controls | Project-level Backups and local development recovery | Governance scope/exception reconciliation required |
| Documentation | Source registers and generated-view direction | Code-derived architecture with chronological amendments | Generate consolidated current view plus preserved history |

## Autoinspire reference
Use executive summary, objectives/scope, architecture, domain model, screens, workflows, database/API contracts, security, testing, roadmap and open decisions to structure readable designs. Do not import promotion rules, Drools/Groovy or its technology versions as COS standards. Reference PDF remains in Drive; binary not copied.
