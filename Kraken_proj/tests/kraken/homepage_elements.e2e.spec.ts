import { test } from '../setup/test-setup';
import { expect } from '@playwright/test';
import { HomePageElements } from '../../pages/HomePage_elements';


test.describe('Kraken Home Page', () => {

  test('T4 Verify homepage loads successfully', async ({ page }) => {
    const homePage = new HomePageElements(page);
    await homePage.openHomePage();
    await expect(page).toHaveURL('https://www.kraken.com/');
    await expect(page).toHaveTitle(/Kraken/);
  });


  test('T2 Check the home page URL', async ({ page }) => {
    const homePage = new HomePageElements(page);
    await homePage.openHomePage();
    await homePage.loginBtn.click();
    await expect(homePage.loginPopup).toBeVisible();
    await homePage.logo.click();
    await expect(page).toHaveURL('https://www.kraken.com/');
    await expect(page).toHaveTitle(/Kraken/);
  });
});


