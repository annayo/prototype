import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

const Admin = (props) => {
  return (
    <div className="Admin">
      <h2>Admin</h2>
      <ul>
        {props.routes.map((route, i) => (
          <li key={i}><Link to={route.path}>{route.name}</Link></li>
        ))}
      </ul>

      <hr/>

      {props.routes.map((route, i) => (
        <Route exact={route.exact} key={i} path={route.path} render={() => (
          <route.component routes={route.routes} {...props} />
        )}/>
      ))}
    </div>
  );
}

export default Admin;
