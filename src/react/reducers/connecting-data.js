import {view, lensProp, compose} from 'ramda';

const root = lensProp('connectingData');

const initialValue = {
  moduleId: null,
  key: null
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_CONNECTING_DATA': return {
      moduleId: action.payload.moduleId,
      key: action.payload.key
    }
    default: return state;
  }
};

export const selectors = {
  connectingModuleId: view(compose(root, lensProp('moduleId'))),
  connectingKey: view(compose(root, lensProp('key'))),
};
