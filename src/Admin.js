import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

const Admin = (props) => {
  return (
    <div className="Admin page-container">
      <ul className="sub-nav">
        {props.routes.map((route, i) => (
          <li key={i}><Link to={route.path}>Manage {route.name}</Link></li>
        ))}
      </ul>

      {props.routes.map((route, i) => (
        <Route exact={route.exact} key={i} path={route.path} render={() => (
          <route.component routes={route.routes} {...props} />
        )}/>
      ))}
    </div>
  );
}

export default Admin;
