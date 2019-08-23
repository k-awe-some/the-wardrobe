import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import logo from "./logo.svg";
import "./App.scss";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
// import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot =>
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        );
      } else {
        setCurrentUser(userAuth);
        // at this point pass in the object 'userAuth' for the state to be updated
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignInSignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// map dispatched action to a prop of App's
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
// App does not need mapStateToProps() at this point
// as it no longer needs to pass currentUser to Header
// as Header is already getting the 'user' slice of the state
