import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";
import { BasketForm } from "@support/forms/BasketForm";
import { ItemForm } from "@support/forms/ItemForm";
import { Label } from "@support/framework/baseElements/Label";

export class SearchResultsPage extends BasePage {
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
  private uniquePageSelector = "//span[contains(text(), 'Search results')]";

  private allItemsText = new Label(
    "//a[contains(@class, 'product-item-link')]",
    true,
  );

  getAllItemsText(): Cypress.Chainable<string[]> {
    return this.allItemsText.getAllTexts();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
