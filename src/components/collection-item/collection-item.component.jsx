import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => (
  <div className="preview-item" key={item.id}>
    <div
      className="preview-item--background"
      style={{ backgroundImage: `url('${item.imageUrl}')` }}
    ></div>
    <CustomButton text="add to cart" onClick={() => addItem()} />
    <div className="preview-item--info">
      <span>{item.name}</span>
      <span>${item.price}.00</span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
