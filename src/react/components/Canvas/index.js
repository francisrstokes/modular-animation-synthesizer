import { connectSelectorsAndActions } from '../../util';
import View from './View';
import {selectors, actions} from './State';

export const Canvas = connectSelectorsAndActions(selectors, actions)(View);