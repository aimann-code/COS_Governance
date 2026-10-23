# Developer implementation matrix

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.5; naming 0.2.2; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Proposed implementation names and contracts; not an inventory of existing code. Owners/packages for shared/vendor/aggregator/source work remain to be finalized. Each production task must pin its design commit and link actual code/tests.

| Registration | Controller file | Service file | Handler file | Repo file | Request / response DTO | Method | API |
| --- | --- | --- | --- | --- | --- | --- | --- |
| emp_reg | EmpRegController.java | EmpRegService.java | EmpRegHandler.java | EmpRepo.java | EmpRegReqDTO / EmpRegResDTO | registerEmp | POST /api/v1/emp |
| vnd_reg | VndRegController.java | VndRegService.java | VndRegHandler.java | VndRepo.java | VndRegReqDTO / VndRegResDTO | registerVnd | POST /api/v1/vnd |
| agg_reg | AggRegController.java | AggRegService.java | AggRegHandler.java | AggRepo.java | AggRegReqDTO / AggRegResDTO | registerAgg | POST /api/v1/agg |
| source_reg | SourceRegController.java | SourceRegService.java | SourceRegHandler.java | SourceRepo.java | SourceRegReqDTO / SourceRegResDTO | registerSource | POST /api/v1/sources |

## Shared files and functions

| Class and Java file | Proposed package suffix | Functions | Responsibility |
| --- | --- | --- | --- |
| ConfigService / ConfigService.java | config | resolveConfig; validateConfig; activateConfig | Versioned fields/forms/rules |
| UniqueKeyService / UniqueKeyService.java | validation | validateKey; matchRecord; claimKey | Complete key, protected claims and collision handling |
| AccessService / AccessService.java | security | checkRead; checkWrite; resolveFieldAccess | Subscription/group/hierarchy/field/record checks |
| SubscriptionService / SubscriptionService.java | subscription | checkEntitlement | Subscribed scope |
| PreferenceService / PreferenceService.java | preference | previewPreference; confirmPreference | Explicit persistence confirmation |
| ImportService / ImportService.java | integration | previewImport; executeImport | Job orchestration and row outcomes |
| MappingService / MappingService.java | integration | suggestMappings; validateMapping | Header suggestions and confirmed mapping |
| ReportService / ReportService.java | report | previewReport; exportReport | Authorized mart outputs |
| MartService / MartService.java | report | resolveMart; validateReportFields | Approved views/grain/filter catalogue |
| SheetSyncService / SheetSyncService.java | integration | previewSync; executeSync | Confirmed append/clear-range export |
| ErrorService / ErrorService.java | error | buildError; renderMessage | Stable codes and masked provenance |

Shared registration orchestration: RegService.java. Proposed frontend files: emp-reg.tsx, vnd-reg.tsx, agg-reg.tsx, source-reg.tsx. Class symbols use PascalCase; functions camelCase; physical Java public-class files match class names. Package/root placement remains a reviewed design choice.

## API matrix

| Method | Route | Operation ID | Request | Response | Gate |
| --- | --- | --- | --- | --- | --- |
| GET | /api/v1/emp | searchEmp | Validated query parameters | EmpListResDTO | Read access plus scoped data |
| GET | /api/v1/emp/{id} | getEmp | Path internal ID | EmpResDTO | Read field/record scope |
| PATCH | /api/v1/emp/{id} | updateEmp | EmpUpdateReqDTO | EmpResDTO | Write permission; complete existing key must resolve same ID |
| POST | /api/v1/imports | createImport | ImportReqDTO | ImportResDTO | Permitted component/source |
| POST | /api/v1/imports/{id}/preview | previewImport | ImportPreviewReqDTO | ImportPreviewResDTO | Scoped job and field access |
| POST | /api/v1/imports/{id}/execute | executeImport | ImportExecuteReqDTO | ImportResDTO | Recheck preview/config/key/access |
| POST | /api/v1/reports/{id}/preview | previewReport | ReportViewReqDTO | ReportViewResDTO | Virtual mart read access |
| POST | /api/v1/reports/{id}/exports | exportReport | ReportExportReqDTO | ExportJobResDTO | Allowed format/columns/records |
| POST | /api/v1/sheet-syncs/{id}/preview | previewSheetSync | SheetSyncPreviewReqDTO | SheetSyncPreviewResDTO | Authorized source/destination |
| POST | /api/v1/sheet-syncs/{id}/execute | executeSheetSync | SheetSyncExecuteReqDTO | SyncJobResDTO | Output confirmation bound to mode/range/filters |

## DTO field matrix

| Payload | Field | Type | Meaning |
| --- | --- | --- | --- |
| Shared command | configVer | integer | Version of resolved entity/component configuration |
| Update command | expectedRowVer | integer | Reject stale target update |
| Update command | uniqueKey | structured object | Rule reference/version and complete configured values; no fallback |
| Domain payload | values | typed/field-referenced payload | Configured business fields; cannot set PK/scope/audit/tokens |
| Import/sync | sourceRef; mappingVer; templateVer | references/integers | Match reviewed source configuration |
| Execute command | confirmationRef; idempotencyKey | references/text | Bind reviewed action and prevent repeated writes |
| Report view | columns; filters; sort; group | structured selections | Validate allowed mart fields/operators; no SQL |
| Error | code; message; requestId; runId | text/references | Stable code, configured masked message |
| Error | recordRef; fieldErrors; sourceRef | structured references | Locate record/file/sheet/row/cell/PDF/email when available |

## Connection matrix

| Connection | Mechanism | Identity | Rule |
| --- | --- | --- | --- |
| Frontend/backend | HTTPS authenticated API | User identity; selected authorized entity | No DB credentials in frontend |
| Backend/PostgreSQL | Connection pool | Runtime least-privilege credentials | Parameterized queries; scoped transactions |
| Migration/PostgreSQL | Versioned migration runner | Separate migration identity | No runtime destructive auto-DDL |
| Worker/PostgreSQL | Job/outbox processing | Scoped service identity | Recheck effective permissions/config; idempotency |
| Source adapters | Approved connection references | Explicit external authorization | Secrets outside ordinary preferences |
| Reporting/PostgreSQL | Registered virtual views | Authorized dataset context | All downloads and sheet outputs use same service |

## Required traceability columns

| Group | Columns |
| --- | --- |
| Ownership | suite; engine; module; component; requirement ref |
| Frontend | screen; route; file; action |
| API/DTO | method; route; operation; controller; DTO; version |
| Execution | service; handler; function; repo; transaction |
| Data/reporting | table/key; relationship; mart/view; connection |
| Security | subscription; entity/group/field/record policy |
| Processing | config/key/mapping versions; idempotency; error/history |
| Verification | acceptance case; actual test/code refs; result/evidence |
| Status | proposal; implementation; verification; publication |

Existing implementation mappings remain [pinned evidence](implementation.md). This proposal does not rename those artifacts.
