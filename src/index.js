import microcan from 'microcan-fp';
import {vSub, vAdd} from 'vec-la-fp';
import {getModules, findModule} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime} from './global';
import {generateAnimationFn} from './generate-animation-function';
import {getRack} from './rack';
import {pointInRect} from './math-util';

import {textSize, socketRadius, w, h, wh} from './constants';
import {drawRack} from './draw-rack';

const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
const mc = microcan(ctx, wh);
const modules = getModules(mc);
const rack = getRack(w, h).map(moduleDef => {
  moduleDef.moduleName = moduleDef.module;
  moduleDef.module = findModule(moduleDef.module, modules);
  return moduleDef;
});

ctx.font = `${textSize}px Arial`;

const state = {
  mode: 'animate',
  substate: '',
  data: {}
};

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

const aniFn = generateAnimationFn(rack, modules);
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


const setModeButtonText = (el, mode) => {
  el.innerText = mode === 'animate' ? 'Edit Mode' : 'Animation Mode';
};

const getToggledMode = mode => (mode === 'edit') ? 'animate' : 'edit';

const toggleModeButton = document.getElementById('toggleMode');
setModeButtonText(toggleModeButton, state.mode);
toggleModeButton.addEventListener('click', () => {
  state.mode = getToggledMode(state.mode);
  setModeButtonText(toggleModeButton, state.mode);
});

canvas.addEventListener('mousedown', ({ x, y }) => {
  if (state.mode === 'edit' && state.substate === '') {
    rack.some(md => {
      const pos = md.drawingValues.position;
      const dim = [md.drawingValues.dimensions[0], 30];
      if (pointInRect(pos, dim, [x, y])) {
        state.substate = 'dragging';
        state.data.draggedModule = md;
        state.data.dragOffset = vSub([x, y], pos);
        return true;
      }
    })
  }
})

canvas.addEventListener('mousemove', ({ x, y }) => {
  if (state.mode === 'edit' && state.substate === 'dragging') {
    state.data.draggedModule.drawingValues.position = vSub([x, y], state.data.dragOffset);
  }
})

canvas.addEventListener('mouseup', () => {
  if (state.mode === 'edit' && state.substate === 'dragging') {
    state.substate = '';
    state.data.draggedModule = null;
  }
})