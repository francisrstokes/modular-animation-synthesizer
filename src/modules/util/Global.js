import {
  w,
  h,
  wh
} from '../../constants';

const CV = [w/2, h/2];
const BV = [1, 1];
const ZV = [0, 0];
const PI = Math.PI;
const TAU = PI * 2;
const zero = 0;
const one = 1;

export const Global = {
  name: 'Global',
  tag: 'Misc',
  inputs: {},
	outputs: {
    w: 'Number',
    h: 'Number',
    wh: 'Vector',
    CV: 'Vector',
    BV: 'Vector',
    ZV: 'Vector',
    PI: 'Number',
    TAU: 'Number',
    one: 'Number',
    zero: 'Number',
  },
  fn: () => ({
    w,
    h,
    wh,
    CV,
    BV,
    ZV,
    PI,
    TAU,
    one,
    zero
  })
};
