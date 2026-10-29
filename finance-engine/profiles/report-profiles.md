# Report Profiles

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

A Report Profile identifies a report and selects its Table Profiles. Profile schemas and field names below are logical contracts, not executable production configuration.

| Field | Meaning |
|---|---|
| Profile reference/version | Stable local reference and immutable revision |
| Provider/report family | Scoped business identity |
| Detection signatures | File structure, sheets, headers and anchors; filename/MIME alone insufficient |
| Effective applicability | Layout period, supported source version and approval evidence |
| Period extraction | Configured source locations, timezone and business-date policy |
| Table mappings | Table Profile versions, required/optional conditions and occurrence rules |
| Scope resolution | Legal entity, merchant, outlet and currency evidence |
| Coverage policy | Expected sections and treatment of unknown structures |

Ambiguous profile resolution stops financial acceptance and creates a review exception. Required missing tables fail the relevant extraction; absent optional tables are recorded separately.

| Family | Tables / layout distinctions |
|---|---|
| Ownly payout | Payment Info, Payout Details, Payout Summary; June pivot/detail/control sections; June and September are separate versions |
| Swiggy payout | Summary, Payout Breakup, Order Level, Complaints, Other charges/deductions, Discount Summary, Glossary; later growth-investment naming requires separate compatibility proof |
| Zomato settlement | Summary, Payout Breakup, Order Level, Addition Deductions Details, Discounts Summary, Glossary, HSummary, HDiscount |
| Magicpin ledger | Order/ledger events, Payout Breakup, Additional Deductions, Withdrawals, Glossary, copied/pivot working |
| Paytm payments | Transaction table mapped to payment facts |
| Paytm withdrawals | M2B/WITHDRAW records plus pivot/control evidence |
| SmartQ payment advice | Sales summary, deductions and entity details; full fixture contract pending |
| POS / Zomato business CSV | Daily metrics; detailed order reconciliation needs suitable order-level sources |
| Commission invoices | Issuer/recipient, lines, totals and references; actual samples/contract pending where unavailable |

New profiles require fixture detection and coverage results before activation. Second-layout acceptance must demonstrate reuse through configuration, not an unreviewed provider fork.
