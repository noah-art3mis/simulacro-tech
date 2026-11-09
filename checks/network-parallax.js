async page => {
  await page.goto(new URL('/',page.url()).href);
  await page.evaluate(()=>document.fonts.ready);
  await page.getByRole('button',{name:'Pause motion',exact:true}).click();
  await page.waitForTimeout(80);
  const canvas=page.locator('#network');
  const phase=await canvas.getAttribute('data-camera-phase');
  const before=await canvas.evaluate(el=>el.toDataURL());
  const projectY=(await page.locator('#projects').boundingBox()).y;
  await page.evaluate(()=>scrollTo({top:1000,behavior:'instant'}));await page.waitForTimeout(100);
  if(await canvas.evaluate(el=>el.toDataURL())===before)throw new Error('Scroll must create real depth/parallax in the network while automatic motion is paused');
  if(await canvas.getAttribute('data-camera-phase')!==phase)throw new Error('Scroll parallax must not resume automatic flight');
  if(Math.abs(Number(await canvas.getAttribute('data-scroll-depth'))-40)>.1)throw new Error('The rendered camera must apply the bounded scroll depth');
  if(Math.abs(projectY-(await page.locator('#projects').boundingBox()).y-1000)>2)throw new Error('Sections must retain normal document-flow scrolling');
  await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(80);
  const reduced=await canvas.evaluate(el=>el.toDataURL());
  await page.evaluate(()=>scrollTo({top:1600,behavior:'instant'}));await page.waitForTimeout(100);
  if(Number(await canvas.getAttribute('data-scroll-depth'))!==0||await canvas.evaluate(el=>el.toDataURL())!==reduced)throw new Error('Reduced motion must disable scroll parallax');
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.locator('.interlude .overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  const pause=page.getByRole('button',{name:'Pause motion',exact:true});
  if(await pause.count())await pause.click();
  await page.waitForTimeout(80);
  const revision=await canvas.getAttribute('data-view-revision');
  await page.evaluate(()=>scrollBy({top:100,behavior:'instant'}));await page.waitForTimeout(150);
  if(await canvas.getAttribute('data-view-revision')!==revision)throw new Error('Page scroll must not redraw or move the settled interactive overview');
  return {parallax:'actual perspective change',flow:'normal sections',pause:'preserved',reducedMotion:'disabled',overview:'unchanged'};
}
