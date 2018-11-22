import * as editorModeActions from '../../actions/editor-mode';
import * as rackActions from '../../actions/rack';
import * as globalOffsetActions from '../../actions/global-offset';
import {selectors as editorModeSelectors} from '../../reducers/editor-mode';
import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as resetTimeSelectors} from '../../reducers/reset-time';
import {selectors as globalOffsetSelectors} from '../../reducers/global-offset';

export const selectors = {
  ...editorModeSelectors,
  ...rackSelectors,
  ...resetTimeSelectors,
  ...globalOffsetSelectors
};

export const actions = {
  ...editorModeActions,
  ...rackActions,
  ...globalOffsetActions
};
