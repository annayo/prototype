import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            {routes.map((route, i) => (
              <li key={i}><Link to={route.path}>{route.name}</Link></li>
            ))}
          </ul>

          <hr/>

          {routes.map((route, i) => (
            <Route key={i} path={route.path} render={() => (
              <route.component {...this.props} routes={route.routes} />
            )}/>
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
