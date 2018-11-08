import { combineReducers } from 'redux';
import globalOffset from './global-offset';
import editorMode from './editor-mode';
import rack from './rack';
import rawValue from './raw-value';
import dragData from './drag-data';
import connectingData from './connecting-data';
import panData from './pan-data';

export default combineReducers({
  globalOffset,
  editorMode,
  rack,
  rawValue,
  dragData,
  connectingData,
  panData,
});