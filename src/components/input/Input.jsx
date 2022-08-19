import React from "react";

const Input = ({ type, placeholder, value, id, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      className={className}
    />
  );
};

export default Input;
