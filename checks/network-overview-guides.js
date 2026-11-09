async page => {
  const origin=new URL(page.url()).origin;
  for(const path of ['/','/pt/','/es/']){
    await page.goto(origin+path);await page.locator('.interlude .overview-control').click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
    if(await page.locator('.overview-annotations,.overview-lines,.overview-annotation,.overview-leader,.overview-hotspot,.overview-note').count())throw new Error('Overview must have no annotation lines, labels or cards');
    if(!await page.locator('.overview-reset').isVisible())throw new Error('Overview interaction controls must remain available');
  }
  return {annotations:'removed',locales:'EN/PT/ES',interaction:'retained'};
}
