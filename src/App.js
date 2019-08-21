import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import { auth } from "./firebase/firebase.utils";

// import Home from "./pages/home/home.component";
// import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({
        currentUser: user
      })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="App">
        <SignInSignUp />
      </div>
    );
  }
}

export default App;
