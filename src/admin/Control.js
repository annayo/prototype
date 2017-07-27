import React from 'react';
import AddControl from './AddControl';

function Control(props) {
  const {
    id,
    name,
    type,
    isEditing,
    onEdit,
    onEditCancel,
    onEditDone,
    onRemove
  } = props;

  return (
    <li>
      {name} {type}
      <span onClick={()=> onEdit(id)}>[ edit ]</span>
      <span onClick={()=> onRemove(id)}>[ x ]</span>
    </li>
  );
}

export default Control;
