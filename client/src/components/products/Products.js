import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Product from "../product/product.";
import { fetchBestSellers } from "../../store/Articles/articles-actions";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: Flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Products = () => {
  const dispatch = useDispatch();
  const bestSellers = useSelector((state) => state.articles.bestSellers);

  useEffect(() => {
    dispatch(fetchBestSellers());
  }, [dispatch]);

  return (
    <Fragment>
      <Title>Best Sellers</Title>
      <Container>
        {bestSellers.length > 1 ? (
          bestSellers.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              rating={item.rating}
            />
          ))
        ) : (
          <div>loading...</div>
        )}
      </Container>
    </Fragment>
  );
};

export default Products;
