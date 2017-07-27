import React from 'react';

function AddDevice(props) {
  const {
    deviceTypes,
    onAdd,
    onCancel
  } = props;

  return (
    <form onSubmit={onAdd}>
      <input type="text" placeholder="Device name" name="name" />
      <select name="control">
        {
          deviceTypes.map((item, i) => {
            return <option key={i} value={item.id}>{item.name}</option>
          })
        }
      </select>
      <input type="submit" value="Add" />
      <span onClick={onCancel}>Close</span>
    </form>
  );
}

export default AddDevice;
