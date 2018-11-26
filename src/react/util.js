import {connect} from 'react-redux';
import {map} from 'ramda';

export const connectSelectorsAndActions = (selectors, actions) => {
  return connect(
    state => {
      const out = map(selectorFn => selectorFn(state), selectors)
      return out;
    },
    actions
  );
}

export const componentSwitch = (tests, fallback = () => null) => {
  for (const [condition, componentFn] of tests) {
    if (condition) return componentFn();
  }
  return fallback();
};