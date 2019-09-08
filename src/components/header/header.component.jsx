import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const activeStyle = {
  color: "#968B65"
};

const Header = ({ currentUser, hidden, dispatch }) => (
  <div className="header">
    <div className="user">
      {currentUser ? (
        <div>
          Welcome,
          <br /> {currentUser.displayName}
        </div>
      ) : null}
    </div>

    <div className="nav">
      <NavLink exact to="/" className="nav__item" activeStyle={activeStyle}>
        HOME
      </NavLink>
      <NavLink to="/shop" className="nav__item" activeStyle={activeStyle}>
        SHOP
      </NavLink>

      <div className="nav__item nav__item--button-style">
        {currentUser ? (
          <div onClick={() => dispatch(signOutStart())}>SIGN OUT</div>
        ) : (
          <NavLink to="/signin" activeStyle={activeStyle}>
            SIGN IN
          </NavLink>
        )}
      </div>

      <div className="nav__item">
        {" "}
        <CartIcon />
      </div>
    </div>

    {hidden === true ? null : <CartDropdown style={{ position: "sticky" }} />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
