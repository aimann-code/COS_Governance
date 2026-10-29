# COS Finance Engine

Stage: **Draft**. Working user: **Ashish**. Recorded: **29-Oct-2026**, Asia/Calcutta.

Repository: `aimann-code/COS_Governance`. Branch: `COS_Finance_Engine`.
Requested starting commit: [ae5b1a17cb0cbcda0ea5f7cf0b13e9c002cf6ac2](https://github.com/aimann-code/COS_Governance/commit/ae5b1a17cb0cbcda0ea5f7cf0b13e9c002cf6ac2).

This branch is a finance requirements/design workspace. The initial commit adds only this index, the source policy and the source-reference catalogue. It does not implement an engine or publish a coding baseline.

## Start here

- [Raw-source policy](sources/source-policy.yaml)
- [Google Drive/Sheets/folder reference catalogue](sources/source-references.yaml)
- [Inherited Ownly rules](../migration/working-sheet-extraction/ownly/ownly-rules.yaml)
- [Inherited Ownly workflow](../migration/working-sheet-extraction/ownly/ownly-workflow.md)
- [Inherited Ownly skill proposal](../migration/working-sheet-extraction/ownly/prepare-ownly-journals/SKILL.md)
- [COS workflow](../standards/workflow.yaml)
- [COS architecture inventory](../architecture/source-inventory.yaml)
- [Existing Finance Engine catalogue entry](../catalogue/architecture/finance-engine.md)

The Ownly files remain in their original location as Draft evidence. They are not copied into a competing maintained source, installed or promoted to approved accounting treatment.

## Raw-file location

[10_RAW_DATA](https://drive.google.com/drive/folders/1MbNta9iM8x-3nJL4C-YeJye1aFWZuB7Y) is the user-designated raw root. Its listed children include 01_Agg, 03_FIN, Sample Files, future samples and 02_HR. Select finance/report locations explicitly through configuration. HR is excluded.

Existing provider/history folders remain reference sources. No file was moved, renamed, deleted or made public. Linking a private source does not grant access. Real raw files, transaction facts, run evidence and credentials remain in private Drive/DB storage.

## Processing direction

1. Collect authorized email attachments/Drive files/manual uploads; preserve originals and register identity/revision.
2. Resolve the Report Profile and its Table Profiles.
3. Extract raw evidence and record every unknown/unreadable/unsupported section.
4. Clean, map and validate; preserve original values and source lineage.
5. Create standard facts at separate order/event, summary, payout/component, invoice/line, bank and allocation grains.
6. Execute shared calculation and reconciliation services using versioned provider/entity rules.
7. Prepare GST/TDS working and reviewed Zoho sales-journal/supplier-document datasets.
8. Generate multiple reports from controlled DB views and record exceptions, review and audit evidence.

Extraction varies through profiles. Downstream services are common, with provider/entity/effective-period-specific financial rules. A common framework does not mean one universal commission or tax formula.

## Reference coverage and limitations

The catalogue contains **659 references**. **119 folders were directly listed**; **221 discovered folders remain unexpanded**. This is an initial navigation catalogue, not a full recursive inventory or proof that every file was read.

Per-reference read/access states distinguish direct folder listing from metadata-only discovery and conversation references. The two mounted attachment mappings with no observed original URL retain their exact Drive IDs and a null URL. Do not invent a source URL or treat metadata as fresh content.

Earlier folder-search results missed accessible files; use direct listings and explicit pagination/limit checks before declaring a folder empty. Raw-root discovery also reveals additional report/provider locations beyond earlier samples. Those locations require profile and content review.

## Planned documentation tree

Only the three initial files exist as additions in this update. Other paths below are planned and intentionally have no broken navigation links or empty placeholder files.

| Planned path | Maintained content |
|---|---|
| `governance/` | Applicable COS standards, ownership, approvals, baseline and change control |
| `requirements/` | Common/provider requirements and acceptance criteria |
| `architecture/` | Engine/module/component boundaries, shared-service connections and UML |
| `sources/` | Raw-source policy and catalogue (initial files created here) |
| `profiles/report/` | Report family identification, versions and expected sections |
| `profiles/table/` | Table detection, orientation, boundaries, headers and extraction |
| `profiles/output/` | Controlled datasets, measures, filters, layout and delivery |
| `data-design/` | Field dictionary, masters, mappings, fact grains, keys, DB design and lineage |
| `business-rules/` | Cleaning, validation, calculations, matching, GST/TDS and accounting |
| `workflows/` | Intake, extraction, standardization, review, reconciliation and recovery |
| `integrations/` | Email, Drive, POS, bank, GST/TDS sources and Zoho contracts |
| `guides/` | Developer guide, user guide, configuration guide and operations |
| `testing/` | Synthetic fixtures, acceptance cases, regression plans and actual results |
| `tracking/` | Traceability, queries, conflicts, dependencies and milestones |

## Developer handoff

Every implemented requirement must trace to its profile/rule, field/data contract, component, API/screen, test and implementation evidence. Each component specification needs purpose, inputs/outputs, configuration dependencies, validation, error/retry behaviour, permissions and acceptance cases.

Candidate delivery sequence: profile/data contracts; intake/registration; one complete extraction slice; second provider/layout proving reuse; facts/calculations/reconciliation; GST/TDS/accounting preparation; authorized integration/reporting/operations.

Technology, component ownership and affected requirements/design must be approved before implementation. Source facts are not regenerated from AI prose.

## Open decisions

- Application repository, technology and assigned reviewers.
- Detailed finance module/component placement and shared-service contracts.
- Complete versioned report/table profiles and canonical field mappings.
- Active master/mapping authority and legal entity/account/contact IDs.
- Accounting, GST/TDS, rounding, matching/allocation and journal grouping rules.
- Bank/POS/tax evidence requirements and external connector contracts.
- Numbering/correction/reversal policy, schedules, notifications and operational recovery.

Ownly daily grouping across brands is retained within a verified legal entity/currency. Other providers do not inherit it automatically. Conditional rounding needs verified daily evidence; balanced journals do not clear independent source exceptions.

## Governance and verification

The branch intentionally starts at the exact linked historical commit; later main/cos_arch_draft governance changes are not silently merged. Creation was checked against current main guidance at `6cc16dd2f0dcfad6506dc4780ac6d9ee117f35b6`. Existing standards, shortcodes, architecture objects and publication statuses are unchanged.

Ashish confirmed the three-file creation scope with the user reply “yes”. This approves recording the Draft scaffold and links, not all pending design/accounting decisions.

Validate JSON-compatible YAML, unique reference IDs, allowed source URLs and local navigation; read back the committed content and changed-file list. Financial tests, full recursive source verification, installation, posting, deployment and publication are not performed by this update.
