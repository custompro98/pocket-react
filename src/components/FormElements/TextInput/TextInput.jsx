import React from 'react';
import './TextInput.css';

const TextInput = (props) => (
  <div className="textInput__div">
    <label htmlFor={props.name} className="textInput__label">{props.label}:</label>
    <input className="textInput__input" {...props} />
  </div>
);

export default TextInput;
