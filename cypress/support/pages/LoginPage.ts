import { Input } from '../ui/baseElements/Input';
import { Button } from '../ui/baseElements/Button';
import { BasePage } from '../ui/basePage/BasePage';

export class LoginPage extends BasePage {
  // Element selectors (for reuse)
  private emailInput = '#email';
  private passwordInput = '#pass';
  private signInButton = "//div[contains(@class, 'container')]//span[text()='Sign In']";
  private errorMessage = '.message-error';

  /**
   * Navigates the browser to the customer login page.
   *
   * @return {void} This method does not return a value.
   */
  visit() {
    super.visit('/customer/account/login/');
  }

  /**
   * Fills the email input field with the provided email address.
   *
   * @param {string} email - The email address to be entered into the email input field.
   * @return {void} This method does not return any value.
   */
  fillEmail(email: string) {
    new Input(this.emailInput).type(email);
  }

  /**
   * Fills in the password input field with the provided password.
   *
   * @param {string} password - The password to be entered into the password input field.
   * @return {void}
   */
  fillPassword(password: string) {
    new Input(this.passwordInput).type(password);
  }

  /**
   * Triggers the click action on the "Sign In" button.
   *
   * @return {void} This method does not return anything.
   */
  submit() {
    new Button(this.signInButton, true).click();
  }

  /**
   * Get the error message displayed after a failed login attempt.
   *
   * The error message is contained in an element with the class `message-error`.
   * @returns The error message element.
   */
  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  /**
   * Returns the unique element selector for the login page.
   * @returns The unique element selector.
   */
  protected getUniqueElementSelector(): string {
    return this.signInButton;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
