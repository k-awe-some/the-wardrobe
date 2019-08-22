import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const activeStyle = {
  color: "#968B65"
};

const Header = ({ currentUser }) => (
  <div className="header">
    <NavLink exact to="/" className="header__item" activeStyle={activeStyle}>
      HOME
    </NavLink>
    <NavLink to="/shop" className="header__item" activeStyle={activeStyle}>
      SHOP
    </NavLink>
    <NavLink to="/contact" className="header__item" activeStyle={activeStyle}>
      CONTACT
    </NavLink>

    <div className="header__item header__item--button-style">
      {currentUser ? (
        <div onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        <NavLink to="/signin" activeStyle={activeStyle}>
          SIGN IN
        </NavLink>
      )}
    </div>
  </div>
);

export default Header;
