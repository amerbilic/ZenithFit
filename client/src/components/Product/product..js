import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React, { Fragment } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import { Link } from "react-router-dom";
import { calcRating, getRatings } from "../../helpers/calculateRating";
import StarRatingDetail from "../UI/Star-Rating-Detail/star-rating-detail";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 99%;
  width: 99%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #5DFDCB;
    transform: scale(1.1);
  }
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
  align-items: center;
`;

const Price = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: crimson;
  font-weight: 500;
  padding-right: 5px;
`;

const Name = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-weight: 500;
`;

const MainContainer = styled.div`
  flex: 1;
`;

const CollectionStar = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;

const Product = (props) => {
  const dispatch = useDispatch();
  const ratingScores = props.rating.map(getRatings);
  const totalRating = ratingScores.reduce(calcRating, 0);
  const averageRating = totalRating / ratingScores.length;
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

  return (
    <Fragment>
      <MainContainer>
        <Container>
          <Circle />
          <Image src={props.img} />
          <Info>
            <Icon>
              <ShoppingCartOutlined onClick={addItemHandler} />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
          </Info>
        </Container>
        <DetailContainer>
          <Name>{props.name}</Name>
          <Price>${props.price}</Price>
        </DetailContainer>
        <CollectionStar>
          <StarRatingDetail size={20} rating={averageRating} />
        </CollectionStar>
      </MainContainer>
    </Fragment>
  );
};

export default Product;
