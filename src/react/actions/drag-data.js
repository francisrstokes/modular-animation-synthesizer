import { createAction } from '../util';

export const setDragData = (moduleId, offset) => createAction('SET_DRAG_DATA')({
  moduleId,
  offset
});
