import { Label } from "@support/framework/baseElements/Label";
import { NavigationPanel } from "../forms/NavigationPanel";
import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";

export class MyAccountPage extends BasePage {
  header: HeaderForm;
  navigation: NavigationPanel;

  constructor() {
    super();
    this.header = new HeaderForm();
    this.navigation = new NavigationPanel();
  }
  // Element selectors (for reuse)
  private uniquePageSelector = ".box-information .box-content";
  private welcomeMessage = new Label(".greet.welcome");
  private contactInfo = new Label(this.uniquePageSelector);
  private successMessageLabel = new Label(
    "//div[contains(@class, 'message-success')]",
    true,
  );

  getWelcomeMessage() {
    return this.welcomeMessage.get();
  }

  getContactInformation() {
    return this.contactInfo.get();
  }

  getSuccessMessage() {
    return this.successMessageLabel.get();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return false;
  }
}
