import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import DeviceType from './DeviceType';
import AddDeviceType from './AddDeviceType';

class DeviceTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddPanelOpen: false
    }

    this.addDeviceType = this.addDeviceType.bind(this);
    this.removeDeviceType = this.removeDeviceType.bind(this);
    this.toggleAddPanel = this.toggleAddPanel.bind(this);
  }

  addDeviceType(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const type = inputs.type.value;
    const endpoint = inputs.endpoint.value;
    const control = inputs.control.value; // error if no controls have been added

    this.props.setAppState({
      deviceTypes: this.props.appState.deviceTypes.concat({
        id: v4(),
        type: type,
        endpoint: endpoint,
        control: control
      })
    });
  }

  removeDeviceType(id) {
    this.props.setAppState({
      deviceTypes: this.props.appState.deviceTypes.filter((item) => item.id !== id)
    });
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
                        control={item.control}
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
