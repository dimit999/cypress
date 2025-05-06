import { setupUserRegistration } from 'cypress/support/testSetup';
import { MyAccountPage } from '@support/pages/MyAccountPage';
import {ProductItemsSteps} from "@support/steps/ProductItemsSteps";
import {WomenTopsPage} from "@pages/navigationPages/WomenTopsPage";
import {ShippingAddressPage} from "@pages/checkoutPages/ShippingAddressPage";
import {PaymentMethodPage} from "@pages/checkoutPages/PaymentMethodPage";
import {PlacedOrderPage} from "@pages/checkoutPages/PlacedOrderPage";

setupUserRegistration();

describe('Place order with multiple products', () => {
  it('should login and place an order with multiple products', () => {
      const myAccountPage = new MyAccountPage();
      myAccountPage.navigation.clickWomenTops();

      const productItemsSteps = new ProductItemsSteps();
      const numberOfItems = 2;

      productItemsSteps.addProductsToCart(numberOfItems, true, true, true).then((productsPrice) => {
          Cypress.env('productsPrice', productsPrice);

          const womenTopsPage = new WomenTopsPage();
          womenTopsPage.header.clickBasketButton();
          womenTopsPage.basket.getTotalBasketItemsQty().then((qty) => {
              expect(qty).to.equal(2, "Not 2 products added to basket");
          });
          womenTopsPage.basket.getTotalBasketAmount().then((basketProductsPrice) => {
              expect(basketProductsPrice).to.equal(productsPrice, "Not correct basket Total Amount");
          });
          womenTopsPage.basket.clickCheckoutButton();

          const shippingAddressPage = new ShippingAddressPage();
          let orderTotalPrice: number;
          shippingAddressPage.fillStreetAddress("usa")
          shippingAddressPage.fillCity("Alabama")
          shippingAddressPage.selectState("Alabama")
          shippingAddressPage.fillZipCode("35404")
          shippingAddressPage.fillPhoneNumber("5345345435")
          shippingAddressPage.fixedRate()
          shippingAddressPage.getFixedRatePrice().then((fixedRatePrice) => {
              orderTotalPrice = productsPrice + fixedRatePrice
          });
          shippingAddressPage.next()

          const paymentMethodPage = new PaymentMethodPage();
          paymentMethodPage.getTotalOrderAmount().then((finalOrderTotalPrice) => {
              expect(finalOrderTotalPrice).to.equal(orderTotalPrice, "Not correct Order Total Amount");
          });
          paymentMethodPage.placeOrder()

          const placedOrderPage = new PlacedOrderPage();
          placedOrderPage.getOderNumber().then((orderNumber) => {
              const orderNum = Number(orderNumber);
              expect(orderNum, 'Order number should be a valid number').to.not.be.NaN;
              expect(orderNum).to.be.a('number');
          });




      });


  });
});
