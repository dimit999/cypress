import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";
import { BasketForm } from "@support/forms/BasketForm";
import { ItemForm } from "@support/forms/ItemForm";

export class GearBagsPage extends BasePage {
  header: HeaderForm;
  basket: BasketForm;
  item: ItemForm;

  constructor() {
    super();
    this.header = new HeaderForm();
    this.basket = new BasketForm();
    this.item = new ItemForm();
  }

  // Element selectors (for reuse)
  private uniquePageSelector = "//span[contains(text(), 'Bags')]";

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
