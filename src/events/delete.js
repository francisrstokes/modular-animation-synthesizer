import { pointInRect } from '../util/math-util';
import { globalTranslate, state } from '../shared/state';
import { disconnectModule } from '../rack/disconnect-module';

export const mousedown = (rack, clickPosition) => {
  if (state.mode === 'edit' && state.substate === 'delete') {
    rack.some(md => {
      const pos = globalTranslate(md.drawingValues.position);
      const dim = md.drawingValues.dimensions;
      if (pointInRect(pos, dim, clickPosition)) {
        disconnectModule(rack, md.name);
        const ind = rack.indexOf(md);
        rack.splice(ind, 1);
        return true;
      }
    });
  }
};
