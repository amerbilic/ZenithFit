import {
  Wrapper,
  EmptyMessage,
  Items,
  ButtonCheckout,
} from "./cart-dropdown.styles";
import './cart-dropdown.scrollbar.scss'
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
    <Wrapper>
      <Items>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </Items>
      {cartItems.length ? (
        <ButtonCheckout onClick={clickHandler}>GO TO CHECKOUT</ButtonCheckout>
      ) : (
        <span></span>
      )}
    </Wrapper>
  );
};

export default CartDropdown;
