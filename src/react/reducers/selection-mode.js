import {lensProp, lensIndex, compose, view, over, length, append, always} from 'ramda';

const tap = fn => x => {
  fn(x);
  return x;
}

const root = lensProp('selectionMode');
const selectedModulesL = lensProp('selectedModules');
const isDraggingL = lensProp('isDragging');
const dragOffsetL = lensProp('dragOffset');
const isSelectingL = lensProp('isSelecting');
const selectionAreaStartL = compose(lensProp('selectionArea'), lensProp('start'));
const selectionAreaEndL = compose(lensProp('selectionArea'), lensProp('end'));

const initialState = {
  selectedModules: [],
  isSelecting: false,
  selectionArea: {
    start: [0,0],
    end: [0,0]
  },
  isDragging: false,
  dragOffset: [0,0]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_SELECTION': return over(selectedModulesL, append(action.payload), state);
    case 'SET_SELECTION': return over(selectedModulesL, always(action.payload), state);
    case 'CLEAR_SELECTION': return over(selectedModulesL, always([]), state);
    case 'SET_SELECTION_DRAG': return over(isDraggingL, always(action.payload), state);
    case 'SET_SELECTION_DRAG_OFFSET': return over(dragOffsetL, always(action.payload), state);
    case 'START_SELECTION': return compose(
      over(selectionAreaStartL, always(action.payload)),
      over(selectionAreaEndL, always(action.payload)),
      over(isSelectingL, always(true)),
    )(state);
    case 'UPDATE_SELECTION': return over(selectionAreaEndL, always(action.payload), state);
    case 'END_SELECTION': return over(isSelectingL, always(false), state);
    default: return state;
  }
};

export const selectors = {
  selectedModules: view(compose(root, selectedModulesL)),
  numSelectedModules: compose(length, view(compose(root, selectedModulesL))),
  isInSelectionDrag: view(compose(root, isDraggingL)),
  isSelecting: view(compose(root, isSelectingL)),
  selectionDragOffset: view(compose(root, dragOffsetL)),
  selectionAreaStart: view(compose(root, selectionAreaStartL)),
  selectionAreaEnd: view(compose(root, selectionAreaEndL)),
};