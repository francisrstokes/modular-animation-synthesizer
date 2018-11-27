import {view, lensProp, compose, equals} from 'ramda';

const root = lensProp('editorMode');
const mode = compose(root, lensProp('mode'));
const substate = compose(root, lensProp('substate'));

const initialState = {
  mode: 'edit',
  substate: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDITOR_MODE': {
      const {mode, substate = ''} = action.payload;
      return {mode, substate};
    }
    default: return state;
  }
};

export const selectors = {
  isInEditMode: compose(equals('edit'), view(mode)),
  isInPureEditMode: state => compose(equals('edit'), view(mode))(state) && compose(equals(''), view(substate))(state),
  isInDeleteMode: compose(equals('delete'), view(substate)),
  isInDragMode: compose(equals('dragging'), view(substate)),
  isInRawMode: compose(equals('raw'), view(substate)),
  isInPanMode: compose(equals('pan'), view(substate)),
  isInSelectionMode: compose(equals('selection'), view(substate)),
  isInConnectingInputMode: compose(equals('connecting_from_input'), view(substate)),
  isInConnectingOutputMode: compose(equals('connecting_from_output'), view(substate)),
  isInAnimateMode: compose(equals('animate'), view(mode)),
  currentMode: view(mode),
  currentSubstate: view(substate),
};
