import React from "react";

import FormInput from "../form-input/form-input.component";

class SignUp extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <FormInput type="text" name="name" label="Display name" />
        <FormInput type="text" name="email" label="Your email" />
        <FormInput type="password" name="password" label="Your password" />
        <FormInput type="password" name="password" label="Confirm password" />
        <button onClick={this.handleSubmit}>Sign up</button>
      </form>
    );
  }
}

export default SignUp;
