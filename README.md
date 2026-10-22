# COS_Governance

Private COS governance migration draft 0.3.0, recorded 23-Oct-2026. Open the **[COS Catalogue](catalogue/README.md)** to browse readable pages. [Source manifest](cos-governance.yaml).

## Browse without reading YAML
- [Standards](catalogue/standards.md) · [Naming](catalogue/naming.md) · [Architecture](catalogue/architecture.md)
- [Employee Registration](catalogue/architecture/arch-draft-4.md) · [Features](catalogue/features.md) · [Design](catalogue/design.md)
- [Implementation](catalogue/implementation.md) · [Decisions](catalogue/decisions.md)

## Current state
- The six-group source model is approved: [source map](architecture/source-map.yaml). Migration and authority cutover remain pending.
- Frozen Naming Standard **0.2.0**, source decision **D67**: 32 code terms, 20 retained terms, 12 rules.
- Existing workbook's **44 tabs / 1,695 populated rows** captured as readable historical values.
- Five source documents preserved as readable text snapshots.
- Discussion summaries, selected verbatim user excerpts and design comparisons retained with coverage limits.
- Application baseline: [EMPRegister / b2b156c](https://github.com/aimann-code/EMPRegister/tree/b2b156c44ba7744bf6cb81c19eb3a05d8633fdba).
- **No authority cutover, published release, Drive deletion, application rename or database migration.**

## Maintained definitions
| Source | Owns |
|---|---|
| standards/naming.yaml | Frozen naming and shortcodes |
| standards/standards.yaml | Existing standard rules and qualified statuses |
| architecture/objects.yaml | Architecture definitions and ownership |
| features/features.yaml | Requirement inventory and open design work |
| decisions/decisions.yaml | Decisions, evidence references and pending questions |
| templates/design.yaml | Autoinspire-adapted design output structure |
| architecture/ownership.yaml | Ownership links to implementation and data authority |

These files form six logical groups; the [consolidated standards profile](standards/baseline.yaml) references canonical rules without duplicating editable bodies.

JSON-compatible YAML 1.2 is used so the initial validator needs only Python's standard library. Code inventories are to be extracted from application code; do not manually duplicate method/DTO/physical schema definitions here.

## Review and history
- [Discussion coverage](discussions/README.md)
- [Design comparison](comparisons/design-comparison.md)
- [Source-model approval](discussions/source-map-approval.md)
- [Consolidated standards profile](standards/baseline.yaml)
- [Register migration map](migration/register-map.yaml)
- [Source manifest](migration/source-manifest.json)
- [Flow](docs/flow.md)
- [Migration limits](migration/README.md)

Source snapshots are immutable historical evidence, not competing editable live registers. A complete provider chat transcript is unavailable; selected excerpts and labelled summaries do not claim completeness.

## Validation and preview generation
```sh
python generators/validate.py
python generators/render.py
node generators/build-catalogue.mjs --check
```
The renderer creates seven draft Markdown previews, including the approved source map and consolidated standards review. Individual pending rules remain pending. It is not a Java application generator or native Google Docs publication pipeline. Technical extraction, full semantic migration and cutover still need implementation/review.

## Changes
Use a pull request; identify source instruction, before/after, reason, impacted consumers, approval state and actual checks. Frozen naming changes require an explicit decision. Keep permanent existing IDs, preserve framework/external names and use forward DB migrations. Git history complements, but does not replace, Ashish's native-document/database recovery rules.

## Catalogue generation
The checked-in catalogue is a reproducible view of the maintained definitions. Run `node generators/build-catalogue.mjs --write` after source changes, then `--check`. CI rejects stale pages and broken local links. Edit the source definitions instead of catalogue pages. This adds readable navigation, not new approvals or a complete code inventory.
