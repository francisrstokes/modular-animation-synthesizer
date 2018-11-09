import { pointInRect, pointInCircle } from '../util/math-util';
import { socketRadius } from '../constants';

export const start = (props, clickPosition) => {
  const {
    rack,
    globalTranslate,
    gotoConnectingInputMode,
    disconnectModuleInput,
    setConnectingData
  } = props;
  let connectingFromInput = null;
  rack.some(md => {
    const pos = globalTranslate(md.dv.p);
    const dim = md.dv.d;

    if (pointInRect(pos, dim, clickPosition)) {
      Object.entries(md.dv.inp).forEach(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.dv.p), socketRadius, clickPosition)) {
          connectingFromInput = true;

          if (md.inputs[inputKey]) {
            disconnectModuleInput(md.name, inputKey);
            return;
          }
          gotoConnectingInputMode();
          setConnectingData(md.name, inputKey);
        }
      });
    }
  });
  return connectingFromInput;
};


export const end = (props, clickPosition) => {
  const {
    rack,
    globalTranslate,
    isInConnectingInputMode,
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

            // if (checkForCycles(rack, modules)) {
            //   alert('This action results in a cycle');
            //   delete inputModule.inputs[key];
            // }

            // inputModule.inputs[key] = {
            //   type: 'connection',
            //   module: md.name,
            //   property: outputKey
            // }

            gotoEditMode();
            return true;
          }
        });
      }
    });
  };
};
