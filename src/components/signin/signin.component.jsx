import React from "react";

import { signInWithGoogleMethod } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => event.preventDefault();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Username: <input type="text" />
        Password: <input type="password" />
        <button type="submit">Submit</button>
        <button onClick={signInWithGoogleMethod}>Sign in with Google</button>
      </form>
    );
  }
}

export default SignIn;
