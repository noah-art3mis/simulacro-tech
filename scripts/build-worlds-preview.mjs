import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const output = process.env.PREVIEW_OUTPUT_DIR || process.argv[process.argv.indexOf('--out-dir') + 1];
if (!output || output === process.argv[0]) throw new Error('Pass --out-dir PATH');
await mkdir(output, { recursive: true });
await cp(resolve('public/worlds'), resolve(output), { recursive: true });
