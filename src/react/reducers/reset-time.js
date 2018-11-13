import {view, lensProp} from 'ramda';

const root = lensProp('resetTime');

export default (state = false, action) => {
  switch (action.type) {
    case 'RESET_TIME_ON': return true;
    case 'RESET_TIME_OFF': return false;
    default: return state;
  }
};

export const selectors = {
  resetTime: view(root)
};
