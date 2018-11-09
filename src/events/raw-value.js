import { pointInCircle } from '../util/math-util';
import { socketRadius } from '../constants';

export const mousedown = (props, clickPosition) => {
  const {
    rack,
    globalTranslate,
    setRawValue,
    isInRawMode,
    rawValue
  } = props;
  if (isInRawMode) {
    return rack.some(md => {
      Object.entries(md.dv.inp).forEach(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
          const value = JSON.parse(rawValue);
          setRawValue(md.name, inputKey, value);
          return true;
        }
      });
    });
  }
};
