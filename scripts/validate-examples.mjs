import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv';

const __dirname = pathDir(import.meta.url);
function pathDir(url) {
  const __filename = fileURLToPath(url);
  return __dirnameFrom(__filename);
  function __dirnameFrom(p) {
    const parts = p.split('\\').join('/').split('/');
    parts.pop();
    return parts.join('/');
  }
}

const schemaPath = resolve(process.cwd(), 'schemas/langston-output.schema.json');
let schema = {};
try {
  schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
} catch (e) {
  console.error('Failed to read or parse schema at', schemaPath, e?.message ?? e);
  process.exit(2);
}

const AjvInstance = Ajv({ strict: false, allErrors: true });
let validate;
try {
  validate = AjvInstance.compile(schema);
} catch (e) {
  console.error('Schema compilation failed', e?.message ?? e);
  process.exit(3);
}

function readJson(filePath) {
  const content = readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

const exDir = resolve(process.cwd(), 'examples');
let files;
try {
  files = readdirSync(exDir).filter((f) => f.endsWith('.json'));
} catch (e) {
  console.error('Could not read examples directory at', exDir, e?.message ?? e);
  process.exit(4);
}

let allPass = true;
for (const f of files) {
  const filePath = join(exDir, f);
  let data;
  try {
    data = readJson(filePath);
  } catch (e) {
    console.error(`❌ ${f}: JSON parse error: ${e?.message ?? e}`);
    allPass = false;
    continue;
  }
  const valid = validate(data);
  if (!valid) {
    console.error(`❌ ${f}: Validation failed. Errors:`);
    console.error(JSON.stringify(validate.errors, null, 2));
    allPass = false;
  } else {
    console.log(`✅ ${f}: Passed`);
  }
}

process.exit(allPass ? 0 : 1);
