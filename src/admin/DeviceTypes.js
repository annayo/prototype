import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import DeviceType from './DeviceType';
import AddDeviceType from './AddDeviceType';

class DeviceTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddPanelOpen: false,
      editDeviceTypeID: null
    }

    this.addDeviceType = this.addDeviceType.bind(this);
    this.editDeviceType = this.editDeviceType.bind(this);
    this.removeDeviceType = this.removeDeviceType.bind(this);
    this.toggleAddPanel = this.toggleAddPanel.bind(this);
    this.toggleEditDeviceType = this.toggleEditDeviceType.bind(this);
  }

  addDeviceType(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const type = inputs.type.value;
    const endpoint = inputs.endpoint.value;
    const controlIDs = inputs.controlIDs.value; // error if no controls have been added

    this.props.setAppState({
      deviceTypes: this.props.appState.deviceTypes.concat({
        id: v4(),
        type: type,
        endpoint: endpoint,
        controlIDs: controlIDs
      })
    });
  }

  editDeviceType(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const id = inputs.id.value;
    const item = {
      id: id,
      type: inputs.type.value,
      endpoint: inputs.endpoint.value,
      controlIDs: inputs.controlIDs.value
    };
    const itemIndex = this.props.appState.deviceTypes.
                      map((item, i) => ({ id: item.id, index: i })).
                      filter((item) => item.id === id)[0].index;

    this.props.setAppState({
      deviceTypes: [...this.props.appState.deviceTypes.slice(0, itemIndex), item, ...this.props.appState.deviceTypes.slice(itemIndex + 1)]
    });

    this.toggleEditDeviceType();
  }

  removeDeviceType(id) {
    this.props.setAppState({
      deviceTypes: this.props.appState.deviceTypes.filter((item) => item.id !== id)
    });
  }

  toggleEditDeviceType(id) {
    this.setState({ editDeviceTypeID: id ? id : null });
  }

  toggleAddPanel() {
    this.setState({ isAddPanelOpen: !this.state.isAddPanelOpen });
  }

  render() {
    return (
      <div className="DeviceTypes">
        <h2>Admin > Device Types</h2>
        { this.state.isAddPanelOpen &&
          <AddDeviceType
            controls={this.props.appState.controls}
            onAdd={this.addDeviceType}
            onCancel={this.toggleAddPanel}
          />
        }
        { !this.state.isAddPanelOpen &&
          <button onClick={this.toggleAddPanel}>Add Device Type</button>
        }
        <ul>
          {
            this.props.appState.deviceTypes.map((item, i) => {
              return <DeviceType
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        endpoint={item.endpoint}
                        controlIDs={item.controlIDs}
                        controls={this.props.appState.controls}
                        isEditing={this.state.editDeviceTypeID === item.id}
                        onEditToggle={this.toggleEditDeviceType}
                        onEditCancel={this.toggleEditDeviceType}
                        onEdit={this.editDeviceType}
                        onRemove={this.removeDeviceType}
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

export default DeviceTypes;
