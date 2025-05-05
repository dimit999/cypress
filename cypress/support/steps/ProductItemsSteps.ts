import { ItemPage } from "@pages/navigationPages/ItemPage";
import { WomenTopsPage } from "@pages/navigationPages/WomenTopsPage";
import {Browser} from "@support/ui/browser/Browser";

export class ProductItemsSteps {
  /**
   * Add products to the cart based on the provided number of items.
   * @param numberOfItems The number of items to add to the cart
   * @param clickSpecialColor Whether to click the color button
   * @param clickSpecialSize Whether to click the size button
   * @param withMouseHover Whether to use mouse hover
   * @returns List of product prices added to the cart
   */
  addProductsToCart(numberOfItems: number, clickSpecialColor: boolean, clickSpecialSize: boolean,
                    withMouseHover: boolean) {
    const productPrices: number[] = [];

    const promises = [];

    for (let i = 1; i <= numberOfItems; i++) {
      const womenTopsPage = new WomenTopsPage();
      if (withMouseHover) {
        womenTopsPage.clickSpecialItemAddToCartButtonWithHover(i);
      } else {
        womenTopsPage.clickSpecialItemAddToCartButtonWithoutHover(i);
      }

      const itemPage = new ItemPage();

      promises.push(
          cy.wrap(itemPage.getProductPriceText()).then((productPrice) => {
            productPrices.push(Number(productPrice));
          })
      );

      // Handle optional actions for color and size selection
      if (clickSpecialColor) {
        itemPage.clickSpecialLabelColorButton(1);
      }
      if (clickSpecialSize) {
        itemPage.clickSpecialLabelSizeButton(1);
      }

      itemPage.clickAddToCartButton();

      Browser.goBack();
    }

    return cy.wrap(promises).then(() => productPrices);
  }
}
