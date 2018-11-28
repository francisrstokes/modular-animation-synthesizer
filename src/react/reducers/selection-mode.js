import {lensProp, compose, view, set, length, append, defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('selectionMode');
const selectedModulesL = L.compose(root, L.prop('selectedModules'));
const isSelectingL = L.compose(root, L.prop('isSelecting'));
const clipboardL = L.compose(root, L.prop('clipboard'));
const selectionAreaStartL = L.compose(root, L.prop('selectionArea'), L.prop('start'));
const selectionAreaEndL = L.compose(root, L.prop('selectionArea'), L.prop('end'));

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
    case 'ADD_TO_SELECTION': return L.modify(selectedModulesL, append(action.payload), state);
    case 'SET_SELECTION': return L.set(selectedModulesL, action.payload, state);
    case 'CLEAR_SELECTION': return L.set(selectedModulesL, [], state);
    case 'START_SELECTION': return compose(
      L.set(selectionAreaStartL, action.payload),
      L.set(selectionAreaEndL, action.payload),
      L.set(isSelectingL, true),
    )(state);
    case 'UPDATE_SELECTION': return L.set(selectionAreaEndL, action.payload, state);
    case 'END_SELECTION': return L.set(isSelectingL, false, state);
    case 'COPY_SELECTION': return L.set(clipboardL, L.get(selectedModulesL, state), state)
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  selectedModules: L.get(selectedModulesL),
  numSelectedModules: compose(length, L.get(selectedModulesL)),
  isSelecting: L.get(isSelectingL),
  selectionAreaStart: L.get(selectionAreaStartL),
  selectionAreaEnd: L.get(selectionAreaEndL),
  clipboard: L.get(clipboardL),
};