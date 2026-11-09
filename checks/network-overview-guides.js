async page => {
  const origin=new URL(page.url()).origin;
  for(const path of ['/','/pt/','/es/']){
    await page.goto(origin+path);await page.locator('.interlude .overview-control').click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
    const annotations=page.locator('.overview-annotation');
    if(await annotations.count()!==3)throw new Error('All three network features must have persistent short labels');
    for(const annotation of await annotations.all()){
      if(!await annotation.isVisible())throw new Error('Overview feature labels must remain visible');
      const text=await annotation.locator('.overview-annotation-label').innerText();
      if(text.trim().split(/\s+/).length>2)throw new Error('Feature labels must use one or two words');
      const node=Number(await annotation.getAttribute('data-source-node'));
      if(!Number.isInteger(node)||node<0||node>=6420)throw new Error('Guides must point to actual source nodes');
    }
    const lines=page.locator('line.overview-leader');
    if(await lines.count()!==3)throw new Error('Every feature needs its own horizontal leader line');
    for(const line of await lines.all()){
      if(Math.abs(Number(await line.getAttribute('y1'))-Number(await line.getAttribute('y2')))>.5)throw new Error('Feature leader lines must be horizontal');
      if(Math.abs(Number(await line.getAttribute('x1'))-Number(await line.getAttribute('x2')))<24)throw new Error('Feature leaders must be visible lines');
    }
    if(await page.locator('.overview-note').count())throw new Error('Descriptive cards must be replaced by persistent labels');
  }
  return {features:'three visible short labels',leaders:'horizontal, actual nodes',locales:'EN/PT/ES',cards:'removed'};
}
