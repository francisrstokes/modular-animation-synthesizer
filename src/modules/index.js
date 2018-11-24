import * as Time from './time';
import * as Audio from './audio';
import * as Mathematics from './math';
import * as Misc from './util';
import * as Interpolation from './interpolation';
import * as RandomAndNoise from './random-and-noise';
import * as Geometry from './geometry';
import * as Vector from './vector';
import * as Drawing from './drawing';
import * as Feedback from './feedback';

export const modules = [
  ...Object.values(Time),
  ...Object.values(Audio),
  ...Object.values(Mathematics),
  ...Object.values(Misc),
  ...Object.values(Interpolation),
  ...Object.values(RandomAndNoise),
  ...Object.values(Geometry),
  ...Object.values(Vector),
  ...Object.values(Drawing),
  ...Object.values(Feedback),
];

export const findModule = moduleName => modules.find(m => m.name === moduleName);
