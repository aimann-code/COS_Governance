# Provider coverage and evidence limits

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

The following are observations reported in the supplied conversation, not a fresh inspection of Drive files during this update. Exact sample counts are fixture checkpoints, not permanent expected counts. Formulas and pivots were not recalculated in those reviews.

| Report family | Reported observations | Required design / limitation |
|---|---|---|
| Ownly June | Five tabs; 198 unique order IDs in primary table; calculation rows and two extra detail tabs | Preserve detail sheets; classify their role before accepting facts |
| Ownly September | Three tabs; 15,073 order rows and 248 summary rows; currency-prefixed text | Separate layout version and configured numeric parsing |
| Swiggy payout | Two samples with seven tabs; Order Level has 50 source columns and row-3 headers in those samples | Separate profiles from later growth-deduction layouts; invoice references are supporting evidence |
| Zomato settlement | Six visible/two hidden tabs; 54 order columns; row-7 detailed headers; A8:C8 reported as #REF! | Inventory helpers and source errors; affected fields cannot be assumed valid |
| Magicpin ledger | Monthly/consolidated overlap, changed headings, duplicate Utr columns, copied sheets and MIME discrepancies | Detect actual file structure; preserve header occurrence; reconcile business identities across files |
| Magicpin October | 673 transactions across nine merchants: 638 delivery, 29 Magicpay, six vouchers | Classification cannot assume all rows are delivery orders |
| Paytm payments | 4,571 rows and 120 named headers; trailing apostrophes in selected values | Payment facts separate from food orders; configured cleaning |
| Paytm withdrawals | Two samples with 31 records each; 119/120 headers; pivot in one sample | Fund movements cannot create additional revenue |
| SmartQ / detailed POS / other profiles | Earlier discussion describes target report families | Complete definitions and fixtures pending suitable evidence |
| Commission / bank / GST / TDS | Some invoice references and a supplier-bill upload sample described | Upload samples and printed bank details are not original invoice/bank evidence |

Reported review coverage: initial report folder had eight accessible files and 34 worksheets across 28 subfolders. Magicpin review inventoried 33 files across 15 subfolders, inspected 18 Excel workbooks, one native spreadsheet and one CSV, covering 107 worksheets; 13 XML parts were inventoried as workbook internals.

Earlier search-only empty-folder conclusions are provisional: direct folder listings later revealed files. Use direct listing plus pagination and explicit access status before declaring no files exist.

References are in [source catalogue](../sources/source-references.yaml). No data access permission or operational approval is implied by a reference.
