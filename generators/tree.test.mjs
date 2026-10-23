import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {buildRelationalTree} from './tree.mjs';

const root=new URL('../',import.meta.url);
const read=p=>JSON.parse(readFileSync(new URL(p,root),'utf8'));
const src={manifest:read('cos-governance.yaml'),architecture:read('architecture/objects.yaml'),features:read('features/features.yaml'),ownership:read('architecture/ownership.yaml'),employeeData:read('architecture/emp-data-design.yaml'),sharedData:read('architecture/shared-data-design.yaml'),standards:read('standards/standards.yaml'),naming:read('standards/naming.yaml'),sourceMap:read('architecture/source-map.yaml')};
const page=buildRelationalTree(src)['catalogue/tree.md'];

test('every architecture node is represented, including previously missing engines',()=>{
  for(const x of src.architecture.architecture)assert.ok(page.includes('(architecture/'+x.File_Slug+'.md)'),x.Display_Name);
  for(const name of ['Finance Engine','Sales Engine','Procurement Engine','Inventory Engine'])assert.ok(page.includes(name));
});
test('all feature, table, standard and source-file definitions remain reachable',()=>{
  for(const f of src.features.features)assert.ok(page.includes('(features/'+f.file_slug+'.md)'));
  for(const d of [src.employeeData,src.sharedData])for(const t of d.tables){assert.ok(page.includes('['+t.name+']'));for(const f of t.columns)assert.ok(page.includes('`'+f.name+'`'));}
  for(const s of src.standards.definitions)assert.ok(page.includes('(standards/'+s.File_Slug+'.md)'));
  for(const g of src.sourceMap.groups)for(const p of g.files)assert.ok(page.includes('(../'+p+')'));
});
test('unmapped feature is labelled instead of assigned by name similarity',()=>{
  const copy=structuredClone(src);
  copy.features.features.push({ref:'LOCAL-TEST-ONLY',name:'Unmapped Example',file_slug:'local-test-only',owner:'Unresolved owner',status:'Test fixture only'});
  const p=buildRelationalTree(copy)['catalogue/tree.md'];
  assert.ok(p.includes('Not explicitly mapped; recorded owner text: Unresolved owner'));
  const architecturePart=p.split('<summary>Shared capabilities')[0];
  assert.ok(!architecturePart.includes('Unmapped Example'));
});
test('local navigation targets exist, and no skill installation is invented',()=>{
  let count=0;
  for(const match of page.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)){
    if(match[1].startsWith('https://'))continue;
    readFileSync(new URL(match[1],new URL('catalogue/tree.md',root)));count++;
  }
  assert.ok(count>300);
  assert.ok(page.includes('no actual skill registered'));
});
