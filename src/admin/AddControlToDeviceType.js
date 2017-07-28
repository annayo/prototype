import React from 'react';

function AddControlToDeviceType(props) {
  const {
    controls,
    onAdd
  } = props;

  return (
    <select className="select--block" name="control" onChange={onAdd}>
      <option value={null}>--- Select control ---</option>
      {
        controls.map((item, i) => {
          return <option key={i} value={item.id}>{item.name}</option>
        })
      }
    </select>
  );
}

export default AddControlToDeviceType;
