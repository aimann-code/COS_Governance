# Reconciliation workflows

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

| Comparison | Matching basis | Exception outcomes |
|---|---|---|
| Aggregator order ↔ POS order | Verified entity/outlet, mapped order identity, compatible date/status/amount | Missing, duplicate, ambiguous, status or amount mismatch |
| Daily aggregator ↔ POS summary | Compatible date, entity, outlet, channel and measures | Missing coverage, count/amount difference |
| Orders/events ↔ payout | Settlement association, eligible window and configured allocations | Unsettled, carry-forward, unexplained deduction |
| Payout charge ↔ invoice | Supplier/entity, merchant, period, reference and charge category | Unbilled, unmatched, duplicate or amount mismatch |
| Payout/withdrawal ↔ bank | Actual bank account transaction, reference/UTR, date window, currency and amount | Missing credit, split/combined payment, reversal, ambiguity |
| Prepared ↔ recorded accounting | Organization, external ID, amounts and status | Rejected, missing or changed document |

Matching profiles configure keys, tolerances, date windows, eligibility, allocation and review policy. Support one-to-one, one-to-many and many-to-one via allocation records, with residual balance and evidence. Never choose arbitrarily between multiple candidates.

Payout-deducted commission and invoiced commission are two observations of a potentially shared expense. Link them through reconciliation and approved recognition policy to prevent duplicate booking.

An invoice bank account is not bank-credit evidence. Withdrawal reports are matching inputs, not confirmation that a bank credit occurred.

Missing invoice/bank/POS/tax data shows Not supplied / not checked. Reconciliation status is separate from validation, accounting approval and submission.

Operational sequence: select scope and configuration snapshot; verify coverage/grain compatibility; propose deterministic matches; hold ambiguity; validate allocations; review exceptions; retain decision and rerun lineage. Corrections never silently replace approved matches.
