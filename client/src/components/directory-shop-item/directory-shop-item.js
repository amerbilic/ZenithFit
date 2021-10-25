import React from "react";
import Product from "../product/product.";

const DirectoryShopItem = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items.map((item) => {
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
      </div>
    </div>
  );
};

export default DirectoryShopItem;
