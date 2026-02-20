const { test, expect } = require('@playwright/test');
const { ECDH } = require('crypto');
const { hello } = require('./demo/hello');

test('my first test', async({ page}) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

})

