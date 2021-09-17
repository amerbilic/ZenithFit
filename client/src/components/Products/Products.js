import React, { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Product from "../product/product.";

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
  const directory = useSelector((state) => state.directory.directoryItems);
  return (
    <Fragment>
      <Title>Best Sellers</Title>
      <Container>
        {directory.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            img={item.imageUrl}
            rating={[4, 3]}
          />
        ))}
      </Container>
    </Fragment>
  );
};

export default Products;
