async page => {
  await page.setViewportSize({width:1440,height:1000});
  await page.addInitScript(() => {
    let next = 1;
    const pending = new Map();
    window.requestAnimationFrame = callback => { const id = next++; pending.set(id,callback); return id; };
    window.cancelAnimationFrame = id => pending.delete(id);
    window.measureNetwork = (frames=240) => {
      const samples=[];
      for(let frame=0;frame<frames;frame++) {
        const callbacks=[...pending.values()];pending.clear();
        const start=performance.now();
        for(const callback of callbacks)callback(frame*1000/60);
        samples.push(performance.now()-start);
        if(pending.size!==1)throw new Error(`Expected one animation loop, found ${pending.size}`);
      }
      samples.sort((a,b)=>a-b);
      return {frames,p50:samples[Math.floor(frames*.5)],p95:samples[Math.floor(frames*.95)],max:samples[frames-1],visiblePoints:document.querySelector('#network').dataset.visiblePoints};
    };
  });
  await page.goto(new URL('/',page.url()).href);
  const result=await page.evaluate(()=>window.measureNetwork());
  if(result.p95>16.7)throw new Error(`Network exceeds 60 Hz frame budget: ${JSON.stringify(result)}`);
  return result;
}
