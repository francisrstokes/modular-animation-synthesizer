import {view, lensProp, set, defaultTo} from 'ramda';

const root = lensProp('resetTime');
const initialValue = false;

export default (state, action) => {
  switch (action.type) {
    case 'RESET_TIME_ON': return set(root, true, state);
    case 'RESET_TIME_OFF': return set(root, false, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  resetTime: view(root)
};
