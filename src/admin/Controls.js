import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import { Glyphicon } from 'react-bootstrap';
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
    this.editControl = this.editControl.bind(this);
    this.removeControl = this.removeControl.bind(this);
    this.toggleAddPanel = this.toggleAddPanel.bind(this);
    this.toggleEditControl = this.toggleEditControl.bind(this);
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

  editControl(e) {
    e.preventDefault();

    const inputs = e.currentTarget.children;
    const id = inputs.id.value;
    const item = {
      id: id,
      name: inputs.name.value,
      type: inputs.type.value
    };
    const itemIndex = this.props.appState.controls
                      .map((item, i) => ({ id: item.id, index: i }))
                      .filter((item) => item.id === id)[0].index;

    this.props.setAppState({
      controls: [...this.props.appState.controls.slice(0, itemIndex), item, ...this.props.appState.controls.slice(itemIndex + 1)]
    });

    this.toggleEditControl();
  }

  removeControl(id) {
    this.props.setAppState({
      controls: this.props.appState.controls.filter((item) => item.id !== id)
    });
  }

  toggleEditControl(id) {
    this.setState({ editControlID: id ? id : null });
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
          <button onClick={this.toggleAddPanel}><Glyphicon glyph="plus" /> Add Control</button>
        }
        <ul className="list--admin">
          {
            this.props.appState.controls.map((item, i) => {
              return <Control
                        className="list--admin__item"
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        isEditing={this.state.editControlID === item.id}
                        onEditToggle={this.toggleEditControl}
                        onEditCancel={this.toggleEditControl}
                        onEdit={this.editControl}
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
