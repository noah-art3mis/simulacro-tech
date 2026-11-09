async page => {
  const origin=new URL(page.url()).origin;
  for(const [path,lang] of [['/pt/','pt'],['/es/','es'],['/','en']]){
    await page.goto(origin+path);
    if(await page.locator('html').getAttribute('lang')!==lang)throw new Error(`${path} must declare ${lang}`);
    if(await page.locator('#network').count()!==1)throw new Error(`${path} must use the finished network design`);
    if(await page.locator('.hero .overview-control').count())throw new Error('The hero must not contain the big-picture button');
    const button=page.locator('.interlude .overview-control');
    if(await button.count()!==1)throw new Error(`${path} must have one big-picture button in the second view`);
    const normalLabel=await button.innerText();
    for(const locale of ['en','pt','es'])if(!await page.locator(`a[hreflang="${locale}"]`).count())throw new Error(`${path} must offer a ${locale} language link`);
    if(lang!=='en'){
      if(normalLabel==='See the big picture')throw new Error(`${path} must translate its overview control`);
      if((await page.getByRole('heading',{level:1}).innerText()).includes('Keep the human'))throw new Error(`${path} must translate the hero`);
      if((await page.locator('.interlude p').innerText()).includes('Built with transparency'))throw new Error(`${path} must translate the window description`);
      if((await page.locator('.motion-control').first().innerText())==='Pause motion')throw new Error(`${path} must translate motion controls`);
    }
    await button.click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
    if(await page.locator('[data-overview-label]').count())throw new Error('Overview must communicate with structure, without category labels');
    if(lang!=='en'&&(await button.innerText())==='Back to the network')throw new Error(`${path} must translate its return control`);
    if(await page.locator('canvas').count()!==1)throw new Error('All locales must reuse one canvas');
    await button.click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='network');
    if(await button.innerText()!==normalLabel)throw new Error(`${path} must restore its localized control label`);
    for(const width of [390,320]){await page.setViewportSize({width,height:844});if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error(`${path} must fit at ${width}px`);}
  }
  return {languages:'English, Portuguese and Spanish',layout:'same network design',overview:'second window only, no names',controls:'localized'};
}
