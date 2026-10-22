// Pure renderer. Definitions remain authoritative; pages are generated views.
export function buildCatalogue(src) {
  const out = {};
  const m=src.manifest,a=src.architecture.architecture,f=src.features.features,n=src.naming,s=src.standards,b=src.baseline,d=src.decisions,t=src.design,o=src.ownership.mappings;
  const safe=x=>String(x??"").replace(/\r?\n/g," ").replace(/\|/g,"\\|");
  const slug=x=>String(x).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const table=(head,rows)=>"| "+head.map(safe).join(" | ")+" |\n| "+head.map(()=>"---").join(" | ")+" |\n"+rows.map(r=>"| "+r.map(safe).join(" | ")+" |").join("\n")+"\n";
  const path={arch:r=>"architecture/"+slug(r.Draft_Ref)+".md",feat:r=>"features/"+slug(r.ref)+".md",std:r=>"standards/"+slug(r.Draft_Ref)+".md"};
  const header=(title,depth=0)=>"# "+title+"\n\n> Generated from maintained definitions. Do not edit this page directly.\n> Governance "+m.version+"; naming "+n.version+"; application evidence "+m.application.ref+".\n> Draft catalogue. Approval, implementation, verification and publication are separate.\n\n"+(depth?"[COS Catalogue](../README.md) · [Architecture](../architecture.md) · [Standards](../standards.md) · [Features](../features.md)\n\n":"[Home](README.md) · [Architecture](architecture.md) · [Standards](standards.md) · [Naming](naming.md) · [Features](features.md) · [Design](design.md) · [Implementation](implementation.md) · [Decisions](decisions.md)\n\n");
  const named=new Map(a.map(r=>[r.Display_Name,r]));
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
    while(cur.Parent_Draft_Ref) {
      const p=named.get(cur.Parent_Draft_Ref);
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
      ["[Decisions](decisions.md)","Recorded directions, source decisions and reconciliation items"]
    ])+
    "\n## Browse the known HRMS hierarchy\n\n"+
    a.filter(x=>["Suite","Engine","Module","Component"].includes(x.Object_Type)).map(r=>"- "+archLink(r)+" — "+r.Object_Type+"; "+r.Status).join("\n")+
    "\n\n## Current limits\n\nThis catalogue covers the imported scope, not every possible COS suite or engine. Unallocated permanent IDs, shared placement and missing design details remain unresolved. A linked source file does not prove passing tests or production readiness. Original discussion history and source evidence remain preserved.\n\n[Source-of-truth map](../architecture/source-map.yaml) · [Discussion history](../discussions/README.md) · [Design comparison](../comparisons/design-comparison.md)\n";
  out["catalogue/standards.md"]=header("Standards")+
    "Naming 0.2.0 is frozen for its agreed scope. Other rules keep their individual recorded status. Catalogue membership and proposed mappings do not approve a rule or prove applicability to every component.\n\n"+
    table(["Standard","Source version","Approval / completion"],s.definitions.map(r=>[stdLink(r),r.Version,r.Rule_Completion]))+
    "\nAliases: Coding Standard → Development Standard; API Standard → API / Integration Standard.\n";
  for(const st of s.definitions) {
    let body=header(st.Standard_Name,1)+table(["Property","Value"],[
      ["Reference",st.Draft_Ref+" (temporary source reference)"],["Version",st.Version],["Purpose",st.Purpose],["Completion",st.Rule_Completion],["Canonical source",st.Standard_Name==="Naming Standard"?"[Frozen naming](../../standards/naming.yaml)":"[Standards definitions](../../standards/standards.yaml)"]
    ])+"\n## Rules\n\n";
    if(st.Standard_Name==="Naming Standard")body+=table(["Reference","Rule","Status"],n.rules.map(r=>[r.ref,r.rule,r.status]))+"\n[All controlled shortcodes](../naming.md)\n";
    else {
      const rows=[...(groupMap.get(st.Standard_Name)?.values()||[])];
      body+=rows.length?table(["Reference","Rule","Version","Recorded approval","Mapping state"],rows.map(({r,mapStatus})=>[r["Review Ref"],r.Rule,r.Version,r["Approval Status"],mapStatus])):"No detailed rules mapped yet. This standard requires completion and review.\n";
    }
    body+="\n## Applicability and exceptions\n\n";
    const app=s.applicability.filter(r=>Object.values(r).some(v=>v===st.Draft_Ref||v===st.Standard_Name));
    body+=app.length?table(Object.keys(app[0]),app.map(r=>Object.values(r))):"Exact object-level applicability is not fully reconciled. Review the source applicability records before enforcement.\n";
    body+="\nApproved exceptions are not inferred. [Consolidated review profile](../../standards/baseline.yaml) · [Open decisions](../decisions.md)\n";
    out["catalogue/"+path.std(st)]=body;
  }
  out["catalogue/naming.md"]=header("Naming and shortcodes")+
    "Frozen Naming Standard **"+n.version+"**, source decision **"+n.decision_ref+"**. COS prefixes are selective. Preserve SYS_EMP_ID and EMP_Reg. Existing application names have not been migrated.\n\n"+
    table(["Reference","Rule","Status"],n.rules.map(r=>[r.ref,r.rule,r.status]))+
    "\n## Code terms\n\n"+table(["Term","Code","Meaning","Example"],n.terms.map(r=>[r.term,r.shortcode,r.meaning,r.example]))+
    "\n[Maintained naming source](../standards/naming.yaml)\n";
  out["catalogue/architecture.md"]=header("Architecture")+
    "Parent references are resolved from the imported architecture records. These local draft references are not permanent COS IDs. Empty shared placement remains unresolved.\n\n"+
    table(["Object","Type","Code","Parent","Status"],a.map(r=>[archLink(r),r.Object_Type,r.Short_Code||"Unassigned",r.Parent_Draft_Ref||"Root / placement unresolved",r.Status]))+
    "\n[Architecture definitions](../architecture/objects.yaml)\n";
  for(const ar of a) {
    const chain=ancestry(ar),children=a.filter(x=>x.Parent_Draft_Ref===ar.Display_Name),direct=directFeatures(ar),features=ownedFeatures(ar);
    const featureSet=new Set(features.map(x=>x.ref));
    const maps=o.filter(x=>x.architecture_owner===ar.Display_Name||x.feature_refs.some(fr=>featureSet.has(fr)));
    let body=header(ar.Display_Name,1)+table(["Property","Value"],[
      ["Type",ar.Object_Type],["Shortcode",ar.Short_Code||"Unassigned"],["Source reference",ar.Draft_Ref+" (temporary)"],["Hierarchy",chain.parts.map(x=>x.Display_Name).join(" → ")+(chain.unresolved?" — placement unresolved":"")],["Responsibility",ar.Responsibility],["Design/registration state",ar.Status],["Source design",ar.Source?"[Historical design reference]("+ar.Source+")":"Not available"]
    ]);
    body+="\n## Children\n\n"+(children.length?table(["Object","Type","Status"],children.map(x=>[archLink(x,"../"),x.Object_Type,x.Status])):"No child definition recorded in this imported scope.\n");
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
      ["Feature ref",fe.ref],["Owner",ownerText(fe)],["Requirement/design state",fe.status],["Behaviour",fe.behaviour],["Open decisions/gaps",fe.open],["Acceptance criteria",fe.acceptance_criteria_status]
    ])+"\n## Architecture links\n\n"+(matches.length?matches.map(x=>"- "+archLink(x,"../")).join("\n")+"\n":"Placement is unresolved; no hierarchy invented.\n");
    body+="\n## Implementation evidence\n\n"+(maps.length?table(["Source","Architecture owner","State"],maps.map(x=>[codeLink(x,x.ref),x.architecture_owner||"Unresolved",x.implementation_status])):"No linked implementation mapping in this partial inventory. Detailed code extraction remains future work.\n");
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
    table(["Ref","Direction","Status"],d.discussion_directions.map(r=>[r.ref,r.decision,r.status]))+
    "\n## Reconciliation\n\n"+table(["Ref","Topic","Difference","Status","Next"],(d.reconciliation||[]).map(r=>[r.ref,r.topic,r.difference,r.status,r.next]))+
    "\n## Preserved source decisions\n\n"+table(["Ref","Topic","Decision","Approval","Implementation"],d.source_decisions.map(r=>[r["Review Ref"],r.Topic,r.Decision,r["Approval Status"],r["Implementation Status"]]))+
    "\n[Decision source](../decisions/decisions.yaml) · [Discussion archive](../discussions/README.md)\n";
  return out;
}
