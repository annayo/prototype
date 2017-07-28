import React from 'react';
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
    <li>
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
      <span onClick={()=> onEditToggle(id)}>[ edit ]</span>
      <span onClick={()=> onRemove(id)}>[ x ]</span>
    </li>
  );
}

export default DeviceType;
