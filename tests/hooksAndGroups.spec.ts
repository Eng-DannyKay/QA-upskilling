import { test, espect } from '@playwright/test';

test('hooks and Groups Login demo', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.pause();
});