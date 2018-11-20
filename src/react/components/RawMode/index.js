import { connectSelectorsAndActions } from '../../util';
import {actions, selectors} from './State';
import View from './View';

export const RawMode = connectSelectorsAndActions(selectors, actions)(View);