import { Label } from "@support/framework/baseElements/Label";
import { Button } from "@support/framework/baseElements/Button";
import { StringUtils } from "@support/utils/StringUtils";

export class BasketForm {
  // Selectors for navigation tabs
  private totalBasketAmountLabel = new Label(
    "//div[contains(@class, 'amount')]//span[contains(@class, 'price-wrapper')]",
    true,
  );
  private totalBasketItemsCountLabel = new Label(
    "//div[contains(@class, 'items-total')]//span[contains(@class, 'count')]",
    true,
  );
  private checkoutButton = new Button(
    "//button[contains(@id, 'checkout')]",
    true,
  );

  /**
   * Gets the total basket amount, extracting the number from the label text.
   */
  getTotalBasketAmount() {
    return this.totalBasketAmountLabel.getText().then((text) => {
      return StringUtils.extractNumber(text);
    });
  }

  getTotalBasketItemsQty() {
    return this.totalBasketItemsCountLabel.getText().then((text) => {
      return StringUtils.extractNumber(text);
    });
  }

  clickCheckoutButton() {
    this.checkoutButton.click();
  }
}
