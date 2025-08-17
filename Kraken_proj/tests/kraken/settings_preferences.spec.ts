import { test } from '../setup/test-setup';
import { expect } from '@playwright/test';
import { SettingsAndPreferencesPage } from '../../pages/Settings_&_Preferences';

test.describe('Settings & Preferences', () => {
  test('T10 Change language to Polish and verify URL', async ({ page }) => {
    const settingsPage = new SettingsAndPreferencesPage(page);
    await page.goto('https://www.kraken.com/');
    await expect(page).toHaveTitle(/Kraken/);
    await page.locator('//button[@data-testid="locale-switcher-desktop-trigger"]').nth(0).click();
    await expect(page.locator('//div[@class="overflow-auto pb-ds-dialog-nonCompact pt-ds-dialog-nonCompact"][.//text()[contains(., "Change language and country/region")]]')).toBeVisible();
    await page.locator('//input[@aria-autocomplete="list"]').nth(0).click();
    await settingsPage.polskiLanguageBtn.click();
    await settingsPage.languageChangeBtn.click();
    await expect(page).toHaveURL('https://www.kraken.com/pl');
  });
});
