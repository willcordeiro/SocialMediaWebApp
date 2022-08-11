import React from "react";
import "./button.css/Button.css";
function Button({ children, forButton, value }) {
  return (
    <>
      <button
        className="btn btn-primary"
        htmlFor={forButton}
        type="button"
        value={value}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
