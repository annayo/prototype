import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
registerServiceWorker();
