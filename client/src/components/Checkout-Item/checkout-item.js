import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  const increaseHandler = () =>{
      dispatch(cartActions.addToCart(props))
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={props.img} />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
        <div className="arrow disable-select" onClick={deleteHandler}>&#10094;</div>
        {props.quantity}
        <div className="arrow disable-select" onClick={increaseHandler}>&#10095;</div>
      </span>

      <span className="price">${props.price}</span>
      <div className="remove-button disable-select" onClick={deleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
