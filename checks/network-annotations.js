async page => {
  const origin=new URL(page.url()).origin;let english='';
  for(const [path,lang] of [['/','en'],['/pt/','pt'],['/es/','es']]){
    await page.goto(origin+path);await page.locator('.interlude .overview-control').click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
    const hotspots=page.locator('button.overview-hotspot');
    if(await hotspots.count()<3)throw new Error('The actual network must offer selectable annotated features');
    for(const marker of await hotspots.all()){
      const node=Number(await marker.getAttribute('data-source-node'));
      if(!Number.isInteger(node)||node<0||node>=6420)throw new Error('Each feature must point to an actual network node');
    }
    await page.locator('button.overview-hotspot:visible').first().focus();
    await page.locator('.overview-note:visible').waitFor({state:'visible'});
    const description=await page.locator('.overview-note:visible').innerText();
    if(description.length<30)throw new Error('Feature callouts need useful descriptions');
    if(!await page.locator('.overview-leader:visible').count())throw new Error('A leader line must connect the selected feature and its description');
    if(lang==='en')english=description;else if(description===english)throw new Error(`${path} must translate its callouts`);
    await page.keyboard.press('Escape');
    if(await page.locator('.overview-note:visible').count())throw new Error('Escape must dismiss the description');
    await page.locator('button.overview-hotspot:visible').last().click();
    if(!await page.locator('.overview-note:visible').count())throw new Error('Tap/click must open a feature description');
    await page.locator('.overview-note:visible .overview-note-close').focus();await page.keyboard.press('Enter');
    if(await page.locator('.overview-note:visible').count())throw new Error('The callout close control must work');
    const focused=await page.evaluate(()=>document.activeElement===document.querySelector('#network')||document.activeElement.classList.contains('overview-hotspot'));
    if(!focused)throw new Error('Closing a description must restore focus to the interactive network or its hotspot');
  }
  return {features:'real source nodes',descriptions:'hover/focus/tap, translated',leaders:'visible',dismissal:'close and Escape'};
}
