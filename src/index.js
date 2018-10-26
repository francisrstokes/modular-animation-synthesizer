import microcan from 'microcan-fp';
import {modules, findModule} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime} from './global';
import {generateAnimationFn} from './generate-animation-function';
import {rack} from './rack';
import {state, getAnimationFn, setAnimationFn} from './state';
import {textSize, w, h, wh} from './constants';
import {drawRack} from './draw-rack';
import {setupEvents} from './events';
import {computeModuleDefDrawingValues} from './compute-moduledef-drawing-values'

import {init} from './react';

const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
const mc = microcan(ctx, wh);
init(ctx, mc);

rack.forEach(moduleDef => {
  moduleDef.moduleName = moduleDef.module;
  moduleDef.module = findModule(moduleDef.module, modules);
});

ctx.font = `${textSize}px Arial`;

if (checkForCycles(rack, modules)) {
  throw new Error('Cycle found');
}

// Setup the drawing values for each module
rack.forEach(moduleDef => {
  const drawingValues = computeModuleDefDrawingValues(moduleDef, ctx);
  const currentPosition = moduleDef.drawingValues.position;
  moduleDef.drawingValues = {
    position: (currentPosition) ? currentPosition : [Math.random() * w, Math.random() * h],
    ...drawingValues
  }
});

setAnimationFn(generateAnimationFn(mc));
const draw = () => {
  mc.fill([255, 255, 255, 1]);
  mc.stroke([255, 255, 255, 1]);

  if (state.mode === 'animate') {
    getAnimationFn()();
    incTime();
  } else if (state.mode === 'edit') {
    mc.background([0,0,0,1]);
    drawRack(rack, mc, ctx);
  }

  requestAnimationFrame(draw);
};
draw();

setupEvents(canvas, rack);