import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";
import { Label } from "@support/framework/baseElements/Label";
import { StringUtils } from "@support/utils/StringUtils";

export class PaymentMethodPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector = "//div[contains(text(), 'Payment')]";

  private totalOrderAmountLabel = new Label(
    "//tr[contains(@class, 'grand totals')]//span[contains(@class, 'price')]",
    true,
  );
  private placeOrderButton = new Button(
    "//span[contains(text(), 'Place Order')]",
    true,
  );

  getTotalOrderAmount() {
    return this.totalOrderAmountLabel.getText().then((text) => {
      return StringUtils.extractNumber(text);
    });
  }

  placeOrder() {
    this.placeOrderButton.click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
