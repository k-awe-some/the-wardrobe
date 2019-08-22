import React from "react";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <React.Fragment>
    <ul>
      <li>HOME</li>
      <li>SHOP</li>
      <li>CONTACT</li>
      <li>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <div>SIGN IN</div>
        )}
      </li>
    </ul>
  </React.Fragment>
);

export default Header;
