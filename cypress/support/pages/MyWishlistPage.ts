import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";
import { BasketForm } from "@support/forms/BasketForm";
import { Label } from "@support/framework/baseElements/Label";

export class MyWishlistPage extends BasePage {
  header: HeaderForm;
  basket: BasketForm;

  constructor() {
    super();
    this.header = new HeaderForm();
    this.basket = new BasketForm();
  }

  // Element selectors (for reuse)
  private uniquePageSelector = "//span[contains(text(), 'Wish List')]";

  private updateWishlistButton = new Button(
    "//button[contains(@title, 'Update Wish List')]",
    true,
  );
  private addAllToCartButton = new Button(
    "//button[contains(@data-role, 'all-tocart')]",
    true,
  );
  private noItemsLabel = new Label(
    "//span[contains(text(), 'You have no items in your wish list.')]",
    true,
  );

  waitNoItemsMessage() {
    this.noItemsLabel.waitElementState("visible");
  }

  updateWishlistHover() {
    this.updateWishlistButton.waitElementState("visible");
    this.updateWishlistButton.hover();
  }

  addAllToCart() {
    this.addAllToCartButton.waitElementState("visible");
    this.addAllToCartButton.click();
  }

  /**
   * Returns the unique element selector for the login page.
   * @returns The unique element selector.
   */
  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
