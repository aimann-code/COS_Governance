# Common requirements

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

The proposed system handles aggregator sales, payment and settlement reports through one configurable finance framework. Configuration controls supported extraction, mapping, calculation, reconciliation and output behaviour. Provider-specific code requires a reviewed requirement that cannot safely use the supported operation catalogue.

| Requirement | Behaviour | Acceptance |
|---|---|---|
| Intake | Authorized email attachments, configured Drive files and manual uploads | Every selected input has a durable registration or visible failure |
| Preservation | Preserve original bytes in private configured storage; retain native-source revision evidence where applicable | Source locator, checksum/version and capture metadata available |
| Extraction | Resolve versioned Report Profile and Table Profiles | Every source section is extracted, classified or explicitly excepted |
| Standardization | Preserve originals; apply configured conversions and master mappings | Each accepted fact has lineage and validation status |
| Calculations | Execute approved effective rules against accepted inputs | Results retain inputs, rule version, precision and run |
| Reconciliation | Compare compatible POS, order, payout, invoice, bank and accounting datasets | Matches, allocations, balances and exceptions remain visible |
| Tax working | Prepare GST/TDS evidence under approved effective treatment | Reported and calculated amounts remain distinguishable |
| Accounting | Prepare sales journals and supplier bills/credit notes | Incomplete mappings and unbalanced documents are blocked |
| Reporting | Read controlled fact views through output profiles | Grain, scope, period, run and unresolved exceptions exposed |
| Operations | Server-side permissions, retries, monitoring and recovery | Replay does not duplicate accepted facts or external documents |

A processing run fixes processor version and immutable configuration snapshot. Live edits cannot alter historical results. Unknown fields and unsupported structures cannot disappear silently. Missing expected reports indicate incomplete coverage, not zero activity.

Financial accuracy, source coverage, reconciliation, accounting approval and posting success are separate outcomes. A balanced journal alone proves none of the others.

See [data contracts](../data-design/data-model.md), [rules](../business-rules/calculation-rules.md), [tests](../testing/acceptance-tests.md) and [open decisions](../tracking/decision-query-tracker.md).
