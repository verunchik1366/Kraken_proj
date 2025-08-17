import { test } from '../setup/test-setup';
import { expect } from '@playwright/test';
import { KrakenC2 } from '../../pages/Registration_Flow';

test('C2 Test the functionality of the registration popup and get an error message', async ({ page }) => {
  const krakenc2 = new KrakenC2(page);
  await krakenc2.openHomePage();
  await krakenc2.loginBtn.click();
  await expect(krakenc2.loginPopup).toBeVisible();
  await krakenc2.loginUsername.fill('noname');
  await krakenc2.loginUserPassword.fill('bcbchbrb');
  await krakenc2.buttonSubmit.click();
  await krakenc2.buttonSubmit.click();
  await expect(krakenc2.errorMessage).toBeVisible();
});



