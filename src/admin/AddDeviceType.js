import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
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

    const controlIDs = this.state.controlIDs.join(',');
    const controlsMetadata = this.getControlsMetadata();

    return (
      <form onSubmit={onAdd}>
        <select name="type" defaultValue={type}>
          <option value={null}>--- Select device type ---</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Samsung Audio">Samsung Audio</option>
          <option value="Sony Audio">Sony Audio</option>
          <option value="Citrus Lights">Citrus Lights</option>
        </select>
        <AddControlToDeviceType
          controls={controls}
          onAdd={this.addControl}
        />
        <ul className="list--edit">
          {
            controlsMetadata.map((item, i) => {
              return <li key={i} className="list--edit__item">
                      <span>{item.name}</span> | <span>{item.type}</span>
                      <div className="btn-row--inline">
                        <button onClick={()=> this.removeControl(item.id)}><Glyphicon glyph="remove" /></button>
                      </div>
                    </li>
            })
          }
        </ul>
        { id &&
          <input type="hidden" name="id" value={id} />
        }
        <input type="hidden" name="endpoint" defaultValue={endpoint} />
        <input type="hidden" name="controlIDs" value={controlIDs} />
        <div className="btn-row">
          <button type="submit"><Glyphicon glyph="ok" /></button>
          <span className="btn btn--close" onClick={onCancel}>Close</span>
        </div>
      </form>
    );
  }
}
export default AddDeviceType;
