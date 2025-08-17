import { Page, Locator } from '@playwright/test';
import {
  
  LANGUAGE_POPUP_XPATH,
  POLSKI_LANGUAGE_BTN_XPATH,
  LANGUAGE_CHANGE_BTN,
  CHANGE_LANGUAGE_INPUT_XPATH
} from '../helpers/locators';

export class SettingsAndPreferencesPage {
  readonly page: Page;
  readonly languageSwitcherBtn: Locator;
  readonly languagePopup: Locator;
  readonly changeLanguageInput: Locator;
  readonly polskiLanguageBtn: Locator;
  readonly languageChangeBtn: Locator;
  readonly closeLanguagePopupBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.languageSwitcherBtn = page.locator('//button[@data-testid="locale-switcher-desktop-trigger"]');
    this.languagePopup = page.locator(LANGUAGE_POPUP_XPATH);
    this.changeLanguageInput = page.locator(CHANGE_LANGUAGE_INPUT_XPATH);
    this.polskiLanguageBtn = page.locator(POLSKI_LANGUAGE_BTN_XPATH);
    this.languageChangeBtn = page.locator(LANGUAGE_CHANGE_BTN);
  }
  
  
}


