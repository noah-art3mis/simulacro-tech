async page => {
  const origin=new URL(page.url()).origin;
  for(const locale of ['','/pt','/es']){
    let expected;
    for(const route of ['/','/projects/','/about/']){
      await page.goto(origin+locale+route);
      const nav=page.getByRole('navigation');
      if(await nav.count()!==1)throw new Error('Each page must render one shared navbar');
      const links=await nav.getByRole('link').evaluateAll(nodes=>nodes.map(node=>({text:node.textContent.trim(),href:node.getAttribute('href')})));
      if(!expected)expected=JSON.stringify(links);else if(JSON.stringify(links)!==expected)throw new Error(`${locale||'en'}: Home, Projects and About must use the same navbar links`);
      for(const width of [390,320]){await page.setViewportSize({width,height:844});if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error(`${locale+route} must fit at ${width}px`);}
      if(route==='/projects/'){
        if(await page.locator('canvas').count())throw new Error('Projects should retain static illustrations without another animated canvas');
        if(await page.locator('main .work-visual svg').count()<9)throw new Error('Projects must retain its existing illustrations');
      }
    }
  }
  return {navbar:'same across all pages and locales',projects:'illustrations retained',phoneWidths:'fit'};
}
