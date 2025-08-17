import { expect, type Locator, type Page  } from '@playwright/test';

export class InputValidation {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly emailError: Locator;

   


  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('//input[@id="email"]');
    this.emailError = page.locator('//span[contains(text(), "Please enter a valid email address.")]');
  }

  async openPage() {
    await this.page.goto('https://www.kraken.com/');
    await expect(this.page).toHaveTitle(/Kraken/);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async verifyEmailError() {
    await expect(this.emailError).toBeVisible();
  }
}