import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <h4 className="checkout__message">
        Your cart is empty. Fill it with our{" "}
        <Link to="./shop" style={{ color: "#968B65" }}>
          amazing items
        </Link>
        .
      </h4>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout__header">
        <span>ITEM</span>
        <span>QUANTITY</span>
        <span>PRICE</span>
        <span>TOTAL</span>
      </div>

      {cartItems.map(cartItem => (
        <div className="checkout__item" key={cartItem.id}>
          <div
            className="checkout__item--image"
            style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
          />

          <div className="checkout__item--info">
            <h3>{cartItem.name}</h3>
            <p>{cartItem.quantity}</p>
          </div>

          <div className="checkout__item--price">${cartItem.price}</div>

          <div className="checkout__item--total">
            ${cartItem.price * cartItem.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(Checkout);
