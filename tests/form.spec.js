// tests/form.spec.js
const { test, expect } = require('@playwright/test');

test('Dropdown has correct options', async ({ page }) => {
  await page.goto('/dropdown');
  const options = page.locator('#dropdown option');
  await expect(options).toHaveCount(3);
});

test('Checkbox can be checked', async ({ page }) => {
  await page.goto('/checkboxes');
  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();
  await expect(checkbox).toBeChecked();
});