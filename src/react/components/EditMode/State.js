import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as globalOffsetSelectors} from '../../reducers/global-offset';
import {selectors as resetTimeSelectors} from '../../reducers/reset-time';
import * as editorModeActions from '../../actions/editor-mode';
import * as rackActions from '../../actions/rack';
import * as resetTimeActions from '../../actions/reset-time';

export const selectors = {
  ...globalOffsetSelectors,
  ...rackSelectors,
  ...resetTimeSelectors
};

export const actions = {
  ...rackActions,
  ...editorModeActions,
  ...resetTimeActions
};