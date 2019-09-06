import React from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./cart-icon.styles.scss";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ dispatch }) => {
  return (
    <FaShoppingCart size={28} onClick={() => dispatch(toggleCartDropdown())} />
  );
};

export default connect()(CartIcon);
