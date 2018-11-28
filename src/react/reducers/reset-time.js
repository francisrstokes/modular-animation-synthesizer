import {view, lensProp, set, defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('resetTime');
const initialValue = false;

export default (state, action) => {
  switch (action.type) {
    case 'RESET_TIME_ON': return L.set(root, true, state);
    case 'RESET_TIME_OFF': return L.set(root, false, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  resetTime: L.get(root)
};
