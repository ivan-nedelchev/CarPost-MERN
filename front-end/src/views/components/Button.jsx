import React from "react";
import "./Button.css";
const Button = ({ onClick, classes, children }) => {
  return (
    <>
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    </>
  );
};

export default Button;
