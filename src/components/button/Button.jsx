import React from "react";
import "./button.css/Button.css";
function Button({ children, value }) {
  return (
    <>
      <button className="btn btn-primary" type="button" value={value}>
        {children}
      </button>
    </>
  );
}

export default Button;
