"""Validate the initial governance baseline without external packages.
Checks apply to migrated structured sources, not repository/production compliance.
"""
import json
import re
from pathlib import Path
from check_architecture import validate_architecture

ROOT = Path(__file__).resolve().parents[1]


def read(relative):
    return json.loads((ROOT / relative).read_text(encoding="utf-8"))


def require(condition, message):
    if not condition:
        raise ValueError(message)


def main():
    manifest = read("cos-governance.yaml")
    schema = read("schemas/manifest.schema.json")
    for key in schema["required"]:
        require(key in manifest, "Missing manifest field: " + key)
    require(manifest["project"] == "COS_Governance", "Wrong logical project")
    for path in manifest["entry_points"].values():
        require((ROOT / path).is_file(), "Missing entry point: " + path)
        require(ROOT in (ROOT / path).resolve().parents, "Entry escapes repository")
    naming = read("standards/naming.yaml")
    require(naming["version"] == manifest["naming_version"] == "0.2.3", "Naming version mismatch")
    require(naming["decision_ref"] == "NAM-DOC-01" and naming["previous_decision_ref"] == "NAM-REG-01" and naming["base_decision_ref"] == "D67", "Missing freeze evidence")
    terms = naming["terms"]
    require(len(terms) == 53, "Expected 52 base terms and one authorized source term")
    codes = [row["shortcode"] for row in terms]
    require(len(codes) == len(set(codes)), "Duplicate shortcode")
    require(all(re.fullmatch("[a-z][a-z0-9_]*", code) for code in codes), "Invalid shortcode")
    term_map = {row["term"]: row["shortcode"] for row in terms}
    for name, code in {"Employee": "emp", "Registration": "reg", "Repository": "repo",
                       "Vendor": "vnd", "Aggregator": "agg"}.items():
        require(term_map.get(name) == code, "Frozen term changed: " + name)
    rules = naming["rules"]
    require(len(rules) == 12, "Expected 12 frozen rules")
    require(len({r["ref"] for r in rules}) == 12, "Duplicate naming rule")
    require(set(naming["preserve"]) == {"sys_emp_id", "emp_reg"}, "Lost current business identifiers")
    historical_naming = read("migration/naming-v0.2.0.json")
    require(historical_naming["version"] == "0.2.0", "Lost previous naming baseline")
    require(set(historical_naming["preserve"]) == {"SYS_EMP_ID", "EMP_Reg"},
            "Historical naming tokens changed")
    require(naming["terms"][:52] == historical_naming["terms"], "Unapproved term catalogue change")
    aliases = {r["previous"]: r["current"] for r in naming["aliases"]}
    require(aliases == {"SYS_EMP_ID": "sys_emp_id", "EMP_Reg": "emp_reg"},
            "Missing explicit lowercase migration mapping")
    snapshot = read("migration/source-snapshot.json")
    sheets = snapshot["sheets"]
    require(len(sheets) == 44, "Expected 44 historical tabs")
    require(sum(len(s["values"]) for s in sheets) == 1695, "Historical row count mismatch")
    mapping = read("migration/register-map.yaml")["registers"]
    names = [s["name"] for s in sheets]
    require(len(set(names)) == 44, "Duplicate source tab")
    require(len(mapping) == 44 and {r["name"] for r in mapping} == set(names),
            "Migration disposition must cover every tab once")
    for row in mapping:
        require(row["action"] in {"maintain", "merge", "generate", "split", "link",
                                  "preserve", "retire-manual-after-verification"},
                "Unknown migration action")
    frozen_sheet = next(s for s in sheets if s["name"] == "Code_Shortcode")
    require(len(frozen_sheet["values"]) == 53, "Shortcode source row mismatch")
    for source, term in zip(frozen_sheet["values"][1:], historical_naming["terms"]):
        require(source[0] == term["term"] and source[1] == term["shortcode"],
                "Shortcode snapshot/source mismatch")
    docs = read("migration/source-docs.json")["documents"]
    require(len(docs) == 5 and all(d["text"].strip() and d["file_id"] for d in docs),
            "Missing preserved source document")
    standards = read("standards/standards.yaml")
    require(len(standards["definitions"]) == 23, "Standard catalogue count mismatch")
    require(not any(str(r.get("Review Ref", "")).startswith("NAM-FRZ")
                    for r in standards["rules"]), "Duplicated live frozen naming rules")
    design = read("templates/design.yaml")
    require(len(design["sections"]) == 18, "Missing design sections")
    features = read("features/features.yaml")["features"]
    require(len({r["ref"] for r in features}) == len(features), "Duplicate feature reference")
    architecture = read("architecture/objects.yaml")
    validate_architecture(architecture, read("architecture/source-inventory.yaml"))
    require(read("migration/naming-v0.2.2.json")["version"] == "0.2.2", "Missing previous naming snapshot")
    require(naming['terms'] == read('migration/naming-v0.2.2.json')['terms'], 'Documentation supplement changed controlled terms')
    for rows, key in [(architecture['architecture'], 'File_Slug'), (standards['definitions'], 'File_Slug'), (features, 'file_slug')]:
        slugs = [r[key] for r in rows]
        require(len(slugs) == len(set(slugs)) and all(re.fullmatch('[a-z0-9]+(?:-[a-z0-9]+)*', value) for value in slugs), 'Invalid/duplicate readable file slugs')
    workflow = read('standards/workflow.yaml')
    require(workflow['stages'] == ['Draft', 'Review', 'Published'], 'Unapproved stage change')
    require(workflow['phases'] == ['Requirements', 'Design & Architecture', 'Development', 'Testing', 'Deployment', 'Operations'], 'Unapproved lifecycle change')
    require(workflow['branch_policy']['no_automatic_sync'] is True, 'Do not claim automatic chat synchronization')
    checkpoint = workflow['pre_update_checkpoint']
    require(checkpoint['questions'] == ['Any pending approvals to resolve before this update?', 'Update Git Hub - Yes/No?'], 'Missing pending-approval checkpoint')
    require(set(checkpoint['separate_statuses']) == {'approval', 'publication', 'implementation', 'verification'}, 'Approval state must remain separate')
    approval_review = read('decisions/approval-review.yaml')
    current_decisions = {r['ref']: r for r in read('decisions/decisions.yaml')['discussion_directions']}
    require(len(approval_review['reconciled_refs']) == len(set(approval_review['reconciled_refs'])), 'Duplicate approval review reference')
    for ref in approval_review['reconciled_refs']:
        require(ref in current_decisions, 'Approval review points to unknown decision')
        row = current_decisions[ref]
        require(row['approval'] == 'Approved' and row['approval_scope'] and row['approval_evidence'], 'Approval requires scope and evidence')
        require(all(row.get(key) for key in ['publication', 'implementation', 'verification']), 'Missing separate decision status')
    require(len({r['ref'] for r in approval_review['pending']}) == len(approval_review['pending']), 'Duplicate pending approval')
    for ref in ['ARCH-INVENTORY-01', 'NAM-DOC-01', 'WORKFLOW-01', 'CHAT-SOURCE-01']:
        require(current_decisions[ref]['publication_evidence']['baseline_commit'] == 'bd87cd2f41cf3ec5ad1b78aca0081d25937e46df', 'Lost PR4 merge evidence')
        require(current_decisions[ref]['status_history'], 'Approval correction must preserve history')
    print('PASS: source platform, 9 suites, 47 engines, aliases, stable parents, readable slugs and workflow definition.')
    nodes = architecture["architecture"]
    by_name = {r["Display_Name"]: r for r in nodes}
    require(len(by_name) == len(nodes), "Duplicate architecture display name")
    require(len({r["Draft_Ref"] for r in nodes}) == len(nodes), "Duplicate architecture draft ref")
    allowed_parent = {"Suite": "Platform", "Engine": "Suite", "Module": "Engine", "Component": "Module"}
    for row in nodes:
        parent = row["Parent_Draft_Ref"]
        if row["Object_Type"] in allowed_parent:
            require(parent in by_name, "Missing parent for " + row["Display_Name"])
            require(by_name[parent]["Object_Type"] == allowed_parent[row["Object_Type"]],
                    "Wrong parent type for " + row["Display_Name"])
        seen = set()
        current = row
        while current["Parent_Draft_Ref"]:
            require(current["Display_Name"] not in seen, "Architecture cycle")
            seen.add(current["Display_Name"])
            require(current["Parent_Draft_Ref"] in by_name, "Unresolved parent reference")
            current = by_name[current["Parent_Draft_Ref"]]
    modules = [r for r in nodes if r["Object_Type"] == "Module" and r["Parent_Draft_Ref"] == "HRMS"]
    module_names = {r["Display_Name"] for r in modules}
    components = [r for r in nodes if r["Object_Type"] == "Component" and r["Parent_Draft_Ref"] in module_names]
    require(len(modules) == architecture["hrms_scope"]["counts"]["modules"] == 5, "HRMS module scope mismatch")
    require(len(components) == architecture["hrms_scope"]["counts"]["components"] == 28, "HRMS component scope mismatch")
    require(by_name["HRMS"]["Parent_Draft_Ref"] == "Enterprise Management", "Wrong HRMS suite")
    require(by_name["Employee Registration"]["Short_Code"] == "emp_reg", "Lost registration code")
    refs = {r["Draft_Ref"] for r in nodes}
    for feature in features:
        if feature.get("architecture_ref"):
            require(feature["architecture_ref"] in refs, "Unknown feature architecture reference")
    expected = manifest["catalogue"]["expected_counts"]
    require(len(nodes) == expected["architecture"] and len(features) == expected["features"],
            "Catalogue expected scope mismatch")
    print("PASS: five HRMS modules, 28 components, typed parent references, no cycles and feature mappings.")
    common = read("features/common.yaml")
    groups = common["groups"]
    common_refs = [r["ref"] for g in groups for r in g["requirements"]]
    require(len(common_refs) == len(set(common_refs)) == manifest["catalogue"]["expected_counts"]["common_requirements"],
            "Missing or duplicate common requirement")
    require(len({g["ref"] for g in groups}) == len(groups), "Duplicate requirement group")
    group_refs = {g["ref"] for g in groups}
    for feature in features:
        if feature.get("requirement_group_ref"):
            require(feature["requirement_group_ref"] in group_refs, "Unknown common requirement group")
    logical = read("architecture/emp-data-design.yaml")
    require(len({r["name"] for r in logical["tables"]}) == len(logical["tables"]),
            "Duplicate logical table")
    require(logical["target_schema"] == "emp", "Wrong employee schema target")
    require(logical["common_requirement_source"] == "features/common.yaml", "Unlinked common controls")
    require(term_map.get("Source") == "source", "Missing authorized source term")
    previous_naming = read("migration/naming-v0.2.1.json")
    require(previous_naming["version"] == "0.2.1" and len(previous_naming["terms"]) == 52,
            "Previous lowercase baseline not preserved")
    profiles = naming["profiles"]["registration"]["domains"]
    require({r["code"] for r in profiles} == {"emp_reg", "vnd_reg", "agg_reg", "source_reg"},
            "Missing registration naming profile")
    guide = read("architecture/developer-guide.yaml")
    require({r["order"] for r in guide["sections"]} == {r["order"] for r in design["sections"]},
            "Developer guide must cover every template section")
    shared = read("architecture/shared-data-design.yaml")
    all_tables = logical["tables"] + shared["tables"]
    require(len({r["name"] for r in all_tables}) == len(all_tables), "Duplicate dictionary table")
    for definition in (logical, shared):
        base_names = [r["name"] for r in definition["common_columns"]]
        for item in definition["tables"]:
            names = base_names + [r["name"] for r in item["columns"]]
            require(len(names) == len(set(names)), "Duplicate column in " + item["name"])
            require(item["status"] and item["columns"], "Incomplete logical table")
            for column in item["columns"]:
                require(set(("name", "type", "required", "key", "rule", "upload")) <= set(column),
                        "Incomplete column format")
    uploads = read("templates/upload-profiles.yaml")
    require({p["component_code"] for p in uploads["profiles"]} == {p["code"] for p in profiles},
            "Template/registration profile mismatch")
    marts = read("architecture/virtual-marts.yaml")
    require(len({r["view"] for r in marts["definitions"]}) == len(marts["definitions"]),
            "Duplicate mart view")
    require(len({r[0] for r in guide["test_cases"]}) == len(guide["test_cases"]),
            "Duplicate planned test reference")
    system = read("architecture/system-design.yaml")
    require(system["stage"] == "Draft" and system["approval_status"] == "Pending",
            "System design must stay Draft/Pending until explicitly approved")
    require(len({r["layer"] for r in system["technology_stack"]}) == len(system["technology_stack"]),
            "Duplicate technology stack layer")
    require(len({d["id"] for d in system["diagrams"]}) == len(system["diagrams"]), "Duplicate diagram id")
    require(len({p["ref"] for p in system["pending_decisions"]}) == len(system["pending_decisions"]),
            "Duplicate system design pending decision")
    print("PASS: naming additions, 18-section developer derivative, table formats, template profiles and mart definitions.")

    transcript = read("discussions/user-excerpts.json")
    require(transcript["complete_provider_export"] is False, "Do not claim complete transcript")
    require(len(transcript["excerpts"]) == 21, "Discussion excerpt count mismatch")
    source_map = read("architecture/source-map.yaml")
    require(manifest["source_model"]["decision"] == "SOURCE-MAP-01",
            "Missing source-model approval")
    groups = source_map["groups"]
    expected_groups = {"standards", "architecture", "features", "decisions", "templates", "ownership"}
    require(len(groups) == 6 and {g["ref"] for g in groups} == expected_groups,
            "Expected six distinct maintained groups")
    require(set(source_map["common_fields"]) == {"version", "source_ref", "change_history"},
            "Missing provenance fields")
    for group in groups:
        require(group["fields"] and group["outputs"] and group["owner"],
                "Missing maintained group contract")
        for path in group["files"]:
            require((ROOT / path).is_file(), "Missing maintained source " + path)
    baseline = read("standards/baseline.yaml")
    require(baseline['frozen_naming']['decision'] == naming['decision_ref'], 'Naming baseline points to stale amendment')
    require(naming['publication_evidence']['baseline_commit'] == 'bd87cd2f41cf3ec5ad1b78aca0081d25937e46df', 'Missing naming publication evidence')
    require('not published' not in naming['status'] and all('not published' not in r['status'] for r in naming['rules']), 'Stale current naming publication label')
    require(len(baseline["catalogue"]) == 23, "Lost standard during consolidation")
    require({r["standard_ref"] for r in baseline["catalogue"]} ==
            {r["Draft_Ref"] for r in standards["definitions"]},
            "Baseline catalogue differs from source")
    rule_refs = {r["Review Ref"] for r in standards["rules"]}
    for standard in baseline["catalogue"]:
        require((ROOT / standard["rule_source"]).is_file(), "Missing canonical rule source")
        for rule_ref in standard["rule_refs"]:
            require(rule_ref in {"D67", "NAM-LOWER-01", "NAM-REG-01", naming["decision_ref"]} or rule_ref in rule_refs,
                    "Unknown consolidated rule reference: " + rule_ref)
    decisions = read("decisions/decisions.yaml")
    reconciliation = decisions["reconciliation"]
    require(len({r["ref"] for r in reconciliation}) == len(reconciliation),
            "Duplicate reconciliation reference")
    require(set(baseline["reconciliation_refs"]) == {r["ref"] for r in reconciliation},
            "Unlinked reconciliation item")
    require(any(r["ref"] == "SOURCE-MAP-01" for r in decisions["discussion_directions"]),
            "Missing approved source-model decision")
    ownership = read("architecture/ownership.yaml")["mappings"]
    require(len({r["ref"] for r in ownership}) == len(ownership), "Duplicate ownership mapping")
    feature_refs = {r["ref"] for r in features}
    for row in ownership:
        require(set(row["feature_refs"]) <= feature_refs, "Unknown ownership feature link")
        if row["code_location"] is not None:
            require(row["repository"] and re.fullmatch("[0-9a-f]{40}", row["ref_commit"]),
                    "Implemented mapping needs repository and exact commit")
    print("PASS: six approved maintained groups, 23 standards, linked ownership and "
          "10 reconciliation items. Individual pending rule approval is unchanged.")
    print("PASS: 44 tabs, 1695 historical rows, 53 current terms (52 base), 12 base rules, 23 standards, "
          "18 design sections, 5 source texts and 21 selected discussion excerpts.")
    print("Scope: content consistency only. No authority cutover, code extraction, production "
          "compliance, native-document rendering or source deletion verified.")


if __name__ == "__main__":
    main()

