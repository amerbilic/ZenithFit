import {Wrapper} from './cart-icon.styles'
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
    <Wrapper onClick={toggleCartHandler} >
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartOutlined />
      </Badge>
    </Wrapper>
  );
};

export default CartIcon;
