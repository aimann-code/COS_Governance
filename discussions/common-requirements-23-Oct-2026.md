# Shared requirements and naming amendment evidence

Recorded 23-Oct-2026. This is a selected evidence summary, not a complete transcript. Canonical requirements are in [features/common.yaml](../features/common.yaml); proposed logical DB design is in [architecture/emp-data-design.yaml](../architecture/emp-data-design.yaml).

## Selected exact user excerpts

> SYS_EMP_ID & EMP_Reg make it lower case

> ask confirmation for preferences always

> system owns all filed not google sheet

> create access group and assign group to user.

> Access group filed selection will be selection of suite, engine, module, component, field

> for unique set some rules.. two filed mandatory

> dont allowed to update through any source without unique key

> error messages should be configurable

> in error message mention id or row no or source can be fin dout

> update git hub

These are selected excerpts with spelling retained where quoted; original message IDs/timestamps are unavailable. Other requirements in the canonical record summarize the visible user/assistant requirement tables and refinements. Examples are illustrative and contain no imported live employee data.

## Current decisions and supersession

Use sys_emp_id and emp_reg as current tokens. Snapshot [Naming 0.2.0](../migration/naming-v0.2.0.json) before the amendment; current source is Naming 0.2.1. Preserve original source snapshots and historical decision prose. Existing application code/API/database/encryption contexts are not renamed by this update.

Configurable entity-admin uniqueness supersedes the fixed identity combination. Latest two-field minimum supersedes earlier single-field options. Actual default field combinations, Number meaning and permission inheritance/conflict policy remain pending. Missing input is distinct from no matching record; errors must not pretend a populated key field is missing. Record lookup never uses close-match suggestions.

The authorization covers pending requirements shown before update git hub and necessary catalogue/validation changes. New database/connection/coding decisions discussed afterwards are not automatically included. No merge, publication, authority cutover or production implementation.
