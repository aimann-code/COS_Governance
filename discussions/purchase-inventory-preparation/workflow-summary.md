# Proposed workflow and requirements direction

Status: DRAFT. Requirement capture only; no integration implemented or enabled.

## Parallel workstreams

1. Automate the interim purchase workflow using existing product capabilities first.
2. Capture COS Inventory and Purchase requirements in parallel, then convert them into design later.

## Proposed responsibilities

| System | Responsibility | Qualification |
| --- | --- | --- |
| Zoho Books | Invoice scanning, accounting bills, vendor payables and accounting master fields | Organisation configuration and scan pilot pending |
| Petpooja | POS sales, raw materials, recipes, operational inventory and calculated consumption | Required bills/sales/inventory/report API endpoints and entitlements UNVERIFIED |
| Razorpay | Payments, settlements, payouts and/or payroll | Exact product and authorised scope pending |
| Attendo | Attendance source | API entitlement and endpoint scope unverified |
| Interim Sheets | Review, cleansing, missing mappings and exceptions where native apps do not meet needs | No parallel editable copy of GitHub-owned definitions |
| GitHub | Definitions, requirements, rules, workflow documentation, guides and code in owning repositories | Live operational data excluded |

## Proposed processing

Receive invoice -> scan -> verify vendor and canonical item mapping -> check calculations/tax -> confirm physical receipt -> approve accounting bill -> record operational receipt through a supported channel -> reconcile -> report.

Invoice quantity does not prove received quantity. Keep shortages, returns and vendor credits distinct. Recipe-based calculated consumption does not replace physical counts or wastage records. Avoid duplicate stock or accounting posting on retries. Corrections, cancellations and reversals need linked source references.

Use stable internal references linked to organisation/outlet-specific provider IDs. Item aliases include vendor identity, supplier item code/description, pack size, unit and effective dates. Retain original descriptions. Human review resolves ambiguous matches and new master creation.

## Delivery order

1. Prepare source-backed masters and configurations; flag duplicates, incomplete fields and conflicting sources.
2. Review ownership, types, allowed values, identity matching, conversions and tax applicability; align against actual provider exports.
3. Maintain draft documentation and register definitions in GitHub without uploading live data.
4. Expand the full workflow, detailed requirements and acceptance criteria.
5. Prepare skills and operating procedures, then code and tests.
6. Pilot and reconcile before activating automation. Design future COS modules from verified requirements and gaps.

No external message, payout, production write, automatic penalty, source deletion or master merge is performed by this preparation.
