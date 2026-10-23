# Ownly sales-to-journal workflow
Stage: Draft. Phase: Design & Architecture. Execution, installation, scheduling and publication: not performed.

## Ownership and baseline
Finance owns journal preparation; Sales owns order/POS comparison; Master Data owns mappings; existing Integration/File Services supply imports and connector boundaries. These module/component responsibilities are proposals under the existing COS engines. Application repository, edit owner and reviewer remain unassigned. Use ./ownly-rules.yaml as the single rule definition.

## Operator workflow
1. Select the approved source connection, report period, entity scope, parser profile and immutable rule/master revisions. Record run ID, actor and timestamps. Reject unauthorized scope.
2. Inventory every selected raw file and every tab/column/object. Preserve originals in approved private storage. Report read failures, unsupported objects and incomplete metadata.
3. Parse by profile, preserving field ordinals and literal identifiers. Classify all rows, retain original/formula/cache evidence and quarantine errors. New headers never disappear silently.
4. Resolve field, system/category, restaurant/entity and account mappings using the current master snapshot. Show proposed mapping decisions for review; never activate inferred mappings.
5. Build Source_Register, Source_Profile_Report, Field_Coverage_Report and Ownly_Working with row-level provenance and dispositions. Verify counts and source totals before aggregation.
6. Build Ownly_Daily_Data by sales day with all brands combined only after the legal-entity/currency gate. Keep payment date and UTR for separate settlement reconciliation.
7. Build draft Ownly_Journals using the candidate rules. Attach row/day/file discrepancies to Exception_Register and Reconciliation_Report. A balanced journal alone does not clear source exceptions.
8. Reviewer resolves mapping, accounting/GST, coverage and variance decisions with evidence. Re-run affected outputs against a versioned baseline; preserve earlier run history.
9. Preview destination and exact native Google Sheet append/clear ranges; obtain required confirmation, write authorized ranges and read back counts, totals, formulas and errors. Never clear unrelated tabs.
10. Post only under separate explicit authorization after all gates pass. Record the external organization/journal IDs, payload hash, idempotency identity and connector response in private Run_Log. An unknown response is reconciled before retry.
11. Reconcile accounting/GST readback and bank settlement separately against sales, receivable, TDS/TCS, payment date and UTR. Keep unmatched items visible; corrections need an approved reversal/amendment policy.

## Proposed automation behavior
An authorized manual run or future configured file-revision trigger creates one run per source version/profile/mapping/rule set. Identical successful replays are no-ops. Conflicts and changed revisions enter review. Failed runs preserve evidence and can resume without duplicate output/posting. Schedule, recipients, channel and escalation remain unconfigured. A future daily digest reports file coverage, pending mappings, held journals, variance totals and sync failures only to authorized recipients.

## Verification and publication
Execute acceptance_cases from ./ownly-rules.yaml with private fixtures and synthetic edge cases. Record actual results separately from planned tests. Draft -> Review needs a named reviewer and preview. Published requires explicit approval, immutable repository commit/paths and acceptance evidence. Installation/deployment/posting are separate actions.
