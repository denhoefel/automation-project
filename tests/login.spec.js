// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('Login page loads successfully', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle(/The Internet/);
});