import { test } from '../setup/test-setup';
import { expect } from '@playwright/test';
import { EmailAndPasswordValidationPage } from '../../pages/Email_&_Password_Validation';

test.describe('Email & Password Validation', () => {
  test('T9 Error message in the email input field during registration (business account)', async ({ page }) => {
    const signUpPage = new EmailAndPasswordValidationPage(page);

    await signUpPage.goto();
    await expect(signUpPage.personalPopup).toBeVisible();
    await signUpPage.businessAccBtn.click();
    await expect(signUpPage.businessPopup).toBeVisible();
    await signUpPage.emailInput.fill('12345678');
    await expect(signUpPage.emailError).toBeVisible();
    await signUpPage.emailInput.fill('hbkjbsgi');
    await expect(signUpPage.emailError).toBeVisible();
  });
});
