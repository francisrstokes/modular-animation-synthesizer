import microcan from 'microcan-fp';
import {
  vScale
} from 'vec-la-fp';

import {getModules, findModule as fm} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime, getTime} from './global';
import {getRack} from './rack';

const w = window.innerWidth;
const h = window.innerHeight;
const wh = [w, h];
const C = vScale(0.5, wh);
const rack = getRack(w, h);

const ctx = document.getElementById('main').getContext('2d');

const mc = microcan(ctx, wh);
const modules = getModules(mc);
const findModule = fm;

checkForCycles(rack, modules);

const getUnevaluatedModules = rack => rack.filter(md => !md.isEvaluated);
const getEvaluatableModule = (rack, knownVariables) => {
  return rack.find(({inputs}) => {
    return Object.values(inputs).reduce((acc, cur) => {
      // If it's ever false it's always false
      if (!acc) return acc;

      if (Array.isArray(cur)) {
        return knownVariables.includes(cur[0]);
      }

      // Regular values can always be evaluated
      return true;
    }, true);
  })
}

const inputsToString = inputs => {
  return Object.entries(inputs)
    .reduce((acc, [k, v]) => {
      return [
        ...acc,
        `${k}: ${Array.isArray(v) ? v.join('.') : v}`
      ]
    }, [])
    .join(', ');
}

const generateAnimationFn = rack => {
  const copy = JSON.parse(JSON.stringify(rack)).map(moduleDef => {
    moduleDef.moduleName = moduleDef.module;
    moduleDef.module = findModule(moduleDef.module, modules);
    moduleDef.isEvaluated = false;
    return moduleDef;
  });

  const entryPoints = copy.filter(({module}) => Object.keys(module.inputs).length === 0);

  const knownVariables = [];
  let fnStr = '';

  fnStr += entryPoints.map(md => {
    const {name, moduleName} = md;
    knownVariables.push(name);
    md.isEvaluated = true;
    return `const ${name} = findModule('${moduleName}', modules).fn();`
  }).join('\n');

  let unevaluated = getUnevaluatedModules(copy);
  while (unevaluated.length > 0) {
    const md = getEvaluatableModule(unevaluated, knownVariables);
    knownVariables.push(md.name);
    md.isEvaluated = true;
    fnStr += `\nconst ${md.name} = findModule('${md.moduleName}', modules).fn({${inputsToString(md.inputs)}})`;
    unevaluated = getUnevaluatedModules(copy)
  }

  fnStr += '\nconsole.log(p1);'
  return fnStr;
  // console.log(fnStr);
}

// generateAnimationFn(rack)
const aniFn = generateAnimationFn(rack);
const draw = () => {
  mc.background([0,0,0,1]);
  mc.fill([255, 255, 255, 1]);
  // mc.drawPolygon(mc.poly(6, 100, C));

  eval(aniFn);

  incTime();
  requestAnimationFrame(draw);
};
draw();