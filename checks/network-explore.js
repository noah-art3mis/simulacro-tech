async page => {
  await page.goto(new URL('/',page.url()).href);
  await page.locator('.interlude .overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  const canvas=page.locator('#network'),box=await canvas.boundingBox();
  await page.mouse.move(box.x+box.width*.5,box.y+box.height*.6);
  const before=await canvas.evaluate(el=>el.toDataURL());
  const yaw=Number(await canvas.getAttribute('data-overview-yaw'));
  await page.mouse.down();await page.mouse.move(box.x+box.width*.5+120,box.y+box.height*.6+45,{steps:8});await page.mouse.up();
  await page.waitForTimeout(100);
  if(await canvas.evaluate(el=>el.toDataURL())===before)throw new Error('Dragging the overview must change the actual rendered camera view');
  if(Number(await canvas.getAttribute('data-overview-yaw'))===yaw)throw new Error('Dragging must orbit the camera');
  const zoom=Number(await canvas.getAttribute('data-overview-zoom'));
  await page.mouse.wheel(0,-250);await page.waitForTimeout(100);
  const nextZoom=Number(await canvas.getAttribute('data-overview-zoom'));
  if(nextZoom===zoom||nextZoom<.65||nextZoom>1.8)throw new Error('Wheel zoom must respond within its bounds');
  await canvas.focus();const keyed=Number(await canvas.getAttribute('data-overview-yaw'));
  await page.keyboard.press('ArrowRight');await page.waitForTimeout(50);
  if(Number(await canvas.getAttribute('data-overview-yaw'))===keyed)throw new Error('Keyboard arrows must orbit the focused overview');
  await page.locator('.overview-reset').click();await page.waitForTimeout(50);
  if(Math.abs(Number(await canvas.getAttribute('data-overview-yaw')))>1e-6||Math.abs(Number(await canvas.getAttribute('data-overview-pitch')))>1e-6||Math.abs(Number(await canvas.getAttribute('data-overview-zoom'))-1)>1e-6)throw new Error('Reset must restore the fitted camera');
  await page.getByRole('button',{name:'Pause motion',exact:true}).click();await page.waitForTimeout(80);
  const revision=await canvas.getAttribute('data-view-revision');await page.waitForTimeout(250);
  if(await canvas.getAttribute('data-view-revision')!==revision)throw new Error('The interactive overview must stop rendering when paused');
  return {drag:'changes rendered camera',zoom:'bounded',keyboard:'works',reset:'fitted view',paused:'no redraw'};
}
