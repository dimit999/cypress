import { setupUserRegistration } from "cypress/support/testSetup";
import { MyAccountPage } from "@support/pages/MyAccountPage";
import { ProductItemsSteps } from "@support/steps/ProductItemsSteps";
import { WomenTopsPage } from "@pages/navigationPages/WomenTopsPage";

import { OrderSteps } from "@support/steps/OrderSteps";

setupUserRegistration();

describe("Place order with multiple products", () => {
  it("should login and place an order with multiple products", () => {
    const myAccountPage = new MyAccountPage();
    myAccountPage.navigation.clickWomenTops();

    const productItemsSteps = new ProductItemsSteps();

    const womenTopsPage = new WomenTopsPage();
    productItemsSteps
      .addProducts(1, 2, true, true, true, true, womenTopsPage)
      .then((productsPrice) => {
        const womenTopsPage = new WomenTopsPage();
        womenTopsPage.header.clickBasketButton();
        womenTopsPage.basket.getTotalBasketItemsQty().then((qty) => {
          expect(qty).to.equal(2, "Not 2 products added to basket");
        });
        womenTopsPage.basket
          .getTotalBasketAmount()
          .then((basketProductsPrice) => {
            expect(basketProductsPrice).to.equal(
              productsPrice,
              "Not correct basket Total Amount",
            );
          });
        womenTopsPage.basket.clickCheckoutButton();

        const orderSteps = new OrderSteps();
        orderSteps.placeOrderAndValidate(
          productsPrice,
          "usa",
          "Alabama",
          "Alabama",
          "35404",
          "5345345435",
        );
      });
  });
});
