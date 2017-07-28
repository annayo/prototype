import React from 'react';

function Slider(props) {
  const {
    id,
    name,
    value,
    onChange
  } = props;

  return (
    <div>{props.name}
      <input id={id} defaultValue={value} onChange={onChange} type="range" />
    </div>
  );
}

export default Slider;
