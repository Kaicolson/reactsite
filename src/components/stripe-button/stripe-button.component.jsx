import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForSripe = price * 100;
  const publishableKey =
    "pk_test_51ImfRELI9PS11oPx9FlyhnYKSWq7bMGAmkgZ7V7p2eTNF3oescXvHKN4pDyGsyemDh1XmpL05kwhbzQKfCJp71Od00hlSiVLmb";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="Yomame Limited"
      label="Pay Now"
      currency="gbp"
      locale="UK"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForSripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
