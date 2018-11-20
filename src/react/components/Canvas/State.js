import {selectors as editorModeSelectors} from '../../reducers/editor-mode';
import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as globalOffsetSelectors} from '../../reducers/global-offset';
import {selectors as rawValueSelectors} from '../../reducers/raw-value';
import {selectors as dragSelectors} from '../../reducers/drag-data';
import {selectors as connectingSelectors} from '../../reducers/connecting-data';
import {selectors as panSelectors} from '../../reducers/pan-data';
import * as rackActions from '../../actions/rack';
import * as dragActions from '../../actions/drag-data';
import * as connectingActions from '../../actions/connecting-data';
import * as editorModeActions from '../../actions/editor-mode';
import * as panActions from '../../actions/pan-data';
import * as globalOffsetActions from '../../actions/global-offset';

export const selectors = {
  ...editorModeSelectors,
  ...rackSelectors,
  ...globalOffsetSelectors,
  ...rawValueSelectors,
  ...dragSelectors,
  ...connectingSelectors,
  ...panSelectors
};

export const actions = {
  ...rackActions,
  ...dragActions,
  ...editorModeActions,
  ...connectingActions,
  ...panActions,
  ...globalOffsetActions
};
