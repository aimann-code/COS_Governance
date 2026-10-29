# Field and mapping contracts

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

Keep field definitions once and reference them from extraction, calculations, reconciliation and outputs.

| Register | Minimum attributes |
|---|---|
| Source field | Report/Table Profile version, worksheet/context, original heading, column/occurrence, source type and meaning |
| Canonical field | Logical name, definition, dataset grain, type, unit/currency, null meaning and validation |
| Field mapping | Source reference, target, supported conversion, sign/unit policy, missing-value treatment and version |
| Master mapping | External identity and scope → canonical entity/outlet/brand/restaurant/account |
| Rule register | Inputs, operation, conditions, outputs, precision, effective dates, owner and approval |
| Output mapping | Canonical measure/field → approved destination field/account/tax/contact contract |

Use a bounded operation catalogue: decimal conversion, date parsing, lookup, addition, subtraction and other reviewed operations. Never evaluate arbitrary user expressions.

Unmapped values remain visible. Unknown masters create exceptions rather than automatic master creation. Missing legal entity may permit diagnostics but blocks accounting readiness.

Mapping changes create new versions. Historical reruns retain original snapshots or explicitly identify a new comparison baseline. Do not reinterpret prior accepted facts silently.

Minimum lineage fields include Source_File_ID, raw-record reference, table/profile version, Mapping_Version, rule version, run reference and Validation_Status. Physical naming follows the eventual approved application schema; these labels do not mandate a live contract rename.
