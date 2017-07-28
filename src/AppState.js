import React, { Component } from 'react';
import { loadState, saveState } from './helpers/localStorage';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = loadState() || {
      devices: [],
      deviceTypes: [],
      controls: [],
      deviceControls: []
    };
    this.setAppState = this.setAppState.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    saveState(nextState);
  }

  setAppState(newState, callback) {
    this.setState(newState, () => {
      if (callback) {
        callback();
      }
    });
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;
