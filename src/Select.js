import React from 'react';

function Select(props) {
  const {
    id,
    name,
    value,
    onChange
  } = props;

  return (
    <div>{props.name}
      <select id={id} defaultValue={value} onChange={onChange}>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>
    </div>
  );
}

export default Select;
