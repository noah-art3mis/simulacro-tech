async page => {
  const url = new URL('/', page.url()).href;
  const context = await page.context().browser().newContext({javaScriptEnabled:false});
  try {
    const fallback = await context.newPage();
    await fallback.goto(url);
    if (!await fallback.getByRole('heading',{level:1}).isVisible()) throw new Error('The headline must remain readable without JavaScript');
    if (await fallback.getByRole('button',{name:'Pause motion',exact:true}).first().isVisible()) throw new Error('A nonfunctional motion control must not appear without JavaScript');
  } finally {
    await context.close();
  }
  await page.goto(url);
  const controls = page.getByRole('button',{name:'Pause motion',exact:true});
  if (await controls.count() !== 1) throw new Error('The page must have one shared motion control');
  const control = controls.first();
  await control.click();
  const canvas = page.locator('#network');
  if (await page.getByRole('button',{name:'Resume motion',exact:true}).count() !== 1) throw new Error('Motion controls must stay synchronized');
  const stopped = await canvas.getAttribute('data-camera-phase');
  await page.waitForTimeout(150);
  if (await canvas.getAttribute('data-camera-phase') !== stopped) throw new Error('Pause must stop the camera');
  await page.getByRole('button',{name:'Resume motion',exact:true}).last().click();
  await page.waitForTimeout(150);
  if (await canvas.getAttribute('data-camera-phase') === stopped) throw new Error('Resume must restart the camera');
  await page.emulateMedia({reducedMotion:'reduce'});
  const reduced = page.getByRole('button',{name:'Motion off · reduced motion',exact:true}).first();
  if (!await reduced.isDisabled()) throw new Error('Reduced motion must disable continuous animation');
  const still = await canvas.getAttribute('data-camera-phase');
  await page.waitForTimeout(150);
  if (await canvas.getAttribute('data-camera-phase') !== still) throw new Error('Reduced motion must keep the camera still');
  await page.emulateMedia({reducedMotion:'no-preference'});
  return {noScript:'readable without dead controls',motion:'pause, resume and reduced motion pass'};
}
