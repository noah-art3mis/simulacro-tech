import { execFileSync } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const output=process.env.PREVIEW_OUTPUT_DIR || process.argv[process.argv.indexOf('--out-dir')+1];
if(!output)throw new Error('Pass --out-dir PATH');
execFileSync('npm',['run','build','--','--outDir',resolve(output)],{stdio:'inherit'});

// The frozen preview server requires explicit documents for directory routes.
// Production source keeps Astro's normal directory URLs.
const routes=new Map();
for(const locale of ['', '/pt','/es']){
  if(locale){routes.set(locale,`${locale}/index.html`);routes.set(`${locale}/`,`${locale}/index.html`);}
  for(const page of ['about','projects']){
    const path=`${locale}/${page}`;
    routes.set(path,`${path}/index.html`);routes.set(`${path}/`,`${path}/index.html`);
  }
}
async function rewrite(directory){
  for(const entry of await readdir(directory,{withFileTypes:true})){
    const path=join(directory,entry.name);
    if(entry.isDirectory())await rewrite(path);
    else if(entry.name.endsWith('.html')){
      const html=await readFile(path,'utf8');
      await writeFile(path,html.replace(/href="(\/[^"\s]*)"/g,(attribute,href)=>{
        const url=new URL(href,'https://preview.invalid');
        const target=routes.get(url.pathname);
        return target?`href="${target}${url.search}${url.hash}"`:attribute;
      }));
    }
  }
}
await rewrite(resolve(output));
