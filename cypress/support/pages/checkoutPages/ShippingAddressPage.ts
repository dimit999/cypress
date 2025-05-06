import { Input } from "@support/framework/baseElements/Input";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";
import {DropDown} from "@support/framework/baseElements/DropDown";
import {Label} from "@support/framework/baseElements/Label";
import {StringUtils} from "@support/utils/StringUtils";

export class ShippingAddressPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector =
    "//div[contains(text(), 'Shipping')]";
  private streetAddressInput = new Input("(//input[contains(@class, 'input')])[6]", true);
  private cityInput = new Input("(//input[contains(@class, 'input')])[9]", true);
  private stateDropDown = new DropDown("(//select[contains(@class, 'select')])[1]", true);
  private zipCodeInput = new Input("(//input[contains(@class, 'input')])[11]", true);
  private phoneNumberInput = new Input("(//input[contains(@class, 'input')])[12]", true);
  private nextButton = new Button("//span[contains(text(), 'Next')]", true);

  private fixedRateButton = new Button("(//td[contains(@class, 'col')]//input[contains(@class, 'radio')])[1]", true);
  private fixedRatePrice = new Label("(//span[contains(@class, 'price')]//span[contains(@class, 'price')])[1]", true);

  getFixedRatePrice() {
    return this.fixedRatePrice.getText().then((text) => {
      return StringUtils.extractNumber(text);
    });
  }

  fillStreetAddress(streetAddress: string) {
    this.streetAddressInput.type(streetAddress);
  }

  fillCity(city: string) {
    this.cityInput.type(city);
  }


  selectState(state: string) {
    this.stateDropDown.selectByText(state);
  }

  fillZipCode(zipCode: string) {
    this.zipCodeInput.type(zipCode);
  }

  fillPhoneNumber(phoneNumber: string) {
    this.phoneNumberInput.type(phoneNumber);
  }

  fixedRate() {
    this.fixedRateButton.click();
  }

  next() {
    this.nextButton.click();
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
