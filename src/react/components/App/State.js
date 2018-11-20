import * as editorModeActions from '../../actions/editor-mode';
import * as rackActions from '../../actions/rack';
import {selectors as editorModeSelectors} from '../../reducers/editor-mode';
import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as resetTimeSelectors} from '../../reducers/reset-time';

export const selectors = {
  ...editorModeSelectors,
  ...rackSelectors,
  ...resetTimeSelectors
};

export const actions = {
  ...editorModeActions,
  ...rackActions
};
