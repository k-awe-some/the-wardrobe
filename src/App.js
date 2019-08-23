import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.scss";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
// import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot =>
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            },
            () => console.log(this.state)
          )
        );
      } else {
        this.setState({ currentUser: userAuth });
        // this makes sure currentUser is set to null when user signs out
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <div className="App">
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignInSignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
