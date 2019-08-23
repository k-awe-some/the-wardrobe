import React from "react";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items"></div>
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

export default CartDropdown;
