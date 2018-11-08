import {omit} from 'ramda';
import {rack as initialState} from '../../rack/rack';
// const initialState = [];

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
    case 'ADD_MODULE': return [...state, action.payload];

    case 'REMOVE_MODULE': {
      const moduleId = action.payload;
      return state
        .filter(md => md.name !== action.payload)
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
          drawingValues: {
            ...md.drawingValues,
            position
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

      return state.map(md => {
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
      })
    }

    default: return state;
  }
};

export const selectors = {
  rack: state => {
    return state.rack
  }
};
