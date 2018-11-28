import {compose, equals, defaultTo} from 'ramda';
import * as L from 'partial.lenses';

const root = L.prop('editorMode');
const modeL = L.compose(root, L.prop('mode'));
const substateL = L.compose(root, L.prop('substate'));

const initialValue = {
  mode: 'edit',
  substate: ''
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_EDITOR_MODE': return L.set(root, action.payload, state);
    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  isInEditMode: compose(equals('edit'), L.get(modeL)),
  isInPureEditMode: state => compose(equals('edit'), L.get(modeL))(state) && compose(equals(''), L.get(substateL))(state),
  isInDeleteMode: compose(equals('delete'), L.get(substateL)),
  isInDragMode: compose(equals('dragging'), L.get(substateL)),
  isInRawMode: compose(equals('raw'), L.get(substateL)),
  isInPanMode: compose(equals('pan'), L.get(substateL)),
  isInSelectionMode: compose(equals('selection'), L.get(substateL)),
  isInConnectingInputMode: compose(equals('connecting_from_input'), L.get(substateL)),
  isInConnectingOutputMode: compose(equals('connecting_from_output'), L.get(substateL)),
  isInAnimateMode: compose(equals('animate'), L.get(modeL)),
  currentMode: L.get(modeL),
  currentSubstate: L.get(substateL),
};
