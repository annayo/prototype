import React from 'react';

function Control(props) {
  const {
    id,
    name,
    type,
    onRemoveControl
  } = props;

  return (
    <li>{name} {type} <span onClick={()=> onRemoveControl(id)}>[ x ]</span></li>
  );
}

export default Control;
