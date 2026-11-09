async page => {
  await page.setViewportSize({width:390,height:844});await page.goto(new URL('/',page.url()).href);
  const section=page.locator('.interlude');const height=(await section.boundingBox()).height;
  await section.locator('.overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  if(Math.abs((await section.boundingBox()).height-height)>1)throw new Error('The window must preserve its section height while copy is hidden');
  await section.locator('.overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='network');
  if(await page.locator('#network').getAttribute('data-copy-state')!=='returning')throw new Error('Returning text must have a separate reveal stage after the camera transition');
  await page.waitForFunction(()=>document.querySelector('#network').dataset.copyState==='visible');
  if(Math.abs((await section.boundingBox()).height-height)>1)throw new Error('The copy reveal must not jump the section layout');
  if(!await section.locator(':scope > h2').isVisible()||!await section.locator(':scope > p').isVisible())throw new Error('The window copy must be readable after returning');
  await section.locator('.overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  await section.locator('.overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='network');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.waitForFunction(()=>document.querySelector('#network').dataset.copyState==='visible'&&document.querySelector('#network-overview').getAttribute('aria-busy')==='false',{},{timeout:1000});
  await page.emulateMedia({reducedMotion:'no-preference'});
  return {sectionHeight:'preserved',copy:'staged reveal, readable'};
}
