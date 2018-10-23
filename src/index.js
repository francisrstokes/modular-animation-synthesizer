import microcan from 'microcan-fp';
import {vAdd} from 'vec-la-fp';
import {getModules, findModule} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime} from './global';
import {generateAnimationFn} from './generate-animation-function';
import {getRack} from './rack';
import {pointInRect} from './math-util';

const textSize = 15;
const socketRadius = 5;
const w = window.innerWidth;
const h = window.innerHeight;
const wh = [w, h];
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

let mode = 'animate';

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

const drawRack = rack => {
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

    const drawSockets = ([key, { text, socket }]) => {
      ctx.fillText(key, ...translateToPosition(text));
      mc.drawEllipse(mc.circle(socketRadius, translateToPosition(socket)));
    };

    const drawConnections = ([inputKey, inputObj]) => {
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

    Object.entries(inputPositions).forEach(drawSockets);
    Object.entries(outputPositions).forEach(drawSockets);

    Object.entries(moduleDef.inputs).forEach(drawConnections);
  })
}

const aniFn = generateAnimationFn(rack, modules);
const draw = () => {
  mc.background([0,0,0,1]);
  mc.fill([255, 255, 255, 1]);
  mc.stroke([255, 255, 255, 1]);

  if (mode === 'animate') {
    aniFn();
    incTime();
  } else if (mode === 'edit') {
    drawRack(rack);
  }

  requestAnimationFrame(draw);
};
draw();




const setModeButtonText = (el, mode) => {
  el.innerText = mode === 'animate' ? 'Edit Mode' : 'Animation Mode';
};

const getToggledMode = mode => (mode === 'edit') ? 'animate' : 'edit';

const toggleModeButton = document.getElementById('toggleMode');
setModeButtonText(toggleModeButton, mode);
toggleModeButton.addEventListener('click', () => {
  mode = getToggledMode(mode);
  setModeButtonText(toggleModeButton, mode);
});



const mouseState = {
  isDragging: false,
  draggedModule: null
};

canvas.addEventListener('mousedown', ({ x, y }) => {
  if (mode === 'edit') {
    rack.some(md => {
      const pos = md.drawingValues.position;
      const dim = [md.drawingValues.dimensions[0], 30];
      if (pointInRect(pos, dim, [x, y])) {
        mouseState.isDragging = true;
        mouseState.draggedModule = md;
        return true;
      }
    })
  }
})

canvas.addEventListener('mousemove', ({ x, y }) => {
  if (mode === 'edit' && mouseState.isDragging) {
    mouseState.draggedModule.drawingValues.position = [x, y];
  }
})

canvas.addEventListener('mouseup', () => {
  if (mode === 'edit' && mouseState.isDragging) {
    mouseState.isDragging = false;
    mouseState.draggedModule = null;
  }
})