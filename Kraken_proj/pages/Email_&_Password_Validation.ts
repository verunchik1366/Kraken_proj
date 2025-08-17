import { Page, Locator, expect } from '@playwright/test';
import {
  PERSONAL_POPUP_XPATH,
  BUSINESS_ACC_BTN_XPATH,
  BUSINESS_POPUP_XPATH,
  EMAIL_INPUT_XPATH,
  EMAIL_ERROR_XPATH
} from '../helpers/locators';

export class EmailAndPasswordValidationPage {
  readonly page: Page;
  readonly personalPopup: Locator;
  readonly businessAccBtn: Locator;
  readonly businessPopup: Locator;
  readonly emailInput: Locator;
  readonly emailError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalPopup = page.locator(PERSONAL_POPUP_XPATH);
    this.businessAccBtn = page.locator(BUSINESS_ACC_BTN_XPATH);
    this.businessPopup = page.locator(BUSINESS_POPUP_XPATH);
    this.emailInput = page.locator(EMAIL_INPUT_XPATH);
    this.emailError = page.locator(EMAIL_ERROR_XPATH);
  }

  async goto() {
    await this.page.goto('https://www.kraken.com/sign-up');
  }
}
