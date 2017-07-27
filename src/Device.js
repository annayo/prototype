import React from 'react';

function Device(props) {
  return (
    <div className="Device">
      <h2>Home > Device: {props.match.params.name}</h2>
    </div>
  );
}

export default Device;
