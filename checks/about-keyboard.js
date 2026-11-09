async page => {
  const origin=new URL(page.url()).origin;
  for(const path of ['/about/','/pt/about/','/es/about/']){
    await page.goto(origin+path);
    await page.keyboard.press('Tab');
    const target=await page.evaluate(()=>document.activeElement.getAttribute('href'));
    if(target!=='#content')throw new Error(`${path}: the first keyboard stop must skip navigation and reach the content`);
    await page.keyboard.press('Enter');
    const focused=await page.evaluate(()=>document.activeElement===document.querySelector('main'));
    if(!focused)throw new Error(`${path}: activating the skip link must focus the main content`);
  }
  return {skipNavigation:'works in English, Portuguese and Spanish'};
}
