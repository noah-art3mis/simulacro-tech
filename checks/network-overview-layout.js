async page => {
  const url=new URL('/',page.url()).href;
  for(const [width,height] of [[1440,600],[390,844],[320,568]]){
    await page.setViewportSize({width,height});await page.goto(url);
    await page.locator('.interlude').scrollIntoViewIfNeeded();
    await page.locator('.interlude .overview-control').click();
    await page.waitForFunction(()=>document.querySelector('#network').dataset.view==='overview');
    const canvas=page.locator('#network');
    const box=await canvas.boundingBox();
    const bounds=JSON.parse(await canvas.getAttribute('data-structure-bounds'));
    if(!box||!bounds||bounds.left<0||bounds.top<0||bounds.right>box.width||bounds.bottom>box.height)throw new Error(`${width}×${height}: the ordered structure must fit the window canvas`);
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error(`${width}×${height}: the overview must not cause horizontal overflow`);
  }
  return {overview:'unlabelled structures fit short desktop and phone windows'};
}
