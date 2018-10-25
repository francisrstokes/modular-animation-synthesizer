import {state, globalTranslate} from './state';
import {pointInCircle, pointInRect} from './math-util';
import {vSub, vSubAll, vAdd} from 'vec-la-fp';

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
    if (state.mode === 'edit' && state.substate === '') {
      const enteredDragState = rack.some(md => {
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

      const enteredValueChangeState = rack.some(md => {
        const pos = globalTranslate(md.drawingValues.position);
        const dim = md.drawingValues.dimensions;

        if (pointInRect(pos, dim, [x, y])) {
          Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
            if (pointInCircle(vAdd(socket, md.drawingValues.position), socketRadius, [x, y])) {
              console.log(`click in ${md.name} input socket ${inputKey}`);
              state.substate = 'connecting';
            }
          });
        }
      });

      if (enteredValueChangeState) return;

      // Panning
      state.substate = 'panning';
      state.data.lastPos = [x, y];
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
