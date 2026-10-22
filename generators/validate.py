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
    print("PASS: 44 tabs, 1695 historical rows, 52 terms, 12 frozen rules, 23 standards, "
          "18 design sections, 5 source texts and 21 selected discussion excerpts.")
    print("Scope: content consistency only. No authority cutover, code extraction, production "
          "compliance, native-document rendering or source deletion verified.")


if __name__ == "__main__":
    main()
