import { globalTranslate, state } from '../shared/state';
import { pointInRect, pointInCircle } from '../util/math-util';
import { socketRadius } from '../shared/constants';

export const start = (rack, clickPosition) => {
  let connectingFromInput = null;
  rack.some(md => {
    const pos = globalTranslate(md.drawingValues.position);
    const dim = md.drawingValues.dimensions;

    if (pointInRect(pos, dim, clickPosition)) {
      Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, clickPosition)) {
          connectingFromInput = true;

          if (md.inputs[inputKey]) {
            delete md.inputs[inputKey];
            return;
          }
          state.substate = 'connecting_from_input';
          state.data.connectingInput = {
            module: md,
            key: inputKey
          }
        }
      });
    }
  });
  return connectingFromInput;
};


export const end = (rack, clickPosition) => {
  if (state.mode === 'edit' && state.substate === 'connecting_from_input') {
    return rack.some(md => {
      const pos = globalTranslate(md.drawingValues.position);
      const dim = md.drawingValues.dimensions;

      if (pointInRect(pos, dim, clickPosition)) {
        Object.entries(md.drawingValues.outputPositions).forEach(([outputKey, {socket}]) => {
          if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, clickPosition)) {
            const {module: inputModule, key} = state.data.connectingInput;
            inputModule.inputs[key] = {
              type: 'connection',
              module: md.name,
              property: outputKey
            }
            state.substate = '';
          }
        });
      }
    });
  };
};
