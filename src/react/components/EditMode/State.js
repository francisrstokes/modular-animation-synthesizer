import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as globalOffsetSelectors} from '../../reducers/global-offset';
import {selectors as resetTimeSelectors} from '../../reducers/reset-time';
import {selectors as selectionSelectors} from '../../reducers/selection-mode';
import * as editorModeActions from '../../actions/editor-mode';
import * as rackActions from '../../actions/rack';
import * as resetTimeActions from '../../actions/reset-time';
import {copySelection, setSelection} from '../../actions/selection-mode';

export const selectors = {
  ...globalOffsetSelectors,
  ...rackSelectors,
  ...resetTimeSelectors,
  ...selectionSelectors
};

export const actions = {
  ...rackActions,
  ...editorModeActions,
  ...resetTimeActions,
  copySelection,
  setSelection
};