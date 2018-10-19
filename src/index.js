import microcan from 'microcan-fp';

import {getModules} from './modules';
import {checkForCycles} from './check-for-cycles';
import {incTime} from './global';
import {generateAnimationFn} from './generate-animation-function';
import {getRack} from './rack';

const w = window.innerWidth;
const h = window.innerHeight;
const wh = [w, h];
const rack = getRack(w, h);

const ctx = document.getElementById('main').getContext('2d');

const mc = microcan(ctx, wh);
const modules = getModules(mc);

checkForCycles(rack, modules);

const aniFn = generateAnimationFn(rack, modules);
const draw = () => {
  mc.background([0,0,0,1]);
  mc.fill([255, 255, 255, 1]);

  aniFn();

  incTime();
  requestAnimationFrame(draw);
};
draw();