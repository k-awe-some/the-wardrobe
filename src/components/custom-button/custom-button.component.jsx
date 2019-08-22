import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ text, customOnClick, customStyle }) => (
  <div className="button" style={customStyle} onClick={customOnClick}>
    {text.toUpperCase()}
  </div>
);

export default CustomButton;
