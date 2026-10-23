"""Validate source coverage and local-reference relationships; no permanent IDs assigned."""
def require(condition, message):
    if not condition:
        raise ValueError(message)


def validate_architecture(architecture, inventory):
    rows = architecture['architecture']
    by_ref = {r['Draft_Ref']: r for r in rows}
    by_name = {r['Display_Name']: r for r in rows}
    require(len(by_ref) == len(by_name) == len(rows), 'Duplicate architecture identity/name')
    items = inventory['items']
    source = {r['ref']: r for r in items}
    require(len(source) == len(items), 'Duplicate source reference')
    require(inventory['counts'] == {'Platform': 1, 'Suite': 9, 'Engine': 47}, 'Unexpected source baseline counts')
    for kind, count in inventory['counts'].items():
        require(sum(r['type'] == kind for r in items) == count, 'Source count mismatch: ' + kind)
        require(sum(r['Object_Type'] == kind for r in rows) == count, 'Architecture inventory count mismatch: ' + kind)
    mapped = [r for r in rows if r.get('Source_Item_Ref')]
    links = {r['Source_Item_Ref']: r for r in mapped}
    require(len(links) == len(mapped), 'Duplicate source mapping')
    require(set(links) == set(source), 'Missing or unrecognized source inventory mapping')
    for ref, item in source.items():
        row = links[ref]
        require(row['Source_Name'] == item['name'], 'Source name changed: ' + ref)
        require(row['Object_Type'] == item['type'], 'Source type changed: ' + ref)
        if item['parent_ref']:
            require(item['parent_ref'] in source, 'Missing source parent')
            require(row['Parent_Ref'] == links[item['parent_ref']]['Draft_Ref'], 'Source parent mismatch: ' + ref)
        else:
            require(not row['Parent_Ref'], 'Source root has parent')
        if item['name'] == 'HR Engine':
            require(row['Display_Name'] == 'HRMS' and 'HR Engine' in row.get('Aliases', []), 'Lost HRMS alias mapping')
        elif item['type'] == 'Suite':
            require(row['Display_Name'] == item['name'].removesuffix(' Suite'), 'Unexpected suite rename')
        else:
            require(row['Display_Name'] == item['name'], 'Unapproved source rename')
    allowed_parent = {'Suite': 'Platform', 'Engine': 'Suite', 'Module': 'Engine', 'Component': 'Module'}
    seen_slugs = set()
    for row in rows:
        parent_ref = row['Parent_Ref']
        if row['Object_Type'] in allowed_parent:
            require(parent_ref in by_ref, 'Missing stable parent: ' + row['Display_Name'])
            require(by_ref[parent_ref]['Object_Type'] == allowed_parent[row['Object_Type']], 'Wrong parent type')
        require(row['Parent_Draft_Ref'] == (by_ref[parent_ref]['Display_Name'] if parent_ref else ''), 'Legacy parent projection differs')
        seen = set()
        cursor = row
        while cursor['Parent_Ref']:
            require(cursor['Draft_Ref'] not in seen, 'Architecture cycle')
            seen.add(cursor['Draft_Ref'])
            require(cursor['Parent_Ref'] in by_ref, 'Unresolved stable parent')
            cursor = by_ref[cursor['Parent_Ref']]
        require(row['File_Slug'] not in seen_slugs, 'Duplicate architecture page slug')
        seen_slugs.add(row['File_Slug'])
    projection = architecture['objects']
    require({r['Object Name'] for r in projection} == set(by_name), 'Compatibility object projection mismatch')
    for row in projection:
        node = by_name[row['Object Name']]
        require(row['Architecture Ref'] == node['Draft_Ref'] and row['Parent Ref'] == node['Parent_Ref'], 'Compatibility object references differ')
    require('Purchase' in by_name['Procurement Engine']['Aliases'], 'Missing Purchase alias')
    require('Purchase Engine' not in by_name and 'HR Engine' not in by_name, 'Duplicate alias engine')
    return True
