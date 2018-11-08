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
  isInEditMode: state => state.editorMode.mode === 'edit',
  isInPureEditMode: state => state.editorMode.mode === 'edit' && state.editorMode.substate === '',
  isInDeleteMode: state => state.editorMode.substate === 'delete',
  isInDragMode: state => state.editorMode.substate === 'dragging',
  isInRawMode: state => state.editorMode.substate === 'raw',
  isInPanMode: state => state.editorMode.substate === 'pan',
  isInConnectingInputMode: state => state.editorMode.substate === 'connecting_from_input',
  isInAnimateMode: state => state.editorMode.mode === 'animate',
  currentMode: state => state.editorMode.mode,
  currentSubstate: state => state.editorMode.substate,
};
