import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Product from "../product/product.";
import {
  fetchBestSellers,
  fetchRecommendedArticles,
} from "../../store/Articles/articles-actions";

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

const Products = ({ recommended, articleId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const bestSellers = useSelector((state) => state.articles.bestSellers);
  const item = useSelector((state) => state.articles.detailItem);
  const recommendedArticles = useSelector(
    (state) => state.articles.recommendedArticles
  );
  const filteredArray = recommendedArticles.filter((article) => {
    return article.id !== articleId;
  });
  const dataArray = recommended ? filteredArray : bestSellers;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (recommended === true) {
        dispatch(fetchRecommendedArticles(item.category.id));
      } else {
        dispatch(fetchBestSellers());
      }
    };
    fetchData();
    setIsLoading(false);
  }, [dispatch]);

  return (
    <Fragment>
      <Title>{recommended ? "Similar Articles" : "Best Sellers"}</Title>
      <Container>
        {!isLoading ? (
          dataArray
            .filter((item, idx) => idx < 4)
            .map((item) => (
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
          <div>Loading...</div>
        )}
      </Container>
    </Fragment>
  );
};

export default Products;
