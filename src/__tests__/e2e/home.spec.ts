import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/H3 Excavation & Construction/);
});

test('renders the hero and navigation', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('navigation', { name: 'Main navigation' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: /Cut Above the Rest/i })
  ).toBeVisible();
});
