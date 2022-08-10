import React from "react";
import "./button.css/Button.css";
function Button({ children, forButton }) {
  return (
    <>
      <button className="btn btn-primary" htmlFor={forButton} type="button">
        {children}
      </button>
    </>
  );
}

export default Button;
