import {view, lensProp, set, defaultTo} from 'ramda';
import {vAdd, vAddAll,vSub} from 'vec-la-fp';

const root = lensProp('globalOffset');
const initialValue = [0, 0];

export default (state, action) => {
  switch (action.type) {
    case 'ADD_GLOBAL_OFFSET': return set(root, vAdd(view(root, state), action.payload), state);
    case 'SET_GLOBAL_OFFSET': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  globalOffset: view(root),
  globalTranslate: state => (...vs) => vAddAll([...vs, view(root, state)]),
  globalSubtract: state => v => vSub(v, view(root, state)),
};
