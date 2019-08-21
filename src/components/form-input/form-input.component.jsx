import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
    <input onChange={handleChange} />
    {label}
  </div>
);

export default FormInput;
