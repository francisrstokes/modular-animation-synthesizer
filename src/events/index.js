import {state} from '../shared/state';

import {mousedown as deleteMousedown} from './delete';
import {mousedown as rawValueMousedown} from './raw-value';
import {mousedown as dragMousedown, mousemove as dragMousemove} from './drag';
import {start as connectStart, end as connectEnd} from './connect';
import {start as panStart, move as panMove} from './pan';

export const setupEvents = (canvas, rack) => {
  canvas.addEventListener('mousedown', ({ x, y }) => {
    const clickPosition = [x, y];

    if (deleteMousedown(rack, clickPosition)) return;
    if (rawValueMousedown(rack, clickPosition)) return;

    if (state.mode === 'edit' && state.substate === '') {
      if (dragMousedown(rack, clickPosition)) return;
      if (connectStart(rack, clickPosition)) return;

      panStart(clickPosition);
      return;
    }

   if (connectEnd(rack, clickPosition)) return;
  });

  canvas.addEventListener('mousemove', ({ x, y }) => {
    const clickPosition = [x, y];
    dragMousemove(clickPosition);
    panMove(clickPosition);
  })

  canvas.addEventListener('mouseup', () => {
    if (state.mode === 'edit') {
      if (['dragging', 'panning'].includes(state.substate)) {
        state.substate = '';
      }
    }
  })
}
