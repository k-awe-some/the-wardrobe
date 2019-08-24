import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img className="cart-item__image" src={imageUrl} alt={name} />
    <div className="cart-item__details">
      <span>{name}</span>
      <br />
      <span>
        ${price} x {quantity}
      </span>
    </div>
  </div>
);

export default CartItem;
