import { pointInRect } from '../util/math-util';
import { vSub, vAdd } from 'vec-la-fp';

export const mousedown = (props, clickPosition) => {
  const {rack, globalTranslate, gotoDragMode, setDragData, selectedModules} = props;
  return [...rack].reverse().some(md => {
    const pos = globalTranslate(md.dv.p);
    const dim = [md.dv.d[0], 30];
    if (pointInRect(pos, dim, clickPosition)) {
      if (!selectedModules.includes(md.name)) {
        props.setSelection([md.name]);
      }
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
    setModulePosition,
    selectedModules
  } = props;

  if (isInDragMode) {
    const draggedModule = rack.find(md => md.name === draggedModuleId);
    const [x, y] = clickPosition;
    const [gx, gy] = globalOffset;
    const diff = [x - gx, y - gy];

    selectedModules.forEach(mId => {
      const cMd = rack.find(md => md.name === mId);
      const offsetFromDraggedModule = mId !== draggedModuleId
        ? vSub(cMd.dv.p, draggedModule.dv.p)
        : [0,0];

      setModulePosition(mId, vAdd(vSub(diff, dragOffset), offsetFromDraggedModule));
    });
  }
};
