import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import {
  Item,
  ImageContainer,
  Image,
  ItemDescription,
  RemoveButton,
  Arrow,
} from "./checkout-item.styles";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  const increaseHandler = () => {
    dispatch(cartActions.addToCart(props));
  };

  return (
    <Item>
      <ImageContainer>
        <Image alt="item" src={props.img} />
      </ImageContainer>
      <ItemDescription>{props.name}</ItemDescription>
      <ItemDescription>
        <Arrow onClick={deleteHandler}>&#10094;</Arrow>
        {props.quantity}
        <Arrow onClick={increaseHandler}>&#10095;</Arrow>
      </ItemDescription>

      <ItemDescription>${props.price}</ItemDescription>
      <RemoveButton onClick={deleteHandler}>&#10005;</RemoveButton>
    </Item>
  );
};

export default CheckoutItem;
