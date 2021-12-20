import React from "react";
import Product from "../product/product.";
import {Overview,Title,Preview} from './directory-shop-item.styles'

const DirectoryShopItem = (props) => {
  return (
    <Overview >
      <Title >{props.title.toUpperCase()}</Title>
      <Preview >
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                rating={item.rating}
              />
            );
          })}
      </Preview>
    </Overview>
  );
};

export default DirectoryShopItem;
