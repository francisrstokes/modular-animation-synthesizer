import {reduce, compose, view, lensProp, omit, append} from 'ramda';
import {rack as initialState} from '../../rack/rack';
import { checkForCycles } from '../../util/check-for-cycles';

const root = lensProp('rack');

const filterDisconnect = moduleId => md => {
  return {
    ...md,
    inputs: Object.entries(md.inputs).reduce((acc, [_, input]) => {
      if (input.type === 'connection' && input.module === moduleId) {
        return acc;
      }
      return {...acc, input};
    }, {})
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MODULE': {
      return append(action.payload, state);
    }

    case 'REMOVE_MODULE': {
      const moduleId = action.payload;
      return state
        .filter(md => md.name !== moduleId)
        .filter(filterDisconnect(moduleId));
    }

    case 'CLEAR_MODULES': return [];

    case 'DISCONNECT_MODULE': {
      const moduleId = action.payload;
      return state.filter(filterDisconnect(moduleId));
    }

    case 'SET_RAW_VALUE': {
      const {moduleId, inputKey, value} = action.payload;

      return state.map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          inputs: {
            ...md.inputs,
            [inputKey]: {type: 'value', value}
          }
        }
      })
    }

    case 'SET_MODULE_POSITION': {
      const {moduleId, position} = action.payload;

      return state.map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          dv: {
            ...md.dv,
            p: position
          }
        }
      });
    }

    case 'DISCONNECT_MODULE_INPUT': {
      const {moduleId, key} = action.payload;

      return state.map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          inputs: omit([key], md.inputs)
        }
      });
    }

    case 'CONNECT_MODULES': {
      const {
        inputModuleId,
        outputModuleId,
        inputKey,
        outputKey
      } = action.payload;

      const newRack = state.map(md => {
        if (md.name !== inputModuleId) return md;
        return {
          ...md,
          inputs: {
            ...md.inputs,
            [inputKey]: {
              type: 'connection',
              module: outputModuleId,
              property: outputKey
            }
          }
        };
      });

      if (checkForCycles(newRack)) {
        alert('Action results in a cycle');
        return state;
      }

      return newRack;
    }

    case 'UPDATE_DRAWING_VALUES': {
      return state.map(md => {
        if (md.name !== action.payload.moduleId) return md;
        return {
          ...md,
          dv: {
            p: md.dv.p,
            ...action.payload.drawingValues
          }
        }
      });
    }

    default: return state;
  }
};

const selectConnectionsAndValues = compose(
  reduce((acc, md) => {
    Object.entries(md.inputs).forEach(([key, value]) => {
      if (value.type === 'value') {
        acc.values.push({
          inputModule: md.name,
          inputProperty: key
        });
      } else if (value.type === 'connection') {
        acc.connections.push({
          inputModule: md.name,
          inputProperty: key,
          outputModule: value.module,
          outputProperty: value.property
        });
      }
    })
    return acc;
  }, {connections: [], values: []}),
  view(root)
)

export const selectors = {
  rack: view(root),
  connections: selectConnectionsAndValues
};