import React from 'react';

function DeviceType(props) {
  const {
    id,
    name,
    type,
    endpoint,
    onRemove
  } = props;

  return (
    <li>{name} {endpoint} {type} <span onClick={()=> onRemove(id)}>[ x ]</span></li>
  );
}

export default DeviceType;
