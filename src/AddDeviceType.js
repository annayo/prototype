import React from 'react';

function AddDeviceType(props) {
  const {
    controls,
    onAdd,
    onCancel
  } = props;

  return (
    <form onSubmit={onAdd}>
      <select name="type">
        <option value="apple-tv">Apple TV</option>
        <option value="samgsung-audio">Samsung Audio</option>
      </select>
      <input type="text" placeholder="HTTP Endpoint" name="endpoint" />
      <select name="control">
        {
          controls.map((item, i) => {
            return <option value={item.id}>{item.name}</option>
          })
        }
      </select>
      <input type="submit" value="Add" />
      <span onClick={onCancel}>Close</span>
    </form>
  );
}

export default AddDeviceType;
