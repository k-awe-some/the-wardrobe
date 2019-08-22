import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="header__item">
      HOME
    </Link>
    <Link to="/shop" className="header__item">
      SHOP
    </Link>
    <Link to="/contact" className="header__item">
      CONTACT
    </Link>
    <div className="header__item">
      {currentUser ? (
        <div onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        <Link to="/signin">SIGN IN</Link>
      )}
    </div>
  </div>
);

export default Header;
