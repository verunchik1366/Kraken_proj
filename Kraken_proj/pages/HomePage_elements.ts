
import { Page, Locator, expect } from '@playwright/test';
import { LOGIN_BTN_XPATH, LOGIN_POPUP_XPATH, LOGO_XPATH } from '../helpers/locators';


export class HomePageElements {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly loginPopup: Locator;
  readonly logo: Locator;

  static LOGIN_BTN_XPATH = LOGIN_BTN_XPATH;
  static LOGIN_POPUP_XPATH = LOGIN_POPUP_XPATH;
  static LOGO_XPATH = LOGO_XPATH;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator(HomePageElements.LOGIN_BTN_XPATH);
    this.loginPopup = page.locator(HomePageElements.LOGIN_POPUP_XPATH);
    this.logo = page.locator(HomePageElements.LOGO_XPATH);
  }

  async openHomePage() {
    await this.page.goto('https://www.kraken.com/');
    await this.verifyCurrentUrl('https://www.kraken.com/');
    await expect(this.page).toHaveTitle(/Kraken/);
  }

  async verifyCurrentUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}

