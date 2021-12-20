import { Item, Image, ItemDetails, Name } from "./cart-item.styles.js";

const CartItem = (props) => {
  return (
    <Item>
      <Image src={props.img} alt="item" />
      <ItemDetails>
        <Name>{props.name}</Name>
        <span>
          {props.quantity} x ${props.price}
        </span>
      </ItemDetails>
    </Item>
  );
};

export default CartItem;
