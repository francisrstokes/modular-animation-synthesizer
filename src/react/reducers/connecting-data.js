import {view, lensProp, compose, set, defaultTo} from 'ramda';

const root = lensProp('connectingData');

const initialValue = {
  moduleId: null,
  key: null
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_CONNECTING_DATA': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  connectingModuleId: view(compose(root, lensProp('moduleId'))),
  connectingKey: view(compose(root, lensProp('key'))),
};
