import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => (
  <div className="checkout-item">
    <div
      className="checkout-item__image"
      style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
    />

    <div className="checkout-item__info">
      <h3>{cartItem.name}</h3>
      <p>
        <span>&#171;</span> {cartItem.quantity} <span>&#187;</span>
      </p>
    </div>

    <div className="checkout-item__price">${cartItem.price}.00</div>

    <div className="checkout-item__total">
      ${cartItem.price * cartItem.quantity}.00
    </div>
  </div>
);

export default CheckoutItem;
