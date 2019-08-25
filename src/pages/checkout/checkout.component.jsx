import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <h4 className="checkout__message">
        Your cart is empty. Fill it up with our{" "}
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
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(Checkout);
