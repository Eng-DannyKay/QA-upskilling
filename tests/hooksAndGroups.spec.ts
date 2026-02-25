import { test, expect } from "@playwright/test";

test.describe('All my hook test', () => {
    
test.beforeEach(async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
});

// test.afterAll(async ({ page }) => {
//     await page.close();  
// });

test('Home page test demo', async ({ page }) => {
 await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByText('$9.99Add to cart').click();
  await page.getByText('Get your testing superhero on').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
})

test('Logout demo test', async ({ page }) => {
     await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
})
});