import React from "react";
import "./signup.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup">
        <h3>I would like to be signed up.</h3>
        <form className="signup__form">
          <FormInput type="text" name="name" label="Display name" />
          <FormInput type="text" name="email" label="Your email" />
          <FormInput type="password" name="password" label="Your password" />
          <FormInput type="password" name="password" label="Confirm password" />
          <CustomButton
            text="sign up"
            customStyle={{
              backgroundColor: "#282828",
              color: "#fefefe"
            }}
            customOnClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
