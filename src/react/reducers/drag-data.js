import {view, lensProp, compose, set, defaultTo} from 'ramda';

const root = lensProp('dragData');
const draggedModuleIdL = compose(root, lensProp('moduleId'));
const dragOffsetL = compose(root, lensProp('offset'));

const initialValue = {
  moduleId: null,
  offset: [0,0]
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_DRAG_DATA': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  draggedModuleId: view(draggedModuleIdL),
  dragOffset: view(dragOffsetL),
};
