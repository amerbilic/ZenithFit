import React from "react";
import {Overview, Title, Preview} from './collections-preview.styles'
import Product from "../product/product.";

const CollectionPreview = (props) => {
  return (
    <Overview>
      <Title to={`/shop/${props.title}`} >{props.title.toUpperCase()}</Title>
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

export default CollectionPreview;
