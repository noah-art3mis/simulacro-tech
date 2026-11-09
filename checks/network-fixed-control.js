async page => {
  const url=new URL('/',page.url()).href;
  for(const width of [1440,390,320]){
    await page.setViewportSize({width,height:844});await page.goto(url);
    const control=page.getByRole('button',{name:'Pause motion',exact:true});
    if(await control.count()!==1)throw new Error('Motion must have one shared bottom-right control');
    if(await page.locator('section .motion-control').count())throw new Error('Motion controls must leave the individual sections');
    for(const scroll of [0,1800,8000]){
      await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),scroll);
      const box=await control.boundingBox();
      if(!box||width-box.x-box.width<0||width-box.x-box.width>32||844-box.y-box.height<0||844-box.y-box.height>32)throw new Error(`Motion control must stay in the bottom-right corner at ${width}px`);
    }
    await control.click();
    if(!await page.getByRole('button',{name:'Resume motion',exact:true}).isVisible())throw new Error('The fixed control must still pause motion');
  }
  return {motionControl:'one fixed bottom-right control',sections:'no duplicates',pause:'works'};
}
