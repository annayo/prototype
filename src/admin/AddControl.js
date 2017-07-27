import React from 'react';

function AddControl(props) {
  const {
    id,
    name,
    type,
    onAdd,
    onCancel
  } = props;

  const submitLabel = name ? 'Update' : 'Add';

  return (
    <form onSubmit={onAdd}>
      <input type="text" placeholder="Control name" name="name" defaultValue={name} />
      <select name="type" value={type}>
        <option value="switch">Switch</option>
        <option value="slider">Slider</option>
        <option value="select">Select</option>
      </select>
      { id &&
        <input type="hidden" name="id" value={id} />
      }
      <input type="submit" value={submitLabel} />
      <span onClick={onCancel}>Close</span>
    </form>
  );
}

export default AddControl;
