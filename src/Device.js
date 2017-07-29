import React, { Component } from 'react';
import getControlComponent from './helpers/getControlComponent';

const getControlsMetadata = (controls, appControls) => {
  const controlsMetadata = appControls.filter((item, i) => {
    return controls.filter((control, n) => item.id === control.id).length;
  });

  return controlsMetadata;
}

class Device extends Component {
  constructor(props) {
    super(props);

    const {
      appState,
      match
    } = this.props;

    // retrieve device from state
    // would normally handle this in a connect component
    const device = appState.devices.filter((item) => item.slug === match.params.slug)[0];

    this.state = {
      ...device
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const deviceID = this.state.id;

    const {
      id,
      value,
      checked
    } = target;

    const control = {
      id: id,
      deviceID: deviceID,
      value: value,
      checked: checked
    };

    const deviceControlIndex = this.props.appState.deviceControls.
                              map((item, i) => ({ id: item.id, deviceID: item.deviceID, index: i})).
                              filter((item) => item.deviceID === deviceID && item.id === id)[0].index;

    this.props.setAppState({
      deviceControls: [...this.props.appState.deviceControls.slice(0, deviceControlIndex), control, ...this.props.appState.deviceControls.slice(deviceControlIndex + 1)]
    });
  }

  getControlsMetadata = () => {
    const {
      appState
    } = this.props;

    const {
      id
    } = this.state;

    const deviceControls = appState.deviceControls.filter((item) => item.deviceID === id);
    const mappedControls = deviceControls.map((item, i) => {
      const controls = appState.controls.filter((el, i) => el.id === item.id)[0];

      return {
        id: item.id,
        deviceID: item.deviceID,
        value: item.value,
        checked: item.checked,
        name: controls.name,
        type: controls.type
      }
    });

    return mappedControls;
  }

  render() {
    const {
      appState,
      match
    } = this.props;

    const {
      id,
      name,
      deviceType
    } = this.state;

    const deviceMetadata = appState.deviceTypes.filter((item) => item.id === deviceType)[0];
    const controlsMetadata = this.getControlsMetadata();
    return (
      <div className="Device page-container">
        <h2>{name}</h2>
        { deviceMetadata &&
          <p><strong>Device Type: </strong>{deviceMetadata.type}</p>
        }
        { controlsMetadata.map((item, i) => {
          const Control = getControlComponent(item.type);
          return <Control
                    key={i}
                    name={item.name}
                    id={item.id}
                    value={item.value}
                    checked={item.checked}
                    onChange={this.onChange}
                  />
        })}
      </div>
    );
  }
}

export default Device;
