import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      deviceTypes: [],
      controls: []
    };
    this.setAppState = this.setAppState.bind(this);
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
