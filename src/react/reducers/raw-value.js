import {view, lensProp, set, defaultTo} from 'ramda';

const root = lensProp('rawValue');
const initialValue = '';

export default (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_RAW_VALUE': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  rawValue: view(root)
};
