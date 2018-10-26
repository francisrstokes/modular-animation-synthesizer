import React from 'react';
import {render} from 'react-dom';
import {App} from './App';

export const init = (ctx, mc) => {
  render(
    <App ctx={ctx} mc={mc} />,
    document.getElementById('app-main'),
  );
};
