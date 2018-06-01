import React from 'react';
import './TextInput.css';

const TextInput = (props) => (
  <div className="TextInput__Wrapper">
    <label htmlFor={props.name} className="TextInput__Label">{props.label}</label>
    <input className="TextInput__Input" id={props.name} {...props} />
  </div>
);

export default TextInput;
