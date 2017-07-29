import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Device from './Device';

const Home = (props) => {
  return (
    <div className="Home page-container">
      <ul className="sub-nav">
        {
          props.appState.devices.map((item, i) =>
            <li key={i}><Link to={`/${item.slug}`}>{item.name}</Link></li>
          )
        }
      </ul>
      <Route path={"/:name"} render={(routeProps) => <Device {...props} {...routeProps} />} />
    </div>
  );
}

export default Home;
