import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, type, ...otherProps }) => (
  <div className="input">
    <div>{label}</div>
    <input className="input__field" onChange={handleChange} type={type} />
  </div>
);

export default FormInput;
