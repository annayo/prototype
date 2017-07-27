import React from 'react';
import AddControl from './AddControl';

function Control(props) {
  const {
    id,
    name,
    type,
    isEditing,
    onEdit,
    onEditToggle,
    onEditCancel,
    onRemove
  } = props;

  return (
    <li>
      { isEditing &&
        <AddControl
          id={id}
          name={name}
          type={type}
          onAdd={onEdit}
          onCancel={onEditCancel}
        />
      }
      { !isEditing &&
        <span>{name} {type}</span>
      }
      <span onClick={()=> onEditToggle(id)}>[ edit ]</span>
      <span onClick={()=> onRemove(id)}>[ x ]</span>
    </li>
  );
}

export default Control;
