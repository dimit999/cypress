import { Input } from "@support/framework/baseElements/Input";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";
import {DropDown} from "@support/framework/baseElements/DropDown";
import {Label} from "@support/framework/baseElements/Label";
import {StringUtils} from "@support/utils/StringUtils";

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
