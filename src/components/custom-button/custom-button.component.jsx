import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ text, customStyle, ...otherProps }) => (
  <button className="button" style={customStyle} {...otherProps}>
    {text.toUpperCase()}
  </button>
);

export default CustomButton;
