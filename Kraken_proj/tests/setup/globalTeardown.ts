import { FullConfig } from '@playwright/test';

export default async function globalTeardown(config: FullConfig) {
  // Playwright автоматично закриває браузер після завершення всіх тестів,
}
