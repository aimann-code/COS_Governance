// Pure renderer. Definitions remain authoritative; pages are generated views.
import { buildRelationalTree } from './tree.mjs';
export function buildCatalogue(src) {
  const out = {};
  const m=src.manifest,a=src.architecture.architecture,f=src.features.features,n=src.naming,s=src.standards,b=src.baseline,d=src.decisions,t=src.design,o=src.ownership.mappings;
  const safe=x=>String(x??"").replace(/\r?\n/g," ").replace(/\|/g,"\\|");
  const slug=x=>String(x).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const table=(head,rows)=>"| "+head.map(safe).join(" | ")+" |\n| "+head.map(()=>"---").join(" | ")+" |\n"+rows.map(r=>"| "+r.map(safe).join(" | ")+" |").join("\n")+"\n";
  const path={arch:r=>"architecture/"+r.File_Slug+".md",feat:r=>"features/"+r.file_slug+".md",std:r=>"standards/"+r.File_Slug+".md"};
  const compatibility=[];
  for(const [kind,rows,oldKey] of [["arch",a,"Draft_Ref"],["feat",f,"ref"],["std",s.definitions,"Draft_Ref"]]) {
    const dir={arch:"architecture",feat:"features",std:"standards"}[kind];
    for(const r of rows) {
      const current=path[kind](r),legacy=dir+"/"+slug(r[oldKey])+".md";
      if(current!==legacy&&(kind!=="arch"||r.Draft_Ref.startsWith("ARCH-DRAFT-")))compatibility.push({legacy,current,title:r.Display_Name||r.name||r.Standard_Name});
    }
  }
  const header=(title,depth=0)=>"# "+title+"\n\n> Generated from maintained definitions. Do not edit this page directly.\n> Governance "+m.version+"; naming "+n.version+"; application evidence "+m.application.ref+".\n> Draft catalogue. Approval, implementation, verification and publication are separate.\n\n"+(depth?"[COS Catalogue](../README.md) · [Relational tree](../tree.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)\n\n":"[Home](README.md) · [Relational tree](tree.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)\n\n");
  const named=new Map(a.map(r=>[r.Display_Name,r]));
  const referenced=new Map(a.map(r=>[r.Draft_Ref,r]));
  const ownerText=r=>r.owner||"Unresolved";
  const archLink=(r,prefix="")=>"["+r.Display_Name+"]("+prefix+path.arch(r)+")";
  const featLink=(r,prefix="")=>"["+r.name+"]("+prefix+path.feat(r)+")";
  const stdLink=(r,prefix="")=>"["+r.Standard_Name+"]("+prefix+path.std(r)+")";
  const escJSON=x=>String(x??"");
  const codeLink=(r,label)=>r.repository&&r.code_location&&r.ref_commit?"["+(label||r.code_location)+"](https://github.com/"+r.repository+"/blob/"+r.ref_commit+"/"+r.code_location+")":"Not implemented / location unresolved";
  const ruleMap=new Map(s.rules.map(r=>[r["Review Ref"],r]));
  const groupMap=new Map();
  for(const r of s.rules) {
    if(s.definitions.some(st=>st.Standard_Name===r["Standard Name"])) {
      const key=r["Standard Name"];if(!groupMap.has(key))groupMap.set(key,new Map());
      groupMap.get(key).set(r["Review Ref"],{r,mapStatus:"Direct category"});
    }
  }
  for(const map of s.rule_mappings) {
    const r=ruleMap.get(map.Rule_Ref);if(!r)continue;
    if(!groupMap.has(map.Standard_Name))groupMap.set(map.Standard_Name,new Map());
    groupMap.get(map.Standard_Name).set(map.Rule_Ref,{r,mapStatus:map.Mapping_Status+"; "+map.Rule_Approval});
  }
  const directFeatures=r=>f.filter(x=>x.name===r.Display_Name);
  const ownedFeatures=r=>f.filter(x=>x.name===r.Display_Name||x.owner.split(" / ").includes(r.Display_Name));
  function ancestry(r) {
    const parts=[r],seen=new Set([r.Display_Name]);let cur=r;
    while(cur.Parent_Ref) {
      const p=referenced.get(cur.Parent_Ref);
      if(!p||seen.has(p.Display_Name))return {parts:parts.reverse(),unresolved:true};
      parts.push(p);seen.add(p.Display_Name);cur=p;
    }
    return {parts:parts.reverse(),unresolved:r.Object_Type==="Shared capability"};
  }
  out["catalogue/README.md"]=header("COS Catalogue")+
    "Start here to browse definitions without reading YAML or JSON. Use the links below; on GitHub you can use your browser's Find function to locate a name.\n\n"+
    table(["View","What you can inspect"],[
      ["[Standards](standards.md)",s.definitions.length+" standards, versions, approval states and recorded rules"],
      ["[Naming](naming.md)",n.terms.length+" controlled terms and "+n.rules.length+" frozen rules"],
      ["[Architecture](architecture.md)",a.length+" registered draft entries and parent/child navigation"],
      ["[Features](features.md)",f.length+" requirements/features and unresolved acceptance criteria"],
      ["[Design structure](design.md)",t.sections.length+" required design sections; scope and completion limits"],
      ["[Implementation links](implementation.md)","Pinned ownership mappings to application code; partial inventory"],
      ["[Decisions](decisions.md)","Recorded directions, source decisions and reconciliation items"],
      ["[Common requirements](common-requirements.md)","Cross-suite configurable features, controls and open decisions"],
      ["[Developer guide](developer-guide.md)","18-section design derivative and implementation sequence"],
      ["[Developer matrix](developer-matrix.md)","Proposed files, functions, DTOs, APIs and connections"],
      ["[Table formats](table-formats.md)","Column-level logical data dictionary"],
      ["[Virtual marts](virtual-marts.md)","Database reporting grain and authority"],
      ["[Upload templates](upload-templates.md)","Where definitions, files, staging and DB records belong"],
      ["[Test plan](test-plan.md)","Planned full-flow tests and evidence requirements"],
      ["[Employee data design](employee-data-design.md)","Proposed logical tables and relationships; not deployed"],
      ["[System design](system-design.md)","Proposed metadata-driven platform: core, plug-in engines, metadata model, runtime, stack, deployment; approval pending"]
    ])+
    "\n## Browse the COS hierarchy\n\n"+
    a.filter(x=>["Suite","Engine","Module","Component"].includes(x.Object_Type)).map(r=>"- "+archLink(r)+" — "+r.Object_Type+"; "+r.Status).join("\n")+
    "\n\n## Coverage and current limits\n\nAll 9 suites and 47 engines from the original COS v1.1.0 inventory are accounted for. Module/component detail remains HRMS-focused. Unallocated permanent IDs, shared placement and missing design details remain unresolved. A linked source file does not prove passing tests or production readiness. Original discussion history and source evidence remain preserved.\n\n[Source-of-truth map](../architecture/source-map.yaml) · [Discussion history](../discussions/README.md) · [Design comparison](../comparisons/design-comparison.md) · [Workflow and handover](workflow.md) · [Path compatibility map](path-map.md)\n";
  out["catalogue/standards.md"]=header("Standards")+
    "Naming "+n.version+" retains its frozen base and explicit amendment. Other rules keep their individual recorded status. Catalogue membership and proposed mappings do not approve a rule or prove applicability to every component.\n\n"+
    table(["Standard","Source version","Approval / completion"],s.definitions.map(r=>[stdLink(r),r.Version,r.Rule_Completion]))+
    "\nAliases: Coding Standard → Development Standard; API Standard → API / Integration Standard.\n";
  for(const st of s.definitions) {
    let body=header(st.Standard_Name,1)+table(["Property","Value"],[
      ["Reference",st.Draft_Ref+" (temporary source reference)"],["Version",st.Version],["Purpose",st.Purpose],["Completion",st.Rule_Completion],["Canonical source",st.Standard_Name==="Naming Standard"?"[Frozen naming](../../standards/naming.yaml)":"[Standards definitions](../../standards/standards.yaml)"]
    ])+"\n## Rules\n\n";
    if(st.Standard_Name==="Naming Standard")body+=table(["Reference","Rule","Status"],n.rules.map(r=>[r.ref,r.rule,r.status]))+"\n[All controlled shortcodes](../naming.md)\n";
    else {
      const rows=[...(groupMap.get(st.Standard_Name)?.values()||[])];
      body+=rows.length?table(["Reference","Rule","Version","Approval","Publication","Implementation","Verification","Mapping state"],rows.map(({r,mapStatus})=>[r["Review Ref"],r.Rule+(r.Current_Disposition?" Current disposition: "+r.Current_Disposition:""),r.Version,r["Approval Status"],r.Publication_Status||"See source; not independently reconciled",r.Implementation_Status||"Not independently reconciled",r.Verification_Status||"Not independently reconciled",mapStatus])):"No detailed rules mapped yet. This standard requires completion and review.\n";
    }
    body+="\n## Applicability and exceptions\n\n";
    const app=s.applicability.filter(r=>Object.values(r).some(v=>v===st.Draft_Ref||v===st.Standard_Name));
    body+=app.length?table(Object.keys(app[0]),app.map(r=>Object.values(r))):"Exact object-level applicability is not fully reconciled. Review the source applicability records before enforcement.\n";
    body+="\nApproved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)\n";
    out["catalogue/"+path.std(st)]=body;
  }
  out["catalogue/naming.md"]=header("Naming and shortcodes")+
    "Frozen Naming Standard **"+n.version+"**, source decision **"+n.decision_ref+"**. COS prefixes are selective. Current preserved tokens: "+n.preserve.join(", ")+". Existing application names have not been migrated.\n\n"+
    table(["Reference","Rule","Status"],n.rules.map(r=>[r.ref,r.rule,r.status]))+
    "\n## Controlled terms\n\n"+table(["Term","Short Code","Meaning","Example"],n.terms.map(r=>[r.term,r.shortcode,r.meaning,r.example]))+
    "\n[Maintained naming source](../standards/naming.yaml)\n\n## Current scoped supplements\n\nThe approved API-PATH-01 decision specifies the default API base path. It supplements the frozen resource-oriented URL rule; it does not rename existing routes. See [API / Integration Standard]("+path.std(s.definitions.find(r=>r.Standard_Name==="API / Integration Standard"))+") and [URL Standard]("+path.std(s.definitions.find(r=>r.Standard_Name==="URL Standard"))+"). Backup timestamps and readable date/time are separately scoped in the standards catalogue.\n";
  out["catalogue/architecture.md"]=header("Architecture")+
    "Complete source coverage: **1 platform, 9 suites and 47 engines** from COS v1.1.0. Detailed modules/components remain HRMS proposals. Parent_Ref resolves stable local references; these are not permanent COS IDs. Shared capability placement remains unresolved. Missing detail does not mean an engine is absent.\n\n"+
    table(["Object","Type","Short Code","Parent","Inventory","Design","Implementation"],a.map(r=>[archLink(r),r.Object_Type,r.Short_Code||"Unassigned",referenced.get(r.Parent_Ref)?.Display_Name||(r.Object_Type==="Platform"?"Root":"Placement unresolved"),r.Inventory_Status,r.Design_Status,r.Implementation_Status]))+
    "\n[Architecture definitions](../architecture/objects.yaml) · [Preserved source inventory](../architecture/source-inventory.yaml) · [Workflow](workflow.md)\n";
  for(const ar of a) {
    const chain=ancestry(ar),children=a.filter(x=>x.Parent_Ref===ar.Draft_Ref),direct=directFeatures(ar),features=ownedFeatures(ar);
    const featureSet=new Set(features.map(x=>x.ref));
    const maps=o.filter(x=>x.architecture_owner===ar.Display_Name||x.feature_refs.some(fr=>featureSet.has(fr)));
    let body=header(ar.Display_Name,1)+table(["Property","Value"],[
      ["Type",ar.Object_Type],["Short Code",ar.Short_Code||"Unassigned"],["Source reference",ar.Draft_Ref+" (temporary)"],["Hierarchy",chain.parts.map(x=>x.Display_Name).join(" → ")+(chain.unresolved?" — placement unresolved":"")],["Responsibility",ar.Responsibility],["Design/registration state",ar.Status],["Source design",ar.Source?"[Historical design reference]("+ar.Source+")":"Not available"]
    ]);
    body+="\n"+table(["Coverage property","Value"],[["Source name",ar.Source_Name||"Proposed detailed object"],["Aliases",(ar.Aliases||[]).join(", ")||"None recorded"],["Stable parent reference",ar.Parent_Ref||"Root / unresolved"],["Inventory",ar.Inventory_Status],["Design",ar.Design_Status],["Implementation",ar.Implementation_Status]]);
    body+="\n## Children\n\n"+(children.length?table(["Object","Type","Status"],children.map(x=>[archLink(x,"../"),x.Object_Type,x.Status])):"No child definition recorded in this imported scope.\n");
    if(ar.Display_Name==="HRMS" && src.architecture.hrms_scope) {
      const scope=src.architecture.hrms_scope;
      const modules=a.filter(x=>x.Object_Type==="Module"&&x.Parent_Draft_Ref==="HRMS");
      body+="\n## Proposed module and component map\n\n"+scope.status+"\n\n"+
        table(["Module","Components"],modules.map(mod=>[archLink(mod,"../"),a.filter(c=>c.Parent_Draft_Ref===mod.Display_Name&&c.Object_Type==="Component").map(c=>archLink(c,"../")).join("; ")]));
      body+="\n## Shared capabilities\n\n"+table(["Capability","Treatment"],scope.shared_capabilities.map(x=>[x.capability,x.treatment]));
      body+="\n## Module data flows\n\n"+table(["From","To","Information"],scope.flows.map(x=>[x.from,x.to,x.data]));
      body+="\n## Pending decisions and verification\n\n"+scope.pending.map(x=>"- "+x).join("\n")+"\n\n"+
        "[Source and approval evidence](../../"+scope.source_evidence+"). "+scope.coverage+"\n";
    }
    body+="\n## Features\n\n"+(features.length?table(["Feature","Status","Open"],features.map(x=>[featLink(x,"../"),x.status,x.open])):"No direct feature assignment recorded. [Browse feature inventory](../features.md).\n");
    body+="\n## Implementation and ownership\n\n"+(maps.length?table(["Artifact","Owning architecture object","Implementation evidence","Dataset authority"],maps.map(x=>[codeLink(x,x.ref),x.architecture_owner||"Unresolved",x.implementation_status,x.dataset_authority])):"No implementation mapping recorded for this object. This does not mean all child functionality is absent.\n");
    body+="\n## Applicable standards\n\n[Standards catalogue](../standards.md) · [Frozen naming](../naming.md). Exact object-level applicability and approved exceptions require reconciliation; this page does not silently apply every rule.\n";
    body+="\n## Design availability\n\n[Required design structure](../design.md). The linked historical design is not a regenerated, fully reconciled current component specification. Current source flags and open decisions remain visible. Registration ID/uniqueness conflicts remain pending where recorded.\n";
    body+="\n## Verification\n\nCatalogue generation verifies references and links only. Application test execution and production readiness are not inferred from source mappings.\n";
    out["catalogue/"+path.arch(ar)]=body;
  }
  out["catalogue/features.md"]=header("Features")+
    src.features.status+". These references are discussion inventory keys; they do not allocate new architecture components.\n\n"+
    table(["Feature","Ref","Owner","Requirement state"],f.map(r=>[featLink(r),r.ref,ownerText(r),r.status]));
  for(const fe of f) {
    const matches=a.filter(r=>r.Display_Name===fe.name||fe.owner.split(" / ").includes(r.Display_Name));
    const maps=o.filter(r=>r.feature_refs.includes(fe.ref));
    let body=header(fe.name,1)+table(["Property","Value"],[
      ["Feature ref",fe.ref],["Owner",ownerText(fe)],["Requirement/design state",fe.status],["Behaviour",fe.behaviour],["Architecture responsibility",a.find(x=>x.Draft_Ref===fe.architecture_ref)?.Responsibility||"Not mapped"],["Open decisions/gaps",fe.open],["Acceptance criteria",fe.acceptance_criteria_status]
    ])+"\n## Architecture links\n\n"+(matches.length?matches.map(x=>"- "+archLink(x,"../")).join("\n")+"\n":"Placement is unresolved; no hierarchy invented.\n");
    body+="\n## Implementation evidence\n\n"+(maps.length?table(["Source","Architecture owner","State"],maps.map(x=>[codeLink(x,x.ref),x.architecture_owner||"Unresolved",x.implementation_status])):"No linked implementation mapping in this partial inventory. Detailed code extraction remains future work.\n");
    if(fe.requirement_group_ref && src.common) {
      const group=src.common.groups.find(g=>g.ref===fe.requirement_group_ref);
      if(group)body+="\n## Common requirements\n\n"+table(["Ref","Requirement","Status"],group.requirements.map(r=>[r.ref,r.text,r.status]))+
        "\n[All common requirements](../common-requirements.md)\n";
    }
    body+="\n## Design and standards\n\n[Design sections](../design.md) · [Naming](../naming.md) · [Standards](../standards.md) · [Decisions](../decisions.md)\n\nMissing screens, DTO schemas, rules and acceptance criteria are not fabricated by the catalogue.\n";
    out["catalogue/"+path.feat(fe)]=body;
  }
  out["catalogue/design.md"]=header("Design structure and availability")+
    t.reference_scope+"\n\n"+table(["Order","Section","Required content"],t.sections.map(r=>[r.order,r.name,r.content]))+
    "\nUse this structure for suite, engine, module and component outputs. No new complete component design or application screenshot is claimed by this catalogue.\n\n"+
    "[Maintained template](../templates/design.yaml) · [Historical design comparison](../comparisons/design-comparison.md)\n";
  out["catalogue/implementation.md"]=header("Implementation and ownership")+
    "Pinned application baseline: ["+m.application.repository+" / "+m.application.ref.slice(0,7)+"](https://github.com/"+m.application.repository+"/tree/"+m.application.ref+"). The following is a partial reviewed mapping, not an exhaustive code inventory.\n\n"+
    table(["Artifact","Owner","Features","State","Data authority"],o.map(r=>[codeLink(r,r.ref),r.architecture_owner||"Unresolved",r.feature_refs.join(", "),r.implementation_status,r.dataset_authority]))+
    "\n[Maintained ownership links](../architecture/ownership.yaml)\n";
  out["catalogue/decisions.md"]=header("Decisions and reconciliation")+
    "Source references are temporary/history references unless an approved permanent identity exists. Recording a proposal does not approve it.\n\n## Current discussion directions\n\n"+
    table(["Ref","Direction","Recorded status","Approval","Publication","Implementation","Verification"],d.discussion_directions.map(r=>[r.ref,r.decision,r.status,r.approval||"See recorded status; evidence review pending",r.publication||"Not separately reconciled",r.implementation||"See recorded status",r.verification||"Not separately reconciled"]))+
    "\n## Reconciliation\n\n"+table(["Ref","Topic","Difference","Status","Next"],(d.reconciliation||[]).map(r=>[r.ref,r.topic,r.difference,r.status,r.next]))+
    "\n## Preserved source decisions\n\n"+table(["Ref","Topic","Decision","Approval","Implementation"],d.source_decisions.map(r=>[r["Review Ref"],r.Topic,r.Decision,r["Approval Status"],r["Implementation Status"]]))+
    "\n[Decision source](../decisions/decisions.yaml) · [Discussion archive](../discussions/README.md) · [Approval review and pending decisions](approval-review.md)\n";
  if(src.common) {
    const c=src.common;
    let body=header("Shared requirements across suites and modules")+c.status+"\n\n"+c.scope+"\n\n";
    for(const g of c.groups)body+="## "+g.name+"\n\n"+table(["Reference","Requirement","State"],g.requirements.map(r=>[r.ref,r.text,r.status]))+"\n";
    body+="## Pending decisions\n\n"+c.pending.map(x=>"- "+x).join("\n")+"\n\n"+
      "[Canonical requirements](../features/common.yaml) · [Approval and source evidence](../"+c.source_evidence+")\n";
    out["catalogue/common-requirements.md"]=body;
  }
  if(src.employeeData) {
    const e=src.employeeData;
    let body=header("Employee Management logical database design")+e.status+"\n\n"+
      table(["Property","Value"],[["Target schema",e.target_schema],["Current schema",e.current_schema],["Common controls","[Shared requirements](common-requirements.md)"]])+
      "\n## Principles\n\n"+e.principles.map(x=>"- "+x).join("\n")+"\n\n"+
      table(["Proposed table","Purpose","Indicative fields","Status"],e.tables.map(r=>[r.name,r.purpose,r.fields,r.status]));
    body+="\n## Relationships\n\n\`\`\`mermaid\nerDiagram\n"+e.relationships.map(r=>"    "+r.parent+" ||--o{ "+r.child+" : has").join("\n")+"\n\`\`\`\n";
    body+="\n## Shared logical records\n\n"+e.shared_records.map(x=>"- "+x).join("\n")+"\n\n## Pending design work\n\n"+e.pending.map(x=>"- "+x).join("\n")+"\n\n"+
      "[Canonical logical design](../architecture/emp-data-design.yaml) · [Evidence](../"+e.source_evidence+")\n";
    out["catalogue/employee-data-design.md"]=body;
  }
  if(n.profiles) {
    out["catalogue/naming.md"]+="\n## Scoped naming profiles\n\n"+
      table(["Domain","Component code","Meaning"],n.profiles.registration.domains.map(p=>[p.domain,p.code,p.meaning]))+
      "\nRegistration pattern: "+n.profiles.registration.pattern+". "+n.profiles.registration.scope+"\n\n"+
      "Virtual view pattern: "+n.profiles.mart.pattern+". "+n.profiles.mart.scope+"\n";
  }
  if(src.guide) {
    const g=src.guide,reg=n.profiles.registration.domains;
    let guide=header("Developer guide")+g.status+"\n\n"+
      table(["Property","Value"],[["Project",g.project],["Guide version",g.version],["Application evidence",g.application_ref],["Template","[18-section structure](../"+g.template_source+")"],["Source and authorization","[Evidence](../"+g.evidence+")"]]);
    for(const section of g.sections) {
      const template=t.sections.find(x=>x.order===section.order);
      guide+="\n## "+section.order+". "+template.name+"\n\n"+table(["Area","Developer instruction"],section.rows);
    }
    guide+="\n## Architecture block diagram\n\n\`\`\`mermaid\nflowchart TD\n  UI[Forms and dashboards] --> API[Authenticated APIs]\n  API --> POLICY[Access and configuration]\n  POLICY --> REG[Registration orchestration]\n  REG --> HANDLERS[Domain handlers]\n  HANDLERS --> DB[Domain and shared tables]\n  INPUT[Files, email and Sheets] --> IMPORT[Parse, map and validate]\n  IMPORT --> REG\n  DB --> MART[Virtual marts]\n  POLICY --> REPORT[Report service]\n  REPORT --> MART\n  REPORT --> OUTPUT[Views, downloads and Sheets]\n\`\`\`\n";
    guide+="\n## Developer handoff\n\n[Implementation matrix](developer-matrix.md) · [Table formats](table-formats.md) · [Virtual marts](virtual-marts.md) · [Uploads and storage](upload-templates.md) · [Test plan](test-plan.md)\n\n"+
      table(["Task","Deliverable","Dependency","Assignment"],g.tasks)+
      "\nNo GitHub Issue or developer assignment is created by this table. Exact Ritesh username and assignment authorization remain unresolved.\n";
    out["catalogue/developer-guide.md"]=guide;
    let matrix=header("Developer implementation matrix")+
      "Proposed implementation names and contracts; not an inventory of existing code. Owners/packages for shared/vendor/aggregator/source work remain to be finalized. Each production task must pin its design commit and link actual code/tests.\n\n"+
      table(["Registration","Controller file","Service file","Handler file","Repo file","Request / response DTO","Method","API"],reg.map(p=>[p.code,p.symbol+"RegController.java",p.symbol+"RegService.java",p.symbol+"RegHandler.java",p.symbol+"Repo.java",p.symbol+"RegReqDTO / "+p.symbol+"RegResDTO","register"+p.symbol,"POST /api/v1/"+p.resource]));
    matrix+="\n## Shared files and functions\n\n"+
      table(["Class and Java file","Proposed package suffix","Functions","Responsibility"],g.services.map(r=>[r[0]+" / "+r[0]+".java",r[1],r[2],r[3]]))+
      "\nShared registration orchestration: RegService.java. Proposed frontend files: "+reg.map(p=>p.code.replaceAll("_","-")+".tsx").join(", ")+". Class symbols use PascalCase; functions camelCase; physical Java public-class files match class names. Package/root placement remains a reviewed design choice.\n";
    matrix+="\n## API matrix\n\n"+table(["Method","Route","Operation ID","Request","Response","Gate"],g.api_rows)+
      "\n## DTO field matrix\n\n"+table(["Payload","Field","Type","Meaning"],g.dto_fields)+
      "\n## Connection matrix\n\n"+table(["Connection","Mechanism","Identity","Rule"],g.connections)+
      "\n## Required traceability columns\n\n"+
      table(["Group","Columns"],[
      ["Ownership","suite; engine; module; component; requirement ref"],
      ["Frontend","screen; route; file; action"],
      ["API/DTO","method; route; operation; controller; DTO; version"],
      ["Execution","service; handler; function; repo; transaction"],
      ["Data/reporting","table/key; relationship; mart/view; connection"],
      ["Security","subscription; entity/group/field/record policy"],
      ["Processing","config/key/mapping versions; idempotency; error/history"],
      ["Verification","acceptance case; actual test/code refs; result/evidence"],
      ["Status","proposal; implementation; verification; publication"]
      ])+
      "\nExisting implementation mappings remain [pinned evidence](implementation.md). This proposal does not rename those artifacts.\n";
    out["catalogue/developer-matrix.md"]=matrix;
    out["catalogue/test-plan.md"]=header("Full flow test plan")+
      "All cases below are planned. No application tests are executed by generating this document. Governance CI checks source integrity and reproducible documentation only.\n\n"+
      table(["ID","Scenario","Expected result"],g.test_cases)+
      "\n## Evidence per executed case\n\n"+table(["Evidence","Required content"],[
      ["Context","Design/application commit, environment, actor/group and subscription"],
      ["Input","Authorized synthetic fixture and source position; no secrets/live data in repo"],
      ["Action","API/UI request, config/key/template version and confirmation"],
      ["Expected/actual","Assertion, observed outcome, timing and failure/defect reference"],
      ["Database","Committed or rolled-back records, claims/history and outbox consistency"],
      ["Outputs","Authorized report/Sheet rows, filters, destination and confirmed write mode"]
      ])+"\nUnit + PostgreSQL integration + API + browser tests are required as applicable. Pending business policies must be resolved before corresponding production acceptance.\n";
  }
  if(src.employeeData && src.sharedData) {
    const sources=[["architecture/emp-data-design.yaml",src.employeeData],["architecture/shared-data-design.yaml",src.sharedData]];
    const all=sources.flatMap(([source,def])=>def.tables.map(tb=>({source,def,tb})));
    const tablePath=name=>"tables/"+slug(name)+".md";
    out["catalogue/table-formats.md"]=header("Proposed database table formats")+
      "Logical data dictionary only. Types, schema placement, constraints and indexes need physical review. Protected text/token labels are not executable PostgreSQL types. Vendor/aggregator tables are scaffolds pending working-sheet gathering. Direct DB-table uploads are not supported; component templates use authorized business fields.\n\n"+
      table(["Table","Purpose","State"],all.map(({tb})=>["["+tb.name+"]("+tablePath(tb.name)+")",tb.purpose,tb.status]))+
      "\n[Upload template and storage design](upload-templates.md) · [Employee ER diagram](employee-data-design.md)\n";
    for(const {source,def,tb} of all) {
      const columns=[...def.common_columns,...tb.columns];
      out["catalogue/"+tablePath(tb.name)]=header(tb.name+" table format",1)+
        tb.status+"\n\n"+tb.purpose+"\n\n"+
        table(["Column","Proposed type","Required","Key/reference","Validation/meaning","Upload"],columns.map(c=>[c.name,c.type,c.required,c.key,c.rule,c.upload]))+
        "\n## Constraints and indexes\n\n"+[...def.common_constraints,...tb.constraints,...(tb.indexes||[])].map(x=>"- "+x).join("\n")+"\n\n"+
        (tb.upload_policy||"Only authorized component DTO/template operations; PK/scope/audit/token columns are system-managed.")+
        "\n\n[Canonical specification](../../"+source+") · [All table formats](../table-formats.md) · [Developer guide](../developer-guide.md)\n";
    }
  }
  if(src.marts) {
    const v=src.marts;
    out["catalogue/virtual-marts.md"]=header("Virtual reporting marts")+v.status+"\n\n"+v.reporting_path+"\n\n"+
      table(["Mart","Proposed view","Grain","Inputs","Notes"],v.definitions.map(x=>[x.code,x.view,x.grain,x.inputs.join(", ")||"Pending domain schema",x.notes]))+
      "\n## Rules\n\n"+v.rules.map(x=>"- "+x).join("\n")+"\n\n[Canonical mart design](../architecture/virtual-marts.yaml) · [Developer guide](developer-guide.md)\n";
  }
  if(src.systemDesign) {
    const y=src.systemDesign;
    const diag=new Map((y.diagrams||[]).map(d=>[d.id,d]));
    const placed=new Set();
    const mermaid=d=>"### "+d.title+"\n\n```mermaid\n"+d.mermaid+"\n```\n";
    const platformSections=y=>{
      const secs=y.platform_sections||[];
      if(!secs.length) return "";
      let o="\n## Metadata-driven platform\n\nContents: "+secs.map(x=>"["+x.title+"](#"+slug(x.title)+")").join(" · ")+"\n";
      for(const x of secs){
        o+="\n## "+x.title+"\n\n"+(x.summary?x.summary+"\n\n":"");
        for(const t of (x.tables||[])) o+=(t.title?"**"+t.title+"**\n\n":"")+table(t.headers,t.rows)+"\n";
        if(x.bullets&&x.bullets.length) o+=x.bullets.map(b=>"- "+b).join("\n")+"\n\n";
        if(x.code) o+="```"+x.code.lang+"\n"+x.code.text+"\n```\n\n";
        for(const id of (x.diagrams||[])){ const d=diag.get(id); if(d){ o+=mermaid(d)+"\n"; placed.add(id);} }
      }
      return o;
    };
    out["catalogue/system-design.md"]=header("System design")+
      table(["Property","Value"],[["Reference",y.source_ref],["Version",y.version],["Stage",y.stage],["Approval",y.approval_status],["Implementation",y.implementation_status],["Verification",y.verification_status],["Publication",y.publication_status]])+
      "\n"+y.scope+"\n\n**Not affected:** "+y.non_effects.join(" ")+"\n\n## Context\n\n"+y.context.summary+"\n\n"+
      table(["Actor","Role"],y.context.actors)+"\n"+table(["External system","Use","State"],y.context.external_systems)+
      "\n## Architecture style\n\n"+y.architecture_style.decision+"\n\n"+y.architecture_style.rationale.map(x=>"- "+x).join("\n")+
      "\n\n### Module rules\n\n"+y.architecture_style.module_rules.map(x=>"- "+x).join("\n")+"\n\n"+y.architecture_style.extraction_criteria+"\n\n"+
      table(["Alternative","Outcome"],y.architecture_style.alternatives_considered)+
      platformSections(y)+
      "\n## Technology stack\n\n"+table(["Layer","Choice","State","Evidence","Notes"],y.technology_stack.map(x=>[x.layer,x.choice,x.state,x.evidence,x.notes]))+
      "\n## Tenancy\n\n"+y.tenancy.model+"\n\nHierarchy: "+y.tenancy.hierarchy.join(" → ")+"\n\n"+y.tenancy.enforcement.map(x=>"- "+x).join("\n")+"\n\nOpen questions:\n\n"+y.tenancy.open_questions.map(x=>"- "+x).join("\n")+
      "\n\n## Metadata runtime\n\n"+y.metadata_runtime.principle+"\n\n"+table(["Config state","Meaning"],y.metadata_runtime.lifecycle)+"\n"+y.metadata_runtime.rules.map(x=>"- "+x).join("\n")+"\n\n"+table(["Data","Placement"],y.metadata_runtime.data_placement)+
      "\n## Runtime components\n\n"+table(["Component","Technology","Responsibility","Engines"],y.runtime_components.map(x=>[x.name,x.tech,x.responsibility,x.engine_refs]))+
      "\n## Deployment\n\n"+table(["Environment","Purpose"],y.deployment.environments)+"\n"+table(["Unit","Behaviour"],y.deployment.units)+"\n"+y.deployment.rules.map(x=>"- "+x).join("\n")+"\n\nHosting candidate: "+y.deployment.hosting_candidate+
      "\n\n## Integration patterns\n\n"+table(["Pattern","Used for","Flow","Idempotency"],y.integration_patterns.map(x=>[x.pattern,x.used_for,x.flow,x.idempotency]))+
      "\n## Security\n\n"+y.security.map(x=>"- "+x).join("\n")+
      "\n\n## Non-functional candidates\n\n"+table(["Area","Candidate","Status"],y.non_functional_candidates.map(x=>[x.area,x.candidate,x.status]))+
      "\n## Observability\n\n"+y.observability.map(x=>"- "+x).join("\n")+
      "\n\n## Worked example: "+y.worked_example.component+"\n\n"+y.worked_example.steps.map((x,i)=>(i+1)+". "+x).join("\n")+
      "\n\n## Diagrams\n\n"+y.diagrams.filter(d=>!placed.has(d.id)).map(mermaid).join("\n")+
      "\n## Pending decisions\n\n"+table(["Ref","Topic"],y.pending_decisions.map(x=>[x.ref,x.topic]))+
      "\n[Canonical system design](../architecture/system-design.yaml) · [Metadata standard](../architecture/metadata-driven-component-standard.yaml) · [Developer guide](developer-guide.md) · [Virtual marts](virtual-marts.md)\n";
  }
  if(src.uploads) {
    const u=src.uploads;
    out["catalogue/upload-templates.md"]=header("Upload templates and data storage")+u.status+"\n\n"+u.definition_policy+"\n\n"+
      table(["Item","Where","Database role","State"],u.storage.map(x=>[x.item,x.location,x.database_role,x.state]))+
      "\n## Template profiles\n\n"+table(["Component","Formats","Fields","Required metadata","Readiness"],u.profiles.map(x=>[x.component_code,x.formats.join(", "),x.field_selection,x.required_metadata.join(", "),x.working_sheet_status]))+
      "\n## Processing flow\n\n"+u.flow.map((x,i)=>(i+1)+". "+x).join("\n")+
      "\n\n## Next working sheet inventory format\n\n"+table(["Column","Purpose"],u.next_gathering_columns.map(x=>[x,"Capture without silently dropping source fields; unresolved mapping remains explicit"]))+
      "\n## Pending\n\n"+u.pending.map(x=>"- "+x).join("\n")+"\n\n"+
      "[Canonical template/storage definition](../templates/upload-profiles.yaml) · [Table formats](table-formats.md)\n";
  }
  const storage=s.rules.find(r=>r["Review Ref"]==="GITHUB-SOURCE-01");
  if(storage) {
    out["catalogue/repository-storage.md"]=header("Repository and skills storage")+
      storage.Rule+"\n\n"+table(["Content","Maintained location","Boundary"],storage.locations)+
      "\n## Skill contents\n\n"+table(["Section","Required information"],storage.skill_fields)+
      "\nNo SKILL.md is created or installed by recording this standard. Environment discovery/installation and repository backup remain separate work.\n\n"+
      "[Canonical storage rule](../standards/standards.yaml) · [Authorization](../discussions/github-skills-storage-23-Oct-2026.md)\n";
    out["skills/README.md"]="# Shared skills source directory\n\n"+
      "> Generated policy/index view. Edit GITHUB-SOURCE-01 in standards/standards.yaml, then regenerate. This file is not a skill.\n\n"+
      "Shared skill source belongs at skills/skill-name/SKILL.md. Application-specific skills belong in their owning application's skills directory. No new skill has been created, moved, installed or activated by this storage-policy update.\n\n"+
      "[Repository and skills storage standard](../catalogue/repository-storage.md) · [COS Catalogue](../catalogue/README.md)\n";
    out["catalogue/README.md"]+="\n## Maintained repository and skills source\n\n[Repository/skills storage](repository-storage.md) · [Shared skills directory](../skills/README.md). Source storage is separate from runtime installation; no actual skill has been created or installed in this update.\n";
  }
  const docProfile=n.profiles.documentation;
  const docText="\n## Repository documentation filenames\n\n"+table(["Control","Rule"],Object.entries(docProfile).map(([key,value])=>[key,Array.isArray(value)?value.join("; "):value]))+"\n[Old-to-new paths](";
  out["catalogue/naming.md"]+=docText+"path-map.md)\n";
  out["catalogue/"+path.std(s.definitions.find(r=>r.Standard_Name==="Naming Standard"))]+=docText+"../path-map.md)\n";
  const w=src.workflow;
  out["catalogue/workflow.md"]=header("Stages, lifecycle and developer handover")+
    w.status+"\n\n"+table(["Control","Values"],[["Stage",w.stages.join(" → ")],["Lifecycle phase",w.phases.join(" → ")],["Release taxonomy","Separate decision pending; Alpha/Beta/Gamma not adopted by this update"]])+"\n## Branch versus status\n\n"+
    table(["Control","Meaning"],w.distinction)+"\n## Phase handovers\n\n"+table(["Phase","Owner role","Published output"],w.phase_deliverables)+
    "\n## Work-item fields\n\n"+table(["Field","Meaning"],w.fields)+"\n## Baseline and ownership rules\n\n"+w.rules.map(x=>"- "+x).join("\n")+
    "\n\n## Branch and chat protocol\n\n"+table(["Branch","Purpose"],w.branch_policy.patterns)+"\n"+w.branch_policy.compatibility+"\n\n"+
    w.branch_policy.read_protocol.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\n"+w.branch_policy.write_protocol+"\n\n"+w.branch_policy.handover_protocol+
    "\n\n## Pending setup\n\n"+w.pending.map(x=>"- "+x).join("\n")+"\n\n[Canonical workflow definition](../standards/workflow.yaml) · [Approval evidence](../"+w.evidence+")\n";
  out["catalogue/workflow.md"]+="\n## Mandatory pre-update approval checkpoint\n\n"+
    w.pre_update_checkpoint.required_content.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\n"+
    w.pre_update_checkpoint.questions.map(x=>"- **"+x+"**").join("\n")+"\n\n"+
    w.pre_update_checkpoint.evidence_rule+" "+w.pre_update_checkpoint.repeat_rule+"\n\n[Current approval review](approval-review.md)\n";
  out["catalogue/workflow.md"]+="\n## Confirmation before creating anything\n\n"+w.ai_creation_gate.rule+"\n\n"+table(["Preview field"],w.ai_creation_gate.preview_fields.map(x=>[x]))+"\nCanonical rule: "+w.ai_creation_gate.rule_ref+" in [AI / Analytics Standard](standards/ai-analytics.md).\n";
  const review=src.approvalReview;
  const decisionByRef=new Map(d.discussion_directions.map(x=>[x.ref,x]));
  out["catalogue/approval-review.md"]=header("Approval evidence and pending decisions")+
    review.status+"\n\nApproval is not implementation. Main integration is not blanket approval of every Draft artifact. Historical source records remain preserved; current scoped decisions below show their evidence separately.\n\n## Reconciled decisions\n\n"+
    table(["Reference","Approval","Approved scope","Publication","Implementation","Verification","Evidence"],review.reconciled_refs.map(ref=>{const x=decisionByRef.get(ref);if(!x)throw new Error("Unknown approval decision: "+ref);return [ref,x.approval,x.approval_scope,x.publication,x.implementation,x.verification,x.approval_evidence.join("; ")+(x.publication_evidence?"; [PR4]("+x.publication_evidence.pull_request+") @ "+x.publication_evidence.baseline_commit:"")];}))+
    "\n## Pending decisions and approvals\n\n"+table(["Topic","State","Scope","Next step"],review.pending.map(x=>[x.topic,x.state,x.scope,x.next]))+
    "\n## Display corrections\n\n"+review.completed_display_corrections.map(x=>"- "+x).join("\n")+
    "\n\n## Limits\n\n"+review.limits.map(x=>"- "+x).join("\n")+
    "\n\n[Canonical approval-review index](../decisions/approval-review.yaml) · [Canonical decisions](../decisions/decisions.yaml) · [Approval source evidence](../"+review.evidence+") · [Workflow](workflow.md)\n";
  out["catalogue/README.md"]+="\n## Approval checkpoint\n\n[Approval evidence and pending decisions](approval-review.md). Before each update, show approved scope, unresolved approvals, exclusions and content summary. Ask about pending approvals, then confirm the described GitHub update.\n";
  out["catalogue/path-map.md"]=header("Documentation path compatibility map")+
    "Primary links now use descriptive stable filenames. Historical paths below remain generated pointer pages so existing links continue to work. These local references are not permanent IDs. Do not edit pointer pages or this map directly.\n\n"+
    table(["Artifact","Previous path","Current path"],compatibility.map(x=>[x.title,"["+x.legacy+"]("+x.legacy+")","["+x.current+"]("+x.current+")"]))+
    "\n[Canonical filename standard](../standards/naming.yaml)\n";
  for(const x of compatibility) {
    const key="catalogue/"+x.legacy;
    if(Object.hasOwn(out,key))throw new Error("Compatibility path collides with canonical path: "+key);
    out[key]="# "+x.title+" — moved\n\n> Generated compatibility pointer. Do not edit.\n\n[Open the current "+x.title+" page]("+x.current.split("/").at(-1)+").\n\n[Complete path map](../path-map.md).\n";
  }
  Object.assign(out, buildRelationalTree(src));
  out['catalogue/README.md']+='\n## Relational navigation\n\n[Open the COS relational tree](tree.md) — architecture, features, implementation evidence, schemas/tables/fields, standards, naming, maintained files and skills policy. Missing mappings remain explicit.\n';
  return out;
}

