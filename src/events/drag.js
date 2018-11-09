import { pointInRect } from '../util/math-util';
import { vSub } from 'vec-la-fp';

export const mousedown = ({rack, globalTranslate, gotoDragMode, setDragData}, clickPosition) => {
  return [...rack].reverse().some(md => {
    const pos = globalTranslate(md.dv.p);
    const dim = [md.dv.d[0], 30];
    if (pointInRect(pos, dim, clickPosition)) {
      gotoDragMode();
      setDragData(md.name, vSub(clickPosition, pos));
      return true;
    }
  });
};

export const mousemove = (props, clickPosition) => {
  const {
    rack,
    isInDragMode,
    globalOffset,
    draggedModuleId,
    dragOffset,
    setModulePosition
  } = props;

  if (isInDragMode) {
    const {name: moduleId} = rack.find(md => md.name === draggedModuleId);
    const [x, y] = clickPosition;
    const [gx, gy] = globalOffset;
    setModulePosition(moduleId, vSub([x - gx, y - gy], dragOffset));
  }
};
