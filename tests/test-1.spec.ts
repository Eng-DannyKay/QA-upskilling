import { test, expect } from '@playwright/test';


test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });
  test('main navigation link', async ({ page }) => {
    await expect(page).toHaveURL('https://example.com/');
  });
})