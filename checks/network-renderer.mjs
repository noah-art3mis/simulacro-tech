import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source=process.argv.find(arg=>arg.startsWith('--source='))?.slice(9);
const html=readFileSync(source || new URL('../public/worlds/next/07/index.html',import.meta.url),'utf8');
const script=html.split('<script>')[1].split('</script>')[0];
function render(width,height,dpr=1){
  const digest=createHash('sha256');
  const segments=[],dots=[];let move,strokes=0,pathKind='';const styles={};
  const record=(name,...args)=>{digest.update(JSON.stringify([name,...args]));if(name==='beginPath')pathKind='';if(name==='lineTo')pathKind='line';if(name==='arc')pathKind='arc';if(name==='moveTo')move=args;if(name==='lineTo')segments.push(JSON.stringify([...move,...args]));if(name==='arc')dots.push(JSON.stringify([...args,styles.fillStyle,styles.globalAlpha]));if(name==='stroke'&&pathKind==='line')strokes++;};
  const ctx=new Proxy({}, {get:(_,name)=>(...args)=>record(name,...args),set:(_,name,value)=>{styles[name]=value;record(name,value);return true;}});
  const pending=new Map(),events=new Map();let next=0;
  const canvas={dataset:{},getContext:()=>ctx};
  const controls=[{},{}];
  const realm=vm.createContext({innerWidth:width,innerHeight:height,devicePixelRatio:dpr,document:{hidden:false,querySelector:()=>canvas,querySelectorAll:()=>controls,addEventListener:(name,fn)=>events.set(name,fn)},matchMedia:()=>({matches:false,addEventListener(){}}),addEventListener:(name,fn)=>events.set(name,fn),requestAnimationFrame:fn=>{pending.set(++next,fn);return next;},cancelAnimationFrame:id=>pending.delete(id)});
  controls.forEach(control=>control.setAttribute=()=>{});
  vm.runInContext('globalThis.vectorAllocations=0;const originalMap=Array.prototype.map;Array.prototype.map=function(...args){vectorAllocations++;return originalMap.apply(this,args)};',realm);
  vm.runInContext(script,realm);
  const advance=time=>{assert.equal(pending.size,1,'Only one frame loop may be scheduled');const callbacks=[...pending.values()];pending.clear();for(const fn of callbacks)fn(time);};
  realm.vectorAllocations=0;
  advance(0);advance(16.6667);advance(33.3334);
  events.get('pointermove')({clientX:width*.8,clientY:height*.2});
  advance(50);advance(66.6667);advance(83.3334);
  return {hash:digest.digest('hex'),geometryHash:createHash('sha256').update(JSON.stringify([segments.sort(),dots])).digest('hex'),strokesPerFrame:strokes/7,vectorAllocations:realm.vectorAllocations/6,visiblePoints:canvas.dataset.visiblePoints,backingPixels:canvas.width*canvas.height};
}
const result={desktop:render(1440,1000),mobile:render(390,844),ultrahd:render(3840,2160),retina:render(1440,1000,2),ultrahdRetina:render(3840,2160,2)};
console.log(JSON.stringify(result,null,2));
if(!process.argv.includes('--record')){
  const golden=JSON.parse(readFileSync(new URL('./network-renderer-golden.json',import.meta.url),'utf8'));
  for(const size of Object.keys(result)){
    assert.equal(result[size].geometryHash,golden[size].geometryHash,`${size} rendering must preserve the scene, camera, pointer response and draw order`);
    assert.ok(result[size].backingPixels<=1_440_000,`Background exceeds 900p pixel budget: ${result[size].backingPixels}`);
    assert.ok(result[size].strokesPerFrame<100,`Too many individual line submissions: ${result[size].strokesPerFrame}`);
    assert.ok(result[size].vectorAllocations<100,`Renderer allocates ${result[size].vectorAllocations} temporary vectors per frame; reuse projection storage to avoid sustained GC pressure`);
  }
}
