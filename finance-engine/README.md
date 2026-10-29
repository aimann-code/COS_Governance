# COS Finance Engine

Stage: Draft | Working user: Ashish | Recorded: 29-Oct-2026

This branch records only the Finance Engine requirements and proposed design from the current supplied discussion. It covers aggregator sales, payment and settlement processing through source preservation, profile-driven extraction, standard facts, calculations, reconciliation, tax working, accounting preparation and reports.

The source reviews described here are historical observations attributed to the supplied conversation. Drive contents were not reread for this documentation update. No application implementation, approved tax treatment, posting, deployment or source-file change is asserted.

## Document catalogue

- [architecture/engine-design.md](architecture/engine-design.md)
- [business-rules/calculation-rules.md](business-rules/calculation-rules.md)
- [data-design/data-model.md](data-design/data-model.md)
- [data-design/field-and-mapping-registers.md](data-design/field-and-mapping-registers.md)
- [guides/developer-guide.md](guides/developer-guide.md)
- [guides/user-guide.md](guides/user-guide.md)
- [integrations/tax-and-accounting.md](integrations/tax-and-accounting.md)
- [profiles/report-profiles.md](profiles/report-profiles.md)
- [profiles/table-profiles.md](profiles/table-profiles.md)
- [requirements/common-requirements.md](requirements/common-requirements.md)
- [requirements/provider-coverage.md](requirements/provider-coverage.md)
- [sources/source-policy.yaml](sources/source-policy.yaml)
- [sources/source-references.yaml](sources/source-references.yaml)
- [testing/acceptance-tests.md](testing/acceptance-tests.md)
- [tracking/decision-query-tracker.md](tracking/decision-query-tracker.md)
- [tracking/traceability.md](tracking/traceability.md)
- [workflows/reconciliation.md](workflows/reconciliation.md)

## Scope and baseline

Repository: aimann-code/COS_Governance. Branch: COS_Finance_Engine_Current_Discussion. Parent evidence commit: d6f9307727a5e30ff830a3d0393a10e3d1a6adaa. The new file tree contains only this package; earlier inherited governance documents remain available through history and other refs. This is not a replacement of global COS standards.

Raw-file root: [10_RAW_DATA](https://drive.google.com/drive/folders/1MbNta9iM8x-3nJL4C-YeJye1aFWZuB7Y). Only configured finance locations are in scope. Raw data and credentials remain outside GitHub.

## Development sequence

1. Review scope, profiles, fields, grains and expected fixtures.
2. Preserve/register inputs.
3. Complete one extraction vertical slice.
4. Prove configuration reuse with a second layout and create traceable facts.
5. Validate approved calculations and reconciliation.
6. Prepare reviewed GST/TDS and accounting outputs.
7. Implement authorized integrations, reports and operational controls.

Pending: technology, physical contracts, incomplete profiles, master authority, exact keys, accounting/tax treatment and operational ownership. Saving Draft content does not resolve these decisions or publish a coding baseline.

## Governance references

Applicable contributor guidance and governance were read before this update. See the upstream [AGENTS.md](https://github.com/aimann-code/COS_Governance/blob/main/AGENTS.md), [governance](https://github.com/aimann-code/COS_Governance/blob/main/cos-governance.yaml) and [workflow](https://github.com/aimann-code/COS_Governance/blob/main/standards/workflow.yaml). This package does not copy unrelated HRMS/COS catalogues or the previous 659-reference discovery catalogue.
