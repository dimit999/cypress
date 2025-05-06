import { BasePage } from "@support/framework/basePage/BasePage";
import { Label } from "@support/framework/baseElements/Label";
import { StringUtils } from "@support/utils/StringUtils";

export class PlacedOrderPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector =
    "//span[contains(text(), 'Thank you for your purchase!')]";

  private orderNumberLabel = new Label(
    "//a[contains(@class, 'order')]//strong",
    true,
  );

  getOderNumber() {
    return this.orderNumberLabel.getText().then((text) => {
      return StringUtils.extractNumber(text);
    });
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
