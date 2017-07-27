import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import Control from './Control';
import AddControl from './AddControl';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddPanelOpen: false,
      editControlID: null
    }

    this.addControl = this.addControl.bind(this);
    this.removeControl = this.removeControl.bind(this);
    this.toggleAddPanel = this.toggleAddPanel.bind(this);
  }

  addControl(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const name = inputs.name.value;
    const type = inputs.type.value;

    this.props.setAppState({
      controls: this.props.appState.controls.concat({
        id: v4(),
        name: name,
        type: type
      })
    });
  }

  removeControl(id) {
    this.props.setAppState({
      controls: this.props.appState.controls.filter((item) => item.id !== id)
    });
  }

  toggleAddPanel() {
    this.setState({ isAddPanelOpen: !this.state.isAddPanelOpen });
  }

  render() {
    return (
      <div className="Controls">
        <h2>Admin > Controls</h2>
        { this.state.isAddPanelOpen &&
          <AddControl
            onAdd={this.addControl}
            onCancel={this.toggleAddPanel}
          />
        }
        { !this.state.isAddPanelOpen &&
          <button onClick={this.toggleAddPanel}>Add Control</button>
        }
        <ul>
          {
            this.props.appState.controls.map((item, i) => {
              return <Control
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        onRemove={this.removeControl}
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

export default Controls;
