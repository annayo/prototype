import React from 'react';
import Toggle from 'react-toggle'
import './Switch.css'

function Switch(props) {
  const {
    id,
    name,
    value,
    checked,
    onChange
  } = props;

  return (
    <label>
      <span>{name}</span>
      <Toggle
        id={id}
        defaultChecked={checked}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

export default Switch;
