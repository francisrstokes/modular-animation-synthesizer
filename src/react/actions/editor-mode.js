import { createAction } from '../util';

export const setEditorMode = mode => createAction('SET_EDITOR_MODE')({
  mode,
  substate: ''
});

export const gotoEditMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: ''
});

export const gotoSelectionMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'selection'
});

export const gotoAnimateMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'animate',
  substate: ''
});

export const gotoDeleteMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'delete'
});

export const gotoRawMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'raw'
});

export const gotoDragMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'dragging'
});

export const gotoConnectingInputMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'connecting_from_input'
});

export const gotoConnectingOutputMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'connecting_from_output'
});

export const gotoPanMode = () => createAction('SET_EDITOR_MODE')({
  mode: 'edit',
  substate: 'pan'
});
