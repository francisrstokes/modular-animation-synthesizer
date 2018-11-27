import {selectors as selectionSelectors} from '../../reducers/selection-mode';
import {selectors as rackSelectors} from '../../reducers/rack';
import {selectors as globalOffsetSelectors} from '../../reducers/global-offset';
import * as selectionActions from '../../actions/selection-mode';

export const selectors = {
  ...selectionSelectors,
  ...globalOffsetSelectors,
  rack: rackSelectors.rack
};
export const actions = selectionActions;