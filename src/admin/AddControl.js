import React from 'react';
import { Glyphicon } from 'react-bootstrap';

function AddControl(props) {
  const {
    id,
    name,
    type,
    onAdd,
    onCancel
  } = props;

  return (
    <form onSubmit={onAdd}>
      <input type="text" placeholder="Control name" name="name" defaultValue={name} />
      <select name="type" defaultValue={type}>
        <option value={null}>--- Select control type ---</option>
        <option value="switch">Switch</option>
        <option value="slider">Slider</option>
        <option value="select">Select</option>
      </select>
      { id &&
        <input type="hidden" name="id" value={id} />
      }
      <div className="btn-row--inline">
        <button type="submit"><Glyphicon glyph="ok" /></button>
        <span className="btn btn--close" onClick={onCancel}>Close</span>
      </div>
    </form>
  );
}

export default AddControl;
