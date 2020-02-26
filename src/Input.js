
import React from 'react';

function Input(props) {
  const {
    type,
    placeholder,
    value,
    onChange
  } = props;

  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e=> onChange(e.target.value)}/>
  )
}

export default Input;
