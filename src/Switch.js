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
    <div className="Switch">
      <label>{name}</label>
      <Toggle
        id={id}
        defaultChecked={checked}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Switch;
