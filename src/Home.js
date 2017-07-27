import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Device from './Device';

const Home = (props) => {
  return (
    <div className="Home">
      <h2>App Home</h2>
      <ul>
        <li><Link to="/appletv">Device Name</Link></li>
      </ul>

      <hr/>

      <Route path={"/:name"} render={(routeProps) => (
        <Device {...props} {...routeProps} />
      )}/>
    </div>
  );
}

export default Home;
