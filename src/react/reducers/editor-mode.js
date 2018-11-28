import {view, lensProp, compose, equals, set, defaultTo} from 'ramda';

const root = lensProp('editorMode');
const modeL = compose(root, lensProp('mode'));
const substateL = compose(root, lensProp('substate'));

const initialValue = {
  mode: 'edit',
  substate: ''
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_EDITOR_MODE': return set(root, action.payload, state);
    default: return set(root, defaultTo(initialValue, view(root, state)), state);
  }
};

export const selectors = {
  isInEditMode: compose(equals('edit'), view(modeL)),
  isInPureEditMode: state => compose(equals('edit'), view(modeL))(state) && compose(equals(''), view(substateL))(state),
  isInDeleteMode: compose(equals('delete'), view(substateL)),
  isInDragMode: compose(equals('dragging'), view(substateL)),
  isInRawMode: compose(equals('raw'), view(substateL)),
  isInPanMode: compose(equals('pan'), view(substateL)),
  isInSelectionMode: compose(equals('selection'), view(substateL)),
  isInConnectingInputMode: compose(equals('connecting_from_input'), view(substateL)),
  isInConnectingOutputMode: compose(equals('connecting_from_output'), view(substateL)),
  isInAnimateMode: compose(equals('animate'), view(modeL)),
  currentMode: view(modeL),
  currentSubstate: view(substateL),
};
