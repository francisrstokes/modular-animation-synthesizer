import { pointInRect, pointInCircle } from '../util/math-util';
import { socketRadius } from '../shared/constants';

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
    const pos = globalTranslate(md.drawingValues.position);
    const dim = md.drawingValues.dimensions;

    if (pointInRect(pos, dim, clickPosition)) {
      Object.entries(md.drawingValues.inputPositions).forEach(([inputKey, {socket}]) => {
        if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, clickPosition)) {
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
      const pos = globalTranslate(md.drawingValues.position);
      const dim = md.drawingValues.dimensions;

      if (pointInRect(pos, dim, clickPosition)) {
        Object.entries(md.drawingValues.outputPositions).forEach(([outputKey, {socket}]) => {
          if (pointInCircle(globalTranslate(socket, md.drawingValues.position), socketRadius, clickPosition)) {
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
