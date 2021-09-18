import "./cart-icon.styles.scss";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/index";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };


  return (
    <div className="cart-icon" onClick={toggleCartHandler} >
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartOutlined />
      </Badge>
    </div>
  );
};

export default CartIcon;
