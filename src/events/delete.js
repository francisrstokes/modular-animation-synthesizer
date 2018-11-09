import { pointInRect } from '../util/math-util';

export const mousedown = ({rack, isInDeleteMode, globalTranslate, removeModule}, clickPosition) => {
  if (isInDeleteMode) {
    rack.some(md => {
      const pos = globalTranslate(md.dv.p);
      const dim = md.dv.d;
      if (pointInRect(pos, dim, clickPosition)) {
        removeModule(md.name);
        return true;
      }
    });
  }
};
