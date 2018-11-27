import {selectors as selectionSelectors} from '../../reducers/selection-mode';
import {selectors as rackSelectors} from '../../reducers/rack';
import * as selectionActions from '../../actions/selection-mode';

export const selectors = {
  ...selectionSelectors,
  rack: rackSelectors.rack
};
export const actions = selectionActions;