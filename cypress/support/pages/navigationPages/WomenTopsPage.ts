import { Label } from "@support/framework/baseElements/Label";
import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";
import { BasketForm } from "@support/forms/BasketForm";

export class WomenTopsPage extends BasePage {
  header: HeaderForm;
  basket: BasketForm;

  constructor() {
    super();
    this.header = new HeaderForm();
    this.basket = new BasketForm();
  }

  // Element selectors (for reuse)
  private uniquePageSelector = "//span[contains(text(), 'Tops')]";

  getSpecificCardItemImage(index: number) {
    return new Label(
      `(//div[contains(@class, 'product-item-info')]//span[contains(@class, 'product-image-wrapper')])[${index}]`,
      true,
    );
  }

  clickSpecialItemAddToCartButtonWithHover(index: number) {
    new Label(
      `(//div[contains(@class, 'product-item-info')])[${index}]`,
      true,
    ).hover();
    this.getSpecificCardItemImage(index).click();
  }

  clickSpecialItemAddToCartButtonWithoutHover(index: number) {
    this.getSpecificCardItemImage(index).click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
