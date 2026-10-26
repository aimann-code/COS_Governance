# Stages, lifecycle and developer handover

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.8; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Approved stage/lifecycle direction; implementation of enforcement and Project board pending

| Control | Values |
| --- | --- |
| Stage | Draft → Review → Published |
| Lifecycle phase | Requirements → Design & Architecture → Development → Testing → Deployment → Operations |
| Release taxonomy | Separate decision pending; Alpha/Beta/Gamma not adopted by this update |

## Branch versus status

| Control | Meaning |
| --- | --- |
| Branch | Versioned workspace containing file changes; branch name does not grant approval. |
| Stage | Readiness of a particular artifact in its lifecycle phase. |
| Lifecycle phase | Kind of work happening; each deliverable has its own stage. Testing can run alongside development. |
| Edit owner | Accountable editor for the active work item/phase; read/comment rights are separate. |
| Published baseline | Explicitly approved immutable commit and artifact paths that development is authorized to consume. |
| Merge | Integration into a branch. A merged Draft document remains Draft; merge alone does not publish every artifact. |

## Phase handovers

| Phase | Owner role | Published output |
| --- | --- | --- |
| Requirements | Requirement owner | Approved requirements, acceptance criteria and open decisions |
| Design & Architecture | Design owner | Approved architecture, DB, GUI, APIs/DTOs, naming, tests and dependency design |
| Development | Developer | Reviewed code merged against linked requirement/design baselines |
| Testing | Tester | Accepted test results with executed/pending evidence and blocking defects |
| Deployment | Release owner | Approved release deployed with rollback plan and deployment evidence |
| Operations | Operations owner | Accepted operational handover, monitoring and recovery evidence |

## Work-item fields

| Field | Meaning |
| --- | --- |
| work_item | Owning GitHub issue/PR or registered work-item reference |
| object_ref | Owning suite/engine/module/component local/permanent reference |
| phase | One configured lifecycle phase |
| stage | Draft, Review or Published |
| edit_owner | Actual assigned person/group; no guessed usernames |
| requirement_baseline | Repository + immutable commit + artifact paths + approval evidence; required before coding |
| architecture_baseline | Repository + immutable commit + artifact paths + approval evidence; required before coding |
| working_branch | Owning repository and topic branch |
| change_requests | Linked changes and disposition |
| review_evidence | Reviewer, decision and evidence links |
| test_evidence | Actual checks, results, limitations and defects |
| handover | Previous/new owner, accepted scope, baseline and timestamp |

## Baseline and ownership rules

- During Chat Editing, a developer must not implement the current Draft. Continue only against the last explicitly published baseline; if none exists, coding waits.
- During Developer Editing, the active requirement/design baseline is fixed. The design owner can read/comment/answer questions and prepare separate drafts/change requests; cannot silently replace the active baseline.
- A new change request records impact, dependency and reviewer approval before the developer adopts a new baseline.
- Handover is per work item/component/change, not a global lock on all COS work.
- Draft to Review requires a preview and identified reviewer. Review to Published requires explicit approval, exact commit/path evidence and phase-specific checks.
- Published content changes through a new revision starting Draft; preserve the prior published commit and approvals.
- Developer review and code review are activities under Review in their respective phases, not additional stages.
- Developed means accepted Development output; it does not mean deployed. Test Development belongs to Testing and can proceed alongside Development.
- Published never implies public repository exposure or automatic publication of ChatGPT conversations.
- Branch protections, owner assignment and required checks must enforce policy operationally; recording this definition does not install technical locks.

## Branch and chat protocol

| Branch | Purpose |
| --- | --- |
| chat/<topic> | Requirements/design proposals |
| feature/<topic> | Implementation |
| fix/<topic> | Corrections |

feat means feature; existing draft/* or feat/* branches are not automatically renamed.

1. Read cos-governance.yaml and AGENTS.md, then relevant definitions.
2. Record repository, branch and resolved commit at session start.
3. Default reads may select main; explicitly select the branch for draft work.
4. Check source inventory/aliases before declaring an architecture object absent.
5. Refresh head before each write and reconcile changes; update refs using expected SHA.
6. Report commit, branch, changed paths and actual checks after each approved write.

Before each GitHub update, reconcile available approval evidence and show: (1) approved changes included, (2) pending approvals and ambiguous decisions, (3) excluded items, and (4) proposed content/change summary. Ask Any pending approvals to resolve before this update? and then Update Git Hub - Yes/No? Wait for an affirmative instruction for the stated scope; do not repeatedly request the same approval once given. Resolve blocking ambiguity or explicitly agree its exclusion before dependent changes. Update approval labels only with traceable evidence; preserve history and keep approval, publication, implementation and verification separate. Authorization covers necessary commits, generated views and checks for that scope, not unrelated edits, merging, deployment or access changes. Read-only checks need no update approval.

After approved baseline publication, link its immutable commit and paths to the developer work item. Other chats must reread GitHub; open chats do not receive automatic updates.

## Pending setup

- Actual GitHub Project fields/board and technical enforcement are not configured.
- No real developer assignment, permission changes or lock automation created.
- Alpha/Beta/Gamma/Production release taxonomy excluded from this update pending separate confirmation.
- Project-boundary/name standard remains separately pending.

[Canonical workflow definition](../standards/workflow.yaml) · [Approval evidence](../discussions/architecture-workflow-update-23-Oct-2026.md)

## Mandatory pre-update approval checkpoint

1. Approved changes included
2. Pending approvals and ambiguous decisions
3. Excluded items
4. Proposed content/change summary

- **Any pending approvals to resolve before this update?**
- **Update Git Hub - Yes/No?**

Preserve original approval evidence; do not infer all-design approval from record/update/merge authorization. Existing affirmative authorization remains valid for its stated scope; do not ask the same permission again.

[Current approval review](approval-review.md)
