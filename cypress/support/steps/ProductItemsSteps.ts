import { ItemPage } from "@support/pages/navigationPages/ItemPage";
import { WomenTopsPage } from "@support/pages/navigationPages/WomenTopsPage";
import { Browser } from "@support/framework/browser/Browser";

export class ProductItemsSteps {
  /**
   * Add products to the cart based on the provided number of items.
   * @param numberOfItems The number of items to add to the cart
   * @param clickSpecialColor Whether to click the color button
   * @param clickSpecialSize Whether to click the size button
   * @param withMouseHover Whether to use mouse hover
   */
  addProductsToCart(numberOfItems: number, clickSpecialColor: boolean, clickSpecialSize: boolean, withMouseHover: boolean) {
    let totalProductPrice = 0;

    for (let i = 1; i <= numberOfItems; i++) {
      const womenTopsPage = new WomenTopsPage();
      womenTopsPage.waitUntilLoaded();

      if (withMouseHover) {
        womenTopsPage.clickSpecialItemAddToCartButtonWithHover(i);
      } else {
        womenTopsPage.clickSpecialItemAddToCartButtonWithoutHover(i);
      }

      const itemPage = new ItemPage();

      totalProductPrice += Number(itemPage.getProductPriceText())

      if (clickSpecialSize) {
        itemPage.clickSpecialLabelSizeButton(1);
      }

      if (clickSpecialColor) {
        itemPage.clickSpecialLabelColorButton(1);
      }

      itemPage.clickAddToCartButton();

      Browser.goBack();
    }
    cy.pause()
    return totalProductPrice;
  }
}
