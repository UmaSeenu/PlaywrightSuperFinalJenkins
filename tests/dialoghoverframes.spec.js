const{test,expect} =require('@playwright/test');

test.describe('Dialog Hover Frames Tests', () => {
  test('Verify dialog hover frames functionality', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.pause(); // Pause to allow manual inspection if needed
    // await page.goto('https://google.com');
    // await page.goBack();
    // await page.goForward();
    await page.locator('#displayed-text').isVisible();
    await page.locator('#hide-textbox').click();
    await page.locator('#displayed-text').isHidden();

    //accept alrt box
  
    page.on('dialog',dialog=>dialog.accept());
      await page.locator('#confirmbtn').click();
    await page.pause(); // Pause to allow manual inspection if needed
    //mouse over
    await page.locator('#mousehover').hover();
    await page.locator('.mouse-hover-content').first().hover();
    const hoverText = await page.locator('.mouse-hover-content').first().textContent();
    console.log(hoverText);

    //frames
    const framePage = page.frameLocator('#courses-iframe');

    await framePage.locator('li a[href*="lifetime-access"]:visible').click();
    const frameText = await framePage.locator('.text h2').textContent();
    console.log(frameText);
    await page.locator('.btn-primary').first().click();
    await page.pause(); // Pause to allow manual inspection if needed

  });
});