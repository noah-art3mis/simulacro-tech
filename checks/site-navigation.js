async page => {
  const home = new URL('/',page.url());
  await page.goto(home.href);
  for(const name of ['Molcajete','Adapta','Glasshouse']){
    const link=page.getByRole('link',{name:new RegExp(`^${name}`)});
    const target=new URL(await link.getAttribute('href'),home);
    if(target.origin!==home.origin||target.pathname!=='/projects/'||target.hash!==`#${name.toLowerCase()}`)throw new Error(`${name} must open its project details within this site`);
  }
  await page.getByRole('link',{name:/^Molcajete/}).click();
  await page.locator('#molcajete').waitFor({state:'visible'});
  if(new URL(page.url()).hash!=='#molcajete')throw new Error('Project details must retain their fragment');
  await page.getByRole('navigation').getByRole('link',{name:'Simulacro simulacro.tech',exact:true}).click();
  await page.getByRole('heading',{name:'Keep the human in the loop.'}).waitFor({state:'visible'});
  for(const width of [390,320]){
    await page.setViewportSize({width,height:844});
    const label=page.getByRole('navigation').locator('strong');
    if(await label.innerText()!=='simulacro.tech')throw new Error('Homepage navigation must use simulacro.tech');
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    if(overflow)throw new Error(`Homepage must fit at ${width}px`);
  }
  return {projectDetails:'local routes',returnHome:'works',navbar:'simulacro.tech',mobileWidths:[390,320]};
}
