import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React, { Fragment } from "react";
import {
  Info,
  Container,
  Circle,
  Image,
  Icon,
  DetailContainer,
  Price,
  Name,
  MainContainer,
  CollectionStar,
} from "./product.styles";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import { calcRating, getRatings } from "../../helpers/calculateRating";
import StarRatingDetail from "../UI/Star-Rating-Detail/star-rating-detail";
import { useHistory } from "react-router-dom";

const Product = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ratingScores = props.rating ? props.rating.map(getRatings) : 0;
  const totalRating = props.rating ? ratingScores.reduce(calcRating, 0) : 0;
  const averageRating = props.rating ? totalRating / ratingScores.length : 0;
  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.img,
      })
    );
  };

  const searchClickHandler = () => {
    history.push(`/shop/articles/${props.id}`);
  };

  return (
    <Fragment>
      <MainContainer>
        <Container>
          <Circle />
          <Image src={props.img} />
          {!props.review && (
            <Info>
              <Icon>
                <ShoppingCartOutlined onClick={addItemHandler} />
              </Icon>
              <Icon>
                <SearchOutlined onClick={searchClickHandler} />
              </Icon>
            </Info>
          )}
        </Container>
        <DetailContainer>
          <Name>{props.name}</Name>
          <Price>${props.price}</Price>
        </DetailContainer>
        <CollectionStar>
          {!props.review && (
            <StarRatingDetail size={20} rating={averageRating} />
          )}
        </CollectionStar>
      </MainContainer>
    </Fragment>
  );
};

export default Product;
