import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {" "}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="cart-dropdown__button">
      <CustomButton
        text="checkout"
        customStyle={{
          backgroundColor: "#282828",
          color: "#fefefe"
        }}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
