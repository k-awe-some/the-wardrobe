import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <span>spinning</span>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
