import React from "react";

const Input = ({ type, placeholder, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="search-bar"
    />
  );
};

export default Input;
