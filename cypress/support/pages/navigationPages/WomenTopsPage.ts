import { Label } from "@support/framework/baseElements/Label";
import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";
import { BasketForm } from "@support/forms/BasketForm";

export class WomenTopsPage extends BasePage {
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

  /**
   * Gets the header form instance for this page.
   */
  getHeaderForm() {
    return new HeaderForm();
  }

  getBasketForm() {
    return new BasketForm();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
