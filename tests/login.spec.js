const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

// Playwright test to login to the given URL

test('Login to rahulshettyacademy and handle password popup', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// Pause to allow manual inspection if needed
  await page.locator('#username').fill('rahulshettyacademy'); // Replace with actual username
    await page.pause(); 
   await page.locator('#password').fill('learning'); // Replace with actual password
  await page.locator('#signInBtn').click();
  // Wait for navigation or a successful login indicator
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop'); // Adjust if the post-login URL is different

  // Handle Google Password Manager popup if it appears
  const closeButton = page.locator('button', { hasText: 'Close' });
  if (await closeButton.isVisible({ timeout: 2000 })) {
    await closeButton.click();

  }
  const devices=await page.locator('.card-body a');
  console.log(await devices.count());
  const deviceCount = await devices.count();
  const deviceTexts = [];
  for (let i = 0; i < deviceCount; i++) {
    deviceTexts.push(await devices.nth(i).textContent());
  }
  deviceTexts.forEach(text => console.log(text));

  
  // Optionally, add more assertions here
});

test('login using UI controls',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.locator('#username').fill('rahulshettyacademy'); // Replace with actual username
    await page.pause(); 
   await page.locator('#password').fill('learning'); // Replace with actual password
   await page.locator('.radiotextsty').last().click(); // Click on the last radio button
   await page.locator('#okayBtn').click();
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   // Verify the last radio button is selected

  await page.locator('#terms').click(); // Click on the terms checkbox
  await expect(page.locator('#terms')).toBeChecked();
  await page.locator('#terms').uncheck(); // Uncheck the terms checkbox
  await expect(page.locator('#terms')).not.toBeChecked();
  // Verify the terms checkbox is unchecked
  await page.locator('select.form-control').selectOption('Consultant');  
    await page.locator('#signInBtn').click();
}
);

test('test window or context switching', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const [newPage]=await Promise.all([
        context.waitForEvent  ('page'), // Wait for the new page to open
 page.locator('.blinkingText').first().click()
    ])
   const text=await newPage.locator('.red').textContent();
   console.log(text);

});

test('register to application', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('.text-reset').click();

   const firstName = faker.person.firstName();
   console.log(firstName);
   
const mobileNumber = faker.phone.number('##########').replace(/^./, () => String(Math.floor(Math.random() * 4) + 6));
console.log(mobileNumber);
await page.pause(); // Pause to allow manual inspection if needed

    await page.locator('#firstName').fill(firstName);
    await page.locator('#lastName').fill('test');
    const email=firstName+'test'+'@gmail.com';
    await page.locator('#userEmail').fill(email);
    console.log(email);
    const selector =  page.locator('select[formcontrolname="occupation"]');
    await selector.selectOption('Doctor'); // Select the first option in the dropdown
    await page.locator('[value="Male"]').click(); //
    await page.locator('#userMobile').fill(mobileNumber);   
    await page.locator('#userPassword').fill('test123');
    await page.locator('#confirmPassword').fill('test123');
    await page.locator('.col-md-1 input').check(); // Check the terms and conditions checkbox
    await page.locator('[value="Register"]').click();
});
    
test('E2E flow', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    //await page.pause(); 
    await page.locator('#userEmail').fill('umashreyas14@gmail.com'); // Replace with actual email
    await page.locator('#userPassword').fill('Test@123'); //
    await page.locator('[value="Login"]').click();
    const products=await page.locator('.card-body');
    for(let i=0;i<await products.count();i++){
        const productName = await products.nth(i).locator('b').textContent();
        console.log(productName);
        if (productName === 'ZARA COAT 3') {
            await products.nth(i).locator("text= Add To Cart").click(); // Click on the "Add to Cart" button for Blackberry
            break; // Exit the loop after clicking the button
        }
    }
    await page.locator("[routerlink='/dashboard/cart']").click(); // Click on the cart icon
    // Pause to allow manual inspection if needed
         // Click on the first "Add to Cart" button
         await page.locator('div li').first().waitFor();
         const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy(); // Verify that the product is in the cart
});

test("using placeholder/label/role locators",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder('email@example.com').fill('umashreyas14@gmail.com'); 
    await page.getByPlaceholder('enter your passsword').fill('Test@123'); // Fill the password input using placeholder
    // Fill the email input using placeholder
    await page.getByRole('button', { name: 'Login' }).click(); // Click the login button using role locator
    await page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' }).locator('text= Add To Cart').click(); // Click on the "Add to Cart" button for ZARA COAT 3
    await page.getByRole('button',{name:'  Cart '}).click(); // Click on the cart button using role locator

});   

    





