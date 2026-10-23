# COS governance contributor guidance

Read cos-governance.yaml and relevant maintained definitions before editing. Source roles: Ashish COS for governance, Ritesh code for implementation, Autoinspire for design-document presentation only.

Naming 0.2.3 retains the frozen base with explicit NAM-LOWER-01 amendment: use sys_emp_id and emp_reg. Previous SYS_EMP_ID/EMP_Reg spelling is preserved as historical/compatibility evidence, not current governance spelling. Do not reintroduce mandatory COS prefixes or rename live contracts without reviewed migration. Use the controlled terms, PascalCase classes, camelCase methods, kebab-case custom TS files and snake_case DB identifiers; employee schema is emp after a separately authorized migration.

Preserve decision status separately from implementation, verification and publication. Do not infer approvals. Discussion archives distinguish verbatim excerpts from summaries and disclose missing messages/timestamps.

No Drive source deletion, authority cutover, application-code changes, schema changes, new permanent IDs or global publication is authorized by this initial scaffold. Source snapshots are historical; corrections append provenance rather than rewriting captured values.

Do not put secrets, live employee data or credentials in this repository. Do not change access, enable public exposure or relax existing storage/recovery restrictions. Governance source migration does not grant unrelated filesystem/credential permissions.

Keep definitions once. Code/classes/methods/repos come from the application repository; use generated technical catalogues. Any field/screen business semantics not represented in code need explicit transfer before retiring a source.

Run python generators/validate.py and python generators/render.py where execution is authorized. Report actual outcomes. This draft has no complete native-doc publisher or application code generator.

## Approved maintained-source model — 23-Oct-2026
User approval SOURCE-MAP-01 establishes six logical groups in architecture/source-map.yaml. Use architecture/ownership.yaml for linked ownership and standards/baseline.yaml for the consolidated review profile. Application-specific features/decisions remain with the application owner after reviewed transfer. Preserve business field meanings; do not replace them with schema extraction. Do not treat this approval as authority cutover, PR merge, source deletion or approval of all pending standards.

## GitHub update confirmation — 23-Oct-2026
Before future GitHub writes, show proposed content and summary and ask `Update Git Hub - Yes/No`. Wait for an affirmative user instruction for the specified update. That instruction covers necessary commits, regenerated views and verification within the described scope. It does not authorize unrelated changes, merge or publication. Read-only checks can proceed. Canonical rule: GITHUB-CONFIRM-01 in standards/standards.yaml.

## Shared requirements and logical DB design — 23-Oct-2026
Read features/common.yaml for current cross-suite requirements and architecture/emp-data-design.yaml for proposed logical employee data. Entity administrators select uniqueness with two or more required fields; no source can update without a complete configured key and exactly one match. System owns fields; external sheets are interfaces. Saving/changing preferences always needs confirmation; every Google Sheet export needs append/clear-range confirmation. Apply subscription, entity/group/hierarchy and field permissions to every channel. Actual defaults, inheritance/group-conflict policy and physical DB design remain pending. Do not treat requirement recording as implementation.

## Developer derivatives and template storage — 23-Oct-2026
Use architecture/developer-guide.yaml and data-design sources for generated coder handoff. Naming includes scoped registration and virtual-view profiles via NAM-REG-01. All reporting reads controlled DB virtual marts. Upload template definitions live in templates/upload-profiles.yaml; entity-specific blank downloads are runtime generated after configuration/permission/key resolution. Real source files remain in approved private storage; no live data in GitHub. Working-sheet extraction is the next phase, not completed. Do not confuse logical table formats with deployed DDL or planned tests with executed results.

## GitHub maintained sources and skills — 23-Oct-2026
Follow GITHUB-SOURCE-01 in standards/standards.yaml. Shared skills belong in this repository's skills/skill-name/SKILL.md; app skills in their owning repository. Repository storage is not runtime installation/activation. Keep one maintained source, generated derivatives, private data/secrets outside GitHub and artifact-specific recovery. Preserve old source history; no automatic migration/deletion or new sharing. The authorized application uniqueness work is linked as a draft PR, not production verified. Continue confirming each GitHub update.


## Architecture coverage and workflow — 23-Oct-2026
Current naming is 0.2.3; this adds documentation paths only; historical 0.2.2 evidence is preserved in migration/naming-v0.2.2.json. Read architecture/source-inventory.yaml and architecture/objects.yaml before claiming that COS lacks an engine. The full suite/engine inventory is now imported; module/component detail remains HRMS-focused. Use Parent_Ref for relations; Parent_Draft_Ref retains legacy display-name compatibility.

Read standards/workflow.yaml. Stage is Draft/Review/Published; lifecycle is Requirements, Design & Architecture, Development, Testing, Deployment, Operations. Resolve the explicit branch and commit. Use main as integrated entry point after reviewed integration, but never infer Published status from branch membership. Developers use exact published requirement/design baselines; proposed changes do not silently replace an active coding baseline. Refresh the head and reconcile concurrent work before writing. Continue explicit Update Git Hub - Yes/No confirmation for each scoped update. No automatic chat sync, technical editor locks, Project-board configuration or release taxonomy is installed by these definitions.
