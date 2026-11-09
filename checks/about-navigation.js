async page => {
  const home=new URL('/',page.url());
  await page.goto(home.href);
  const navigation=page.getByRole('navigation');
  if(!await navigation.getByRole('link',{name:'About',exact:true}).count())throw new Error('About must be available in the homepage navigation');
  await navigation.getByRole('link',{name:'About',exact:true}).click();
  await page.getByRole('heading',{level:1}).waitFor({state:'visible'});
  if(!new URL(page.url()).pathname.startsWith('/about'))throw new Error('About must open its own page');
  const main=page.getByRole('main');
  const links={LinkedIn:'https://linkedin.com/in/gustavoarcos',GitHub:'https://github.com/noah-art3mis',CV:'https://simulacro.cv',Essays:'https://simulacro.co.uk',Philosophy:'https://gustavocosta.psc.br'};
  for(const [name,href] of Object.entries(links)){
    const link=main.getByRole('link',{name:name==='CV'?/\bCV\b/:new RegExp(`^${name}(?:\\s|$)`)});
    if(!await link.isVisible())throw new Error(`${name} must be visible in the About content`);
    if((await link.getAttribute('href')).replace(/\/$/,'')!==href)throw new Error(`${name} must retain its original destination`);
  }
  await page.goto(home.href);
  for(const name of Object.keys(links)){
    if(await page.locator('.contact footer').getByRole('link',{name:name==='CV'?/\bCV\b/:new RegExp(`^${name}(?:\\s|$)`)}).count())throw new Error(`${name} must move from the homepage footer to About`);
  }
  for(const width of [390,320]){
    await page.setViewportSize({width,height:844});
    if(!await page.getByRole('navigation').getByRole('link',{name:'About',exact:true}).isVisible())throw new Error('About must remain available on phones');
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error(`No horizontal overflow at ${width}px`);
  }
  return {aboutPage:'reachable',profileLinks:'all five retained',homepageFooter:'links moved',phoneNavigation:'About available'};
}
