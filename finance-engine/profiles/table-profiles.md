# Table Profiles

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

Each Table Profile defines detection and extraction for one source-table type. Report–Table Mapping defines its occurrence and requiredness.

Supported target orientations are column tables, key-value sections, repeated blocks, multi-row/merged headers and informational reference sections. Each needs actual sample validation before claiming parser support.

| Contract item | Required behaviour |
|---|---|
| Detection | Worksheet selector, anchors/signatures and confidence/ambiguity disposition |
| Boundaries | Header/data/end rules; separate totals and calculation rows |
| Headers | Original text, grouped context, physical column and occurrence retained |
| Values | Original value, type, formula/error evidence and coordinates |
| Extraction fields | Scoped mapping references and expected types |
| Classification | Transaction, summary, control calculation, reference or helper |
| Coverage | Detected, extracted, empty, excluded with reason, failed or unsupported |
| Validation | Required table/fields, unexpected regions and parse errors |

Duplicate headings must not overwrite each other. Hidden sheets and helper columns remain inventoried; classification determines whether they contribute facts. Summaries can validate orders but cannot add the same revenue again.

Unknown fields remain in raw evidence and create coverage exceptions. A row with configured fields blank but other content populated is retained for review. Only genuinely empty/non-data rows are excluded, with disposition evidence.

Parser outputs include extracted-table occurrence, raw records/values, source coordinates, profile version, validation and coverage. Imported expressions are never executed.
