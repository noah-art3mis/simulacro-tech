async page => {
  const url=new URL('/',page.url()).href;
  for(const [width,height] of [[1440,600],[390,844],[320,568]]){
    await page.setViewportSize({width,height});await page.goto(url);
    await page.getByRole('button',{name:'See the big picture',exact:true}).first().click();
    await page.waitForTimeout(800);
    const labels=page.getByRole('group',{name:'Network overview',exact:true}).locator('[data-overview-label]');
    for(const label of await labels.all()){
      const box=await label.boundingBox();
      if(!box||box.x<0||box.y<0||box.x+box.width>width||box.y+box.height>height)throw new Error(`${width}×${height}: ${await label.innerText()} must fit within the viewport`);
    }
  }
  return {overviewLabels:'fit short desktop and phone viewports'};
}
