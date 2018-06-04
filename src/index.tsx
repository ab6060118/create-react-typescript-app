import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from "./containers/app";
import reducers from './reducers';

import './index.scss'

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('App')
);
