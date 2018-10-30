import { state, globalTranslate } from '../shared/state';
import { pointInCircle } from '../util/math-util';
import { socketRadius } from '../shared/constants';

export const mousedown = (rack, clickPosition) => {
  if (state.mode === 'edit' && state.substate === 'raw') {
    return rack.some(md => {
      Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, clickPosition)) {
          const value = JSON.parse(state.data.rawValue);
          md.inputs[inputKey] = {
            type: 'value',
            value
          };
          return true;
        }
      });
    });
  }
};
