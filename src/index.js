import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

// "react-router": "2.4.0",
// "react-router-redux": "4.0.4",

render (
  <MuiThemeProvider>
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
