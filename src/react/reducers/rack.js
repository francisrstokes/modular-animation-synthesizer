import {reduce, compose, omit, append, defaultTo, merge, not, map, reject} from 'ramda';
import * as L from 'partial.lenses';
import {rack as initialValue} from '../../rack/rack';
import { checkForCycles } from '../../util/check-for-cycles';

const byModuleId = id => md => md.name === id;
const createConnection = (moduleId, key) => ({
  type: 'connection',
  module: moduleId,
  property: key
});

const root = L.prop('rack');

const disconnectModule = moduleId => md => {
  return {
    ...md,
    inputs: reject(input => input.type === 'connection' && input.module === moduleId, md.inputs)
  }
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_MODULE': return L.set(root, append(action.payload, L.get(root, state)), state);

    case 'REMOVE_MODULE': {
      const moduleId = action.payload;
      const withoutModuleL = L.compose(
        root,
        L.filter(compose(not, byModuleId(moduleId)))
      );

      const filteredRack = compose(
        L.modify(L.elems, disconnectModule(moduleId)),
        L.get(withoutModuleL)
      )(state);

      return L.set(root, filteredRack, state);
    }

    case 'CLEAR_MODULES': return L.set(root, [], state);

    case 'SET_RAW_VALUE': {
      const {moduleId, inputKey, value} = action.payload;
      const pathL = L.compose(
        root,
        L.find(byModuleId(moduleId)),
        L.prop('inputs'),
        L.prop(inputKey)
      );
      return L.set(pathL, {type: 'value', value}, state);
    }

    case 'SET_MODULE_POSITION': {
      const {moduleId, position} = action.payload;
      const pathL = L.compose(
        root,
        L.find(byModuleId(moduleId)),
        L.prop('dv'),
        L.prop('p')
      );
      return L.set(pathL, position, state);
    }

    case 'DISCONNECT_MODULE_INPUT': {
      const {moduleId, key} = action.payload;
      const pathL = L.compose(
        root,
        L.find(byModuleId(moduleId)),
        L.prop('inputs')
      );
      return L.modify(pathL, omit([key]), state);
    }

    case 'CONNECT_MODULES': {
      const {
        inputModuleId,
        outputModuleId,
        inputKey,
        outputKey
      } = action.payload;

      const pathL = L.compose(
        root,
        L.find(byModuleId(inputModuleId)),
        L.prop('inputs'),
        L.prop(inputKey)
      );

      const newRack = L.set(pathL, createConnection(outputModuleId, outputKey), state);

      if (checkForCycles(L.get(root, newRack))) {
        alert('Action results in a cycle');
        return state;
      }

      return newRack;
    }

    case 'UPDATE_DRAWING_VALUES': {
      const pathL = L.compose(
        root,
        L.find(byModuleId(action.payload.moduleId)),
        L.prop('dv')
      );

      return L.modify(pathL, merge(action.payload.drawingValues), state);
    }

    default: return L.set(root, defaultTo(initialValue, L.get(root, state)), state);
  }
};

export const selectors = {
  rack: L.get(root),
};
