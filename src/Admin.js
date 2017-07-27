import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import routes from './routes';
import Devices from './Devices';
import DeviceTypes from './DeviceTypes';
import Controls from './Controls';

function Admin(props) {
  return (
    <Router>
      <div className="Admin">
        <h2>Admin</h2>
        <ul>
          {props.routes.map((route, i) => (
            <li key={i}><Link to={route.path}>{route.name}</Link></li>
          ))}
        </ul>

        <hr/>

        {props.routes.map((route, i) => (
          <Route key={i} path={route.path} render={() => (
            <route.component {...props} routes={route.routes} />
          )}/>
        ))}
      </div>
    </Router>
  );
}

export default Admin;
