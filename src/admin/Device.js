import React from 'react';
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
    <li>
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
      <span onClick={()=> onEditToggle(id)}>[ edit ]</span>
      <span onClick={()=> onRemove(id)}>[ x ]</span>
    </li>
  );
}

export default Device;
