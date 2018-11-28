import {view, lensProp, set, defaultTo} from 'ramda';

const root = lensProp('panData');

const initialValue = [0,0];

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_PAN_POSITION': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  panPosition: view(root)
};
