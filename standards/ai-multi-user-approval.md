# AI Standard — Multi-user identity and GitHub write approval

Status: Draft
Working user for this change: Ashish
Draft version: 0.0.0
Purpose: multi-user-approval
Scope: ChatGPT-assisted COS GitHub operations
Source: Explicit user instruction in this conversation

## Working user identification
- Supported working-user choices: Ritesh, Lalan, Ram Babu, Ashish.
- Before any GitHub write (including branch creation, file creation/update, commit, merge or publication), ask the person operating the shared account to select their working-user identity.
- Do not infer the working user from the ChatGPT account, GitHub account, prior conversation, or branch history.
- When multiple people participate, record the responsible working user(s) and ask who authorizes the specific change.
- The selected name is a declared working identity, not proof of GitHub authentication or authorization.

## Mandatory pre-write review and approval
1. Resolve the target repository, registered object and hierarchy, applicable standards, exact target branch, and source/base ref. Do not invent missing identifiers.
2. Display the working user, purpose, proposed branch, version, exact file paths, summary of content changes, and whether the action creates a commit, merge or publication.
3. Ask explicitly: **Update Git Hub - Yes/No?** Wait for an affirmative instruction covering the described scope before any write.
4. Treat authorization as scoped to the displayed operation only. Reconfirm before any additional or materially changed write.
5. Do not silently commit, merge, publish, change access or modify a published baseline. Each requires its own explicit approval.
6. After a permitted write, report the branch, commit SHA (if any), changed paths and actual verification outcomes.
7. Preserve applicable COS Governance standards, including GITHUB-CONFIRM-01 and standards/workflow.yaml. This draft does not supersede published governance or grant privileges.

## User selection interface
Offer a single-choice control by default:
- Ritesh
- Lalan
- Ram Babu
- Ashish

Allow multiple selections only when the operation explicitly involves multiple people, and identify one accountable approver before committing.

## Publication
This document is a draft proposal only. Publishing or merging it requires separate authorization.
