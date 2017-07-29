import React from 'react';
import './Select.css';

function Select(props) {
  const {
    id,
    name,
    value,
    onChange
  } = props;

  return (
    <div className="Select">
      <label>{props.name}</label>
      <select id={id} defaultValue={value} onChange={onChange}>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>
    </div>
  );
}

export default Select;
