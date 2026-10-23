# Purchase and inventory master preparation — draft

Recorded 23-Oct-2026. Prepared from the two user-supplied workbook snapshots. This is a proposed requirements/extraction record, not a published COS module, active configuration, deployed integration or approved master.

## Maintained scope

- [Master and configuration register](master-register.json): 13 source-backed families, columns, counts and outstanding decisions.
- [Source register](source-register.json): all 70 supplied tabs, including empty and historical tabs.
- [Source field inventory](source-fields.json): 519 confirmed header-label occurrences (unconfirmed/link-bearing cells excluded), preserving source spelling. Tabs with no confirmed row-1 header require review.
- [Workflow and requirements direction](workflow-summary.md).

Actual vendor/item records, bank details, invoices and purchase transactions are excluded from this repository. They remain in the private preparation pack and operational sources. The private workbook is a new derivative; neither source workbook was modified. Its source file reference 1 denotes the purchase report and 2 denotes vendor settings.

## Preparation rules

Candidate rows from both files are retained with source tab/row references. Repeated keys are flagged, not merged. No source is silently declared authoritative. Formula-only/keyless padding is not promoted to master records and is listed for review. Source cached errors are retained as error text for review; formulas are not recreated as operational calculations. Cached formula values may be stale. Historical factors and tax names are not treated as current approved rules.

No Zoho/Petpooja master export or account has been inspected. External IDs remain blank. No permanent COS IDs, new shortcodes, physical schemas or final engine/module placement are assigned.

The existing governance source model and naming rules remain unchanged. These files are a draft discussion package pending transfer to the eventual owning application repository. No application code belongs in this extraction package.

## GitHub sanitization
Embedded URLs, formula text and unconfirmed header cells are excluded from repository metadata. Unclassified source-tab titles are masked; exact provenance remains in the private workbook.
