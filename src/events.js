import {state} from './state';
import {pointInCircle, pointInRect} from './math-util';
import {vSub, vAdd} from 'vec-la-fp';

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
        const pos = md.drawingValues.position;
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
        const pos = md.drawingValues.position;
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
    }
  });

  canvas.addEventListener('mousemove', ({ x, y }) => {
    if (state.mode === 'edit' && state.substate === 'dragging') {
      state.data.draggedModule.drawingValues.position = vSub([x, y], state.data.dragOffset);
    }
  })

  canvas.addEventListener('mouseup', () => {
    if (state.mode === 'edit' && state.substate === 'dragging') {
      state.substate = '';
      state.data.draggedModule = null;
    }
  })
}
