import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import { Glyphicon } from 'react-bootstrap';
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

    const id = v4();
    const inputs = e.currentTarget.children;
    const name = inputs.name.value;
    const deviceType = inputs.deviceType.value;
    const deviceTypeControls = this.props.appState.deviceTypes.filter((item, i) => item.id === deviceType)[0];
    const deviceControls = deviceTypeControls.controlIDs.map((item, i) => ({ deviceID: id, id: item, value: null }));

    this.props.setAppState({
      devices: this.props.appState.devices.concat({
        id: id,
        name: name,
        deviceType: deviceType,
        slug: name.replace(/\s+/g, '-').toLowerCase()
      }),
      deviceControls: this.props.appState.deviceControls.concat(deviceControls)
    });
  }

  editDevice(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const id = inputs.id.value;
    const name = inputs.name.value;
    const deviceType = inputs.deviceType.value;
    const item = {
      id: id,
      name: name,
      deviceType: deviceType,
      slug: name.replace(/\s+/g, '-').toLowerCase()
    };
    const itemIndex = this.props.appState.devices
                      .map((item, i) => ({ id: item.id, index: i }))
                      .filter((item) => item.id === id)[0].index;

    this.props.setAppState({
      devices: [...this.props.appState.devices.slice(0, itemIndex), item, ...this.props.appState.devices.slice(itemIndex + 1)]
    });

    this.toggleEditDevice();
  }

  removeDevice(id) {
    this.props.setAppState({
      devices: this.props.appState.devices.filter((item) => item.id !== id),
      deviceControls: this.props.appState.deviceControls.filter((item) => item.deviceID !== id)
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
          <button onClick={this.toggleAddPanel}><Glyphicon glyph="plus" /> Add Device</button>
        }
        <ul className="list--admin">
          {
            this.props.appState.devices.map((item, i) => {
              return <Device
                        className="list--admin__item"
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
