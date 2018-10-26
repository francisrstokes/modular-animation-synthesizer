import {state, globalTranslate} from './state';
import {pointInCircle, pointInRect} from './math-util';
import {vSub, vAdd} from 'vec-la-fp';
import {socketRadius} from './constants';

const setModeButtonText = (el, mode) => {
  el.innerText = mode === 'animate' ? 'Edit Mode' : 'Animation Mode';
};

const getToggledMode = mode => (mode === 'edit') ? 'animate' : 'edit';

const toggleModeButton = document.getElementById('toggleMode');
setModeButtonText(toggleModeButton, state.mode);

export const setupEvents = (canvas, rack) => {
  toggleModeButton.addEventListener('click', () => {
    state.mode = getToggledMode(state.mode);
    setModeButtonText(toggleModeButton, state.mode);
  });

  canvas.addEventListener('mousedown', ({ x, y }) => {
    if (state.mode === 'edit' && state.substate === 'delete') {
      rack.some(md => {
        const pos = globalTranslate(md.drawingValues.position);
        const dim = md.drawingValues.dimensions;
        if (pointInRect(pos, dim, [x, y])) {
          const ind = rack.indexOf(md);
          rack.splice(ind, 1);
          return true;
        }
      });
    }

    if (state.mode === 'edit' && state.substate === 'raw') {
      rack.some(md => {
        Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
          if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, [x, y])) {
            const value = JSON.parse(state.data.rawValue);
            md.inputs[inputKey] = {
              type: 'value',
              value
            };
          }
        });
      });
    }

    let enteredDragState = null
    if (state.mode === 'edit' && state.substate === '') {
      enteredDragState = rack.some(md => {
        const pos = globalTranslate(md.drawingValues.position);
        const dim = [md.drawingValues.dimensions[0], 30];
        if (pointInRect(pos, dim, [x, y])) {
          state.substate = 'dragging';
          state.data.draggedModule = md;
          state.data.dragOffset = vSub([x, y], pos);
          return true;
        }
      });

      if (enteredDragState) return;

      let connectingFromInput = null;
      rack.some(md => {
        const pos = globalTranslate(md.drawingValues.position);
        const dim = md.drawingValues.dimensions;

        if (pointInRect(pos, dim, [x, y])) {
          Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
            if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, [x, y])) {
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

      if (connectingFromInput) return;

      // Panning
      state.substate = 'panning';
      state.data.lastPos = [x, y];
    }

    let finishedConnecting = null;
      if (state.mode === 'edit' && state.substate === 'connecting_from_input') {
        finishedConnecting = rack.some(md => {
          const pos = globalTranslate(md.drawingValues.position);
          const dim = md.drawingValues.dimensions;

          if (pointInRect(pos, dim, [x, y])) {
            Object.entries(md.drawingValues.outputPositions).forEach(([outputKey, {socket}]) => {
              if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, [x, y])) {
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
      }
  });

  canvas.addEventListener('mousemove', ({ x, y }) => {
    if (state.mode === 'edit' && state.substate === 'dragging') {
      const [gx, gy] = state.translate;
      state.data.draggedModule.drawingValues.position = vSub([x - gx, y - gy], state.data.dragOffset);
    }

    if (state.mode === 'edit' && state.substate === 'panning') {
      const diff = vSub([x, y], state.data.lastPos);
      state.translate = vAdd(state.translate, diff);
      state.data.lastPos = [x, y];
    }
  })

  canvas.addEventListener('mouseup', () => {
    if (state.mode === 'edit') {
      if (['dragging', 'panning'].includes(state.substate)) {
        state.substate = '';
      }
    }
  })
}
