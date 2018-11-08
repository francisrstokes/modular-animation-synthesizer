export const setDragData = (moduleId, offset) => ({
  type: 'SET_DRAG_DATA',
  payload: {
    moduleId,
    offset
  }
});
