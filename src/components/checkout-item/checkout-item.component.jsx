import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";

import { addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem }) => (
  <div className="checkout-item">
    <div
      className="checkout-item__image"
      style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
    />

    <div className="checkout-item__info">
      <h3>{cartItem.name}</h3>
      <p>
        {cartItem.quantity === 1 ? (
          <span style={{ color: "#CDC098" }}>&#171;</span>
        ) : (
          <span onClick={() => removeItem(cartItem)}>&#171;</span>
        )}{" "}
        {cartItem.quantity}{" "}
        <span onClick={() => addItem(cartItem)}>&#187;</span>
      </p>
    </div>

    <div className="checkout-item__price">${cartItem.price}.00</div>

    <div className="checkout-item__total">
      ${cartItem.price * cartItem.quantity}.00
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
