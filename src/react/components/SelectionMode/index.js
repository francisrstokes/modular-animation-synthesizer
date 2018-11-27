import { connectSelectorsAndActions } from '../../util';
import {actions, selectors} from './State';
import View from './View';

export const SelectionMode = connectSelectorsAndActions(selectors, actions)(View);