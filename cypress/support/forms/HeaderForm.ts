import { Label } from "@support/framework/baseElements/Label";
import { Button } from "@support/framework/baseElements/Button";
import { Input } from "@support/framework/baseElements/Input";

export class HeaderForm {
  // Selectors for navigation tabs
  private userSwitcherButton = new Button(
    "(//button[contains(@class, 'switch')])[1]",
    true,
  );
  private myWishlistButton = new Button(
    "(//div[contains(@class, 'menu')]//a[contains(@href, 'wishlist')])[1]",
    true,
  );
  private userSignOutButton = new Button(
    "(//div[contains(@class, 'menu')]//a[contains(@href, 'logout')])[1]",
    true,
  );

  private basketButton = new Button(
    "//div[contains(@class, 'minicart')]//a[contains(@class, 'showcart')]",
    true,
  );
  private basketItemsLabel = new Label(
    "//a[contains(@class, 'showcart')]//span[contains(@class, 'counter-number')]",
    true,
  );

  private noItemsMsgLabel = new Label(
    "//strong[contains(text(), 'no items')]",
    true,
  );

  private searchInput = new Input('input[id*="search"]', false);

  fillSearchCriteria(criteria: string) {
    this.searchInput.type(criteria);
    this.searchInput.type("{enter}");
  }

  myWishlist(): void {
    this.userSwitcherButton.waitElementState("visible");
    this.userSwitcherButton.click();
    this.myWishlistButton.click();
  }

  signOut(): void {
    this.userSwitcherButton.waitElementState("visible");
    this.userSwitcherButton.click();
    this.userSignOutButton.click();
  }

  getBasketQtyItems() {
    return this.basketItemsLabel
      .waitUntilStableAndVisible()
      .then(($el: JQuery<HTMLElement>) => Number($el.text().trim()));
  }

  clickBasketButton() {
    this.basketItemsLabel.waitElementState("visible");
    this.basketButton.waitUntilStableAndVisible();
    this.basketButton.click();
  }
}
