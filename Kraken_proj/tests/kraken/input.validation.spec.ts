import { test, expect } from '@playwright/test';
import { InputValidation } from '../../pages/Input_Validation';
import { LOGIN_BTN_XPATH } from '../../helpers/locators';

//Precondition 
//User is registered

test.describe('Input Validation Tests', () => {
  test('T1 Error message in the email input field during registration (business account)', async ({ page }) => {
    const inputValidationPage = new InputValidation(page);
    await inputValidationPage.openPage();

    await page.locator(LOGIN_BTN_XPATH).click();

    await expect(inputValidationPage.personalPopup).toBeVisible();
    await inputValidationPage.businessAccBtn.click();
    await expect(inputValidationPage.businessPopup).toBeVisible();
    await inputValidationPage.emailInput.fill('12345678');
    await expect(inputValidationPage.emailError).toBeVisible();
    await inputValidationPage.emailInput.fill('hbkjbsgi');
    await expect(inputValidationPage.emailError).toBeVisible();
  });
});