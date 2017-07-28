import React from 'react';

function AddDeviceType(props) {
  const {
    id,
    type,
    endpoint,
    control,
    controls,
    onAdd,
    onCancel
  } = props;

  const submitLabel = id ? 'Update' : 'Add';

  return (
    <form onSubmit={onAdd}>
      <select name="type" defaultValue={type}>
        <option value="apple-tv">Apple TV</option>
        <option value="samgsung-audio">Samsung Audio</option>
      </select>
      <input type="text" placeholder="HTTP Endpoint" name="endpoint" defaultValue={endpoint} />
      <select name="control" defaultValue={control}>
        {
          controls.map((item, i) => {
            return <option key={i} value={item.id}>{item.name}</option>
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

export default AddDeviceType;
