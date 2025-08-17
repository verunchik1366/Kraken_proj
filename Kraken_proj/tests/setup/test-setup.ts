import { test as base } from '@playwright/test';
import { closeBrowser } from '../../helpers/testHelpers';

export const test = base.extend({});

test.afterEach(async ({ page }) => {
  await closeBrowser(page);
});
