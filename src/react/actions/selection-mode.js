import {createAction} from '../util';

export const startSelection = createAction('START_SELECTION');
export const updateSelection = createAction('UPDATE_SELECTION');
export const stopSelection = createAction('END_SELECTION');
export const addToSelection = createAction('ADD_TO_SELECTION');
export const setSelection = createAction('SET_SELECTION');
export const clearSelection = createAction('CLEAR_SELECTION');
export const copySelection = createAction('COPY_SELECTION');
