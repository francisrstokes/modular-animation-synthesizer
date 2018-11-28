import {lensProp, compose, view, over, length, append, always} from 'ramda';

const root = lensProp('selectionMode');
const selectedModulesL = lensProp('selectedModules');
const isSelectingL = lensProp('isSelecting');
const clipboardL = lensProp('clipboard');
const selectionAreaStartL = compose(lensProp('selectionArea'), lensProp('start'));
const selectionAreaEndL = compose(lensProp('selectionArea'), lensProp('end'));

const initialState = {
  selectedModules: [],
  isSelecting: false,
  selectionArea: {
    start: [0,0],
    end: [0,0]
  },
  clipboard: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_SELECTION': return over(selectedModulesL, append(action.payload), state);
    case 'SET_SELECTION': return over(selectedModulesL, always(action.payload), state);
    case 'CLEAR_SELECTION': return over(selectedModulesL, always([]), state);
    case 'START_SELECTION': return compose(
      over(selectionAreaStartL, always(action.payload)),
      over(selectionAreaEndL, always(action.payload)),
      over(isSelectingL, always(true)),
    )(state);
    case 'UPDATE_SELECTION': return over(selectionAreaEndL, always(action.payload), state);
    case 'END_SELECTION': return over(isSelectingL, always(false), state);
    case 'COPY_SELECTION': return over(clipboardL, always(view(selectedModulesL, state)), state)
    default: return state;
  }
};

export const selectors = {
  selectedModules: view(compose(root, selectedModulesL)),
  numSelectedModules: compose(length, view(compose(root, selectedModulesL))),
  isSelecting: view(compose(root, isSelectingL)),
  selectionAreaStart: view(compose(root, selectionAreaStartL)),
  selectionAreaEnd: view(compose(root, selectionAreaEndL)),
  clipboard: view(compose(root, clipboardL)),
};