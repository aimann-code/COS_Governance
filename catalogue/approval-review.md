# Approval evidence and pending decisions

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Evidence-backed reconciliation and pending decisions; no blanket approval

Approval is not implementation. Main integration is not blanket approval of every Draft artifact. Historical source records remain preserved; current scoped decisions below show their evidence separately.

## Reconciled decisions

| Reference | Approval | Approved scope | Publication | Implementation | Verification | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| ARCH-INVENTORY-01 | Approved | Import the original source suite/engine inventory and preserve HRMS proposals; not approval of unprovided detailed designs. | Governance definition integrated into main; not blanket design or production approval | Source inventory, parent references and generated navigation delivered. | Source coverage, parent/alias regression checks and GitHub CI passed for PR4. | discussions/architecture-workflow-update-23-Oct-2026.md; discussions/approval-reconciliation-23-Oct-2026.md; User yes update github for listed scope, followed by do it authorizing PR4 merge; see discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| NAM-DOC-01 | Approved | Descriptive repository documentation filenames and compatibility pointers only; no application naming migration. | Governance definition integrated into main; not blanket design or production approval | Documentation paths and pointer pages generated. | Generated-page reproducibility and link checks passed for PR4. | discussions/architecture-workflow-update-23-Oct-2026.md; discussions/approval-reconciliation-23-Oct-2026.md; User yes update github for listed scope, followed by do it authorizing PR4 merge; see discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| WORKFLOW-01 | Approved | Draft/Review/Published stages, six lifecycle phases, edit ownership and published baseline handover model. | Governance definition integrated into main; not blanket design or production approval | Workflow definitions and generated guide delivered; actual owner locks, permissions and Project board not configured. | Definition checks passed; runtime ownership enforcement not implemented/tested. | discussions/architecture-workflow-update-23-Oct-2026.md; discussions/approval-reconciliation-23-Oct-2026.md; User yes update github for listed scope, followed by do it authorizing PR4 merge; see discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| CHAT-SOURCE-01 | Approved | Explicit branch/commit selection, refresh-before-write and no automatic chat sync. | Governance definition integrated into main; not blanket design or production approval | Repository guidance delivered; no background synchronization installed. | Repository reference checks passed; no automated chat synchronization claimed. | discussions/architecture-workflow-update-23-Oct-2026.md; discussions/approval-reconciliation-23-Oct-2026.md; User yes update github for listed scope, followed by do it authorizing PR4 merge; see discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| NAM-LOWER-01 | Approved | Use sys_emp_id and emp_reg as current governed names; preserve compatibility with old contracts. | Governance definition integrated into main; not blanket design or production approval | Governance spelling updated; physical application/API/database migration remains pending. | Governance naming checks passed; live-contract migration not verified. | User make it lower case; latest update git hub; discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| NAM-REG-01 | Approved | Controlled source term, scoped registration component naming and proposed virtual-view naming profile. | Governance definition integrated into main; not blanket design or production approval | Naming profile recorded; actual domain implementations and physical views remain incomplete. | Controlled-term/profile consistency checked; runtime adoption not inferred. | User update github in backend following displayed naming proposal; discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| GITHUB-SOURCE-01 | Approved | Maintain shared governance/design/code/skills in their owning repositories; keep private data/secrets outside GitHub. | Governance definition integrated into main; not blanket design or production approval | Policy and index delivered; no skill installation or backup automation. | Policy source links checked; restore/installation not verified. | User we will kep everything on github now..so skill also; latest Yes; discussions/approval-reconciliation-23-Oct-2026.md; [PR4](https://github.com/aimann-code/COS_Governance/pull/4) @ bd87cd2f41cf3ec5ad1b78aca0081d25937e46df |
| GITHUB-CONFIRM-01 | Approved | Approval reconciliation and pending-approval checkpoint before every scoped GitHub update. | Version 0.1.1 amendment under review; previous policy already integrated | Instruction and review catalogue recorded; no automatic enforcement. | Repository validation; no claim that future human decisions are automated. | User: always asked any pending approval before updating; User: update; discussions/approval-reconciliation-23-Oct-2026.md |
| APPROVAL-REVIEW-01 | Approved | Current evidence-backed corrections and pre-update protocol only. | Current change awaits reviewed integration | Evidence-backed metadata and generated review page | Repository reference/status checks; complete historical chat audit not claimed | User update following the reconciliation proposal; discussions/approval-reconciliation-23-Oct-2026.md |

## Pending decisions and approvals

| Topic | State | Scope | Next step |
| --- | --- | --- | --- |
| Missing architecture shortcodes | Allocation review pending | Prepare candidates for 46 engines, 4 modules and 27 components. All 9 suites already have source shortcodes. | Show allocation table and obtain explicit approval before assigning new values. |
| Shortcode convention and type prefixes | Proposed standard; decision pending | Casing/separators, uniqueness and recommendation to omit SUIT_/ENG_/MOD_/COMP_. | Approve exact naming profile; do not freeze from a question alone. |
| features/<topic> branch prefix | Proposed amendment; decision pending | Previous published policy uses feature/<topic>; feat is a compatibility abbreviation. | Confirm plural features/ and compatibility; do not rename existing branches silently. |
| Relational catalogue and tree | User-requested direction; detailed specification pending | Link architecture/features/files/schemas/tables/fields/skills/standards/naming with single canonical definitions. | Show item/relationship schema, ownership and migration mappings before adoption. |
| Relation types, shared links and validation | Detailed design pending | parent_of, owns, implements, uses, governed_by, stored_in, references, verified_by and derived_from are proposed. | Review exact semantics and validation rules; then implement tree/diagrams and generated derivatives. |
| Project boundary and project name | Separate approval pending | Earlier project-standard update was not committed. | Re-present concrete project naming/boundary proposal. |
| Alpha/Beta/Gamma/Production | Separate confirmation pending | Excluded from PR4; Gamma definition was not separately confirmed. | Confirm release taxonomy independently of lifecycle and approval stage. |
| GitHub Project board and editing enforcement | Implementation pending; configuration scope not authorized | Published ownership model is approved; board fields, permission rules and technical locks are not installed. | Propose concrete configuration and permission impact. |
| Other historical pending labels | Evidence review incomplete | Some source rules are historical proposals; complete provider transcript is not available. | Resolve ambiguous approval per artifact using exact source evidence. Do not bulk approve every Pending row. |

## Display corrections

- Architecture/naming generated display columns use Short Code; stored property names and assigned shortcodes unchanged.

## Limits

- Review uses available conversation and repository evidence, not a complete provider chat export.
- No historical source snapshots rewritten.
- No new shortcode allocation, branch renaming, app/schema changes, relational catalogue implementation, main merge or permission changes by this increment.

[Canonical approval-review index](../decisions/approval-review.yaml) · [Canonical decisions](../decisions/decisions.yaml) · [Approval source evidence](../discussions/approval-reconciliation-23-Oct-2026.md) · [Workflow](workflow.md)
