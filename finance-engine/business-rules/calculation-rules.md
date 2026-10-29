# Calculation rules

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

Cleaning changes representation; calculations change financial meaning. Store source, cleaned and calculated values separately.

| Area | Configuration required |
|---|---|
| Sales | Included components, discounts, tax-inclusive interpretation, packaging/delivery treatment |
| Refunds / adjustments | Event identity, sign, original reference and recognition period |
| Charges | Commission, advertising, gateway and other component classification |
| Expected payout | Sales, charges, taxes, additions/deductions and carry-forward balance |
| Receivables | Opening balance, recognized movements, settlements and closing balance |
| Rounding | Calculation/posting precision, stage, approved adjustment evidence and account |

Each result identifies all input facts, rule version, effective period, precision and run. Decimal arithmetic is required; accounting output must balance at approved posting precision.

Ownly June candidate formula is Items Net Value minus Items GST. It remains a profile-specific candidate requiring approval and fixture validation. Later delivery-format candidates must not inherit it without evidence.

Preserve original difference, approved adjustment and final difference separately. A small variance alone never authorizes a rounding entry. Journal balance cannot resolve independent source-summary or bank mismatches.

Magicpin loan/capital movements remain separate from sales and commission pending approved classification. Withdrawals are fund transfers. Paytm payment observations must not duplicate aggregator order revenue.

No statutory rates or final GST/TDS accounting treatment are established here.
