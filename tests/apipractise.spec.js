const {request, test,expect} = require('@playwright/test');

test.describe('API Practice Tests', () => {
    let token = ''; // Variable to store the token

    test.beforeAll(async () => {
        const data={userEmail: "umashreyas14@gmail.com", userPassword: "Test@123"};
        const apiContext= await request.newContext();
        const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
            data: data,
        });
        const responseBody = await response.json()
        console.log(responseBody.token);
        token = responseBody.token; // Store the token for later use



    });

    test('Verify API response', async ({ page }) => {

    page.addInitScript(value => {  
        window.localStorage.setItem('token', value);
    }, token); 
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.pause(); // Pause to allow manual inspection if needed
    await page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' }).locator('text= Add To Cart').click(); // Click on the "Add to Cart" button for ZARA COAT 3
    await page.getByRole('button',{name:'  Cart '}).click(); // Click on the cart button using role locator

});
});
