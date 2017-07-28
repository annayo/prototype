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
        return {"devices":[{"id":"8fdfc3b6-a1ed-4abf-a1e4-45742c504cd1","name":"Bedroom Apple TV","deviceType":"385f03e1-0b9b-4b50-a276-180db3c93c7b","slug":"bedroom-apple-tv"},{"id":"5545f349-e4e0-4a52-8b68-9ad12f2e2c04","name":"Livingroom Player","deviceType":"82192a94-cd07-4edf-bdc4-bbb919f251df","slug":"livingroom-player"},{"id":"90d5ee64-bbb1-46f9-a57e-0b666f40cad8","name":"Livingroom Lights","deviceType":"63a6baaf-9b2f-413b-a8c2-2f12dcfda7bd","slug":"livingroom-lights"}],"deviceTypes":[{"id":"385f03e1-0b9b-4b50-a276-180db3c93c7b","type":"Apple TV","endpoint":"appletvendpoint.com","controlIDs":["67559918-9356-46a9-ae5a-75434358408b","c4af3c93-ab6c-45e2-b527-8883a5e2bbca","4b6330be-f378-413a-9c9a-acfc9016b364"]},{"id":"82192a94-cd07-4edf-bdc4-bbb919f251df","type":"Samsung Audio","endpoint":"samsungendpoint.com","controlIDs":["67559918-9356-46a9-ae5a-75434358408b","5d34c170-3d43-4c52-865f-077277389bc5"]},{"id":"53359db5-d592-4636-bd4b-d187733f46ce","type":"Citrus Lights","endpoint":"","controlIDs":["653a1056-ccb2-47ff-9867-81a8fc73f2cd"]},{"id":"c975af61-802b-4eeb-ba84-40409443df54","type":"Sony Audio","endpoint":"","controlIDs":["67559918-9356-46a9-ae5a-75434358408b","4b6330be-f378-413a-9c9a-acfc9016b364","d51748f6-fbb8-4ac0-9c57-185c4750785b"]}],"controls":[{"id":"67559918-9356-46a9-ae5a-75434358408b","name":"Power","type":"switch"},{"id":"4b6330be-f378-413a-9c9a-acfc9016b364","name":"Volume","type":"slider"},{"id":"d51748f6-fbb8-4ac0-9c57-185c4750785b","name":"Playlist","type":"select"},{"id":"c4af3c93-ab6c-45e2-b527-8883a5e2bbca","name":"Brightness","type":"slider"},{"id":"653a1056-ccb2-47ff-9867-81a8fc73f2cd","name":"On/Off","type":"switch"}],"deviceControls":[{"deviceID":"d0a82c73-4367-4f00-b11e-1a5406cf224f","controls":[{"id":"67559918-9356-46a9-ae5a-75434358408b","value":null},{"id":"d51748f6-fbb8-4ac0-9c57-185c4750785b","value":"two"}]},{"id":"67559918-9356-46a9-ae5a-75434358408b","deviceID":"acfb67d6-061d-4dce-9e2d-9c0fb34315e0","value":"82","checked":false},{"id":"d51748f6-fbb8-4ac0-9c57-185c4750785b","deviceID":"acfb67d6-061d-4dce-9e2d-9c0fb34315e0","value":"one"},{"id":"67559918-9356-46a9-ae5a-75434358408b","deviceID":"f8851f9f-1344-4958-bd6b-ef4c987c6227","value":"88","checked":false},{"id":"5d34c170-3d43-4c52-865f-077277389bc5","deviceID":"f8851f9f-1344-4958-bd6b-ef4c987c6227","value":"something","checked":true},{"deviceID":"8fdfc3b6-a1ed-4abf-a1e4-45742c504cd1","id":"67559918-9356-46a9-ae5a-75434358408b","value":null},{"deviceID":"8fdfc3b6-a1ed-4abf-a1e4-45742c504cd1","id":"d51748f6-fbb8-4ac0-9c57-185c4750785b","value":null},{"deviceID":"5545f349-e4e0-4a52-8b68-9ad12f2e2c04","id":"67559918-9356-46a9-ae5a-75434358408b","value":null},{"deviceID":"5545f349-e4e0-4a52-8b68-9ad12f2e2c04","id":"5d34c170-3d43-4c52-865f-077277389bc5","value":null},{"deviceID":"90d5ee64-bbb1-46f9-a57e-0b666f40cad8","id":"5d34c170-3d43-4c52-865f-077277389bc5","value":null}]}
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
