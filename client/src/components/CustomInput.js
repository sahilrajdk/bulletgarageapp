import React from "react";

const customInput = ({ type, name, value, onChange, placeholder, label }) => {
  return (
    <div className="form__group">
      <label htmlFor={name}>{label}</label>
      <input
        className="customInput"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default customInput;
