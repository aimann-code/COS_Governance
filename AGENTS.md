# COS governance contributor guidance

Read cos-governance.yaml and relevant maintained definitions before editing. Source roles: Ashish COS for governance, Ritesh code for implementation, Autoinspire for design-document presentation only.

Naming 0.2.0 is frozen. Do not reintroduce mandatory COS prefixes or rename SYS_EMP_ID/EMP_Reg. Use the controlled terms, PascalCase classes, camelCase methods, kebab-case custom TS files and snake_case DB identifiers; employee schema is emp after a separately authorized migration.

Preserve decision status separately from implementation, verification and publication. Do not infer approvals. Discussion archives distinguish verbatim excerpts from summaries and disclose missing messages/timestamps.

No Drive source deletion, authority cutover, application-code changes, schema changes, new permanent IDs or global publication is authorized by this initial scaffold. Source snapshots are historical; corrections append provenance rather than rewriting captured values.

Do not put secrets, live employee data or credentials in this repository. Do not change access, enable public exposure or relax existing storage/recovery restrictions. Governance source migration does not grant unrelated filesystem/credential permissions.

Keep definitions once. Code/classes/methods/repos come from the application repository; use generated technical catalogues. Any field/screen business semantics not represented in code need explicit transfer before retiring a source.

Run python generators/validate.py and python generators/render.py where execution is authorized. Report actual outcomes. This draft has no complete native-doc publisher or application code generator.

## Approved maintained-source model — 23-Oct-2026
User approval SOURCE-MAP-01 establishes six logical groups in architecture/source-map.yaml. Use architecture/ownership.yaml for linked ownership and standards/baseline.yaml for the consolidated review profile. Application-specific features/decisions remain with the application owner after reviewed transfer. Preserve business field meanings; do not replace them with schema extraction. Do not treat this approval as authority cutover, PR merge, source deletion or approval of all pending standards.

## GitHub update confirmation — 23-Oct-2026
Before future GitHub writes, show proposed content and summary and ask `Update Git Hub - Yes/No`. Wait for an affirmative user instruction for the specified update. That instruction covers necessary commits, regenerated views and verification within the described scope. It does not authorize unrelated changes, merge or publication. Read-only checks can proceed. Canonical rule: GITHUB-CONFIRM-01 in standards/standards.yaml.
