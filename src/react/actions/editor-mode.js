export const setEditorMode = mode => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode,
    substate: ''
  }
});

export const gotoEditMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit'
  }
});

export const gotoAnimateMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'animate'
  }
});

export const gotoDeleteMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit',
    substate: 'delete'
  }
});

export const gotoRawMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit',
    substate: 'raw'
  }
});

export const gotoDragMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit',
    substate: 'dragging'
  }
});

export const gotoConnectingInputMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit',
    substate: 'connecting_from_input'
  }
});

export const gotoPanMode = () => ({
  type: 'SET_EDITOR_MODE',
  payload: {
    mode: 'edit',
    substate: 'pan'
  }
});
