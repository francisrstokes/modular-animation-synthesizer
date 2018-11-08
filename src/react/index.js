import React from 'react';
import {Provider} from 'react-redux';
import createStore from './store';
import {render} from 'react-dom';
import {App} from './App';

export const init = (ctx, mc) => {
  render(
    <Provider store={createStore()}>
      <App ctx={ctx} mc={mc} />
    </Provider>,
    document.getElementById('app-main'),
  );
};
