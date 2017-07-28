import React from 'react';
import { Glyphicon } from 'react-bootstrap';

function AddDevice(props) {
  const {
    id,
    name,
    deviceType,
    deviceTypes,
    onAdd,
    onCancel
  } = props;

  return (
    <form onSubmit={onAdd} className="form--add">
      <input type="text" placeholder="Device name" name="name" defaultValue={name} />
      <select name="deviceType" defaultValue={deviceType}>
        <option value={null}>--- Select device type ---</option>
        {
          deviceTypes.map((item, i) => {
            return <option key={i} value={item.id}>{item.type}</option>
          })
        }
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

export default AddDevice;
