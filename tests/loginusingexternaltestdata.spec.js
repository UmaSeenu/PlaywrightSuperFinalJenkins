const {test}=require('@playwright/test')
const testData =JSON.parse( JSON.stringify(require('../testdata/loginTestdata.json')));

test(" @login using placeholder/label/role locators",async({page})=>{
    await page.goto(testData.loginUrl); // Navigate to the login URL from test data
    await page.getByPlaceholder('email@example.com').fill(testData.username); 
    await page.getByPlaceholder('enter your passsword').fill(testData.password); // Fill the password input using placeholder
    // Fill the email input using placeholder
    await page.getByRole('button', { name: 'Login' }).click(); 
}); // Click the login button using role locator