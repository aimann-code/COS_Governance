# Tax working and accounting integration

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

| Output | Contract |
|---|---|
| GST working | Source sales/refunds/adjustments and supplier invoice taxes by entity/GSTIN, document and period; distinguish reported/calculated values |
| TDS working | Separate aggregator deductions from merchant withholding on supplier payments; preserve counterparty, classification, period and evidence |
| Sales journal | Approved entity/currency grouping, debit/credit accounts, tax/contact mappings and posting precision |
| Supplier bill / credit note | Verified supplier invoice evidence and confirmed Zoho import contract |
| Upload batch | Payload/version, validation, approval, destination organization and idempotency reference |
| Submission / readback | Attempt, response, external ID, status and reconciliation evidence |

Ownly discussion specifies one sales-day journal across brands within one verified legal entity and currency. Other provider grouping remains pending. Do not group across unverified entities/currencies.

The Magicpin CSV described in the discussion is a supplier-bill upload sample, not original invoice evidence. Its tax labels, inclusive flag and ITC fields are not approved tax policy. Received supplier invoices must not become customer sales invoices automatically.

No rates, statutory interpretation or final tax treatments are frozen by this draft. Effective tax configuration and accounting review are implementation dependencies.

Preparation does not authorize posting. Before submitting, server-side checks verify organization/entity permission, exact approved payload version, mappings and balance. Record Not submitted, Pending, Confirmed, Failed or Outcome unknown independently of approval.

For unknown outcomes, search/read back the external document before retrying. Do not blindly resubmit. The actual API/import schema, unique-document contract and readback capability must be verified before connector implementation.
