import "./cart-dropdown.styles.scss";
import Button from "../Button/button";
import CartItem from "../../cart-item/cart-item";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../../store/index";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(cartActions.toggleCart());
    history.push("/checkout");
  };

  return (
    <div className="cart-dropdown" >
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length ? (
        <Button onClick={clickHandler}>GO TO CHECKOUT</Button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default CartDropdown;
