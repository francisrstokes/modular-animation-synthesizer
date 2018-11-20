import {selectors, actions} from './State';
import {connectSelectorsAndActions} from '../../util';
import View from './View';

export const App = connectSelectorsAndActions(selectors, actions)(View);