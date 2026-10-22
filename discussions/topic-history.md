# Topic history
Retrospective summary from available conversation context and linked sources. This is a summary, not verbatim dialogue.

| Stage | Discussion | Disposition |
|---|---|---|
| Sheet-oriented origin | GUI/config/report tabs, registration of fields, objects, tables and values, bulk upload and Sheets sync | Historical approach; retain business meaning while adapting runtime to web |
| HRMS placement | Enterprise Management → HRMS → Employee Management → Employee Registration | Selected display hierarchy; historical HR/HRMS baseline reconciliation remains visible |
| Identity | SYS_EMP_ID; manual/auto ID behaviour; no Hybrid; custom fields; composite identity request | Preserve requirements; current implementation identity/required-field differences need decisions |
| Shared UI | Single access hub, permissions, favourites, dynamic fields, fetch/print, Bulk Upload and Google Sheets Sync | Retained features; integration completion is not inferred |
| Architecture ownership | Suite/engine/module/component distinct from services/classes/projects | Retained design principle; exact shared placement pending |
| Early naming | Mandatory COS_ACTION_OBJECT functions and COS-prefixed classes/DTOs/files | Superseded in naming scope by D67 |
| Source roles | Ashish COS governs standards/file/storage/backup/naming; Ritesh code supplies implementation; Autoinspire supplies presentation structure only | Accepted user direction |
| Web transition | Frontend/backend/database replace operational sheet runtime; avoid duplicate manual technical catalogues | Accepted direction; source authority cutover pending |
| History | Configuration history, field-definition history and data-value history, separate from audit | Required design content |
| Reuse | Registration infrastructure reusable for employee/vendor/aggregator/brand/location; domain rules/repos remain specific | Accepted direction, detailed design pending |
| Reduced prefix | COS identifies project/namespace where useful; not every internal symbol | Frozen naming direction |
| Shortcodes | emp/reg/repo/agg/vnd/ing/loc etc; PascalCase classes, camelCase methods, kebab-case TS files, snake_case DB | Frozen Naming Standard 0.2.0, D67 |
| Schema | people → emp for employee ownership | Accepted naming direction; forward migration not performed |
| Maintained source | Standards, architecture, features, decisions, templates and ownership mappings; technical inventories extracted from implementation | Repository approach selected; preserve intended versus actual distinction |
| Register retirement | Retire redundant manual maintenance after verified migration; preserve history and recovery baseline | No deletion performed |
| GitHub | Separate private COS_Governance repo; application code stays in EMPRegister | Initial repository setup authorized |
| Discussion retention | Preserve naming, features, design comparisons and superseded proposals | This folder and source snapshots; transcript completeness limits disclosed |
| Later domains | Employee Management, Payroll, Aggregator/Vendor/Ingredient masters, Brand/Location registration | Feature inventory only; detailed implementation not authorized by this setup |

## Historical differences that must not disappear
1. Ashish design proposed TypeScript/NestJS, while Ritesh implementation uses Java/Spring Boot. The user's source selection chooses implementation from Ritesh; it does not retroactively rewrite the old proposal.
2. Older administrator approval for employee registration is superseded by direct HR registration, employee-change review by HR and configuration review by admin.
3. Older planned typed custom-response tables differ from the current encrypted profile implementation.
4. Earlier mandatory COS prefixes are superseded by selective use and frozen abbreviations.
5. Central native-document backup/storage rules and project-level recovery arrangements require reconciliation. Git history is not a database backup.
