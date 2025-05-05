import { Input } from '../ui/baseElements/Input';
import { Button } from '../ui/baseElements/Button';
import { BasePage } from '../ui/basePage/BasePage';

export class RegisterPage extends BasePage {
  // Element selectors (for reuse)
  private firstNameInput = '#firstname';
  private lastNameInput = '#lastname';
  private emailInput = '#email_address';
  private passwordInput = '#password';
  private confirmPasswordInput = '#password-confirmation';
  private submitButton = "button[title='Create an Account']";

  /**
   * Navigates to the customer account creation page.
   *
   * @return {void} This method does not return a value.
   */
  visit() {
    super.visit('/customer/account/create/');
  }

  /**
   * Fills the first name input field with the provided name.
   *
   * @param {string} name - The first name to be entered in the input field.
   * @return {void} This method does not return a value.
   */
  fillFirstName(name: string) {
    new Input(this.firstNameInput).type(name);
  }

  /**
   * Fills the last name input field with the provided name.
   *
   * @param {string} name - The name to be entered into the last name input field.
   * @return {void} No return value.
   */
  fillLastName(name: string) {
    new Input(this.lastNameInput).type(name);
  }

  /**
   * Fills the email address field with the provided email.
   *
   * @param {string} email - The email address to input into the field.
   * @return {void} Does not return any value.
   */
  fillEmail(email: string) {
    new Input(this.emailInput).type(email);
  }

  /**
   * Fills in the password input field with the provided password.
   *
   * @param {string} password - The password to be entered into the input field.
   * @return {void} This method does not return any value.
   */
  fillPassword(password: string) {
    new Input(this.passwordInput).type(password);
  }

  /**
   * Fills the confirm password field with the provided password.
   *
   * @param {string} password - The password to be entered into the confirm password field.
   * @return {void} Does not return a value.
   */
  fillConfirmPassword(password: string) {
    new Input(this.confirmPasswordInput).type(password);
  }

  /**
   * Submits the form by simulating a click action on the button with the title "Create an Account".
   *
   * @return {void} Does not return any value.
   */
  submit() {
    new Button(this.submitButton).click();
  }

  protected getUniqueElementSelector(): string {
    return this.firstNameInput;
  }

  protected getUniqueElementIsXpath(): boolean {
    return false;
  }
}
