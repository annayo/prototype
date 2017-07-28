import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import Device from './Device';
import AddDevice from './AddDevice';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddPanelOpen: false,
      editDeviceID: null
    }

    this.addDevice = this.addDevice.bind(this);
    this.editDevice = this.editDevice.bind(this);
    this.removeDevice = this.removeDevice.bind(this);
    this.toggleAddPanel = this.toggleAddPanel.bind(this);
    this.toggleEditDevice = this.toggleEditDevice.bind(this);
  }

  addDevice(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const name = inputs.name.value;
    const deviceType = inputs.deviceType.value;

    this.props.setAppState({
      devices: this.props.appState.devices.concat({
        id: v4(),
        name: name,
        deviceType: deviceType
      })
    });
  }

  editDevice(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const id = inputs.id.value;
    const item = {
      id: id,
      name: inputs.name.value,
      deviceType: inputs.deviceType.value
    };
    const itemIndex = this.props.appState.devices.
                      map((item, i) => ({ id: item.id, index: i })).
                      filter((item) => item.id === id)[0].index;

    this.props.setAppState({
      devices: [...this.props.appState.devices.slice(0, itemIndex), item, ...this.props.appState.devices.slice(itemIndex + 1)]
    });

    this.toggleEditDevice();
  }

  removeDevice(id) {
    this.props.setAppState({
      devices: this.props.appState.devices.filter((item) => item.id !== id)
    });
  }

  toggleEditDevice(id) {
    this.setState({ editDeviceID: id ? id : null });
  }

  toggleAddPanel() {
    this.setState({ isAddPanelOpen: !this.state.isAddPanelOpen });
  }

  render() {
    return (
      <div className="Devices">
        <h2>Admin > Devices</h2>
        { this.state.isAddPanelOpen &&
          <AddDevice
            deviceTypes={this.props.appState.deviceTypes}
            onAdd={this.addDevice}
            onCancel={this.toggleAddPanel}
          />
        }
        { !this.state.isAddPanelOpen &&
          <button onClick={this.toggleAddPanel}>Add Device</button>
        }
        <ul>
          {
            this.props.appState.devices.map((item, i) => {
              return <Device
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        deviceType={item.deviceType}
                        deviceTypes={this.props.appState.deviceTypes}
                        isEditing={this.state.editDeviceID === item.id}
                        onEditToggle={this.toggleEditDevice}
                        onEditCancel={this.toggleEditDevice}
                        onEdit={this.editDevice}
                        onRemove={this.removeDevice}
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

export default Controls;
