import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './helpers/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
registerServiceWorker();
