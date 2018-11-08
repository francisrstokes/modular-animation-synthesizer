export const setConnectingData = (moduleId, key) => ({
  type: 'SET_CONNECTING_DATA',
  payload: {
    moduleId,
    key
  }
});
