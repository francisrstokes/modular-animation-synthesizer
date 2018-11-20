import {selectors, actions} from './State';
import View from './View';
import { connectSelectorsAndActions } from '../../util';

export const EditMode = connectSelectorsAndActions(selectors, actions)(View);
