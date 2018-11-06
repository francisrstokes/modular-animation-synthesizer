import {textSize, socketRadius} from '../shared/constants';

export const computeModuleDefDrawingValues = (moduleDef, ctx) => {
  const margin = 15;

  const textPosition = [margin, textSize];
  const inPosition = [margin, textSize * 3];
  const inputPositions = {};
  const outputPositions = {};

  const sy = textSize * 4;
  let longestWidth = 0;
  const inputKeys = Object.keys(moduleDef.module.inputs);
  if (inputKeys.length) {
    longestWidth = ctx.measureText('In').width + margin;

    inputKeys.forEach((input, i) => {
      const tw = ctx.measureText(input).width + margin * 2 + socketRadius * 2;
      longestWidth = (longestWidth < tw) ? tw : longestWidth;

      inputPositions[input] = {
        text: [margin * 2 + socketRadius * 2, sy + 2 * socketRadius * i + socketRadius / 2],
        socket: [margin + socketRadius, sy + (2 * socketRadius * i)]
      }
    });
  }


  // Output keys
  const outputKeys = Object.keys(moduleDef.module.outputs);
  const outPosition = [margin * 4 + longestWidth, textSize * 3]
  const insx = longestWidth;
  longestWidth = 0;
  outputKeys.forEach((output, i) => {
    const tw = ctx.measureText(output).width + margin * 2 + socketRadius * 2;
    longestWidth = (longestWidth < tw) ? tw : longestWidth;

    outputPositions[output] = {
      text: [insx + margin * 4 + socketRadius * 4, sy + 2 * socketRadius * i + socketRadius / 2],
      socket: [insx + margin * 4 + socketRadius, sy + (2 * socketRadius * i)]
    };
  });

  const dimensions = [insx + longestWidth + margin * 4, sy + Math.max(inputKeys.length, outputKeys.length) * 2 * socketRadius]
  return {
    textPosition,
    inPosition,
    outPosition,
    dimensions,
    inputPositions,
    outputPositions,
  }
}