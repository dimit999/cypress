import { Label } from "@support/framework/baseElements/Label";
import { Button } from "@support/framework/baseElements/Button";

export class HeaderForm {
  // Selectors for navigation tabs
  private userSwitcherButton = new Button(
    "(//button[contains(@class, 'switch')])[1]",
    true,
  );
  private userSignOut = new Button(
    "(//div[contains(@class, 'menu')]//a[contains(@href, 'logout')])[1]",
    true,
  );

  private basketButton = new Button("//div[contains(@class, 'minicart')]//a[contains(@class, 'showcart')]", true);
  private basketItemsLabel = new Label(
    "//a[contains(@class, 'showcart')]//span[contains(@class, 'counter-number')]",
    true,
  );

  private noItemsMsgLabel = new Label(
      "//strong[contains(text(), 'no items')]",
      true,
  );

  /**
   * Signs the user out of the application by interacting with the user switcher button
   * and the sign-out option using their XPath selectors.
   *
   * @return {void} No return value.
   */
  signOut() {
    this.userSwitcherButton.click();
    this.userSignOut.click();
  }

  getBasketQtyItems() {
    return this.basketItemsLabel
      .waitUntilStableAndVisible()
      .then(($el: JQuery<HTMLElement>) => Number($el.text().trim()));
  }

  clickBasketButton() {
    this.basketItemsLabel.waitUntilStableAndVisible()
    this.basketButton.waitUntilStableAndVisible()
    this.basketButton.click();
  }
}
