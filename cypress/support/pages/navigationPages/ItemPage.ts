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
  private itemPriceLabel = new Label(
    "//div[contains(@class, 'product-info')]" +
      "//span[@data-price-type='finalPrice']",
    true,
  );
  private itemTitleLabel = new Label(
    "//div[contains(@class, 'product-info')]//span[contains(@data-ui-id, 'title')]",
    true,
  );

  itemTitle() {
    this.itemTitleLabel.scrollIntoView();
    this.itemTitleLabel.click();
  }

  getProductPriceText() {
    this.itemPriceLabel.waitElementState("visible");
    return this.itemPriceLabel.getAttribute("data-price-amount");
  }

  waitAddToCartButtonVisible() {
    this.addToCartButton.waitElementState("visible");
  }

  clickSpecialLabelSizeButton(index: number) {
    const labelSizeButton = new Button(
      `(//div[contains(@id, 'label-size')])[${index}]`,
      true,
    );
    const labelSizeSelectedLabel = new Label(
      `(//div[contains(@class, 'text selected')])[${index}]`,
      true,
    );
    labelSizeButton.shouldBeVisible();
    labelSizeButton.waitUntilLocationStable();
    labelSizeButton.click();
    labelSizeSelectedLabel.shouldBeVisible();
  }

  clickSpecialLabelColorButton(index: number) {
    const labelColorButton = new Button(
      `(//div[contains(@id, 'label-color')])[${index}]`,
      true,
    );
    const labelColorSelectedLabel = new Label(
      `(//div[contains(@class, 'color selected')])[${index}]`,
      true,
    );
    labelColorButton.shouldBeVisible();
    labelColorButton.waitUntilLocationStable();
    labelColorButton.click();
    labelColorSelectedLabel.shouldBeVisible();
  }

  waitUntilAddToCardEnabled() {
    this.addToCartButton.waitUntilAttributeAbsent("disabled");
  }

  clickAddToCartButton() {
    this.waitUntilAddToCardEnabled();
    this.addToCartButton.click();
  }

  clickAddToWishlistButton() {
    this.addToWishlistButton.waitElementState("visible");
    this.addToWishlistButton.click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
