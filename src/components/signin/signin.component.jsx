import React from "react";

import { signInWithGoogleMethod } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => event.preventDefault();

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput type="text" name="email" label="Your email" value={email} />
        <FormInput
          type="password"
          name="password"
          label="Your password"
          value={password}
        />
        <button type="submit">Sign in</button>
        <button onClick={signInWithGoogleMethod}>Sign in with Google</button>
      </form>
    );
  }
}

export default SignIn;
