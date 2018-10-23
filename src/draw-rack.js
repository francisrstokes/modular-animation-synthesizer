import {vAdd} from 'vec-la-fp';
import {socketRadius} from './constants';

const drawSockets = (mc, ctx, translateToPosition) => ([key, { text, socket }]) => {
  ctx.fillText(key, ...translateToPosition(text));
  mc.drawEllipse(mc.circle(socketRadius, translateToPosition(socket)));
};

const drawConnections = (mc, translateToPosition, inputPositions, rack) => ([inputKey, inputObj]) => {
  if (inputObj.type === 'connection') {
    const inputModule = rack.find(md => inputObj.module === md.name);
    if (inputModule) {
      const inputProp = inputObj.property;
      const inputPos = translateToPosition(inputPositions[inputKey].socket);
      const outputPos = vAdd(inputModule.drawingValues.outputPositions[inputProp].socket, inputModule.drawingValues.position);
      mc.drawLine(mc.line(inputPos, outputPos));
    }
  } else if (inputObj.type === 'value') {
    const inputPos = translateToPosition(inputPositions[inputKey].socket);
    mc.fill([0, 50, 200, 0.5]);
    mc.drawEllipse(mc.circle(socketRadius, inputPos));
    mc.fill([255, 255, 255, 0.5])
  }
}

export const drawRack = (rack, mc, ctx) => {
  rack.forEach(moduleDef => {
    const {
      position,
      textPosition,
      inPosition,
      outPosition,
      dimensions: [dx, dy],
      inputPositions,
      outputPositions,
    } = moduleDef.drawingValues;

    const translateToPosition = vAdd(position);

    const modulePoints = [
      [0, 0],
      [dx, 0],
      [dx, dy],
      [0, dy]
    ].map(v => translateToPosition(v));

    mc.stroke([255, 255, 255, 1]);
    mc.fill([0,0,0,1]);
    mc.drawPolygon({points: modulePoints});
    mc.fill([255, 255, 255, 0.5]);

    // Module Title
    ctx.fillText(moduleDef.moduleName, ...translateToPosition(textPosition));

    // Title box line
    mc.fill([255, 255, 255, 0.25]);
    mc.drawLine(mc.line(
      translateToPosition([0, 30]),
      translateToPosition([dx, 30]),
    ));
    mc.fill([255, 255, 255, 0.5]);

    // In
    ctx.fillText('In', ...translateToPosition(inPosition));

    // Out
    ctx.fillText('Out', ...translateToPosition(outPosition));

    Object.entries(inputPositions).forEach(drawSockets(mc, ctx, translateToPosition));
    Object.entries(outputPositions).forEach(drawSockets(mc, ctx, translateToPosition));
    Object.entries(moduleDef.inputs).forEach(drawConnections(mc, translateToPosition, inputPositions, rack));
  })
}