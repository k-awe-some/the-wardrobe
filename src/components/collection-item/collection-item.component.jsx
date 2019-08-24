import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item }) => (
  <div className="preview-item" key={item.id}>
    <div
      className="preview-item--background"
      style={{ backgroundImage: `url('${item.imageUrl}')` }}
    ></div>
    <CustomButton text="add to cart" />
    <div className="preview-item--info">
      <span>{item.name}</span>
      <span>${item.price}.00</span>
    </div>
  </div>
);

export default CollectionItem;
