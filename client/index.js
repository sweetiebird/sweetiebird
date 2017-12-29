import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store';

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <Router>
      <div>App!</div>
    </Router>
  </Provider>
);

render(
  <Main />,
  document.querySelector('#app-root'),
);
