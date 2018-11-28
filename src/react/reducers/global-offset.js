import {defaultTo, compose} from 'ramda';
import {vAdd, vAddAll,vSub} from 'vec-la-fp';
import * as L from 'partial.lenses';

const root = L.prop('globalOffset');
const initialValue = [0, 0];

export default (state, action) => {
  switch (action.type) {
    case 'ADD_GLOBAL_OFFSET': return L.set(root, vAdd(L.get(root, state), action.payload), state);
    case 'SET_GLOBAL_OFFSET': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  globalOffset: L.get(root),
  globalTranslate: state => (...vs) => vAddAll([...vs, L.get(root, state)]),
  globalSubtract: state => v => vSub(v, L.get(root, state)),
};
