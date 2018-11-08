import {vAdd, vAddAll} from 'vec-la-fp';

export default (state = [0, 0], action) => {
  switch (action.type) {
    case 'ADD_GLOBAL_OFFSET': return vAdd(state, action.payload);
    case 'SET_GLOBAL_OFFSET': return action.payload;
    default: return state;
  }
};

export const selectors = {
  globalOffset: state => state.globalOffset,
  globalTranslate: state => (...vs) => vAddAll([...vs, state.globalOffset])
};
