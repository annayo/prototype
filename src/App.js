import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="App-nav">
            <li className="App-nav__item">
              <Glyphicon glyph="list" />
              <Link className="App-nav__link" to="/">Devices</Link>
            </li>
            <li className="App-nav__item App-nav__item--admin">
              <Glyphicon glyph="cog" />
              <Link className="App-nav__link" to="/admin">Admin</Link>
            </li>
          </ul>
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
