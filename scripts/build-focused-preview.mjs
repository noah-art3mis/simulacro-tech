import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const arg = name => process.argv[process.argv.indexOf(name)+1];
const output = process.env.PREVIEW_OUTPUT_DIR || arg('--out-dir');
const entry = arg('--entry');
if (!output || !entry || !['extreme','next/04','next/07'].includes(entry)) throw new Error('Pass --entry extreme|next/04|next/07 and --out-dir PATH');
await mkdir(output,{recursive:true});
await cp(resolve('public/worlds',entry),resolve(output),{recursive:true});
await cp(resolve('public/worlds/assets'),resolve(output,'assets'),{recursive:true});

await cp(resolve('public/worlds'),resolve(output,'directions'),{recursive:true});
if(entry.startsWith('next/')){
 const index=resolve(output,'index.html');
 const html=await readFile(index,'utf8');
 await writeFile(index,html.replaceAll('href="../../index.html','href="directions/index.html'));
}
