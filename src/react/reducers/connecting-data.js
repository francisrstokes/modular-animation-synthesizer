import {defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('connectingData');
const moduleIdL = L.compose(root, L.prop('moduleId'));
const keyL = L.compose(root, L.prop('key'));

const initialValue = {
  moduleId: null,
  key: null
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_CONNECTING_DATA': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  connectingModuleId: L.get(moduleIdL),
  connectingKey: L.get(keyL),
};
