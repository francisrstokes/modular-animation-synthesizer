import {defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('dragData');
const draggedModuleIdL = L.compose(root, L.prop('moduleId'));
const dragOffsetL = L.compose(root, L.prop('offset'));

const initialValue = {
  moduleId: null,
  offset: [0,0]
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_DRAG_DATA': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  draggedModuleId: L.get(draggedModuleIdL),
  dragOffset: L.get(dragOffsetL),
};
