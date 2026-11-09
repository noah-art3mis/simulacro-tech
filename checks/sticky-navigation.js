async page => {
  const origin=new URL(page.url()).origin;
  for(const prefix of ['','/pt','/es'])for(const route of ['/','/projects/','/about/']){
    await page.setViewportSize({width:390,height:844});await page.goto(origin+prefix+route);
    const nav=page.getByRole('navigation');
    await page.evaluate(()=>scrollTo({top:600,behavior:'instant'}));
    const box=await nav.boundingBox();
    if(Math.abs(box.y)>1)throw new Error('Shared navbar must remain at the top while scrolling');
    if(await nav.locator('a[href$="#approach"]').count())throw new Error('Approach must be removed from navbar');
    for(const locale of ['en','pt','es']){
      const link=nav.locator(`a[hreflang="${locale}"]`);
      if(await link.count()!==1||!await link.isVisible())throw new Error('Navbar must expose all three language choices');
      const expected=(locale==='en'?'':'/'+locale)+route;
      if((await link.getAttribute('href')).replace(/\/$/,'')!==expected.replace(/\/$/,''))throw new Error('Language switching must preserve the current page');
      if(await link.getAttribute('lang')!==locale)throw new Error('Language links must identify their language');
    }
    if(await nav.locator(`a[hreflang="${prefix.slice(1)||'en'}"][aria-current="page"]`).count()!==1)throw new Error('Navbar must identify the active language');
    await page.setViewportSize({width:320,height:568});
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('Sticky navbar must fit a 320px window');
  }
  await page.goto(origin+'/');
  await page.locator('.interlude .overview-control').click();
  await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
  const navBox=await page.getByRole('navigation').boundingBox();
  const navBottom=navBox.y+navBox.height;
  const button=await page.locator('.interlude .overview-control').boundingBox();
  if(button.y<navBottom-1)throw new Error('Sticky navbar must not cover the overview return control');
  return {sticky:'nine routes',languages:'page-preserving EN/PT/ES',approach:'removed',mobile:'fits',overview:'return control clear'};
}
