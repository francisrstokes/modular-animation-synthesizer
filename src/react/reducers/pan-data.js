import {view, lensProp} from 'ramda';

const root = lensProp('panData');

const initialValue = [0,0];

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_PAN_POSITION': return action.payload;
    default: return state;
  }
};

export const selectors = {
  panPosition: view(root)
};
