import { Input } from "@support/framework/baseElements/Input";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";

export class LoginPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector =
    "//div[contains(@class, 'container')]//span[text()='Sign In']";
  private emailInput = new Input("#email");
  private passwordInput = new Input("#pass");
  private signInButton = new Button(this.uniquePageSelector, true);

  visit() {
    super.visit("/customer/account/login/");
  }

  fillEmail(email: string) {
    this.emailInput.type(email);
  }

  fillPassword(password: string) {
    this.passwordInput.type(password);
  }

  submit() {
    this.signInButton.click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
