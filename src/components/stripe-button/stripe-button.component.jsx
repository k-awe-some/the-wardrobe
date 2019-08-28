import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../logo.png";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_pvbBKm5qceTr08jjNN3gl7kt00SLKMnHsN";

  const onToken = token => {
    console.log(token);
    alert("Payment successeful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Wardrobe"
      image={logo}
      billingAddress
      shippingAddress
      description={`Your total is $${price}.00`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
