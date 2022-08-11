import React from "react";

const Input = ({ type, placeholder, value, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      className="search-bar"
    />
  );
};

export default Input;
