import React from 'react';
import AddDeviceType from './AddDeviceType';

function DeviceType(props) {
  const {
    id,
    name,
    type,
    control,
    endpoint,
    controls,
    isEditing,
    onEdit,
    onEditToggle,
    onEditCancel,
    onRemove
  } = props;

  const controlItem = controls.filter((item) => item.id === control)[0];
  const controlName = controlItem ? controlItem.name : null;

  return (
    <li>
      { isEditing &&
        <AddDeviceType
          id={id}
          name={name}
          type={type}
          endpoint={endpoint}
          control={control}
          controls={controls}
          onAdd={onEdit}
          onCancel={onEditCancel}
        />
      }
      { !isEditing &&
        <span>{name} {endpoint} {type} {controlName}</span>
      }
      <span onClick={()=> onEditToggle(id)}>[ edit ]</span>
      <span onClick={()=> onRemove(id)}>[ x ]</span>
    </li>
  );
}

export default DeviceType;
