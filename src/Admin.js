import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Devices from './Devices';
import DeviceTypes from './DeviceTypes';
import Controls from './Controls';

function Home(props) {
  return (
    <Router>
      <div className="Admin">
        <h2>Admin</h2>
        <ul>
          <li><Link to="/devices">Devices</Link></li>
          <li><Link to="/device-types">Device Types</Link></li>
          <li><Link to="/controls">Controls</Link></li>
        </ul>

        <hr/>

        <Route exact path="/devices" component={Devices}/>
        <Route exact path="/device-types" component={DeviceTypes}/>
        <Route exact path="/controls" component={Controls}/>
      </div>
    </Router>
  );
}

export default Home;
