import {defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('panData');

const initialValue = [0,0];

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_PAN_POSITION': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  panPosition: L.get(root)
};
