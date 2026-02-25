import { test, expect } from '@playwright/test';

test('not eyt ready test', async ({ page }) => {
    test.skip(); 
});

test.fixme('test to be fixed', async ({ page }) => {
    
});

test('slow test', async ({ page }) => {
    test.slow();
})

// test.only('focus only on this test', async ({ page }) => {
    
// });


// Tags

test('test login page @smoke', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'This test is not relevant for Firefox');
})

test('test login with tag @smoke', async ({ page }) => {
    
});