import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCatalogue } from './catalogue.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = p => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const input = {
  manifest: read('cos-governance.yaml'),
  architecture: read('architecture/objects.yaml'),
  features: read('features/features.yaml'),
  naming: read('standards/naming.yaml'),
  standards: read('standards/standards.yaml'),
  baseline: read('standards/baseline.yaml'),
  decisions: read('decisions/decisions.yaml'),
  design: read('templates/design.yaml'),
  ownership: read('architecture/ownership.yaml'),
  common: read('features/common.yaml'),
  employeeData: read('architecture/emp-data-design.yaml'),
  sharedData: read('architecture/shared-data-design.yaml'),
  guide: read('architecture/developer-guide.yaml'),
  marts: read('architecture/virtual-marts.yaml'),
  uploads: read('templates/upload-profiles.yaml'),
  workflow: read('standards/workflow.yaml')
};
const pages = buildCatalogue(input);
pages['catalogue/generated-manifest.json'] = JSON.stringify({
  classification: 'generated view; do not edit',
  governance_version: input.manifest.version,
  naming_version: input.naming.version,
  application_ref: input.manifest.application.ref,
  pages: Object.keys(pages).sort(),
  counts: input.manifest.catalogue.expected_counts,
  generator: 'generators/catalogue.mjs',
  regenerate: 'node generators/build-catalogue.mjs --write',
  verify: 'node generators/build-catalogue.mjs --check',
  authority_cutover: false
}, null, 2) + '\n';

function require(condition, message) {
  if (!condition) throw new Error(message);
}
const expected = input.manifest.catalogue.expected_counts;
require(input.standards.definitions.length === expected.standards, 'Catalogue standards scope changed');
require(input.architecture.architecture.length === expected.architecture, 'Catalogue architecture scope changed');
require(input.features.features.length === expected.features, 'Catalogue feature scope changed');
const known = new Set(Object.keys(pages).map(p => resolve(root, p)));
for (const [path, body] of Object.entries(pages)) {
  require(resolve(root, path).startsWith(root + sep), 'Output escapes repository');
  if (!path.endsWith('.md')) continue;
  for (const match of body.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const href = match[1];
    if (/^https:\/\//.test(href) || href.startsWith('#')) continue;
    require(!/^[a-z]+:/i.test(href), 'Unsupported link protocol: ' + href);
    const target = resolve(dirname(resolve(root, path)), href.split('#')[0]);
    require(target.startsWith(root + sep), 'Link escapes repository: ' + href);
    if (known.has(target)) continue;
    readFileSync(target);
  }
}
const mode = process.argv[2];
require(['--check', '--write'].includes(mode), 'Use --check or --write');
if (mode === '--write') {
  for (const [path, content] of Object.entries(pages)) {
    mkdirSync(dirname(resolve(root, path)), {recursive: true});
    writeFileSync(resolve(root, path), content, 'utf8');
  }
} else {
  for (const [path, content] of Object.entries(pages)) {
    require(readFileSync(resolve(root, path), 'utf8') === content, 'Stale generated page: ' + path);
  }
  function walk(dir) {
    return readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
      const path = resolve(dir, entry.name);
      return entry.isDirectory() ? walk(path) : [relative(root, path).split(sep).join('/')];
    });
  }
  for (const path of walk(resolve(root, 'catalogue'))) {
    require(Object.hasOwn(pages, path), 'Untracked stale catalogue page: ' + path);
  }
}
console.log('PASS: ' + Object.keys(pages).filter(p => p.endsWith('.md')).length + ' reproducible Markdown pages, generated manifest and local link targets.');
console.log('Scope: reference integrity only; not complete COS coverage or production compliance.');

