import React, { Component } from "react";

const Input = (props) => {
  const { name, label, value ,error,onChange} =  props ;
    
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
