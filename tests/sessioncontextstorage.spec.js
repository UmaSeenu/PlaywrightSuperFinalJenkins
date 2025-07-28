const {test,expect}=require('@playwright/test');
let webcontext;
    test.beforeAll(async ({ browser }) => 
        {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://hiretech-ui-qa.teamlease.in/');
        await page.pause(); // Pause to allow manual inspection if needed
        await page.locator('#username').fill('rbac-recruiter');
        // Fill the username input
        await page.locator('#continueButton').click();
        await page.locator('#password').fill('hiretech@123');
        await page.locator('#loginButton').click();
    
        await page.waitForLoadState('networkidle'); 
        await context.storageState({ path: 'sessionContextStorage.json' });
        webcontext= await browser.newContext({
            storageState: 'sessionContextStorage.json'})
    });
    test('Verify session context storage after login', async ({ page }) => {
        const newPage = await webcontext.newPage();
        await newPage.goto('https://hiretech-ui-qa.teamlease.in/');
        await newPage.pause(); // Pause to allow manual inspection if needed
       
    });
