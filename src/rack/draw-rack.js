import {compose} from 'ramda';
import {vAdd} from 'vec-la-fp';
import {socketRadius} from '../constants';
import { getTagColor } from './module-tag-colors';
import { findModule } from '../modules';

const drawOutputSockets = (mc, ctx, translateToPosition) => ([key, { text, socket }]) => {
  ctx.fillText(key, ...translateToPosition(text));
  mc.drawEllipse(mc.circle(socketRadius, translateToPosition(socket)));
};

const drawInputSockets = (mc, ctx, translateToPosition, inputs) => ([key, { text, socket }]) => {
  const input = inputs[key];
  const socketText = (input && input.type === 'value')
    ? `${key}(${input.value})`
    : key;

  ctx.fillText(socketText, ...translateToPosition(text));
  mc.drawEllipse(mc.circle(socketRadius, translateToPosition(socket)));
};

const drawConnections = (mc, translateToPosition, globalTranslate, inputPositions, rack) => ([inputKey, inputObj]) => {
  if (inputObj.type === 'connection') {
    const inputModule = rack.find(md => inputObj.module === md.name);
    if (inputModule) {
      const inputProp = inputObj.property;
      const inputPos = inputPositions[inputKey].socket;
      const outputPos = vAdd(inputModule.dv.p, inputModule.dv.oup[inputProp].socket);
      mc.drawLine(mc.line(
        translateToPosition(inputPos),
        globalTranslate(outputPos)
      ));
    }
  } else if (inputObj.type === 'value') {
    const inputPos = translateToPosition(inputPositions[inputKey].socket);
    mc.fill([0, 50, 200, 0.5]);
    mc.drawEllipse(mc.circle(socketRadius, inputPos));
    mc.fill([255, 255, 255, 0.5])
  }
}

export const drawRack = (rack, mc, ctx, globalTranslate) => {
  rack.forEach(moduleDef => {
    const {
      p,
      tp: textPosition,
      ip: inPosition,
      op: outPosition,
      d: [dx, dy],
      inp: inputPositions,
      oup: outputPositions,
    } = moduleDef.dv;

    const tagColor = getTagColor(findModule(moduleDef.moduleName).tag);
    const translateToPosition = compose(globalTranslate, vAdd(p));

    const modulePoints = [
      [0, 0],
      [dx, 0],
      [dx, dy],
      [0, dy]
    ].map(v => translateToPosition(v));

    const headerPoints = [
      [0, 0],
      [dx, 0],
      [dx, 30],
      [0, 30]
    ].map(v => translateToPosition(v));

    mc.stroke([255, 255, 255, 1]);

    mc.fill([0,0,0,1]);
    mc.drawPolygon({points: modulePoints});

    mc.fill(tagColor);
    mc.drawPolygon({points: headerPoints});

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

    Object.entries(inputPositions).forEach(drawInputSockets(mc, ctx, translateToPosition, moduleDef.inputs));
    Object.entries(outputPositions).forEach(drawOutputSockets(mc, ctx, translateToPosition));
  });

  rack.forEach(md => {
    const translateToPosition = compose(globalTranslate, vAdd(md.dv.p));
    Object.entries(md.inputs).forEach(drawConnections(mc, translateToPosition, globalTranslate, md.dv.inp, rack));
  })
}