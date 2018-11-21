import {textSize, socketRadius} from '../constants';
import {findModule} from '../modules';

export const computeModuleDefDrawingValues = (moduleDef, ctx) => {
  const margin = 15;

  const textPosition = [margin, textSize];
  const inPosition = [margin, textSize * 3];
  const inputPositions = {};
  const outputPositions = {};

  const sy = textSize * 4;
  let longestWidth = 0;
  const inputKeys = Object.keys(findModule(moduleDef.moduleName).inputs);
  if (inputKeys.length) {
    inputKeys.forEach((input, i) => {
      const tw = ctx.measureText(input).width + margin * 1 + socketRadius * 2;
      longestWidth = (longestWidth < tw) ? tw : longestWidth;

      inputPositions[input] = {
        text: [margin + socketRadius * 2, sy + 2 * socketRadius * i + socketRadius / 2],
        socket: [socketRadius, sy + (2 * socketRadius * i)]
      }
    });
  }


  // Output keys
  const outputKeys = Object.keys(findModule(moduleDef.moduleName).outputs);
  const outPosition = [margin * 2 + longestWidth, textSize * 3]
  const insx = outPosition[0];
  longestWidth = 0;
  outputKeys.forEach((output, i) => {
    const tw = ctx.measureText(output).width + margin * 2 + socketRadius * 2;
    longestWidth = (longestWidth < tw) ? tw : longestWidth;

    outputPositions[output] = {
      text: [insx  + socketRadius * 4, sy + 2 * socketRadius * i + socketRadius / 2],
      socket: [0,0]//[insx + socketRadius, ]
    };
  });

  const dimensions = [insx + longestWidth + margin, sy + Math.max(inputKeys.length, outputKeys.length) * 2 * socketRadius];
  outputKeys.forEach((output, i) => {
    outputPositions[output].socket = [dimensions[0] - socketRadius, sy + (2 * socketRadius * i)];
  });


  return {
    tp: textPosition,
    ip: inPosition,
    op: outPosition,
    d: dimensions,
    inp: inputPositions,
    oup: outputPositions,
  }
}