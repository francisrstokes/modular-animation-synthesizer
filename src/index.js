import microcan from 'microcan-fp';
import {modules, findModule} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime} from './global';
import {generateAnimationFn} from './generate-animation-function';
import {rack} from './rack';
import {state} from './state';
import {textSize, socketRadius, w, h, wh} from './constants';
import {drawRack} from './draw-rack';
import {setupEvents} from './events';

import {init} from './react';
init();

const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
const mc = microcan(ctx, wh);

rack.forEach(moduleDef => {
  moduleDef.moduleName = moduleDef.module;
  moduleDef.module = findModule(moduleDef.module, modules);
});

ctx.font = `${textSize}px Arial`;

if (checkForCycles(rack, modules)) {
  throw new Error('Cycle found');
}

const computeModuleDefDrawingValues = moduleDef => {
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
        text: [margin * 2 + socketRadius * 2, sy + textSize * i],
        socket: [margin + socketRadius, sy + (textSize * i) - socketRadius]
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
      text: [insx + margin * 4 + socketRadius * 4, sy + textSize * i],
      socket: [insx + margin * 4 + socketRadius, sy + (textSize * i) - socketRadius]
    };
  });

  const dimensions = [insx + longestWidth + margin * 4, sy + Math.max(inputKeys.length, outputKeys.length) * textSize]
  return {
    textPosition,
    inPosition,
    outPosition,
    dimensions,
    inputPositions,
    outputPositions,
  }
}

// Setup the drawing values for each module
rack.forEach(moduleDef => {
  const drawingValues = computeModuleDefDrawingValues(moduleDef);
  const currentPosition = moduleDef.drawingValues.position;
  moduleDef.drawingValues = {
    position: (currentPosition) ? currentPosition : [Math.random() * w, Math.random() * h],
    ...drawingValues
  }
});

const aniFn = generateAnimationFn(mc);
const draw = () => {
  mc.background([0,0,0,1]);
  mc.fill([255, 255, 255, 1]);
  mc.stroke([255, 255, 255, 1]);

  if (state.mode === 'animate') {
    aniFn();
    incTime();
  } else if (state.mode === 'edit') {
    drawRack(rack, mc, ctx);
  }

  requestAnimationFrame(draw);
};
draw();

setupEvents(canvas, rack);