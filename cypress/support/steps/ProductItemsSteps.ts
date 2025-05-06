import { ItemPage } from "@support/pages/navigationPages/ItemPage";
import { Browser } from "@support/framework/browser/Browser";
import { StringUtils } from "@support/utils/StringUtils";
import { MyWishlistPage } from "@pages/MyWishlistPage"; // Ensure you import StringUtils

export interface ItemForm {
  clickSpecialItemAddToCartButtonWithHover(index: number): void;
  clickSpecialItemAddToCartButtonWithoutHover(index: number): void;
}

export interface ProductListingPage {
  waitUntilLoaded(): void;
  item: ItemForm;
}

export class ProductItemsSteps {
  /**
   * Adds products to either the cart or wishlist based on the specified parameters.
   *
   * @param {number} startIndex - The number of start of range.
   * @param {number} endIndex - The number of end of range.
   * @param {boolean} clickSpecialColor - Indicates if a special color should be selected for the items.
   * @param {boolean} clickSpecialSize - Indicates if a special size should be selected for the items.
   * @param {boolean} withMouseHover - Determines whether to add items with mouse hover action.
   * @param {boolean} toCart - If true, items will be added to the cart; otherwise, they will be added to the wishlist.
   * @param {ProductListingPage} page - The product listing page object used for interacting with products.
   * @return {Cypress.Chainable<number>} A Cypress chainable promise that resolves to the total price of all added
   * products.
   */
  addProducts(
    startIndex: number,
    endIndex: number,
    clickSpecialColor: boolean,
    clickSpecialSize: boolean,
    withMouseHover: boolean,
    toCart: boolean,
    page: ProductListingPage,
  ) {
    let totalProductPrice = 0;
    let chain = cy.wrap(undefined as string | undefined);

    for (let i = startIndex; i <= endIndex; i++) {
      chain = chain.then(() => {
        page.waitUntilLoaded();

        if (withMouseHover) {
          page.item.clickSpecialItemAddToCartButtonWithHover(i);
        } else {
          page.item.clickSpecialItemAddToCartButtonWithoutHover(i);
        }

        const itemPage = new ItemPage();

        return itemPage.getProductPriceText().then((productPriceText) => {
          const priceText = productPriceText || "";
          const productPrice = StringUtils.extractNumber(priceText);

          totalProductPrice += productPrice;

          if (clickSpecialSize) {
            itemPage.clickSpecialLabelSizeButton(1);
          }
          if (clickSpecialColor) {
            itemPage.clickSpecialLabelColorButton(1);
          }
          itemPage.waitUntilLoaded();
          itemPage.itemTitle();

          if (toCart) {
            itemPage.clickAddToCartButton();
            itemPage.waitAddToCartButtonVisible();
            Browser.goBack();
          } else {
            itemPage.waitUntilAddToCardEnabled();
            itemPage.clickAddToWishlistButton();
            const myWishlistPage = new MyWishlistPage();
            myWishlistPage.waitUntilLoaded();
            myWishlistPage.updateWishlistHover();
            Browser.goBack();
            itemPage.waitUntilLoaded();
            Browser.goBack();
          }
        });
      });
    }

    // At the end, yield the total price
    return chain.then(() => totalProductPrice);
  }
}
