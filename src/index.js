import React from 'react';
import {Provider} from 'react-redux';
import createStore from './react/store';
import {render} from 'react-dom';
import {App} from './react/App';

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('app-main'),
);