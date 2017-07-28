import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import AddDevice from './AddDevice';

function Device(props) {
  const {
    id,
    name,
    deviceType,
    deviceTypes,
    isEditing,
    onEdit,
    onEditToggle,
    onEditCancel,
    onRemove
  } = props;

  const deviceTypeItem = deviceTypes.filter((item) => item.id === deviceType)[0];
  const deviceTypeName = deviceTypeItem ? deviceTypeItem.type : null;

  return (
    <li className={props.className}>
      { isEditing &&
        <AddDevice
          id={id}
          name={name}
          deviceType={deviceType}
          deviceTypes={deviceTypes}
          onAdd={onEdit}
          onCancel={onEditCancel}
        />
      }
      { !isEditing &&
        <span>{name} {deviceTypeName}</span>
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

export default Device;
