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

function Admin(props) {
  return (
    <Router>
      <div className="Admin">
        <h2>Admin</h2>
        <ul>
          <li><Link to="/admin/devices">Devices</Link></li>
          <li><Link to="/admin/device-types">Device Types</Link></li>
          <li><Link to="/admin/controls">Controls</Link></li>
        </ul>

        <hr/>

        <Route exact path="/admin/devices" component={Devices}/>
        <Route exact path="/admin/device-types" component={DeviceTypes}/>
        <Route path="/admin/controls" render={()=> <Controls {...props} />}/>
      </div>
    </Router>
  );
}

export default Admin;
