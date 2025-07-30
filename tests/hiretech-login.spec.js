const { test, expect } = require('@playwright/test');

test.use({ headless: false });

test('Login to Hiretech UI', async ({ page }) => {
  await page.goto('https://hiretech-ui-uat.teamlease.in/profiles');
  await page.fill('input[name="username"]', 'rbac-recruiter');
  await page.fill('input[name="password"]', 'hiretech@123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/profiles/);
  // Optionally, add more assertions here
});
