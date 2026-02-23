import { test, expect } from '@playwright/test';

test('Assertion demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');  
    await page.pause();
    await page.getByRole('heading', { name: 'The Kitchen' }).click();
    // ASSERTIONS
    // check element is visible
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }
    // check element is hidden
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
    // check element is enabled
    // await expect.soft(page.locator('text-The Kitchen')).toBeEnabled();
    // check element is disabled
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();
    // await expect.soft(page.locator('text=The Kitchen')).toHaveText('The kitchen');
    // await expect.soft(page.locator('text=The Ki'));
    await expect.soft(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpm2a/);
    await expect.soft(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);
    await expect(page).toHaveScreenshot();

})