import { useEffect } from "react";
import { fetchDetailData } from "../../store/Articles/articles-actions";
import { useSelector, useDispatch } from "react-redux";
import "./article-detail.styles.scss";
import Button from "../UI/Button/button";
import StarRatingDetail from "../UI/Star-Rating-Detail/star-rating-detail";
import { cartActions } from "../../store/index";

const ArticleDetail = (props) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.articles.detailItem);
  const rating = useSelector((state) => state.articles.rating);

  useEffect(() => {
    dispatch(fetchDetailData(props.id));
  }, [dispatch, props.id]);

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
      })
    );
  };

  return (
    <div className="details">
      <div className="big-img">
        <img src={item.img} alt="" className="big-img-child" />
      </div>
      <div className="box">
        <div className="row">
          <h2>{item.name}</h2>
        </div>
        <StarRatingDetail size={30} rating={rating} />
        <p>{`${item.desc}`}</p>
        <hr aria-hidden="true" className="ProductPage_hr"></hr>
        <span className="ProductPage_price">${item.price}</span>
        <hr aria-hidden="true" className="ProductPage_hr"></hr>
        <Button className="cartB" onClick={addItemHandler}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ArticleDetail;
