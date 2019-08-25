import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";

import {
  selectCartItems,
  selectCartValueCount
} from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems, cartValueCount }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {" "}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="cart-dropdown__button">
      <span>Total: ${cartValueCount}</span>
      <Link to="/checkout">
        <CustomButton
          text="checkout"
          customStyle={{
            backgroundColor: "#282828",
            color: "#fefefe"
          }}
        />
      </Link>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartValueCount: selectCartValueCount
});

export default connect(mapStateToProps)(CartDropdown);
