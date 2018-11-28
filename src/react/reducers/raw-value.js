import {defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('rawValue');
const initialValue = '';

export default (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_RAW_VALUE': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  rawValue: L.get(root)
};
