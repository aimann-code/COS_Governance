"""Generate draft Markdown review views. Source files remain authoritative.
This does not generate Java code or publish Google Docs.
"""
import json
from pathlib import Path
import validate

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / ".generated"


def read(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


def cell(value):
    return str(value).replace("|", "\\|").replace("\r", " ").replace("\n", " ")


def table(headers, rows):
    lines = ["| " + " | ".join(map(cell, headers)) + " |",
             "| " + " | ".join("---" for _ in headers) + " |"]
    lines.extend("| " + " | ".join(map(cell, row)) + " |" for row in rows)
    return "\n".join(lines) + "\n"


def main():
    validate.main()
    OUT.mkdir(exist_ok=True)
    manifest = read("cos-governance.yaml")
    title = "# Draft review output\n\nGovernance " + manifest["version"]
    title += "; naming " + manifest["naming_version"] + "; application commit "
    title += manifest["application"]["ref"] + ". No publication or cutover.\n\n"
    naming = read("standards/naming.yaml")
    body = title + "## Frozen naming rules\n\n"
    body += table(["Reference", "Rule", "Status"],
                  [[r["ref"], r["rule"], r["status"]] for r in naming["rules"]])
    body += "\n## Controlled terms\n\n"
    body += table(["Term", "Code", "Example"],
                  [[r["term"], r["shortcode"], r["example"]] for r in naming["terms"]])
    (OUT / "naming-standard.md").write_text(body, encoding="utf-8")
    design = read("templates/design.yaml")
    body = title + "# COS Design Standard structure\n\n" + design["reference_scope"] + "\n\n"
    body += table(["Section", "Required content"],
                  [[str(r["order"]) + ". " + r["name"], r["content"]]
                   for r in design["sections"]])
    body += "\nNon-applicable sections: " + design["non_applicable"] + ".\n"
    (OUT / "design-standard.md").write_text(body, encoding="utf-8")
    features = read("features/features.yaml")
    body = title + "## Feature inventory\n\n" + features["status"] + "\n\n"
    body += table(["Ref", "Feature", "Owner", "Behaviour", "Open", "Status"],
                  [[r[k] for k in ("ref", "name", "owner", "behaviour", "open", "status")]
                   for r in features["features"]])
    (OUT / "features.md").write_text(body, encoding="utf-8")
    migration = read("migration/register-map.yaml")
    body = title + "## Register dispositions\n\n" + migration["status"] + "\n\n"
    body += table(["Register", "Action", "Destination", "Conditions"],
                  [[r[k] for k in ("name", "action", "target", "notes")]
                   for r in migration["registers"]])
    (OUT / "register-map.md").write_text(body, encoding="utf-8")
    (OUT / "flow.md").write_text((ROOT / "docs/flow.md").read_text(encoding="utf-8"),
                               encoding="utf-8")
    print("Generated 5 draft Markdown previews in .generated; no native publication.")


if __name__ == "__main__":
    main()
