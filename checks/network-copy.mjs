import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ui } from '../src/i18n/ui.ts';
const html=readFileSync(new URL('../public/worlds/next/07/index.html',import.meta.url),'utf8');
const keys=new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(match=>match[1]));
for(const name of ['pause','resume','reduced','overview','network','canvasLabel','overviewLabel','language','artAlt'])keys.add(`network.${name}`);
for(const key of ['meta.home.title','meta.home.description'])keys.add(key);
for(const locale of ['en','pt','es'])for(const key of keys){
  assert.equal(typeof ui[locale][key],'string',`${locale}: missing ${key}`);
  assert.ok(ui[locale][key].trim(),`${locale}: empty ${key}`);
}
console.log(`All ${keys.size} homepage copy keys exist in English, Portuguese and Spanish.`);
