import React from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./cart-icon.styles.scss";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown }) => {
  return <FaShoppingCart size={28} onClick={toggleCartDropdown} />;
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
