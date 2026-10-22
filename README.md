# COS_Governance

Private COS governance migration draft, recorded 23-Oct-2026. Start at [cos-governance.yaml](cos-governance.yaml).

## Current state
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

JSON-compatible YAML 1.2 is used so the initial validator needs only Python's standard library. Code inventories are to be extracted from application code; do not manually duplicate method/DTO/physical schema definitions here.

## Review and history
- [Discussion coverage](discussions/README.md)
- [Design comparison](comparisons/design-comparison.md)
- [Register migration map](migration/register-map.yaml)
- [Source manifest](migration/source-manifest.json)
- [Flow](docs/flow.md)
- [Migration limits](migration/README.md)

Source snapshots are immutable historical evidence, not competing editable live registers. A complete provider chat transcript is unavailable; selected excerpts and labelled summaries do not claim completeness.

## Validation and preview generation
```sh
python generators/validate.py
python generators/render.py
```
The renderer creates draft Markdown previews only. It is not a Java application generator or native Google Docs publication pipeline. Technical extraction, full semantic migration and cutover still need implementation/review.

## Changes
Use a pull request; identify source instruction, before/after, reason, impacted consumers, approval state and actual checks. Frozen naming changes require an explicit decision. Keep permanent existing IDs, preserve framework/external names and use forward DB migrations. Git history complements, but does not replace, Ashish's native-document/database recovery rules.
