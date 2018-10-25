import React from 'react';
import {render} from 'react-dom';
import {App} from './App';

export const init = () => {
  render(
    <App />,
    document.getElementById('app-main'),
  );
};
