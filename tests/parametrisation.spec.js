const {test}=require('@playwright/test')
const testData =JSON.parse( JSON.stringify(require('../testdata/paramaterisation.json')));

for(const data of testData){
test(`using placeholder/label/role locators ${data.scriptname}`, async({page})=>{
    await page.goto(data.loginUrl); // Navigate to the login URL from test data
    await page.getByPlaceholder('email@example.com').fill(data.username); 
    await page.getByPlaceholder('enter your passsword').fill(data.password); // Fill the password input using placeholder
    // Fill the email input using placeholder
    await page.getByRole('button', { name: 'Login' }).click(); 
}); // Click the login button using role locator
}