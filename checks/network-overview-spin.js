async page => {
  await page.goto(new URL('/',page.url()).href);
  await page.locator('.interlude .overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  const canvas=page.locator('#network');
  const before=await canvas.getAttribute('data-view-revision');
  await page.waitForTimeout(300);
  if(await canvas.getAttribute('data-view-revision')===before)throw new Error('The big picture should keep slowly spinning while motion is enabled');
  await page.getByRole('button',{name:'Pause motion',exact:true}).click();await page.waitForTimeout(70);
  const paused=await canvas.getAttribute('data-view-revision');await page.waitForTimeout(250);
  if(await canvas.getAttribute('data-view-revision')!==paused)throw new Error('Pause must stop the overview spin');
  await page.getByRole('button',{name:'Resume motion',exact:true}).click();await page.waitForTimeout(250);
  if(await canvas.getAttribute('data-view-revision')===paused)throw new Error('Resume must restart the overview spin');
  await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(70);
  const reduced=await canvas.getAttribute('data-view-revision');await page.waitForTimeout(250);
  if(await canvas.getAttribute('data-view-revision')!==reduced)throw new Error('Reduced motion must stop automatic spin');
  await page.emulateMedia({reducedMotion:'no-preference'});
  return {overview:'slow continuous spin',pauseResume:'works',reducedMotion:'automatic spin off'};
}
