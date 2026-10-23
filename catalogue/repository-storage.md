# Repository and skills storage

> Generated from maintained definitions. Do not edit this page directly.
> Governance 0.3.7; naming 0.2.3; application evidence b2b156c44ba7744bf6cb81c19eb3a05d8633fdba.
> Draft catalogue. Approval, implementation, verification and publication are separate.

[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)

Maintain current requirements, standards, architecture/design, developer guides, naming, source code, tests and skills in their owning GitHub repositories. Keep one maintained source per fact and generate readable derivatives. Shared skills live in COS_Governance/skills/<skill-name>/SKILL.md; application-specific skills live in the owning application's skills/<skill-name>/SKILL.md. Supporting scripts/references/assets stay with the skill. GitHub storage does not install or activate a skill; environment installation/connection is separately configured and must not be claimed. Do not put credentials, real employee/upload records or operational DB data in GitHub. Keep those in approved private storage/DB with artifact-specific recovery. Do not maintain duplicate editable Drive copies of GitHub-owned definitions. Preserve original/historical Drive sources until their migration/retention is explicitly resolved. Repository backup policy remains required; Git history alone is not complete recovery. Continue asking before each described GitHub update; no implicit merge, deployment or sharing change.

| Content | Maintained location | Boundary |
| --- | --- | --- |
| Standards and naming | COS_Governance/standards/ | Maintained canonical rules |
| Architecture/design and developer definitions | COS_Governance/architecture/ | Maintained design meaning |
| Requirements | COS_Governance/features/ or domain owner after reviewed transfer | One editable owner; no duplicate live inventories |
| Shared skills | COS_Governance/skills/skill-name/SKILL.md | Shared workflow source; not an installed runtime skill |
| Application skills | Owning application repository/skills/skill-name/SKILL.md | Domain workflow source; no copy into shared catalogue without ownership decision |
| Application code and executable tests | Owning application repository | Draft branches/PRs before merge |
| Generated guides/catalogue | Generated paths in owning repository | Reproducible views; edit canonical sources |
| Questions/tasks | GitHub Issues | Create/assign only within explicit task/recipient authorization |
| Real data/files/secrets | Approved private storage, DB and protected secrets | Never stored as repository content |

## Skill contents

| Section | Required information |
| --- | --- |
| Identity | Lowercase hyphenated skill-name folder matching frontmatter name; clear description and trigger |
| Purpose and scope | What the workflow does; domain/entity/architecture applicability |
| Inputs and sources | Required authorized inputs and canonical source/version references |
| Workflow | Concrete steps; reuse supporting scripts and references |
| Permissions | Required tools/access and action confirmations; skill does not grant external access |
| Outputs | Expected deliverables and owning destination |
| Verification | Checks, examples and truthful executed-versus-pending results |
| Supporting resources | Only needed scripts/, references/ and assets/; credentials excluded |
| Installation status | Track repository source versus installed/active environment separately |

No SKILL.md is created or installed by recording this standard. Environment discovery/installation and repository backup remain separate work.

[Canonical storage rule](../standards/standards.yaml) · [Authorization](../discussions/github-skills-storage-23-Oct-2026.md)
