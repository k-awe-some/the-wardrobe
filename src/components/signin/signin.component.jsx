import React from "react";
import "./signin.styles.scss";

import { signInWithGoogleMethod } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => event.preventDefault();

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <h3>I already have an account.</h3>
        <form className="signin__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="Your email"
            value={email}
          />
          <FormInput
            type="password"
            name="password"
            label="Your password"
            value={password}
          />
          <div className="signin__buttons">
            <CustomButton
              text="sign in"
              customStyle={{
                backgroundColor: "#282828",
                color: "#fefefe"
              }}
              customOnClick={this.handleSubmit}
            />
            <CustomButton
              text="sign in with google"
              customStyle={{
                backgroundColor: "rgba(205, 192, 152, 1)",
                color: "#282828"
              }}
              customOnClick={signInWithGoogleMethod}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
