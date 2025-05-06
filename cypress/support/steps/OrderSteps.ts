import { ShippingAddressPage } from "@support/pages/checkoutPages/ShippingAddressPage";
import { PaymentMethodPage } from "@support/pages/checkoutPages/PaymentMethodPage";
import { PlacedOrderPage } from "@support/pages/checkoutPages/PlacedOrderPage";

export class OrderSteps {
  placeOrderAndValidate(
    productsPrice: number,
    streetAddress: string,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
  ) {
    const shippingAddressPage = new ShippingAddressPage();

    shippingAddressPage.fillStreetAddress(streetAddress);
    shippingAddressPage.fillCity(city);
    shippingAddressPage.selectState(state);
    shippingAddressPage.fillZipCode(zipCode);
    shippingAddressPage.fillPhoneNumber(phoneNumber);
    shippingAddressPage.fixedRate();

    shippingAddressPage.getFixedRatePrice().then((fixedRatePrice) => {
      const orderTotalPrice = productsPrice + fixedRatePrice;

      shippingAddressPage.next();

      const paymentMethodPage = new PaymentMethodPage();
      paymentMethodPage.getTotalOrderAmount().then((finalOrderTotalPrice) => {
        expect(finalOrderTotalPrice).to.equal(
          orderTotalPrice,
          "Not correct Order Total Amount",
        );
      });

      paymentMethodPage.placeOrder();

      const placedOrderPage = new PlacedOrderPage();
      placedOrderPage.getOderNumber().then((orderNumber) => {
        const orderNum = Number(orderNumber);
        expect(orderNum, "Order number should be a valid number").to.not.be.NaN;
        expect(orderNum).to.be.a("number");
      });
    });
  }
}
