export const addModule = md => ({
  type: 'ADD_MODULE',
  payload: md
});

export const removeModule = moduleId => ({
  type: 'REMOVE_MODULE',
  payload: moduleId
});


export const setRawValue = (moduleId, inputKey, value) => ({
  type: 'SET_RAW_VALUE',
  payload: {
    moduleId,
    inputKey,
    value
  }
});

export const setModulePosition = (moduleId, position) => ({
  type: 'SET_MODULE_POSITION',
  payload: {
    moduleId,
    position
  }
});

export const disconnectModuleInput = (moduleId, key) => ({
  type: 'DISCONNECT_MODULE_INPUT',
  payload: {
    moduleId,
    key
  }
});

export const connectModules = (inputModuleId, outputModuleId, inputKey, outputKey) => ({
  type: 'CONNECT_MODULES',
  payload: {
    inputModuleId,
    outputModuleId,
    inputKey,
    outputKey
  }
});

export const clearModules = () => ({
  type: 'CLEAR_MODULES'
});


export const updateDrawingValues = (moduleId, drawingValues) => ({
  type: 'UPDATE_DRAWING_VALUES',
  payload: {
    moduleId,
    drawingValues
  }
});
