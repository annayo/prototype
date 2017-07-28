import React from 'react';

function AddControlToDeviceType(props) {
  const {
    controls,
    onAdd
  } = props;

  return (
    <div>
      <select name="control" onChange={onAdd}>
        <option value={null}>--- Add a control ---</option>
        {
          controls.map((item, i) => {
            return <option key={i} value={item.id}>{item.name}</option>
          })
        }
      </select>
    </div>
  );
}

export default AddControlToDeviceType;
