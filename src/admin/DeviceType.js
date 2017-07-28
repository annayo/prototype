import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import AddDeviceType from './AddDeviceType';

function DeviceType(props) {
  const {
    id,
    name,
    type,
    controlIDs,
    endpoint,
    controls,
    isEditing,
    onEdit,
    onEditToggle,
    onEditCancel,
    onRemove
  } = props;

  return (
    <li className={props.className}>
      { isEditing &&
        <AddDeviceType
          id={id}
          name={name}
          type={type}
          endpoint={endpoint}
          controlIDs={controlIDs}
          controls={controls}
          onAdd={onEdit}
          onCancel={onEditCancel}
        />
      }
      { !isEditing &&
        <span>{type}</span>
      }
      { !isEditing &&
        <div className="btn-row--inline">
          <button onClick={()=> onEditToggle(id)}><Glyphicon glyph="pencil" /></button>
          <button onClick={()=> onRemove(id)}><Glyphicon glyph="remove" /></button>
        </div>
      }
    </li>
  );
}

export default DeviceType;
