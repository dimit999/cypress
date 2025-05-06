import { Label } from "@support/framework/baseElements/Label";

export class ItemForm {
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
}
