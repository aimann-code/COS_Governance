// Read-only navigation derived from maintained definitions; no new ownership is inferred.
export function buildRelationalTree(src) {
  const out = {};
  const esc = x => String(x ?? '').replace(/\r?\n/g, ' ').replace(/\|/g, '\\|');
  const slug = x => String(x).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const table = (headers, rows) => '| ' + headers.map(esc).join(' | ') + ' |\n| ' + headers.map(()=>'---').join(' | ') + ' |\n' + rows.map(row=>'| ' + row.map(esc).join(' | ') + ' |').join('\n') + '\n';
  const nodes = src.architecture.architecture;
  const byRef = new Map(nodes.map(x=>[x.Draft_Ref,x]));
  const features = src.features.features;
  const mappings = src.ownership.mappings;
  const archLink = x => '[' + x.Display_Name + '](architecture/' + x.File_Slug + '.md)';
  const featureLink = x => '[' + x.name + '](features/' + x.file_slug + '.md)';
  const fileLink = p => '[' + p + '](../' + p + ')';
  const codeLink = x => x.repository && x.code_location && x.ref_commit ? '[' + x.code_location + '](https://github.com/' + x.repository + '/blob/' + x.ref_commit + '/' + x.code_location + ')' : 'Source location not mapped';
  const header = title => '# ' + title + '\n\n> Generated relational navigation; edit maintained definitions, not this view. Governance ' + src.manifest.version + '.\n> Existing relationships only. A linked item is not automatically approved, implemented or deployed.\n\n[COS Catalogue](README.md) · [Architecture](architecture.md) · [Approval review](approval-review.md)\n\n';
  const allTables = src.employeeData.tables.concat(src.sharedData.tables);
  const schemas = [...new Set(allTables.map(x=>x.name.split('.')[0]))].sort();
  const missingCodes = nodes.filter(x=>['Suite','Engine','Module','Component'].includes(x.Object_Type)&&!x.Short_Code);

  const hierarchy = [];
  function visit(node, depth) {
    const indent='  '.repeat(depth);
    hierarchy.push(indent+'- '+archLink(node)+' — '+node.Object_Type+'; **Short Code:** `'+(node.Short_Code||'Unassigned')+'`');
    for(const f of features.filter(x=>x.architecture_ref===node.Draft_Ref)) hierarchy.push(indent+'  - Feature: '+featureLink(f)+' — '+f.status);
    for(const m of mappings.filter(x=>x.architecture_owner===node.Display_Name)) hierarchy.push(indent+'  - Linked implementation evidence: '+codeLink(m)+' — '+m.implementation_status);
    for(const child of nodes.filter(x=>x.Parent_Ref===node.Draft_Ref)) visit(child,depth+1);
  }
  const roots=nodes.filter(x=>!x.Parent_Ref&&x.Object_Type!=='Shared capability');
  for(const root of roots)visit(root,0);
  let body=header('COS relational tree')+
    'This tree joins architecture, feature references, implementation mappings, schemas/tables/fields, standards, naming and maintained-file ownership. Repeated links point to the same canonical definition; they are not duplicate editable records. Cross-suite applicability, missing owners and unresolved links remain visible.\n\n'+
    table(['Branch','Coverage','Open detail'],[
      ['Architecture','1 platform, 9 suites, 47 engines; 5 HRMS modules and 28 components','Other detailed module/component designs remain pending'],
      ['Features',features.length+' entries','Only explicit architecture_ref links appear under architecture nodes'],
      ['Implementation',mappings.length+' evidence mappings','Planned mappings are labelled; code inventory is partial'],
      ['Data',schemas.length+' proposed schemas, '+allTables.length+' proposed tables','Physical deployment and exact architecture ownership not inferred'],
      ['Standards',src.standards.definitions.length+' standards','Applicability remains individually scoped/pending'],
      ['Naming',src.naming.terms.length+' controlled terms','Missing shortcodes are not automatically allocated'],
      ['Skills','Repository skill policy/index','No actual SKILL.md installation/implementation recorded']
    ])+
    '\n<details open>\n<summary>Architecture ownership tree</summary>\n\n'+hierarchy.join('\n')+'\n\n</details>\n\n'+
    '<details>\n<summary>Shared capabilities — placement pending</summary>\n\n'+nodes.filter(x=>x.Object_Type==='Shared capability').map(x=>'- '+archLink(x)+' — '+x.Status).join('\n')+'\n\n</details>\n\n'+
    '<details>\n<summary>Features and their recorded relationships</summary>\n\n'+features.map(f=>{
      const owner=byRef.get(f.architecture_ref);
      return '- '+featureLink(f)+' — reference `'+f.ref+'`\n  - Architecture link: '+(owner?archLink(owner):'Not explicitly mapped; recorded owner text: '+f.owner)+'\n  - State: '+f.status+'\n'+mappings.filter(x=>x.feature_refs.includes(f.ref)).map(x=>'  - Implementation evidence: '+codeLink(x)+' — '+x.implementation_status).join('\n');
    }).join('\n')+'\n\n</details>\n\n'+
    '<details>\n<summary>Data tree — schema → table → field</summary>\n\n'+schemas.map(schema=>'- **'+schema+'** — proposed logical schema\n'+allTables.filter(x=>x.name.split('.')[0]===schema).map(t=>{
      const definition=src.employeeData.tables.includes(t)?src.employeeData:src.sharedData;
      const fields=definition.common_columns.concat(t.columns);
      return '  - ['+t.name+'](tables/'+slug(t.name)+'.md) — '+t.status+'\n'+fields.map(f=>'    - `'+f.name+'` — '+f.type+(f.key?'; '+f.key:'')).join('\n');
    }).join('\n')).join('\n')+'\n\nTable nesting is derived from qualified names; it does not invent service ownership or deployed foreign keys. See [table formats](table-formats.md) and [Employee logical design](employee-data-design.md).\n\n</details>\n\n'+
    '<details>\n<summary>Standards and applicability</summary>\n\n'+src.standards.definitions.map(st=>'- ['+st.Standard_Name+'](standards/'+st.File_Slug+'.md) — '+st.Rule_Completion+'\n'+src.standards.applicability.filter(x=>x.Standard_Name===st.Standard_Name).map(x=>'  - Recorded target: '+x.Target_Ref+'; '+x.Approval_Status).join('\n')).join('\n')+'\n\n</details>\n\n'+
    '<details>\n<summary>Naming and controlled terms</summary>\n\n- [Naming Standard](naming.md) — version '+src.naming.version+'\n'+src.naming.terms.map(x=>'  - '+x.term+' → `'+x.shortcode+'`').join('\n')+'\n\n</details>\n\n'+
    '<details>\n<summary>Maintained files by owning source group</summary>\n\n'+src.sourceMap.groups.map(g=>'- **'+g.ref+'**\n'+g.files.map(p=>'  - '+fileLink(p)).join('\n')).join('\n')+'\n\n- [Generated catalogue](README.md) — derivative, not another editable authority\n- [Filename compatibility map](path-map.md)\n\n</details>\n\n'+
    '<details>\n<summary>Skills</summary>\n\n- [Shared skills index](../skills/README.md) — policy only; no actual skill registered by this work\n- [Skill storage standard](repository-storage.md)\n- App-specific skills belong in their owning repository; no unverified skills or links are invented.\n\n</details>\n\n'+
    '## Missing relationships and allocations\n\n'+
    '- '+missingCodes.length+' suite/engine/module/component shortcodes remain unassigned.\n'+
    '- Features without an explicit architecture_ref remain in the feature branch with their recorded owner text.\n'+
    '- Schema/table ownership is not automatically assigned to a component by name similarity.\n'+
    '- Field-to-master/value-set, exact standard applicability, skill usage and full code/API/DTO relationships require further source mapping.\n'+
    '- The schema → table → field branch shows logical definitions, not deployed DDL.\n\n'+
    '[Canonical architecture](../architecture/objects.yaml) · [Feature definitions](../features/features.yaml) · [Implementation mappings](../architecture/ownership.yaml) · [Source-of-truth map](../architecture/source-map.yaml)\n';
  out['catalogue/tree.md']=body;
  return out;
}
