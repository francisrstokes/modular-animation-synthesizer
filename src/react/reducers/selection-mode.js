import {lensProp, compose, view, set, length, append, defaultTo} from 'ramda';

const root = lensProp('selectionMode');
const selectedModulesL = compose(root, lensProp('selectedModules'));
const isSelectingL = compose(root, lensProp('isSelecting'));
const clipboardL = compose(root, lensProp('clipboard'));
const selectionAreaStartL = compose(root, lensProp('selectionArea'), lensProp('start'));
const selectionAreaEndL = compose(root, lensProp('selectionArea'), lensProp('end'));

const initialValue = {
  selectedModules: [],
  isSelecting: false,
  selectionArea: {
    start: [0,0],
    end: [0,0]
  },
  clipboard: []
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_TO_SELECTION': return set(selectedModulesL, append(action.payload, view(selectedModulesL, state)), state);
    case 'SET_SELECTION': return set(selectedModulesL, action.payload, state);
    case 'CLEAR_SELECTION': return set(selectedModulesL, [], state);
    case 'START_SELECTION': return compose(
      set(selectionAreaStartL, action.payload),
      set(selectionAreaEndL, action.payload),
      set(isSelectingL, true),
    )(state);
    case 'UPDATE_SELECTION': return set(selectionAreaEndL, action.payload, state);
    case 'END_SELECTION': return set(isSelectingL, false, state);
    case 'COPY_SELECTION': return set(clipboardL, view(selectedModulesL, state), state)
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  selectedModules: view(selectedModulesL),
  numSelectedModules: compose(length, view(selectedModulesL)),
  isSelecting: view(isSelectingL),
  selectionAreaStart: view(selectionAreaStartL),
  selectionAreaEnd: view(selectionAreaEndL),
  clipboard: view(clipboardL),
};