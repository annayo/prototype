import React from 'react';

function AddDevice(props) {
  const {
    id,
    name,
    deviceType,
    deviceTypes,
    onAdd,
    onCancel
  } = props;

  const submitLabel = id ? 'Update' : 'Add';

  return (
    <form onSubmit={onAdd}>
      <input type="text" placeholder="Device name" name="name" defaultValue={name} />
      <select name="deviceType" defaultValue={deviceType}>
        {
          deviceTypes.map((item, i) => {
            return <option key={i} value={item.id}>{item.type}</option>
          })
        }
      </select>
      { id &&
        <input type="hidden" name="id" value={id} />
      }
      <input type="submit" value={submitLabel} />
      <span onClick={onCancel}>Close</span>
    </form>
  );
}

export default AddDevice;
