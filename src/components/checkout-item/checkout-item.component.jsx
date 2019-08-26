import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";

import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, dispatch }) => (
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
          <span onClick={() => dispatch(removeItem(cartItem))}>&#171;</span>
        )}{" "}
        {cartItem.quantity}{" "}
        <span onClick={() => dispatch(addItem(cartItem))}>&#187;</span>
        <button onClick={() => dispatch(clearItem(cartItem))}>Delete</button>
      </p>
    </div>

    <div className="checkout-item__price">${cartItem.price}.00</div>

    <div className="checkout-item__total">
      ${cartItem.price * cartItem.quantity}.00
    </div>
  </div>
);

export default connect()(CheckoutItem);
