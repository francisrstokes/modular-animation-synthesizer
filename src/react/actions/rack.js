import { createAction } from '../util';

export const addModule = createAction('ADD_MODULE');
export const removeModule = createAction('REMOVE_MODULE');
export const clearModules = createAction('CLEAR_MODULES');

export const setRawValue = (moduleId, inputKey, value) => createAction('SET_RAW_VALUE')({
  moduleId,
  inputKey,
  value
});

export const setModulePosition = (moduleId, position) => createAction('SET_MODULE_POSITION')({
  moduleId,
  position
});

export const disconnectModuleInput = (moduleId, key) => createAction('DISCONNECT_MODULE_INPUT')({
  moduleId,
  key
});

export const connectModules = (inputModuleId, outputModuleId, inputKey, outputKey) => createAction('CONNECT_MODULES')({
  inputModuleId,
  outputModuleId,
  inputKey,
  outputKey
});

export const updateDrawingValues = (moduleId, drawingValues) => createAction('UPDATE_DRAWING_VALUES')({
  moduleId,
  drawingValues
});
