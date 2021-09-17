import "./checkout.styles.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/UI/Stripe-Button/stripe-button";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.Price);
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} {...item} />
        ))}
        <div className="total">
          <span>TOTAL ${totalPrice}</span>
        </div>
        <div className="test-warning">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/2023 - CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice} items={cartItems}/>
      </div>
      <Newsletter/>
      <Footer />
    </motion.div>
  );
};

export default Checkout;
