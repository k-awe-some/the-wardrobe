import React from "react";
import { connect } from "react-redux";
import "./signup.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;
    const { dispatch } = this.props;
    dispatch(signUpStart({ displayName, email, password, confirmedPassword }));

    if (password !== confirmedPassword) {
      alert("Passwords don't match");
      return;
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="signup">
        <h3>I would like to be signed up.</h3>

        <form className="signup__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display name"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Your email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Your password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="confirmedPassword"
            label="Confirm password"
            value={confirmedPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton
            text="sign up"
            type="submit"
            customStyle={{
              backgroundColor: "#282828",
              color: "#fefefe"
            }}
          />
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);
