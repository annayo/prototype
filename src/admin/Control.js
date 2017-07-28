import React from 'react';
import { Glyphicon } from 'react-bootstrap';
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
    <li className={props.className}>
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
      { !isEditing &&
        <div className="btn-row--inline">
          <button onClick={()=> onEditToggle(id)}><Glyphicon glyph="pencil" /></button>
          <button onClick={()=> onRemove(id)}><Glyphicon glyph="remove" /></button>
        </div>
      }
    </li>
  );
}

export default Control;
