async page => {
  await page.goto(new URL('/', page.url()).href);
  await page.setViewportSize({width:390,height:844});
  const navigation = page.getByRole('navigation');
  for (const name of ['Work','Approach','Contact']) {
    const link = navigation.getByRole('link',{name,exact:true});
    if (!await link.isVisible()) throw new Error(`${name} must remain available in the mobile navigation`);
  }
  await navigation.getByRole('link',{name:'Contact',exact:true}).click();
  if (new URL(page.url()).hash !== '#contact') throw new Error('Contact must navigate to the contact section');
  if (!await page.locator('#contact').isVisible()) throw new Error('The contact section must be visible after navigation');
  return {mobileNavigation:'Work, Approach, Contact visible',contactTarget:new URL(page.url()).hash};
}
