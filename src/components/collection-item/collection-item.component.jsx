import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, dispatch }) => (
  <div className="preview-item">
    <div
      className="preview-item--background"
      style={{ backgroundImage: `url('${item.imageUrl}')` }}
    ></div>
    <CustomButton text="add to cart" onClick={() => dispatch(addItem(item))} />
    <div className="preview-item--info">
      <span>{item.name}</span>
      <span>${item.price}.00</span>
    </div>
  </div>
);

export default connect()(CollectionItem);
