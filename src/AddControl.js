import React from 'react';

function AddControl(props) {
  const {
    onAddControl,
    onCancel
  } = props;

  return (
    <form onSubmit={onAddControl}>
      <input type="text" placeholder="Control name" name="name" />
      <select name="type">
        <option value="switch">Switch</option>
        <option value="slider">Slider</option>
        <option value="select">Select</option>
      </select>
      <input type="submit" value="Add" />
      <span onClick={onCancel}>Close</span>
    </form>
  );
}

export default AddControl;
