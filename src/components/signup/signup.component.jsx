import React, { useState } from "react";
import { connect } from "react-redux";
import "./signup.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ dispatch }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });
  const { displayName, email, password, confirmedPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Passwords don't match");
      return;
    }

    dispatch(signUpStart({ displayName, email, password, confirmedPassword }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup">
      <h3>I would like to be signed up.</h3>
      <form className="signup__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Your email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Your password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          label="Confirm password"
          value={confirmedPassword}
          onChange={handleChange}
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
};

export default connect()(SignUp);
