import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { cartActions } from "../../../store/index";
import { useDispatch, useSelector } from "react-redux";

const StripeCheckoutButton = ({ price, items }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const { resetCart } = cartActions;
  const userId = useSelector((state) => state.user.user.id);
  const publishableKey =
    "pk_test_51JUspyLwlYLCgk44mgpftL5N6Cn7Roq0mTImZbkaHUnOF5MEIyGQFYbd3It6ug1jNHqatUjdO1Vr1GDW4zx6VZhH006sBepdLt";

  const onToken = async (token) => {
    try {
      console.log(userId, price, items);
      await axios.post("/payment", {
        amount: priceForStripe,
        token,
      });

      await axios.post("/finalizeOrder", {
        total: price,
        provider: "stripe",
        status: "succesful",
        userId,
        productList: items,
      });

      dispatch(resetCart());
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
