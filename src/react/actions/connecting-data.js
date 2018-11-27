import { createAction } from '../util';

export const setConnectingData = (moduleId, key) => createAction('SET_CONNECTING_DATA')({
  moduleId,
  key
});