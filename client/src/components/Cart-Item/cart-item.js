import "./cart-item.styles.scss";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.img} alt="item" />
      <div className="item-details">
        <span className="name">{props.name}</span>
        <span className="price">
          {props.quantity} x ${props.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
