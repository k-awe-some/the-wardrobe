import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import {
  selectCartItems,
  selectCartValueCount
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const Checkout = ({ cartItems, cartValueCount }) => {
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

      <div className="checkout__total">
        <span>TOTAL: ${cartValueCount}.00</span>
      </div>

      <div className="checkout__test-card">
        *** Please use the following test credit card for payments ***
        <br />
        <br />
        <span>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</span>
      </div>

      <div className="checkout__button">
        <StripeButton price={cartValueCount} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartValueCount: selectCartValueCount
});

export default connect(mapStateToProps)(Checkout);
