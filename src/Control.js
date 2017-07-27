import React from 'react';

function Control(props) {
  const {
    id,
    name,
    onRemoveControl
  } = props;

  return (
    <li>{name} <span onClick={()=> onRemoveControl(id)}>remove</span></li>
  );
}

export default Control;
