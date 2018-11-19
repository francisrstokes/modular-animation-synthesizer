import { pointInRect, pointInCircle } from '../util/math-util';
import { socketRadius } from '../constants';

export const start = (props, clickPosition) => {
  const {
    rack,
    globalTranslate,
    gotoConnectingInputMode,
    disconnectModuleInput,
    gotoConnectingOutputMode,
    setConnectingData,
  } = props;
  return rack.some(md => {
    const pos = globalTranslate(md.dv.p);
    const dim = md.dv.d;

    if (pointInRect(pos, dim, clickPosition)) {
      const startedConnection = Object.entries(md.dv.inp).some(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
          if (md.inputs[inputKey]) {
            disconnectModuleInput(md.name, inputKey);
          }
          gotoConnectingInputMode();
          setConnectingData(md.name, inputKey);
          return true;
        }
      });

      if (startedConnection) return true;

      return Object.entries(md.dv.oup).some(([outputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
          gotoConnectingOutputMode();
          setConnectingData(md.name, outputKey);
          return true;
        }
      });
    }
  });
};


export const end = (props, clickPosition) => {
  const {
    rack,
    globalTranslate,
    isInConnectingInputMode,
    isInConnectingOutputMode,
    connectingModuleId,
    connectingKey,
    connectModules,
    gotoEditMode
  } = props;

  if (isInConnectingInputMode) {
    return rack.some(md => {
      const pos = globalTranslate(md.dv.p);
      const dim = md.dv.d;

      if (pointInRect(pos, dim, clickPosition)) {
        Object.entries(md.dv.oup).forEach(([outputKey, {socket}]) => {
          if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
            connectModules(connectingModuleId, md.name, connectingKey, outputKey);
            gotoEditMode();
            return true;
          }
        });
      }
    });
  };

  if (isInConnectingOutputMode) {
    return rack.some(md => {
      const pos = globalTranslate(md.dv.p);
      const dim = md.dv.d;

      if (pointInRect(pos, dim, clickPosition)) {
        Object.entries(md.dv.inp).forEach(([inputKey, {socket}]) => {
          if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
            connectModules(md.name, connectingModuleId, inputKey, connectingKey);
            gotoEditMode();
            return true;
          }
        });
      }
    });
  };
};
