# Acceptance and verification plan

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

All cases below are planned, not executed software tests. Expected examples and fixture versions must be approved before implementation acceptance.

| Case | Expected outcome |
|---|---|
| Missing required table | Visible extraction exception; affected facts blocked |
| Optional table absent | Explicit absence; no false extraction failure |
| Unknown column/hidden helper | Raw evidence and coverage disposition retained |
| Duplicate Utr headers | Both columns preserved with positions and explicit mappings |
| Blank configured columns but populated other cells | Record retained and reviewed |
| Long identifier / UTR | Exact text preserved without numeric truncation |
| Invalid decimal/date or #REF! | Original error retained; affected conversion/fact held |
| Formula/macro input | No execution; source evidence preserved |
| Mislabelled XLSX MIME | Actual format detected or explicit unsupported error |
| Copied/pivot/summary content | No duplicate accepted revenue |
| Overlapping monthly/consolidated ledgers | Observations retained; canonical transactions not duplicated |
| Changed transaction | Conflict/revision visible; accepted history preserved |
| Refund/reversal/loan movement | Configured sign/classification; no default sales assumption |
| Rule change / rerun | Exact snapshot identifiable; old result unchanged |
| Split/combined match | Allocations and residual balances correct; no over-allocation |
| Ambiguous matching | No arbitrary match |
| Missing bank/invoice evidence | Not supplied / not checked |
| Payout deduction + invoice | Approved expense recognized once |
| Incomplete/unbalanced accounting | Submission readiness blocked |
| Unknown connector response | Readback before retry; no duplicate document |
| Unauthorized entity/config/posting | Server rejects operation |
| Second provider/layout | Reuse demonstrated through configuration |

For every execution retain fixture locator/checksum or revision, processor/configuration versions, expected/actual counts and amounts, evidence, defects, reviewer and date. Synthetic fixtures belong in code repositories; real reports remain private.

Repository documentation checks for this package cover path/link integrity, structured-file parsing and saved tree/content verification. They do not validate a financial pipeline or approve accounting/tax treatment.
