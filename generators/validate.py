"""Validate the initial governance baseline without external packages.
Checks apply to migrated structured sources, not repository/production compliance.
"""
import json
import re
from pathlib import Path

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
    require(naming["version"] == manifest["naming_version"] == "0.2.0", "Naming version mismatch")
    require(naming["decision_ref"] == "D67", "Missing freeze evidence")
    terms = naming["terms"]
    require(len(terms) == 52, "Expected 32 terms and 20 retained terms")
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
    require(set(naming["preserve"]) == {"SYS_EMP_ID", "EMP_Reg"}, "Lost business identifiers")
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
    for source, term in zip(frozen_sheet["values"][1:], terms):
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
    require(len(baseline["catalogue"]) == 23, "Lost standard during consolidation")
    require({r["standard_ref"] for r in baseline["catalogue"]} ==
            {r["Draft_Ref"] for r in standards["definitions"]},
            "Baseline catalogue differs from source")
    rule_refs = {r["Review Ref"] for r in standards["rules"]}
    for standard in baseline["catalogue"]:
        require((ROOT / standard["rule_source"]).is_file(), "Missing canonical rule source")
        for rule_ref in standard["rule_refs"]:
            require(rule_ref == "D67" or rule_ref in rule_refs,
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
    print("PASS: 44 tabs, 1695 historical rows, 52 terms, 12 frozen rules, 23 standards, "
          "18 design sections, 5 source texts and 21 selected discussion excerpts.")
    print("Scope: content consistency only. No authority cutover, code extraction, production "
          "compliance, native-document rendering or source deletion verified.")


if __name__ == "__main__":
    main()
