import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import Control from './Control';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.addControl = this.addControl.bind(this);
    this.removeControl = this.removeControl.bind(this);
  }

  addControl() {
    this.props.setAppState({
      controls: this.props.appState.controls.concat({
        id: v4(),
        name: 'test',
        type: 'select'
      })
    });
  }

  removeControl(id) {
    this.props.setAppState({
      controls: this.props.appState.controls.filter((item) => item.id !== id)
    });
  }

  render() {
    return (
      <div className="Controls">
        <h2>Admin > Controls</h2>
        <button onClick={this.addControl}>Add Control</button>
        {
          this.props.appState.controls.map((item, i) => {
            return <Control
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      onRemoveControl={this.removeControl}
                    />
          })
        }
      </div>
    );
  }
}

export default Controls;
