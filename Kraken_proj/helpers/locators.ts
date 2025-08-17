// HomePage
export const LOGIN_BTN_XPATH = '(//span[@class="flex items-center justify-center gap-ds-button-sm"][.//text()[contains(., "Log in")]])[1]';
export const LOGIN_POPUP_XPATH = '//div[@class="flex flex-col gap-6"][.//text()[contains(., "Sign in to Kraken")]]';
export const LOGO_XPATH = '//div[@class="gap-ds-2 hidden grid-flow-col content-center items-center md:grid"][1]';

export const LOGIN_USERNAME_XPATH = '//input[@name="username"]';
export const LOGIN_PASSWORD_XPATH = '//input[@name="password"]';
export const LOGIN_SUBMIT_BTN_XPATH = '//button[@type="submit"]';
export const LOGIN_ERROR_XPATH = '//div[@data-testid="notification-container"][.//text()[contains(., "Unable to sign in")]]';

export const PERSONAL_POPUP_XPATH = '//div[@class="flex flex-col gap-6 lg:min-w-[600px]"][.//text()[contains(., "Create a personal account")]]';
export const BUSINESS_ACC_BTN_XPATH = '//button[@aria-disabled="false"][.//text()[contains(., "Business")]]';
export const BUSINESS_POPUP_XPATH = '//div[@class="flex flex-col gap-6 lg:min-w-[600px]"][.//text()[contains(., "Create a business account")]]';
export const EMAIL_INPUT_XPATH = '//input[@id="email"]';
export const EMAIL_ERROR_XPATH = '//span[contains(text(), "Please enter a valid email address.")]';

export const LANGUAGE_SWITCHER_BTN_XPATH = '//button[@data-testid="locale-switcher-desktop-trigger"]';
export const LANGUAGE_POPUP_XPATH = '//div[@class="overflow-auto pb-ds-dialog-nonCompact pt-ds-dialog-nonCompact"][.//text()[contains(., "Change language and country/region")]]';
export const CHANGE_LANGUAGE_INPUT_XPATH = '//button[@id="react-aria5411567127-«ram»"]nth(0)';
export const POLSKI_LANGUAGE_BTN_XPATH = '//span[.//text()[contains(., "Polski")]]';
export const LANGUAGE_SWITCHER_CLOSE_BTN_XPATH = '//button[@data-testid="locale-switcher-close-button"]';
export const LANGUAGE_CHANGE_BTN = '//button[.//text()[contains(., "Continue")]]';




