import {view, lensProp} from 'ramda';
import {vAdd, vAddAll,vSub} from 'vec-la-fp';

const root = lensProp('globalOffset');

export default (state = [0, 0], action) => {
  switch (action.type) {
    case 'ADD_GLOBAL_OFFSET': return vAdd(state, action.payload);
    case 'SET_GLOBAL_OFFSET': return action.payload;
    default: return state;
  }
};

export const selectors = {
  globalOffset: view(root),
  globalTranslate: state => (...vs) => vAddAll([...vs, view(root, state)]),
  globalSubtract: state => v => vSub(v, view(root, state)),
};
