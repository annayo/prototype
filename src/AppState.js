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

  componentDidMount() {
    if (!loadState()) {
      this.setState(() => {
        return {"devices":[{"id":"63d334ea-6143-4c53-a3ee-5beebd06a56a","name":"Livingroom Player","deviceType":"6fc573f9-2002-4eea-ad53-61388207bfa7","slug":"livingroom-player"},{"id":"edf0d17e-754e-4167-80c6-3350a4450238","name":"Bedroom Apple TV","deviceType":"f21f4881-3200-4db7-8c49-dc1d982937dc","slug":"bedroom-apple-tv"},{"id":"59d07bb1-631e-479c-aaa5-326ddf901e4d","name":"Livingroom Lights","deviceType":"fde9a8ad-d2bf-4d35-8cb7-5470d101ac45","slug":"livingroom-lights"}],"deviceTypes":[{"id":"6fc573f9-2002-4eea-ad53-61388207bfa7","type":"Samsung Audio","endpoint":"","controlIDs":["f403709f-a98f-49b2-8206-6c30fb14c333","0c9710e0-668b-4197-ba8b-63294c05364a","907e39e2-1be2-45b9-93ad-09050b7e9031"]},{"id":"44a7092c-e723-446e-8800-e3bbffbde00f","type":"Sony Audio","endpoint":"","controlIDs":["f403709f-a98f-49b2-8206-6c30fb14c333","0c9710e0-668b-4197-ba8b-63294c05364a","907e39e2-1be2-45b9-93ad-09050b7e9031"]},{"id":"f21f4881-3200-4db7-8c49-dc1d982937dc","type":"Apple TV","endpoint":"","controlIDs":["f403709f-a98f-49b2-8206-6c30fb14c333","e34981d0-2429-49db-97f3-22cae51552bb","0c9710e0-668b-4197-ba8b-63294c05364a"]},{"id":"fde9a8ad-d2bf-4d35-8cb7-5470d101ac45","type":"Citrus Lights","endpoint":"","controlIDs":["7b32c1a6-aa2f-4d2b-acd7-32bd8e156d63"]}],"controls":[{"id":"f403709f-a98f-49b2-8206-6c30fb14c333","name":"Power","type":"switch"},{"id":"0c9710e0-668b-4197-ba8b-63294c05364a","name":"Volume","type":"slider"},{"id":"e34981d0-2429-49db-97f3-22cae51552bb","name":"Brightness","type":"slider"},{"id":"7b32c1a6-aa2f-4d2b-acd7-32bd8e156d63","name":"On/Off","type":"switch"},{"id":"907e39e2-1be2-45b9-93ad-09050b7e9031","name":"Playlist","type":"select"}],"deviceControls":[{"deviceID":"63d334ea-6143-4c53-a3ee-5beebd06a56a","id":"f403709f-a98f-49b2-8206-6c30fb14c333","value":null},{"deviceID":"63d334ea-6143-4c53-a3ee-5beebd06a56a","id":"0c9710e0-668b-4197-ba8b-63294c05364a","value":null},{"deviceID":"63d334ea-6143-4c53-a3ee-5beebd06a56a","id":"907e39e2-1be2-45b9-93ad-09050b7e9031","value":null},{"deviceID":"edf0d17e-754e-4167-80c6-3350a4450238","id":"f403709f-a98f-49b2-8206-6c30fb14c333","value":null},{"deviceID":"edf0d17e-754e-4167-80c6-3350a4450238","id":"e34981d0-2429-49db-97f3-22cae51552bb","value":null},{"deviceID":"edf0d17e-754e-4167-80c6-3350a4450238","id":"0c9710e0-668b-4197-ba8b-63294c05364a","value":null},{"deviceID":"59d07bb1-631e-479c-aaa5-326ddf901e4d","id":"7b32c1a6-aa2f-4d2b-acd7-32bd8e156d63","value":null}]}
      })
    }
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
