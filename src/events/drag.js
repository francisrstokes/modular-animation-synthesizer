import { globalTranslate, state } from '../shared/state';
import { pointInRect } from '../util/math-util';
import { vSub } from 'vec-la-fp';

export const mousedown = (rack, clickPosition) => {
  return [...rack].reverse().some(md => {
    const pos = globalTranslate(md.drawingValues.position);
    const dim = [md.drawingValues.dimensions[0], 30];
    if (pointInRect(pos, dim, clickPosition)) {
      state.substate = 'dragging';
      state.data.draggedModule = md;
      state.data.dragOffset = vSub(clickPosition, pos);
      return true;
    }
  });
};

export const mousemove = (clickPosition) => {
  if (state.mode === 'edit' && state.substate === 'dragging') {
    const [x, y] = clickPosition;
    const [gx, gy] = state.translate;
    state.data.draggedModule.drawingValues.position = vSub([x - gx, y - gy], state.data.dragOffset);
  }
}