import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";

const StripeCheckoutButton = ({ price, cartItems }) => {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.loggedInUserId;
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JUspyLwlYLCgk44mgpftL5N6Cn7Roq0mTImZbkaHUnOF5MEIyGQFYbd3It6ug1jNHqatUjdO1Vr1GDW4zx6VZhH006sBepdLt";

  const onToken = async (token) => {
    try {
      await axios.post("/payment", {
        amount: priceForStripe,
        token,
      });

       await axios.post("/finalizeOrder", {
        total: price,
        provider: "stripe",
        status: "succesful",
        userId,
        productList:cartItems
      });

      alert("Payment succesful");
    } catch (err) {
      console.log("Payment error", JSON.parse(err));
      alert(
        "There was an error processing your payment. Please be sure to use the provided credit card"
      );
    }
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Zenith Fit"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
