import { ItemPage } from "@support/pages/navigationPages/ItemPage";
import { WomenTopsPage } from "@support/pages/navigationPages/WomenTopsPage";
import { Browser } from "@support/framework/browser/Browser";
import { StringUtils } from "@support/utils/StringUtils";  // Ensure you import StringUtils

export class ProductItemsSteps {
  /**
   * Add products to the cart based on the provided number of items.
   * @param numberOfItems The number of items to add to the cart
   * @param clickSpecialColor Whether to click the color button
   * @param clickSpecialSize Whether to click the size button
   * @param withMouseHover Whether to use mouse hover
   */
  addProductsToCart(
      numberOfItems: number,
      clickSpecialColor: boolean,
      clickSpecialSize: boolean,
      withMouseHover: boolean,
  ) {
    let totalProductPrice = 0;
    let chain = cy.wrap(undefined as string | undefined);

    for (let i = 1; i <= numberOfItems; i++) {
      chain = chain.then(() => {
        const womenTopsPage = new WomenTopsPage();
        womenTopsPage.waitUntilLoaded();

        if (withMouseHover) {
          womenTopsPage.clickSpecialItemAddToCartButtonWithHover(i);
        } else {
          womenTopsPage.clickSpecialItemAddToCartButtonWithoutHover(i);
        }

        const itemPage = new ItemPage();

        return itemPage.getProductPriceText().then((productPriceText) => {
          const priceText = productPriceText || '';
          const productPrice = StringUtils.extractNumber(priceText);

          cy.log(String(productPrice)); // Optional: log for debugging

          if (!isNaN(productPrice)) {
            totalProductPrice += productPrice;
          } else {
            console.error("Invalid price found:", priceText);
          }

          if (clickSpecialSize) {
            itemPage.clickSpecialLabelSizeButton(1);
          }
          if (clickSpecialColor) {
            itemPage.clickSpecialLabelColorButton(1);
          }

          itemPage.clickAddToCartButton();
          itemPage.waitAddToCartButtonVisible()
          Browser.goBack();
        });
      });
    }

    // At the end, yield the total price
    return chain.then(() => totalProductPrice);
  }
}
