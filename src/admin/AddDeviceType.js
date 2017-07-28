import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import AddControlToDeviceType from './AddControlToDeviceType';

class AddDeviceType extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    // TODO: provide link to admin/controls if !controls.length

    const {
      id,
      type,
      endpoint,
      control,
      controls,
      onAdd,
      onCancel
    } = this.props;

    const submitLabel = id ? 'Update' : 'Add';

    return (
      <form onSubmit={onAdd}>
        <select name="type" defaultValue={type}>
          <option value="apple-tv">Apple TV</option>
          <option value="samgsung-audio">Samsung Audio</option>
        </select>
        <input type="text" placeholder="HTTP Endpoint" name="endpoint" defaultValue={endpoint} />

        <AddControlToDeviceType controls={controls} />

        <select name="control" defaultValue={control}>
          <option value={null}>Select a control</option>
          {
            controls.map((item, i) => {
              return <option key={i} value={item.id}>{item.name}</option>
            })
          }
        </select>
        { id &&
          <input type="hidden" name="id" value={id} />
        }
        <input type="hidden" name="controlIDs" value="testID" />
        <input type="submit" value={submitLabel} />
        <span onClick={onCancel}>Close</span>
      </form>
    );
  }
}

export default AddDeviceType;
