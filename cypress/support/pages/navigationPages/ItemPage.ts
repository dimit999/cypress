import { Label } from "@support/framework/baseElements/Label";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";

export class ItemPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector = "//span[contains(@itemprop, 'reviewCount')]";
  private addToCartButton = new Button("//button[contains(@id, 'add')]", true);
  private addToWishlistButton = new Button(
    "//div[contains(@class, 'product-social')]" +
      "//a[contains(@data-action, 'add-to-wishlist')]",
    true,
  );
  private getProductPrice = new Label(
    "//div[contains(@class, 'product-info')]" +
      "//span[@data-price-type='finalPrice']",
    true,
  );

  getProductPriceText() {
    this.getProductPrice.waitUntilStableAndVisible()
    return this.getProductPrice.getAttribute("data-price-amount");
  }

  waitAddToCartButtonVisible() {
    this.addToCartButton.wait_element_state('visible')
  }

  clickSpecialLabelSizeButton(index: number) {
    const labelSizeButton = new Button(
      `(//div[contains(@id, 'label-size')])[${index}]`,
      true,
    );
    labelSizeButton.shouldBeVisible();
    labelSizeButton.click();
  }

  clickSpecialLabelColorButton(index: number) {
    const labelColorButton = new Button(
      `(//div[contains(@id, 'label-color')])[${index}]`,
      true,
    );
    labelColorButton.shouldBeVisible();
    labelColorButton.click();
  }

  clickAddToCartButton() {
    this.addToCartButton.click();
  }

  clickAddToWishlistButton() {
    this.addToWishlistButton.click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
