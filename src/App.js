import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
// import logo from "./logo.svg";
import "./App.scss";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
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
            id: snapshot.id,
            ...snapshot.data()
          })
        );
      }
      setCurrentUser(userAuth);
      // at this point pass in the object 'userAuth' for the state to be updated
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
            <Route exact path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

// map the 'user.currentUser' slice of state to a prop of App's
// so App gets that slice & uses it to 'Redirect'
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// map dispatched 'setCurrentUser' action to a prop of App's
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
