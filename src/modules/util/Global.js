import {
  w,
  h,
  wh
} from '../../shared/constants';

const C = [w/2, h/2];

export const Global = {
  name: 'Global',
  inputs: {},
	outputs: {
    w: 'Number',
    h: 'Number',
    wh: 'Vector',
    C: 'Vector'
  },
  fn: () => ({
    w,
    h,
    wh,
    C,
  })
};
