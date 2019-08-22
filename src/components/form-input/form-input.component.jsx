import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="input">
    <div>{label}</div>
    <input className="input__field" onChange={handleChange} />
  </div>
);

export default FormInput;
