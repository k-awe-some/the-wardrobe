import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import { auth } from "./firebase/firebase.utils";

// import Home from "./pages/home/home.component";
// import Shop from "./pages/shop/shop.component";
import SignInSignOut from "./pages/signin-signout/signin-signout.component";

class App extends React.Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user =>
      this.setState({
        currentUser: user
      })
    );
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="App">
        <SignInSignOut />
      </div>
    );
  }
}

export default App;
