import React, { useState } from "react";
import { connect } from "react-redux";
import "./signin.styles.scss";

import {
  signInWithGoogleStart,
  signInWithEmailStart
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = ({ dispatch }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(signInWithEmailStart({ email, password }));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signin">
      <h3>I already have an account.</h3>
      <form className="signin__form" onSubmit={handleSubmit}>
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
        <div className="signin__buttons">
          <CustomButton
            type="submit"
            text="sign in"
            customStyle={{
              backgroundColor: "#282828",
              color: "#fefefe"
            }}
            onClick={handleChange}
          />
          <CustomButton
            type="button"
            text="sign in with google"
            customStyle={{
              backgroundColor: "rgba(205, 192, 152, 1)",
              color: "#282828"
            }}
            onClick={() => dispatch(signInWithGoogleStart())}
          />
        </div>
      </form>
    </div>
  );
};

export default connect()(SignIn);
