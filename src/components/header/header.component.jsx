import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <React.Fragment>
    <ul>
      <Link to="/">HOME</Link>
      <li>SHOP</li>
      <li>CONTACT</li>
      <Link to="/signin">
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <div>SIGN IN</div>
        )}
      </Link>
    </ul>
  </React.Fragment>
);

export default Header;
