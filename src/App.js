import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>

          <hr/>

          <Switch>
            {routes.map((route, i) => (
              <Route exact={route.exact} key={i} path={route.path} render={(routeProps) => (
                <route.component routes={route.routes} {...this.props} {...routeProps} />
              )}/>
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
