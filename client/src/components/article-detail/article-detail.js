import { Fragment, useEffect } from "react";
import { fetchDetailData } from "../../store/Articles/articles-actions";
import { useSelector, useDispatch } from "react-redux";
import {
  Details,
  BigImage,
  BigImageChild,
  Box,
  Paragraph,
  Title,
  Span,
  Row,
  ProductHR,
} from "./article-detail.styles.js";
import Button from "../UI/Button/button";
import StarRatingDetail from "../UI/Star-Rating-Detail/star-rating-detail";
import { cartActions } from "../../store/index";
import Products from "../products/Products";

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
    <Fragment>
      <Details>
        <BigImage className="big-img">
          <BigImageChild src={item.img} alt="" />
        </BigImage>
        <Box>
          <Row>
            <Title>{item.name}</Title>
          </Row>
          <StarRatingDetail size={30} rating={rating} />
          <Paragraph>{`${item.desc}`}</Paragraph>
          <ProductHR aria-hidden="true"></ProductHR>
          <Span>${item.price}</Span>
          <ProductHR aria-hidden="true"></ProductHR>
          <Button className="cartB" onClick={addItemHandler}>
            Add to cart
          </Button>
        </Box>
      </Details>
      {item.category ? <Products recommended={true} articleId={item.id} /> : ""}
    </Fragment>
  );
};

export default ArticleDetail;
