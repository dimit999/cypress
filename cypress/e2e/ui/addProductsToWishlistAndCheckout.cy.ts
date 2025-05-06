import { setupUserRegistration } from "cypress/support/testSetup";
import { MyAccountPage } from "@support/pages/MyAccountPage";
import { ProductItemsSteps } from "@support/steps/ProductItemsSteps";
import { WomenTopsPage } from "@pages/navigationPages/WomenTopsPage";

import { OrderSteps } from "@support/steps/OrderSteps";
import { MyWishlistPage } from "@pages/MyWishlistPage";
import { Browser } from "@support/framework/browser/Browser";
import { ItemPage } from "@pages/navigationPages/ItemPage";
import { GearBagsPage } from "@pages/navigationPages/GearBagsPage";

setupUserRegistration();

describe("Add products to wishlists and checkout", () => {
  it("should login, add products to wishlist and place an order", () => {
    const myAccountPage = new MyAccountPage();
    myAccountPage.navigation.clickGearBags();

    const productItemsSteps = new ProductItemsSteps();

    const gearBagsPage = new GearBagsPage();
    productItemsSteps
      .addProducts(2, 3, false, false, true, false, gearBagsPage)
      .then((productsPrice) => {
        Cypress.env("productsPrice", productsPrice);

        const womenTopsPage = new WomenTopsPage();
        womenTopsPage.waitUntilLoaded();
        Browser.goForward();
        const itemPage = new ItemPage();
        itemPage.waitUntilLoaded();
        Browser.goForward();

        const myWishlistPage = new MyWishlistPage();
        myWishlistPage.waitUntilLoaded();
        myWishlistPage.updateWishlistHover();
        Browser.refresh();
        myWishlistPage.addAllToCart();
        myWishlistPage.waitNoItemsMessage();
        myWishlistPage.header.clickBasketButton();
        myWishlistPage.basket.clickCheckoutButton();

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
