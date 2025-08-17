import { Page, Locator, expect } from '@playwright/test';
import {
  LOGIN_BTN_XPATH,
  LOGIN_POPUP_XPATH,
  LOGIN_USERNAME_XPATH,
  LOGIN_PASSWORD_XPATH,
  LOGIN_SUBMIT_BTN_XPATH,
  LOGIN_ERROR_XPATH
} from '../helpers/locators';

export class KrakenC2 {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly loginPopup: Locator;
  readonly loginUsername: Locator;
  readonly loginUserPassword: Locator;
  readonly buttonSubmit: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator(LOGIN_BTN_XPATH);
    this.loginPopup = page.locator(LOGIN_POPUP_XPATH);
    this.loginUsername = page.locator(LOGIN_USERNAME_XPATH);
    this.loginUserPassword = page.locator(LOGIN_PASSWORD_XPATH);
    this.buttonSubmit = page.locator(LOGIN_SUBMIT_BTN_XPATH);
    this.errorMessage = page.locator(LOGIN_ERROR_XPATH);
  }
  async openHomePage() {
    await this.page.goto('https://www.kraken.com/');
    await expect(this.page).toHaveTitle(/Kraken/);
  }
}

