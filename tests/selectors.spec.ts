import { test, expect } from '@playwright/test';

test('selectors demo', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    
    await page.locator('id=user-name').click();
    await page.locator('[id="user-name"]').fill('Edison');
    await page.locator('[id="user-name"]').fill('Enstein');
    await page.locator('[#login-button]').click();
    await page.pause();
    await page.locator('xpath=//input[@id="user-name]').click();
    await page.locator('xpath=//input[@id="user-name]').fill('password')
    await page.locator('input:has-text("Login")').click();
});