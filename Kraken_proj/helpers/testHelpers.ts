import { Page } from '@playwright/test';


export async function closeBrowser(page: Page) {
  await page.context().close();
}
