import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, type, ...otherProps }) => (
  <div className="input">
    {label}
    <input className="input__field" type={type} {...otherProps} />
  </div>
);

export default FormInput;
