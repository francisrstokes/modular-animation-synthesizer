import {reduce, compose, view, lensProp, omit, append, set, defaultTo} from 'ramda';
import {rack as initialValue} from '../../rack/rack';
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

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_MODULE': return set(root, append(action.payload, view(root, state)), state);

    case 'REMOVE_MODULE': {
      const moduleId = action.payload;
      return set(root, view(root, state)
        .filter(md => md.name !== moduleId)
        .filter(filterDisconnect(moduleId)), state);
    }

    case 'CLEAR_MODULES': return set(root, [], state);

    case 'DISCONNECT_MODULE': {
      const moduleId = action.payload;
      return set(root, view(root, state).filter(filterDisconnect(moduleId)), state);
    }

    case 'SET_RAW_VALUE': {
      const {moduleId, inputKey, value} = action.payload;

      return set(root, view(root, state).map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          inputs: {
            ...md.inputs,
            [inputKey]: {type: 'value', value}
          }
        }
      }), state);
    }

    case 'SET_MODULE_POSITION': {
      const {moduleId, position} = action.payload;

      return set(root, view(root, state).map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          dv: {
            ...md.dv,
            p: position
          }
        }
      }), state);
    }

    case 'DISCONNECT_MODULE_INPUT': {
      const {moduleId, key} = action.payload;

      return set(root, view(root, state).map(md => {
        if (md.name !== moduleId) return md;
        return {
          ...md,
          inputs: omit([key], md.inputs)
        }
      }), state);
    }

    case 'CONNECT_MODULES': {
      const {
        inputModuleId,
        outputModuleId,
        inputKey,
        outputKey
      } = action.payload;

      const newRack = view(root, state).map(md => {
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
        return set(root, state, state);
      }

      return set(root, newRack, state);
    }

    case 'UPDATE_DRAWING_VALUES': {
      return set(root, view(root, state).map(md => {
        if (md.name !== action.payload.moduleId) return md;
        return {
          ...md,
          dv: {
            p: md.dv.p,
            ...action.payload.drawingValues
          }
        }
      }), state);
    }

    default: return set(root, defaultTo(initialValue, view(root, state)), state);
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
