import React from 'react';
import './Slider.css';

function Slider(props) {
  const {
    id,
    name,
    value,
    onChange
  } = props;

  return (
    <div className="Slider">
      <label>{name}</label>
      <input className="Slider-input" id={id} defaultValue={value} onChange={onChange} type="range" />
    </div>
  );
}

export default Slider;
