import React, { Component } from 'react';
import AddControlToDeviceType from './AddControlToDeviceType';

class AddDeviceType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlIDs: props.controlIDs ? props.controlIDs : []
    }

    this.addControl = this.addControl.bind(this);
    this.removeControl = this.removeControl.bind(this);
  }

  getControlsMetadata() {
    const controls = this.props.controls.filter((item, i) => {
      return this.state.controlIDs.filter((id, n) => item.id === id).length;
    });

    return controls;
  }

  addControl(e) {
    const id = e.target.value;
    this.setState({ controlIDs: this.state.controlIDs.concat(id)});
  }

  removeControl(id) {
    this.setState({
      controlIDs: this.state.controlIDs.filter((item) => item !== id)
    });
  }

  render() {
    // TODO: provide link to admin/controls if !controls.length
    const {
      id,
      type,
      endpoint,
      controls,
      onAdd,
      onCancel
    } = this.props;

    const submitLabel = id ? 'Update' : 'Add';
    const controlIDs = this.state.controlIDs.join(',');
    const controlsMetadata = this.getControlsMetadata();

    return (
      <form onSubmit={onAdd}>
        <select name="type" defaultValue={type}>
          <option value="Apple TV">Apple TV</option>
          <option value="Samsung Audio">Samsung Audio</option>
          <option value="Citrus Light">Citrus Light</option>
        </select>
        <input type="text" placeholder="HTTP Endpoint" name="endpoint" defaultValue={endpoint} />
        <AddControlToDeviceType
          controls={controls}
          onAdd={this.addControl}
        />
        {
          controlsMetadata.map((item, i) => {
            return <div key={i}>
                    <span>{item.name}</span> | <span>{item.type}</span>
                    <span onClick={()=> this.removeControl(item.id)}>[ x ]</span>
                  </div>
          })
        }
        { id &&
          <input type="hidden" name="id" value={id} />
        }
        <input type="hidden" name="controlIDs" value={controlIDs} />
        <input type="submit" value={submitLabel} />
        <span onClick={onCancel}>Close</span>
      </form>
    );
  }
}
export default AddDeviceType;
