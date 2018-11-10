import {view, lensProp, compose} from 'ramda';

const root = lensProp('dragData');

const initialValue = {
  moduleId: null,
  offset: [0,0]
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_DRAG_DATA': return {
      moduleId: action.payload.moduleId,
      offset: action.payload.offset
    }
    default: return state;
  }
};

export const selectors = {
  draggedModuleId: view(compose(root, lensProp('moduleId'))),
  dragOffset: view(compose(root, lensProp('offset'))),
};
